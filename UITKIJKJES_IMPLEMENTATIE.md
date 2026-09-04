# Implementatieplan — visuele uitkijkjes

**Status:** actuele redactionele richting  
**Doel:** uitkijkjes de lezer kort uit de argumentatieve leesstroom halen door één sterk beeld te tonen, met zo weinig mogelijk extra navigatie of opdracht.

## 1. Hoofdregel

Een uitkijkje bestaat in beginsel uit drie onderdelen:

1. **een sterke afbeelding** die het culturele of zintuiglijke raam draagt;
2. **een korte tekst** die context geeft zonder het beeld tot bewijs van OOV te maken;
3. **een sobere bronregel** met maker, titel, jaar en controleerbare bron/licentie.

Geen structurele audio-, video-, opdracht- of interactielaag. Geen `data-mode`. Geen extra navigatiepad dat de lezer uit de leesroute trekt.

## 2. Waarom beeld centraal staat

Het doel van een uitkijkje is niet méér tekst aanbieden, maar even een andere manier van waarnemen openen. Daarom is een text-only uitkijkje in beginsel onvolledig.

De afbeelding mag:

- vertragen;
- humor geven;
- ontregelen;
- een andere schaal tonen;
- cultureel resoneren;
- iets concreets laten zien dat de hoofdtekst abstract behandelt.

Maar zij draagt nooit de argumentatieve bewijslast.

## 3. Technisch patroon

Uitkijkjes blijven inline HTML in gewone `.md`-hoofdstukken:

```html
<aside class="uitkijkje">
  <h3 class="uitkijkje__title">Titel</h3>
  <figure class="uitkijkje__figure">
    <img
      src="/onafgesloten/images/hoofdstuk-05/hokusai-grote-golf.jpg"
      alt="De grote golf bij Kanagawa van Katsushika Hokusai"
      loading="lazy"
    />
  </figure>
  <div class="uitkijkje__text">
    <p>Korte context, liefst één kleine alinea.</p>
  </div>
  <p class="uitkijkje__source">Maker, titel, jaar · bron / licentie</p>
</aside>
```

Geen frontmatter-array en geen MDX-component nodig. De plek van het uitkijkje blijft onderdeel van de hoofdstukcompositie.

## 4. Beeldregels

- gebruik alleen beeld met controleerbare hergebruikstatus;
- lokale opslag onder `public/images/hoofdstuk-NN/` heeft de voorkeur;
- gebruik beschrijvende bestandsnamen;
- geef iedere afbeelding een bruikbare `alt`-tekst;
- maker, titel, jaar, bron en licentie moeten traceerbaar zijn;
- een rechtenonduidelijk beeld wordt vervangen, niet omzeild met een fragiele hotlink;
- reproducties uit museumcollecties of Wikimedia Commons worden alleen gebruikt wanneer de rechtenstatus helder is.

## 5. Tekstlengte

De uitkijkjestekst blijft kort.

Richtlijn:

- meestal 40–110 woorden;
- hoogstens twee korte alinea's;
- geen mini-essay;
- geen samenvatting van de hoofdtekst;
- geen expliciete conclusie dat het beeld “dus OOV bevestigt”.

Een goed uitkijkje mag eindigen terwijl iets nog openstaat.

## 6. Frequentie

Frequentie is ruimhartiger dan voorheen, maar geen quotum.

- ieder regulier hoofdstuk heeft minstens één visueel uitkijkje;
- lange of conceptueel zware hoofdstukken hebben doorgaans twee;
- hoofdstuk 1 mag rijker openen;
- wanneer een lange passage visueel droog wordt, is een tweede raam eerder wenselijk dan nóg een tekstuele overgang;
- voeg niets toe dat alleen decoratief voelt.

## 7. Variatie

Variatie blijft belangrijk, maar vindt primair **binnen beeldcultuur** plaats:

- schilderkunst;
- fotografie;
- boekillustratie;
- kaarten en manuscripten;
- architectuur en openbare ruimte;
- wetenschappelijke beelden;
- objecten en materiële cultuur;
- grafiek, karikatuur en strip;
- theater-, dans- of muziekfotografie wanneer rechten en bron helder zijn.

Het doel is niet zoveel mogelijk media, maar voorkomen dat elk raam hetzelfde museumregister krijgt.

## 8. Verwijdertest

Ieder uitkijkje moet volledig verwijderbaar zijn zonder dat de redenering instort. Als een hoofdstuk een afbeelding nodig heeft om een claim te begrijpen of te bewijzen, staat de noodzakelijke inhoud in de verkeerde laag.

## 9. Redactionele toets per uitkijkje

Voor merge:

1. is de afbeelding werkelijk sterk genoeg om de onderbreking te dragen;
2. is de bron en rechtenstatus controleerbaar;
3. is de tekst korter dan de hoofdtekst eromheen vraagt;
4. voegt de tekst geen tweede argument toe;
5. verschilt het beeld voldoende van naburige uitkijkjes;
6. is het cultureel herkenbaar of, wanneer onbekend, onmiddellijk visueel leesbaar;
7. kan het geheel weg zonder argumentatief verlies.

## 10. Definition of done

De visuele laag is op orde wanneer:

- geen publiek uitkijkje uitsluitend uit tekst bestaat;
- ieder uitkijkje een daadwerkelijk zichtbare afbeelding heeft;
- bron en rechtenstatus van ieder beeld vastliggen;
- de uitkijkjesteksten kort en niet-docerend zijn;
- lange hoofdstukken voldoende visueel ademen;
- de verzameling als geheel cultureel en visueel gevarieerd blijft.
