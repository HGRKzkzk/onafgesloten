# Content schema — Onafgesloten

**Status:** werkdocument  

**Laatste inhoudelijke herziening:** augustus 2026

Dit schema beschrijft de huidige conventies. Wanneer de inhoud een betere vorm vraagt, mag het schema worden gewijzigd.

---

## 1. Basisstructuur

De publieke leesroute staat in:

src/pages/hoofdstukken/

De academische parallelle laag staat in:

src/academisch/

Redactionele bron- en werkteksten staan in:

sources/

Afbeeldingen staan in:

public/images/

De centrale leesvolgorde staat in:

src/data/chapters.ts

---

## 2. Kernregel: geen duplicatie tussen lagen

Elke laag — hoofdtekst, begrippenhulp, artistiek uitkijkje, academische verdieping — heeft precies één functie. Informatie krijgt precies één "thuis"-laag. Andere lagen mogen ernaar verwijzen, maar niet herhalen.

Concreet:

- De ****genealogie**** van een begrip (verwante tradities, historische voorlopers) hoort thuis in de academische laag, onder Verwantschap. De korte begripsuitleg mag hoogstens één zin verwijzing bevatten ("verwant aan X"), geen eigen genealogie-uitleg.

- Een ****tegenwerping of alternatieve positie**** hoort thuis in de academische laag, onder Tegenlicht. Een artistiek uitkijkje mag een tegenbeeld tonen, maar mag dat tegenbeeld niet beargumenteren — zodra een uitkijkje een positie gaat verdedigen, hoort het niet meer bij uitkijkjes maar bij Tegenlicht.

- De ****formele definitie**** van een begrip staat uitsluitend in `src/data/glossary.ts` (zie sectie 7). De academische laag mag een begrip verdiepen, niet herdefiniëren.

- De academische laag mag geen claim herhalen die al (letterlijk of licht geparafraseerd) in de hoofdtekst staat, tenzij zij daar iets wezenlijks aan toevoegt.

Bij het afronden van een hoofdstuk wordt gecontroleerd:

1\. Herhaalt de begrippenhulp een genealogie, tegenargument of esthetisch element dat elders hoort? Verplaats het.

2\. Herhaalt de academische laag een zin of claim uit de hoofdtekst zonder toevoeging? Schrap of vervang.

3\. Zou een lezer die alle lagen na elkaar leest merkbare herhaling ervaren? Zo ja, is deze regel geschonden.

---

## 3. Hoofdstukken

Ieder publiek hoofdstuk is één Markdownbestand.

Voorbeeld:

src/pages/hoofdstukken/05-draagkracht-grens-en-passende-sluiting.md

De bestandsnaam bestaat uit:

NN-slug.md

waarbij:

- NN de leesvolgorde aangeeft;

- slug uit kleine letters en koppeltekens bestaat;

- de slug stabiel blijft zodra een hoofdstuk publiek wordt gebruikt.

Voorbeeld:

05-draagkracht-grens-en-passende-sluiting.md

---

## 4. Frontmatter

Ieder publiek hoofdstuk bevat minimaal:

```yaml
---
layout: ../../layouts/ChapterLayout.astro
order: 5
title: "Draagkracht, grens en passende sluiting"
description: "Over waarom openheid grenzen nodig heeft en sluiting soms zorg kan zijn."
slug: "05-draagkracht-grens-en-passende-sluiting"
status: "publieke-werkversie"
---
```

Gebruik frontmatter alleen voor metadata. De feitelijke hoofdstuktekst begint onder de afsluitende `---`.

### `order` en `number`

`order` en `number` hebben bewust verschillende functies.

- `order` staat in de frontmatter en bepaalt de inhoudelijke leesvolgorde.
- `number` staat in `src/data/chapters.ts` en bepaalt de publieke aanduiding die in navigatie of op de landingspagina kan worden getoond.

Hierdoor kan een ongenummerd voorwoord bijvoorbeeld `order: 0` hebben, terwijl `chapters.ts` als publieke aanduiding `number: 'Vooraf'` gebruikt.

De slug en titel moeten overeenkomen met de registratie in `src/data/chapters.ts`.

### Status

Ieder publiek hoofdstuk bevat een `status`-veld.

Toegestane waarden:

