import { glossary } from './glossary';

// Een begrip dat uit de begrippenlijst verdwijnt kan markeringen in de tekst
// achterlaten. De lezer ziet dan nog een aanklikbaar woord dat niets opent.
// Deze controle maakt zo'n mismatch tijdens het bouwen zichtbaar én blokkerend.

const teksten = {
  ...import.meta.glob('../pages/hoofdstukken/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
  }),
  ...import.meta.glob('../academisch/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
  })
} as Record<string, string>;

const zonderDefinitie = new Map<string, Set<string>>();

for (const [pad, bron] of Object.entries(teksten)) {
  for (const [, term] of bron.matchAll(/data-term="([^"]+)"/g)) {
    if (term in glossary) continue;
    if (!zonderDefinitie.has(term)) zonderDefinitie.set(term, new Set());
    zonderDefinitie.get(term)!.add(pad.replace('../', 'src/'));
  }
}

if (zonderDefinitie.size > 0) {
  const meldingen = [...zonderDefinitie.entries()]
    .map(([term, paden]) => `'${term}' (${[...paden].join(', ')})`)
    .join('; ');

  throw new Error(
    `[Onafgesloten] Begrip gemarkeerd zonder definitie in de begrippenlijst: ${meldingen}`
  );
}
