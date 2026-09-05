export type UitkijkjeVisual = {
  src: string;
  alt: string;
  caption: string;
  sourceUrl: string;
  sourceLabel: string;
};

/*
 * Redactionele regel: een concreet uitkijkje krijgt een concreet, toonbaar
 * beeld van het onderwerp of werk waarover de tekst spreekt. Als zo'n beeld
 * niet verantwoord beschikbaar is, moet het uitkijkje zelf worden herkozen;
 * een abstract motief is geen inhoudelijke vervanging.
 */
export const uitkijkjeVisuals: Record<string, UitkijkjeVisual> = {
  'Ook muziek bestaat uit niet-spelen': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Music_rests.svg',
    alt: 'Een reeks rusttekens uit de westerse muzieknotatie met verschillende tijdsduren.',
    caption: 'Rusttekens in westerse muzieknotatie. Publiek domein.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Music_rests.svg',
    sourceLabel: 'Wikimedia Commons — afbeelding en rechteninformatie'
  },

  'Een paar akkoorden zijn soms genoeg': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Miles%20Davis%20by%20Palumbo.jpg',
    alt: 'Jazzmusicus Miles Davis in een zwart-witportret van Tom Palumbo.',
    caption: 'Miles Davis, gefotografeerd door Tom Palumbo, 1956. CC BY-SA 2.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Miles_Davis_by_Palumbo.jpg',
    sourceLabel: 'Wikimedia Commons — foto, maker en licentie'
  },

  'Nijntje hoeft niet groot te worden': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sculptuur%20%27Nijntje%27%20door%20Marc%20Bruna%2C%20Nijntjepleintje%2C%20Utrecht.jpg',
    alt: 'Het beeld van Nijntje op het Nijntjepleintje in Utrecht.',
    caption: 'Nijntje op het Nijntjepleintje in Utrecht. Foto: FakirNL, 2023, CC BY-SA 4.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sculptuur_%27Nijntje%27_door_Marc_Bruna%2C_Nijntjepleintje%2C_Utrecht.jpg',
    sourceLabel: 'Wikimedia Commons — foto en licentie'
  },

  'Stoelen, lichamen, bijna-botsingen': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pina%20Bausch.jpg',
    alt: 'Pina Bausch samen met dansers van Tanztheater Wuppertal.',
    caption: 'Pina Bausch met dansers van Tanztheater Wuppertal, 2009. Foto: Raphael Labbé, CC BY-SA 3.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pina_Bausch.jpg',
    sourceLabel: 'Wikimedia Commons — foto, maker en licentie'
  },

  'Een toren van taal': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Brueghel-tower-of-babel.jpg',
    alt: 'Pieter Bruegel de Oude, De Toren van Babel, met een kolossale toren in aanbouw.',
    caption: 'Pieter Bruegel de Oude, De Toren van Babel, 1563. Publiek domein.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Brueghel-tower-of-babel.jpg',
    sourceLabel: 'Wikimedia Commons — afbeelding en rechteninformatie'
  },

  'Gilgamesj vindt geen achterdeur': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tablet%20V%20of%20the%20Epic%20of%20Gilgamesh.jpg',
    alt: 'Een kleitablet met spijkerschrift uit het Gilgamesj-epos.',
    caption: 'Tablet V van het Gilgamesj-epos, Sulaymaniyah Museum. Foto: Osama Shukir Muhammed Amin, CC BY-SA 4.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tablet_V_of_the_Epic_of_Gilgamesh.jpg',
    sourceLabel: 'Wikimedia Commons — object, foto en licentie'
  },

  'Bureaucratie heeft een lange komische geschiedenis': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Que%20diable%20Macaire%2C%20te%20voil%C3%A0%20%C3%A0%20la%20t%C3%AAte%20d%27un%20bureau%20de%20charit%C3%A9%2C%20BAL95-02%20%2832%29.jpg',
    alt: 'Een satirische prent van Honoré Daumier met Robert Macaire bij een liefdadigheidsbureau.',
    caption: 'Honoré Daumier, satire op Robert Macaire aan het hoofd van een liefdadigheidsbureau, ca. 1836–1838. Publiek domein / CC0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Que_diable_Macaire,_te_voil%C3%A0_%C3%A0_la_t%C3%AAte_d%27un_bureau_de_charit%C3%A9,_BAL95-02_(32).jpg',
    sourceLabel: 'Wikimedia Commons — prent en rechteninformatie'
  },

  'Een lege hoek wordt een speelplaats': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/PlaygroundAldovanEyck1962.jpg',
    alt: 'Een koepelvormig speeltoestel naar ontwerp van Aldo van Eyck.',
    caption: 'Speeltoestel naar ontwerp van Aldo van Eyck, oorspronkelijk ca. 1962. Foto: Vysotsky, CC BY-SA 4.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:PlaygroundAldovanEyck1962.jpg',
    sourceLabel: 'Wikimedia Commons — foto, ontwerp en licentie'
  },

  'De koe kijkt niet terug als beleidsmodel': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Paulus%20Potter%20-%20Young%20Bull.JPG',
    alt: 'Paulus Potter, De stier, met een monumentaal rund in een Nederlands landschap.',
    caption: 'Paulus Potter, De stier, 1647. Publiek domein.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paulus_Potter_-_Young_Bull.JPG',
    sourceLabel: 'Wikimedia Commons — afbeelding en rechteninformatie'
  },

  'Bartleby zegt liever niet': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bartleby%20ou%20la%20formule%3B%20Bartleby%2C%20the%20Scrivener%20-%20A%20Story%20of%20Wall%20Street.png',
    alt: 'Een boekomslag voor Bartleby, the Scrivener van Herman Melville.',
    caption: 'Omslag bij Bartleby, the Scrivener, ontwerp Dejan Dragosavac Ruta, 2014. CC BY-SA 4.0.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bartleby_ou_la_formule%3B_Bartleby,_the_Scrivener_-_A_Story_of_Wall_Street.png',
    sourceLabel: 'Wikimedia Commons — omslag en licentie'
  },

  'Geen canon is cultureel neutraal': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Raphael%20School%20of%20Athens.jpg',
    alt: 'Rafaëls School van Athene met een grote groep klassieke filosofen in monumentale architectuur.',
    caption: 'Rafaël, De School van Athene, 1509–1511. Publiek domein.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Raphael_School_of_Athens.jpg',
    sourceLabel: 'Wikimedia Commons — afbeelding en rechteninformatie'
  },

  'Een schilderij dat naar zijn eigen kijken kijkt': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Las%20Meninas%20%281656%29%2C%20by%20Velazquez.jpg',
    alt: 'Diego Velázquez, Las Meninas, met de schilder, hoffiguren, een spiegel en verschillende kijkrichtingen.',
    caption: 'Diego Velázquez, Las Meninas, 1656. Publiek domein.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Las_Meninas_(1656),_by_Velazquez.jpg',
    sourceLabel: 'Wikimedia Commons — afbeelding en rechteninformatie'
  }
};