- `concept`
- `publieke-werkversie`
- `redactioneel-stabiel`
- `gepubliceerd`
- `herziening-nodig`
- `archief`

De status beschrijft de redactionele toestand van de publieke tekst, niet die van de brontekst.

### Bron en divergentie

Wanneer een publiek hoofdstuk is afgeleid van een moedertekst in `sources/`, wordt de herkomst expliciet vastgelegd.

Bij een inhoudelijk vrijwel rechtstreekse afleiding kan worden volstaan met:

```yaml
source:
  id: "OOV_scherpe_menselijke_kern_2026_v4_1_redactioneel"
  version: "v4.1"
```

Wanneer de publieke tekst substantieel is herschreven, gecomprimeerd, herschikt of uitgebreid, wordt ook `divergence` opgenomen:

```yaml
source:
  id: "OOV_scherpe_menselijke_kern_2026_v4_1_redactioneel"
  version: "v4.1"

divergence:
  status: "substantieel-herwerkt"
  note: "Publieke herschrijving met gewijzigde opbouw, toegankelijker register en nieuwe artistieke uitkijkjes."

lastSyncCheck: "2026-08-25"
```

De `divergence`-notitie hoeft geen wijzigingslog te worden. Zij beschrijft alleen voldoende om later te begrijpen waarom de publieke tekst niet meer één-op-één overeenkomt met de moedertekst.

Deze velden worden gebruikt zodra sectie 14 van toepassing wordt op een hoofdstuk.

---

## 5. Centrale hoofdstukregistratie

De volgorde en navigatie van de site worden bepaald in:

src/data/chapters.ts

Een hoofdstuk wordt daar bijvoorbeeld geregistreerd als:

{

  number: 5,

  slug: '05-draagkracht-grens-en-passende-sluiting',

  title: 'Draagkracht, grens en passende sluiting',

  description:

    'Over waarom openheid grenzen nodig heeft en sluiting soms zorg kan zijn.'

}

Bij het hernoemen van een hoofdstuk moeten zowel het Markdownbestand als deze registratie worden gecontroleerd.

Een bestaande publieke slug wordt bij voorkeur niet gewijzigd, omdat externe links ernaar kunnen verwijzen.

---

## 6. Publieke tekstlaag

De hoofdtekst moet zelfstandig leesbaar zijn zonder academische verdieping of uitkijkjes.

Streef naar:

- helder Nederlands;

- filosofische precisie zonder onnodige vaktaal;

- concrete ervaring vóór abstracte systematiek waar mogelijk;

- korte tussenkoppen;

- zorgvuldig gebruik van losse kernzinnen;

- geen voortdurende verwijzingen naar "OOV" als systeem.

De tekst mag onafgesloten blijven, maar niet onbepaald worden.

Begrippen moeten voldoende scherp zijn om verschil te maken.

---

## 7. Begrippenhulp in de lopende tekst

De publieke hoofdstukken moeten ook leesbaar blijven voor lezers die niet vertrouwd zijn met filosofische, wetenschappelijke of OOV-specifieke terminologie.

Daarom kunnen geselecteerde begrippen in de lopende tekst aanklikbaar worden gemaakt. Deze begrippenhulp is een ondersteunende laag: zij moet een lezer helpen verder te lezen zonder de tekst visueel in een woordenboek te veranderen.

Externe begripsverdieping verwijst bij voorkeur naar Nederlandstalige bronnen. Wanneer geen bruikbare Nederlandstalige bron beschikbaar is, kan een Engelstalige bron worden gebruikt. Een link wordt alleen toegevoegd wanneer de bron inhoudelijk voldoende aansluit bij de gangbare betekenis van het begrip

### Technische vorm

Hoofdstukken blijven gewone Markdownbestanden (`.md`).

Een begrip wordt in de tekst gemarkeerd met eenvoudige HTML:

```html

<span class="begrip" data-term="antwoordruimte">antwoordruimte</span>

```

De definitie zelf wordt niet in het hoofdstukbestand opgenomen, maar centraal beheerd in:

```text

src/data/glossary.ts

```

De waarde van `data-term` moet exact overeenkomen met de sleutel van het begrip in `glossary.ts`.

De markup van begrippen blijft bewust eenvoudig en framework-onafhankelijk. De interactieve werking wordt centraal door de layout of een gedeeld component toegevoegd.

