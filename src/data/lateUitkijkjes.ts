export type LateUitkijkje = {
  title: string;
  paragraphs: string[];
  visual: {
    src: string;
    alt: string;
    caption: string;
    sourceUrl: string;
    sourceLabel: string;
  };
};

/*
  Een tweede uitkijkje is geen vast hoofdstukonderdeel.
  Alleen toevoegen wanneer het aan het einde een andere beweging maakt dan
  het eerdere uitkijkje en het slot van de tekst niet overneemt.

  Late uitkijkjes tellen mee voor de doublurecontrole in UITKIJKJES_REGISTER.md
  en staan daar in een eigen tabel. Registreer een nieuw laat uitkijkje in
  dezelfde wijziging; anders blijft het buiten beeld bij de vraag of een werk,
  maker of medium al eerder is gebruikt.
*/
export const lateUitkijkjes: Record<string, LateUitkijkje> = {
  '05-draagkracht-grens-en-passende-sluiting': {
    title: 'Niet iedere horizon hoeft betreden te worden',
    paragraphs: [
      'Bij Caspar David Friedrich staat de wandelaar aan een rand. Voor hem ligt ruimte, maar niets verplicht hem die in te gaan. Hij hoeft de nevel niet in om werkelijk aan de wereld deel te nemen.',
      'Een grens kan zo ook een positie zijn: dichtbij genoeg om geraakt te worden, duidelijk genoeg om niet elke mogelijkheid in een opdracht te veranderen.'
    ],
    visual: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Caspar%20David%20Friedrich%20-%20Wanderer%20above%20the%20sea%20of%20fog.jpg',
      alt: 'Caspar David Friedrich, Wanderer above the Sea of Fog, met een wandelaar die vanaf een rots over een nevelig landschap kijkt.',
      caption: 'Caspar David Friedrich, Wanderer above the Sea of Fog, ca. 1817–1818. Publiek domein.',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg',
      sourceLabel: 'Wikimedia Commons — afbeelding en rechteninformatie'
    }
  },

  '08-vrijheid-binnen-bepaaldheid-en-verschil-zonder-absoluut-dualisme': {
    title: 'Bartleby zegt liever niet',
    paragraphs: [
      'In Herman Melvilles Bartleby, the Scrivener antwoordt een kantoorklerk steeds opnieuw: “I would prefer not to.” De zin verklaart zichzelf nauwelijks. Juist daardoor blijft de weigering lastig in te passen in het plan van zijn werkgever.',
      'Vrijheid hoeft niet altijd zichtbaar te worden als een grote keuze. Soms verschijnt zij eerst als het kleine vermogen niet volledig samen te vallen met wat van je wordt gevraagd.'
    ],
    visual: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bartleby%20ou%20la%20formule%3B%20Bartleby%2C%20the%20Scrivener%20-%20A%20Story%20of%20Wall%20Street.png',
      alt: 'Een boekomslag voor Bartleby, the Scrivener van Herman Melville.',
      caption: 'Omslag bij Bartleby, the Scrivener, ontwerp Dejan Dragosavac Ruta, 2014. CC BY-SA 4.0.',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bartleby_ou_la_formule%3B_Bartleby,_the_Scrivener_-_A_Story_of_Wall_Street.png',
      sourceLabel: 'Wikimedia Commons — omslag en licentie'
    }
  }
};