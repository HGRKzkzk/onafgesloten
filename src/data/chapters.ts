export type Chapter = {
  order: number;
  label: string;
  title: string;
  slug: string;
  summary: string;
  main?: boolean;
};

export const chapters: Chapter[] = [
  { order: 0, label: 'Vooraf', title: 'Geen theorie van alles', slug: '00-vooraf', summary: 'De inzet en de grenzen van het project: regionale claims, een fenomenologische toegang en een open metafysische horizon.', main: true },
  { order: 1, label: '01', title: 'Wat verschijnt, verschijnt onaf', slug: '01-wat-verschijnt-verschijnt-onaf', summary: 'Over vorm, grens en waarom een actuele verschijning niet de volledige werkelijkheid van een vorm uitput.', main: true },
  { order: 2, label: '02', title: 'Vormen ontstaan in verhouding', slug: '02-vormen-ontstaan-in-verhouding', summary: 'Over afhankelijkheid, autonomie en de verhoudingen die vanaf het begin meewerken aan wie iemand kan worden.', main: true },
  { order: 3, label: '03', title: 'Voelen: verschil dat ertoe doet', slug: '03-voelen-verschil-dat-ertoe-doet', summary: 'Over lichamelijke ervaring, betekenis, niet-menselijke dieren en de ander als tweede persoon.', main: true },
  { order: 4, label: '04', title: 'Spanning, nieuwsgierigheid en beweging', slug: '04-spanning-nieuwsgierigheid-en-beweging', summary: 'Over vruchtbare spanning, nieuwsgierigheid en beteugeling zonder stilstand tot ideaal te maken.', main: true },
  { order: 5, label: '05', title: 'Draagkracht, grens en passende sluiting', slug: '05-draagkracht-grens-en-passende-sluiting', summary: 'Waarom openheid grenzen nodig heeft en waarom sommige sluitingen verdere antwoordruimte juist beschermen.', main: true },
  { order: 6, label: '06', title: 'Draagroutes, ritme en herstel', slug: '06-draagroutes-ritme-en-herstel', summary: 'Over waar spanning terechtkomt, wanneer snelheid sluit en hoe herstel een vorm werkelijk kan veranderen.', main: true },
  { order: 7, label: '07', title: 'Gezondheid zonder ideaalvorm', slug: '07-gezondheid-zonder-ideaalvorm', summary: 'Over verstarring, uiteenvallen en schadelijke stabiliteit zonder één juiste levensvorm voor te schrijven.', main: true },
  { order: 8, label: '08', title: 'Vrijheid binnen bepaaldheid', slug: '08-vrijheid-binnen-bepaaldheid-en-verschil-zonder-absoluut-dualisme', summary: 'Over vrijheid als antwoordvermogen en non-dualiteit die werkelijk verschil, grens en verantwoordelijkheid niet wegpraat.', main: true },
  { order: 9, label: '09', title: 'Liefde, klauwen en wederzijdse bescherming', slug: '09-liefde-klauwen-en-wederzijdse-bescherming', summary: 'Over nabijheid en verschil, zachtheid en kracht, en bescherming zonder overheersing.', main: true },
  { order: 10, label: '10', title: 'Taal, kennis en intelligentie', slug: '10-taal-kennis-en-intelligentie', summary: 'Over kennis onder correctieplicht, taal zonder laatste woord en intelligentie als overzicht in plaats van louter snelheid.', main: true },
  { order: 11, label: '11', title: 'Zin, dood en viering', slug: '11-zin-dood-en-viering', summary: 'Over lokale betekenis, werkelijk einde, rouw en de mogelijkheid iets te vieren zonder het te bezitten.', main: true },
  { order: 12, label: '12', title: 'Waar krijgt werkelijkheid een binnenkant?', slug: '12-waar-krijgt-werkelijkheid-een-binnenkant', summary: 'De cosmopsychische horizon: een voorzichtige vraag naar hoe perspectief en binnenkant in werkelijkheid kunnen verschijnen.', main: true },
  { order: 13, label: '13', title: 'Velden, instituties en georganiseerde sluiting', slug: '13-velden-instituties-en-georganiseerde-sluiting', summary: 'Over macht, draagstructuren, onafhankelijke correctie en instituties die door gevolgen veranderbaar moeten blijven.', main: true },
  { order: 14, label: '14', title: 'Twee toetsgevallen', slug: '14-twee-toetsgevallen-wat-verandert-er-wanneer-oov-iets-moet-doen', summary: 'Twee concrete situaties waarin het begrippenkader moet laten zien of het meer doet dan achteraf nieuwe woorden geven.', main: true },
  { order: 15, label: '15', title: 'Culturele bescheidenheid en intellectuele buren', slug: '15-culturele-bescheidenheid-en-intellectuele-buren', summary: 'Over verwantschap zonder annexatie: andere tradities, denkers en kunst hoeven niet tot bewijs van deze taal te worden gemaakt.', main: true },
  { order: 16, label: '16', title: 'Zelfbegrenzing — ook dit denken blijft onaf', slug: '16-zelfbegrenzing-ook-dit-denken-blijft-onaf', summary: 'De theorie onderwerpt ook zichzelf aan de vraag of haar begrippen nog iets openen of inmiddels vooral zichzelf beschermen.', main: true },
  { order: 99, label: 'Kern', title: 'De kern in twintig zinnen', slug: '99-kern-in-twintig-zinnen', summary: 'Een compacte ingang voor wie eerst de contouren van het project wil zien.' }
];

export const mainChapters = chapters.filter((chapter) => chapter.main);

export function chapterBySlug(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