Voorbeeld:

```ts

export const glossary = {

  antwoordruimte: {

    term: 'Antwoordruimte',

    type: 'projectbegrip',

    chapterOfOrigin: '05-draagkracht-grens-en-passende-sluiting',

    short:

      'De voorwaarden waaronder iemand later opnieuw kan voelen, weigeren, herstellen en antwoorden.'

  }

};

```

`chapterOfOrigin` verwijst naar de slug van het hoofdstuk waar het begrip voor het eerst wordt gebruikt of gemunt. Een begrip wordt uitsluitend daar gedefinieerd. Gebruikt een later hoofdstuk hetzelfde begrip, dan verwijst het naar dezelfde entry — er komt geen tweede, lokale definitie. Verdiept een later hoofdstuk het begrip inhoudelijk (bijvoorbeeld doordat **draagkracht**, geïntroduceerd in hoofdstuk 5, in hoofdstuk 14 op een dier wordt toegepast), dan wordt de centrale definitie zo nodig bijgewerkt, niet gedupliceerd.

De interface toont de korte definitie pas na een bewuste klik of tik van de lezer.

Er wordt niet primair gewerkt met hover-tooltips. De begrippenhulp moet ook op touchscreens volledig bruikbaar zijn.

### Drie soorten begrippen

Ieder begrip krijgt één van drie typen.

#### 1. Gangbaar begrip

Een term die al een gevestigde betekenis heeft binnen filosofie, wetenschap of een ander vakgebied.

Voorbeelden:

* fenomenologie;

* determinisme;

* normativiteit;

* interoceptie;

* enactivisme;

* non-dualiteit.

De korte uitleg geeft hier in de eerste plaats de gangbare betekenis. Een eventuele afwijkende toepassing binnen Onafgesloten wordt daarvan onderscheiden.

Voorbeeld:

```ts

fenomenologie: {

  term: 'Fenomenologie',

  type: 'gangbaar',

  chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',

  short:

    'Een filosofische benadering die vertrekt vanuit hoe iets in ervaring verschijnt.'

}

```

#### 2. Projectbegrip

Een term die binnen Onafgesloten wordt geïntroduceerd of een eigen specifieke functie krijgt.

Voorbeelden:

* antwoordruimte;

* draagroute;

* sluitingsmacht;

* passende sluiting;

* draagbare onafheid.

De interface moet zichtbaar maken dat het om een projectbegrip gaat en niet om algemeen gevestigde vaktaal.

Voorbeeld:

```ts

antwoordruimte: {

  term: 'Antwoordruimte',

  type: 'projectbegrip',

  chapterOfOrigin: '05-draagkracht-grens-en-passende-sluiting',

  short:

    'De voorwaarden waaronder een vorm later opnieuw kan voelen, weigeren, herstellen en antwoorden.'

}

```

#### 3. Precisering

Een alledaags of bestaand woord dat binnen de tekst in een bewust preciezere betekenis wordt gebruikt.

Voorbeelden:

* vorm;

* grens;

* antwoord;

* draagkracht;

* herstel.

De uitleg maakt zichtbaar welke specifieke betekenis het woord in deze tekst krijgt, zonder te suggereren dat dit de enige juiste betekenis is.

Voorbeeld:

```ts

vorm: {

  term: 'Vorm',

  type: 'precisering',

  chapterOfOrigin: '01-wat-verschijnt-verschijnt-onaf',

  short:

    'Een herkenbare samenhang met grens, geschiedenis en mogelijkheden; niet alleen uiterlijke gestalte.'

}

```

### Redactionele regels

Begrippenhulp wordt spaarzaam gebruikt.

Een woord wordt alleen aanklikbaar gemaakt wanneer een korte uitleg werkelijk helpt voorkomen dat een lezer op terminologie vastloopt.

Daarbij gelden de volgende richtlijnen:

* markeer doorgaans alleen het eerste relevante voorkomen van een begrip binnen een hoofdstuk;

* herhaal de markering alleen wanneer er veel tekst tussen zit en hernieuwde uitleg werkelijk nuttig is;

* streef bij een lang hoofdstuk naar ongeveer drie tot zes gemarkeerde begrippen — dit is een plafond, geen richtgetal, juist voor dichtere hoofdstukken;

