export type GlossaryType = 'gangbaar' | 'projectbegrip' | 'precisering';

export type GlossaryEntry = {
  term: string;
  type: GlossaryType;
  short: string;
  chapterOfOrigin: string;
  url?: string;
};

export const glossary: Record<string, GlossaryEntry> = {
  ontologie: {
    term: 'Ontologie',
    type: 'gangbaar',
    chapterOfOrigin: 'vooraf',
    short:
      'Het filosofische onderzoek naar wat er bestaat en naar de aard of wijze van bestaan van wat er is.',
    url: 'https://nl.wikipedia.org/wiki/Ontologie_(filosofie)'
  },

  fenomenologie: {
    term: 'Fenomenologie',
    type: 'gangbaar',
    chapterOfOrigin: 'vooraf',
    short:
      'Een filosofische benadering die vertrekt vanuit hoe iets in ervaring verschijnt.',
    url: 'https://nl.wikipedia.org/wiki/Fenomenologie'
  },

  'regionale-reikwijdte': {
    term: 'Regionale reikwijdte',
    type: 'precisering',
    chapterOfOrigin: 'vooraf',
    short:
      'De bewuste beperking van een filosofische uitspraak tot bepaalde soorten verschijnselen, in plaats van haar zonder overgang op de hele werkelijkheid toe te passen.'
  },

  cosmopsychisme: {
    term: 'Cosmopsychisme',
    type: 'gangbaar',
    chapterOfOrigin: 'vooraf',
    short:
      'Een filosofische familie van opvattingen waarin de kosmos als geheel, of een kosmisch fundamenteel niveau, een dragende rol krijgt in de verklaring van individuele subjectiviteit.',
    url: 'https://en.wikipedia.org/wiki/Panpsychism#Cosmopsychism'
  },

  vorm: {
    term: 'Vorm',
    type: 'precisering',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Een herkenbare samenhang met grens, geschiedenis en mogelijkheden; niet alleen uiterlijke gestalte.'
  },

  grens: {
    term: 'Grens',
    type: 'precisering',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Datgene waardoor een vorm een eigen positie krijgt: een verschil tussen binnen en buiten vanwaaruit iets kan ontvangen, bewaren en antwoorden.'
  },

  antwoord: {
    term: 'Antwoord',
    type: 'precisering',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Een reactie waarin wat iemand of iets raakt niet alleen wordt ondergaan, maar op een eigen manier wordt opgenomen en beantwoord.'
  },

  processfilosofie: {
    term: 'Procesfilosofie',
    type: 'gangbaar',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Een filosofische familie waarin worden, verandering en proces fundamenteel zijn voor wat werkelijkheid is, in plaats van alleen eigenschappen van blijvende dingen.',
    url: 'https://plato.stanford.edu/entries/process-philosophy/'
  },

  'relationele-autonomie': {
    term: 'Relationele autonomie',
    type: 'gangbaar',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Een benadering van autonomie waarin zelfstandigheid niet losstaat van sociale relaties, afhankelijkheden en de voorwaarden waaronder iemand handelingsvermogen ontwikkelt.',
    url: 'https://plato.stanford.edu/entries/autonomy-moral/#RelAut'
  },

  'belichaamde-cognitie': {
    term: 'Belichaamde cognitie',
    type: 'gangbaar',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Een benadering waarin cognitie niet uitsluitend in het brein wordt geplaatst, maar mede wordt gevormd door lichaam, handelen en interactie met de omgeving.',
    url: 'https://plato.stanford.edu/entries/embodied-cognition/'
  },

  homeostase: {
    term: 'Homeostase',
    type: 'gangbaar',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Het reguleren van interne fysiologische toestanden rond functionele grenzen of evenwichten, ondanks veranderingen in organisme en omgeving.',
    url: 'https://en.wikipedia.org/wiki/Homeostasis'
  },

  allostase: {
    term: 'Allostase',
    type: 'gangbaar',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Een regulatieconcept waarin stabiliteit wordt bereikt door dynamische aanpassing aan verwachte of veranderende omstandigheden.',
    url: 'https://en.wikipedia.org/wiki/Allostasis'
  },

  substantie: {
    term: 'Substantie',
    type: 'gangbaar',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'In de metafysica: datgene wat als een min of meer zelfstandig bestaand ding wordt opgevat en eigenschappen kan dragen of veranderingen kan ondergaan.',
    url: 'https://plato.stanford.edu/entries/substance/'
  },

  'persoonlijke-identiteit': {
    term: 'Persoonlijke identiteit',
    type: 'gangbaar',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Het filosofische probleem wat iemand door de tijd heen tot dezelfde persoon maakt, ondanks lichamelijke, psychologische en relationele verandering.',
    url: 'https://plato.stanford.edu/entries/identity-personal/'
  },

  draagkracht: {
    term: 'Draagkracht',
    type: 'precisering',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Het vermogen van een vorm om verschil en spanning te ontvangen zonder uiteen te vallen of alles wat stoort onmiddellijk buiten te sluiten.'
  },

  intersubjectiviteit: {
    term: 'Intersubjectiviteit',
    type: 'gangbaar',
    chapterOfOrigin: '02-vormen-ontstaan-in-verhouding',
    short:
      'De wijze waarop ervaring en betekenis mede gestalte krijgen in een wereld waarin ook andere ervarende perspectieven aanwezig zijn.',
    url: 'https://plato.stanford.edu/entries/social-ontology/'
  },

  nicheconstructie: {
    term: 'Nicheconstructie',
    type: 'gangbaar',
    chapterOfOrigin: '02-vormen-ontstaan-in-verhouding',
    short:
      'Het proces waarbij organismen hun omgeving veranderen op manieren die terugwerken op hun eigen leven, ontwikkeling of evolutionaire omstandigheden.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4922671/'
  },

  enactivisme: {
    term: 'Enactivisme',
    type: 'gangbaar',
    chapterOfOrigin: '02-vormen-ontstaan-in-verhouding',
    short:
      'Een familie van benaderingen waarin cognitie ontstaat uit actieve, belichaamde omgang van een organisme met zijn omgeving.',
    url: 'https://plato.stanford.edu/entries/embodied-cognition/#EnaCog'
  },

  'sociale-ontologie': {
    term: 'Sociale ontologie',
    type: 'gangbaar',
    chapterOfOrigin: '02-vormen-ontstaan-in-verhouding',
    short:
      'Het filosofische onderzoek naar de aard van sociale verschijnselen en naar hoe personen, relaties, praktijken, instituties en materiële voorwaarden daarin samenhangen.',
    url: 'https://plato.stanford.edu/entries/social-ontology/'
  },

  interoceptie: {
    term: 'Interoceptie',
    type: 'gangbaar',
    chapterOfOrigin: '03-voelen-verschil-dat-ertoe-doet',
    short:
      'Het waarnemen, verwerken en integreren van signalen uit het eigen lichaam, zoals hartslag, ademhaling, temperatuur, verzadiging en spanning.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7780231/'
  },

  sentience: {
    term: 'Sentience',
    type: 'gangbaar',
    chapterOfOrigin: '03-voelen-verschil-dat-ertoe-doet',
    short:
      'Het vermogen om positieve of negatieve ervaringen te hebben; in discussies over dieren vaak gebruikt voor het kunnen ervaren van bijvoorbeeld pijn, comfort of dreiging.',
    url: 'https://plato.stanford.edu/entries/consciousness-animal/'
  },

  'dialogische-filosofie': {
    term: 'Dialogische filosofie',
    type: 'gangbaar',
    chapterOfOrigin: '03-voelen-verschil-dat-ertoe-doet',
    short:
      'Een filosofische benadering waarin ontmoeting en aanspreekbaarheid tussen ik en ander fundamenteel zijn, en de ander niet volledig wordt gereduceerd tot object van beschrijving.',
    url: 'https://plato.stanford.edu/entries/buber/'
  },

  agonisme: {
    term: 'Agonisme',
    type: 'gangbaar',
    chapterOfOrigin: '04-spanning-nieuwsgierigheid-en-beweging',
    short:
      'Een benadering waarin conflict en verschil niet volledig hoeven te verdwijnen, maar zo worden georganiseerd dat tegenstanders elkaar niet uitsluitend als uit te schakelen vijanden behandelen.',
    url: 'https://plato.stanford.edu/entries/feminism-political/'
  },

  informatiekloof: {
    term: 'Informatiekloof',
    type: 'gangbaar',
    chapterOfOrigin: '04-spanning-nieuwsgierigheid-en-beweging',
    short:
      'Een model van nieuwsgierigheid waarin aandacht wordt getrokken door het verschil tussen wat iemand weet en wat diegene beseft nog niet te weten.'
  },

  beteugeling: {
    term: 'Beteugeling',
    type: 'precisering',
    chapterOfOrigin: '04-spanning-nieuwsgierigheid-en-beweging',
    short:
      'Het vermogen een impuls niet onmiddellijk volledig uit te voeren, zodat aandacht, verlangen of verhouding tijd en terugweg behouden.'
  },

  'allostatische-belasting': {
    term: 'Allostatische belasting',
    type: 'gangbaar',
    chapterOfOrigin: '04-spanning-nieuwsgierigheid-en-beweging',
    short:
      'De cumulatieve lichamelijke belasting die kan ontstaan wanneer systemen zich langdurig of herhaald aan stressoren moeten aanpassen.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4251716/'
  },

  antwoordruimte: {
    term: 'Antwoordruimte',
    type: 'projectbegrip',
    chapterOfOrigin: '05-draagkracht-grens-en-passende-sluiting',
    short:
      'De basale voorwaarden waaronder iemand of een vorm later opnieuw kan voelen, weigeren, herstellen, richting veranderen en antwoorden.'
  },

  'passende-sluiting': {
    term: 'Passende sluiting',
    type: 'projectbegrip',
    chapterOfOrigin: '05-draagkracht-grens-en-passende-sluiting',
    short:
      'Een noodzakelijke begrenzing die niet meer afsluit dan nodig en haar eigen gevolgen, machtspositie en resterende herstelmogelijkheden onder rechtvaardigingsdruk houdt.'
  },

  paternalisme: {
    term: 'Paternalisme',
    type: 'gangbaar',
    chapterOfOrigin: '05-draagkracht-grens-en-passende-sluiting',
    short:
      'Ingrijpen in iemands vrijheid of autonomie tegen diens wil, gemotiveerd door de gedachte dat dit die persoon zelf beschermt of ten goede komt.',
    url: 'https://plato.stanford.edu/entries/paternalism/'
  },

  proportionaliteit: {
    term: 'Proportionaliteit',
    type: 'gangbaar',
    chapterOfOrigin: '05-draagkracht-grens-en-passende-sluiting',
    short:
      'Het beginsel dat de zwaarte van een ingreep in redelijke verhouding moet staan tot het doel en de schade of het risico waarop zij reageert.'
  },

  autonomie: {
    term: 'Autonomie',
    type: 'gangbaar',
    chapterOfOrigin: '05-draagkracht-grens-en-passende-sluiting',
    short:
      'Het vermogen en de ruimte om het eigen leven en handelen mede volgens eigen redenen, waarden en keuzes vorm te geven.',
    url: 'https://plato.stanford.edu/entries/autonomy-moral/'
  },

  resilience: {
    term: 'Resilience',
    type: 'gangbaar',
    chapterOfOrigin: '05-draagkracht-grens-en-passende-sluiting',
    short:
      'Het vermogen van een persoon, organisme of systeem om verstoring op te vangen, zich aan te passen of functioneren en samenhang te hervinden.'
  },

  draagroute: {
    term: 'Draagroute',
    type: 'projectbegrip',
    chapterOfOrigin: '06-draagroutes-ritme-en-herstel',
    short:
      'De weg waarlangs spanning, onzekerheid of belasting door personen, relaties, taken en instituties wordt ontvangen, verdeeld, teruggelegd of geblokkeerd.'
  },

  restlast: {
    term: 'Restlast',
    type: 'projectbegrip',
    chapterOfOrigin: '06-draagroutes-ritme-en-herstel',
    short:
      'De spanning, onzekerheid, tijdsdruk of schade die een ordening niet oplost en daardoor ergens anders door een actor, groep of omgeving wordt gedragen.'
  },

  herstel: {
    term: 'Herstel',
    type: 'precisering',
    chapterOfOrigin: '06-draagroutes-ritme-en-herstel',
    short:
      'Niet noodzakelijk terugkeer naar de oude toestand, maar hernieuwd vermogen om te voelen, begrenzen, verbinden, kiezen en antwoorden.'
  },

  transformatie: {
    term: 'Transformatie',
    type: 'precisering',
    chapterOfOrigin: '06-draagroutes-ritme-en-herstel',
    short:
      'Een verandering waarbij de eerdere vorm niet volledig terugkeert, maar relevante samenhang in een andere ordening wordt voortgezet.'
  },

  systeemdenken: {
    term: 'Systeemdenken',
    type: 'gangbaar',
    chapterOfOrigin: '06-draagroutes-ritme-en-herstel',
    short:
      'Een benadering die verschijnselen onderzoekt als onderdeel van samenhangende systemen met relaties, terugkoppelingen en onderlinge afhankelijkheden.'
  },

  'emotionele-arbeid': {
    term: 'Emotionele arbeid',
    type: 'gangbaar',
    chapterOfOrigin: '06-draagroutes-ritme-en-herstel',
    short:
      'Werk waarbij iemand eigen gevoelens en uitingen moet reguleren om een professioneel of sociaal gewenste emotionele toestand bij anderen mogelijk te maken.'
  },

  'posttraumatische-groei': {
    term: 'Posttraumatische groei',
    type: 'gangbaar',
    chapterOfOrigin: '06-draagroutes-ritme-en-herstel',
    short:
      'Ger rapporteerde positieve veranderingen in betekenis, prioriteiten of relaties na ingrijpende ervaringen; geen bewijs dat trauma noodzakelijk of wenselijk was.'
  }
};