import { glossary } from './glossary';

// Een begrip dat uit de begrippenlijst verdwijnt laat zijn markeringen in de
// tekst achter. De lezer ziet dan nog een aanklikbaar woord dat niets opent.
// Dat is bij het schrappen van 'restlast' gebeurd, en in de browser merken we
// het pas wanneer iemand klikt. Deze controle draait bij het bouwen.
//
// De module wordt één keer uitgevoerd, ook wanneer de popover op iedere pagina
// staat; daarom staat de controle hier en niet in het component zelf.

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

for (const [term, paden] of zonderDefinitie) {
  console.warn(
    `[Onafgesloten] Begrip gemarkeerd zonder definitie in de begrippenlijst: '${term}' (${[...paden].join(', ')})`
  );
}