* maak niet ieder filosofisch klinkend woord aanklikbaar;

* markeer geen term uitsluitend omdat er toevallig een definitie beschikbaar is;

* de lopende zin moet ook zonder het openen van de definitie begrijpelijk blijven;

* de korte uitleg moet zoveel mogelijk in gewone taal zijn geschreven;

* gebruik geen begrippenhulp om een inhoudelijke redenering uit de hoofdtekst weg te stoppen.

De begrippenlaag mag de tekst ondersteunen, maar mag niet noodzakelijk worden om de argumentatie te kunnen volgen.

### Visuele rust

Aanklikbare begrippen moeten zo weinig mogelijk concurreren met de hoofdtekst.

Gebruik daarom:

* gewone typografie;

* dezelfde tekstkleur als de omliggende zin;

* hoogstens een subtiele onderstreping of stippellijn;

* geen gekleurde pills;

* geen informatie-icoontje achter ieder begrip;

* geen opvallende achtergrondkleur;

* geen automatische pop-up bij hover.

De interactie moet intentioneel zijn: de lezer opent uitleg wanneer hij die nodig heeft.

### Korte definitie en verdere verdieping

De begrippenhulp geeft alleen de minimale uitleg die nodig is om verder te kunnen lezen.

Zij is niet hetzelfde als de academische verdieping.

De lagen hebben verschillende functies:

```text

lopende tekst

    ↓

aanklikbaar begrip

    ↓

korte definitie

    ↓

eventueel begrippenlijst of academische verdieping

```

Een korte begripsdefinitie moet daarom geen mini-essay worden.

Wanneer een begrip meer historische, theoretische of wetenschappelijke context nodig heeft, hoort die verdieping thuis in de academische laag of in een toekomstige begrippenpagina.

### Centrale woordenlijst

Alle definities worden centraal beheerd in:

```text

src/data/glossary.ts

```

Een begrip wordt niet opnieuw lokaal gedefinieerd in verschillende hoofdstukken.

Dat voorkomt dat dezelfde term langzaam verschillende betekenissen krijgt.

De centrale woordenlijst kan later ook worden gebruikt om automatisch een publieke begrippenpagina te genereren, bijvoorbeeld:

```text

/onafgesloten/begrippen/

```

### Begripsdiscipline

Bij ieder begrip moet duidelijk blijven of de formulering:

* gangbaar is;

* binnen dit project wordt gepreciseerd;

* of een eigen projectbegrip is.

Een bestaande filosofische of wetenschappelijke term mag niet stilzwijgend een nieuwe betekenis krijgen.

Wanneer Onafgesloten bewust van een gangbare betekenis afwijkt, moet die afwijking expliciet worden gemaakt.

Wanneer een gangbaar begrip binnen Onafgesloten een preciezere of afwijkende betekenis krijgt, wordt niet automatisch een nieuw projectbegrip gemaakt. Eerst wordt geprobeerd de gangbare betekenis te behouden en de afwijking expliciet te formuleren.

De begrippenhulp dient daarmee niet alleen toegankelijkheid, maar ook conceptuele controle.

---

## 8. Verwijdertest

De hoofdtekst moet zelfstandig leesbaar zijn (sectie 8). Dit wordt niet aangenomen, maar per hoofdstuk getoetst voordat het hoofdstuk als "inhoudelijk af" geldt.

Procedure:

1\. Bekijk het hoofdstuk met begrippenhulp, uitkijkjes en academische laag volledig weggedacht — alleen de kale hoofdtekst.

2\. Laat deze versie lezen door iemand die het project niet kent, of lees zelf met minstens één dag afstand.

3\. Controleer:

   - Is elke zin begrijpelijk zonder externe toelichting?

   - Steunt een claim in de hoofdtekst logisch op iets dat alleen in de academische laag wordt uitgelegd? Zo ja: verplaats die claim naar de hoofdtekst of herformuleer.

   - Leest de tekst als een afgerond essay, of als een tekst met merkbare gaten waar ooit iets stond?

4\. Leg de uitkomst kort vast — datum, bevinding, eventuele aanpassing — bijvoorbeeld onderaan het hoofdstukbestand in `sources/` of in een gedeeld logboek.

Een hoofdstuk telt pas als inhoudelijk af wanneer deze test is uitgevoerd.

