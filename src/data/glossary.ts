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
    url: 'https://en.wikipedia.org/wiki/Process_philosophy'
  },

  'relationele-autonomie': {
    term: 'Relationele autonomie',
    type: 'gangbaar',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Een benadering van autonomie waarin zelfstandigheid niet losstaat van sociale relaties, afhankelijkheden en de voorwaarden waaronder iemand handelingsvermogen ontwikkelt.',
    url: 'https://plato.stanford.edu/entries/feminism-autonomy/'
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
  }
  draagkracht: {
    term: 'Draagkracht',
    type: 'precisering',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Het vermogen van een vorm om verschil en spanning te ontvangen zonder uiteen te vallen of alles wat stoort onmiddellijk buiten te sluiten.'
  }
};