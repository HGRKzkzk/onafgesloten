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

  draagkracht: {
    term: 'Draagkracht',
    type: 'precisering',
    chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',
    short:
      'Het vermogen van een vorm om verschil en spanning te ontvangen zonder uiteen te vallen of alles wat stoort onmiddellijk buiten te sluiten.'
  }
};