---

## 9. Artistieke uitkijkjes

Artistieke uitkijkjes zijn onderdeel van de publieke leeslaag, maar niet van de argumentatieve bewijslast.

Een uitkijkje mag:

- een gedachte zichtbaar maken;

- de tekst vertragen;

- humor of lucht geven;

- een tegenbeeld tonen;

- cultureel resoneren;

- een gedachte juist compliceren.

Een uitkijkje hoeft de tekst niet te bewijzen. Zodra een uitkijkje een positie gaat beargumenteren in plaats van tonen, hoort het thuis bij Tegenlicht in de academische laag (zie sectie 2 en 11), niet bij uitkijkjes.

Gebruik momenteel:

<aside class="uitkijkje">

  <p class="uitkijkje__label">Uitkijkje</p>

  <h3 class="uitkijkje__title">Titel</h3>

  <p>

    Tekst van het uitkijkje.

  </p>

</aside>

Wanneer een afbeelding wordt gebruikt:

<aside class="uitkijkje">

  <p class="uitkijkje__label">Uitkijkje</p>

  <figure class="uitkijkje__figure">

    <img

      src="/onafgesloten/images/hoofdstuk-05/bestand.jpg"

      alt="Functionele beschrijving van het beeld"

    />

    <figcaption>

      Maker, titel, jaar. Collectie / bron. Licentie.

    </figcaption>

  </figure>

  <h3 class="uitkijkje__title">Titel</h3>

  <p>

    Tekst.

  </p>

</aside>

Uitkijkjes worden niet volgens een vaste hoeveelheid toegevoegd. Ritme en inhoud bepalen hun plaats.

Een uitkijkje mag geen structurele kop in de hoofdtekst nodig hebben om te functioneren. Koppen die uitsluitend een uitkijkje aankondigen worden vermeden; het uitkijkje draagt zijn eigen label en titel. Wanneer alle uitkijkjes worden verwijderd, mogen geen lege of betekenisloze tussenkoppen achterblijven.

Richtlijn: liever geen opeenstapeling van meerdere zware uitkijkjes direct achter elkaar.

---

## 10. Afbeeldingen

Lokale afbeeldingen staan onder:

public/images/

Gebruik per hoofdstuk een eigen map:

public/images/hoofdstuk-05/

Gedeelde beelden kunnen staan in:

public/images/shared/

Bestandsnamen zijn beschrijvend:

cassatt-moeder-kind-1890.jpg

Niet:

image01.jpg

Bij iedere afbeelding moet bekend zijn:

- maker;

- titel;

- jaartal indien bekend;

- oorspronkelijke collectie of bron;

- licentie / public-domainstatus;

- URL van de bron.

Gebruik alleen afbeeldingen waarvan het hergebruik voldoende duidelijk is toegestaan.

---

## 11. Academische verdieping

De academische laag loopt parallel aan de publieke hoofdstukken.

Voorbeeld:

src/pages/hoofdstukken/

05-draagkracht-grens-en-passende-sluiting.md

src/academisch/

05-draagkracht-grens-en-passende-sluiting.md

De bestandsnamen zijn identiek.

Een academisch bestand is geen zelfstandige publieke route, maar wordt door het hoofdstuk als inklapbare verdieping geladen.

De academische tekst kan deze onderdelen bevatten:

## Verwantschap

Bestaande filosofische of theoretische kaders die een vergelijkbaar verschijnsel beschrijven.

## Empirische bedding

Wetenschappelijk onderzoek dat het beschreven verschijnsel ondersteunt, preciseert of begrenst.

## Tegenlicht

Serieuze kritiek, alternatieve theorieën of empirische bevindingen die spanning opleveren met de formulering. Een Tegenlicht-passage citeert een echte, controleerbare tegenpositie — geen stroman gebouwd voor symmetrie.

## Eigen stap

Waar Onafgesloten een andere ordening, combinatie of filosofische conclusie voorstelt.

## Bronnen

Literatuur en verwijzingen waarmee de lezer de claims zelf kan controleren.

Niet ieder hoofdstuk hoeft al deze onderdelen te bevatten.

---

## 12. Stijlcontract: hoofdtekst versus academische laag

