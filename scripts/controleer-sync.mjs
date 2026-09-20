#!/usr/bin/env node
// Maakt zichtbaar hoever lastSyncCheck achterloopt op de laatste redactie van een
// hoofdstuk.
//
// CONTENT_SCHEMA.md paragraaf 14 zegt dat een hoofdstuk zonder recente
// lastSyncCheck "zichtbaar een kandidaat om te controleren" is. Achterstand is
// daar dus geen fout maar een signaal. Deze controle blokkeert daarom niets; zij
// zorgt alleen dat het signaal niet stil blijft. De build kan dit niet doen,
// want Astro kent de git-geschiedenis niet.
//
// Met --strict wordt achterstand wel een fout. Gebruik dat pas wanneer is
// besloten dat het veld bij iedere redactie hoort te worden bijgewerkt.

import { execFileSync } from 'node:child_process';
import { readFileSync, globSync } from 'node:fs';

const strikt = process.argv.includes('--strict');
const dag = 24 * 60 * 60 * 1000;

const regels = [];

for (const pad of globSync('src/pages/hoofdstukken/*.md').sort()) {
  const veld = readFileSync(pad, 'utf8').match(
    /^lastSyncCheck:\s*"([0-9]{4}-[0-9]{2}-[0-9]{2})"/m
  );

  if (!veld) {
    regels.push({ pad, melding: 'geen lastSyncCheck in de frontmatter', dagen: Infinity });
    continue;
  }

  // Alleen commits die de inhoud raakten; een merge telt niet als redactie.
  const laatste = execFileSync('git', ['log', '--no-merges', '-1', '--format=%cs', '--', pad], {
    encoding: 'utf8'
  }).trim();

  if (!laatste || veld[1] >= laatste) continue;

  regels.push({
    pad,
    melding: `gecontroleerd op ${veld[1]}, geredigeerd tot ${laatste}`,
    dagen: Math.round((Date.parse(laatste) - Date.parse(veld[1])) / dag)
  });
}

if (regels.length === 0) {
  console.log('[Onafgesloten] Geen hoofdstuk loopt achter op zijn synccontrole.');
  process.exit(0);
}

regels.sort((a, b) => b.dagen - a.dagen);

console.log(
  `[Onafgesloten] ${regels.length} hoofdstuk(ken) wachten op een synccontrole tegen de bron:\n`
);
for (const r of regels) {
  const naam = r.pad.replace('src/pages/hoofdstukken/', '');
  console.log(`  ${String(r.dagen).padStart(3)} dagen  ${naam}  (${r.melding})`);
}
console.log(
  '\nDit is een signaal, geen fout: paragraaf 14 van CONTENT_SCHEMA.md wil juist dat\n' +
    'achterstand zichtbaar blijft. Werk het veld bij nadat je het hoofdstuk werkelijk\n' +
    'tegen zijn bron in sources/ hebt gelegd, niet bij iedere redactie.'
);

process.exit(strikt ? 1 : 0);