De twee lagen hebben verschillende registers. Bij twijfel geldt: zou deze zin, in dit register, vreemd klinken in de andere laag? Zo ja, staat hij in de juiste laag.

Voor de hoofdtekst:

- eerste persoon ("ik probeer...");

- aforistisch, essayistisch;

- geen expliciete citaten of voetnoten;

- mag een onbewezen filosofische inzet zijn, mits zelf al eerlijk over die status (zoals hoofdstuk 1 doet);

- geen nieuwe claim die de hoofdtekst laat afhangen van iets wat alleen in de academische laag staat.

Voor de academische laag:

- derde persoon of gehedged ("men kan tegenwerpen...");

- beargumenterend en vergelijkend;

- iedere claim onder Empirische bedding en Tegenlicht heeft een controleerbare bron (zie sectie 10);

- maakt expliciet onderscheid tussen aanname, empirisch gestaafde claim en omstreden positie;

- mag nieuwe claims toevoegen, mits de hoofdtekst daar niet stilzwijgend van afhankelijk wordt (sectie 8).

---

## 13. Epistemische discipline

Academische bronnen worden niet gebruikt als ornament of autoriteitsargument.

Maak onderscheid tussen:

- empirische ondersteuning;

- empirische context;

- filosofische verwantschap;

- historische voorganger;

- kritische tegenpositie;

- culturele resonantie;

- eigen synthese.

Een bron die een psychologisch verschijnsel ondersteunt, bewijst daarmee niet automatisch de ontologische interpretatie ervan.

Wanneer de tekst verder gaat dan de aangehaalde literatuur, moet dat zichtbaar blijven.

---

## 14. Brontekst en publieke tekst

`sources/` bevat redactionele moederteksten, eerdere versies en materiaal waaruit de publieke site wordt ontwikkeld.

Bestanden in `sources/` worden niet automatisch gepubliceerd.

De actuele publieke tekst staat uitsluitend in:

src/pages/hoofdstukken/

Dat betekent dat een wijziging aan een bronbestand niet vanzelf de website verandert.

### Expliciete divergentie

Zodra een publiek hoofdstuk inhoudelijk afwijkt van zijn bronbestand in `sources/` — door compressie, herschrijving, herschikking of verplaatsing van materiaal naar de academische laag — wordt die afwijking benoemd, niet stilzwijgend gelaten. Gebruik daarvoor de frontmatter-velden uit sectie 4 (`source`, `divergence`, `lastSyncCheck`).

`sources/` bewaart herkomst en redactionele geschiedenis, maar is niet automatisch normatief leidend voor de actuele publieke tekst. Wanneer een publieke hoofdstukversie inhoudelijk afwijkt van de moedertekst, wordt die divergentie als bewuste redactionele ontwikkeling beschouwd en niet automatisch teruggesynchroniseerd.

Dit voorkomt dat bron en publieke tekst bij een groeiend aantal hoofdstukken ongemerkt uit elkaar lopen zonder dat duidelijk is waarom. Een hoofdstuk zonder recente `lastSyncCheck` is zichtbaar een kandidaat om te controleren, in plaats van onopgemerkt te verouderen.

---

## 15. Verwijderen en herschikken

Hoofdstukken mogen worden herschikt zolang de theorie in ontwikkeling is.

Bij structurele wijzigingen moet worden gecontroleerd:

1\. bestandsnaam;

2\. `chapters.ts`;

3\. vorige/volgende navigatie;

4\. eventuele academische tegenhanger;

5\. afbeeldingsmappen;

6\. interne verwijzingen.

Een eenmaal publiek gebruikte URL wordt bij voorkeur behouden of geredirect.

---

## 16. Wat niet in Markdown hoort

Niet in hoofdstukbestanden opnemen:

- globale navigatie;

- siteheader;

- footer;

- base-path-logica;

- JavaScript voor algemene interfacefuncties;

- globale CSS;

- duplicatie van hoofdstukmetadata die centraal beheerd kan worden.

Markdown bevat primair inhoud.

---

## 17. Ontwerpprincipe

De architectuur volgt één hoofdregel:

> inhoud moet langer meegaan dan de techniek waarmee zij op dit moment wordt gepubliceerd.

Daarom blijven kerntekst, academische tekst, beelden en metadata zoveel mogelijk onafhankelijk van Astro-specifieke implementatiedetails.
