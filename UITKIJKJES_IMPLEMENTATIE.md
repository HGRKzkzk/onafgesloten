# Implementatieplan — multimodale uitkijkjes

**Status:** voorstel voor implementatie  
**Doel:** uitkijkjes daadwerkelijk uit de leesmodus laten breken via kijken, luisteren, video of een concrete handeling, zonder de huidige gewone `.md`-hoofdstukken naar MDX te hoeven migreren.

## 1. Ontwerpbeslissing: geen uitkijkjes in frontmatter

Een uitkijkje hoort op een precieze plek ín de hoofdstuktekst. Frontmatter is geschikt voor hoofdstukmetadata, maar niet voor geneste inhoud met een positie tussen alinea's.

Daarom komt er **geen `outlooks:` / `uitkijkjes:`-array in frontmatter**.

De bestaande gewone Markdownbestanden blijven leidend. Elk uitkijkje krijgt een klein, framework-onafhankelijk HTML-contract in de lopende `.md`-tekst.

Voordelen:

- geen migratie naar MDX;
- uitkijkjes blijven makkelijk redigeerbaar en verplaatsbaar;
- geen dubbele registratie van inhoud in frontmatter én body;
- Astro-componentlogica lekt niet de teksten in;
- de site kan later desgewenst centraal op `data-*`-attributen valideren of verrijken.

## 2. Nieuwe hoofdregel

Een `<aside class="uitkijkje">` is pas compleet wanneer het naast titel en eventuele korte tekst **minstens één ervaringsdrager** bevat:

1. **beeld** — afbeelding, kaart, document, kunstwerk, foto;
2. **audio** — lokaal audiobestand of duidelijke externe luisterlink;
3. **video** — privacybewuste embed of duidelijke videolink;
4. **handeling** — concrete opdracht die de lezer daadwerkelijk iets laat doen, waarnemen of onderbreken;
5. **plek/object** — technisch weergegeven als beeld, link of handeling; `plek` en `object` zijn redactionele subtypen, geen aparte renderer.

Een uitkijkje dat alleen uit extra proza bestaat, geldt voortaan als **onvolledig**.

## 3. HTML-contract

Ieder uitkijkje krijgt op het `<aside>` een `data-mode`.

Toegestane waarden:

```text
image
audio
video
action
mixed
```

`mixed` wordt alleen gebruikt wanneer twee modaliteiten werkelijk gelijkwaardig zijn, bijvoorbeeld beeld + handeling. Niet gebruiken omdat er toevallig ook een bronlink staat.

Basis:

```html
<aside class="uitkijkje" data-mode="image">
  <h3 class="uitkijkje__title">Titel</h3>
  ...ervaringsdrager...
  <div class="uitkijkje__text">
    <p>Korte context, indien nodig.</p>
  </div>
  <p class="uitkijkje__source">...</p>
</aside>
```

De generieke zichtbare labelregel `Uitkijkje` is niet verplicht. De vormgeving zelf maakt de tweede leeslaag herkenbaar.

## 4. Beeld

Lokale beelden blijven de voorkeur houden wanneer hergebruik is toegestaan.

```html
<aside class="uitkijkje" data-mode="image">
  <h3 class="uitkijkje__title">De golf en de boot</h3>
  <figure class="uitkijkje__figure">
    <img
      src="/onafgesloten/images/hoofdstuk-05/hokusai-grote-golf.jpg"
      alt="De grote golf bij Kanagawa van Katsushika Hokusai, met boten onder een hoge golf"
      loading="lazy"
    />
    <figcaption class="uitkijkje__caption">
      Katsushika Hokusai, <em>De grote golf bij Kanagawa</em>, ca. 1830–32. Publiek domein.
    </figcaption>
  </figure>
  <div class="uitkijkje__text">
    <p>Eventueel één korte observatie.</p>
  </div>
</aside>
```

Regels:

- altijd bruikbare `alt`-tekst;
- maker/titel/jaar/licentie in caption of bronregel;
- bron-URL controleerbaar;
- geen beeld alleen als decoratie wanneer de herkomst onduidelijk is;
- waar een detail belangrijk is, mag `object-fit: contain` via `uitkijkje__figure--contain` worden gebruikt.

## 5. Audio

### 5.1 Lokaal / rechtenvrij audio

Wanneer audio lokaal mag worden gehost:

```html
<aside class="uitkijkje" data-mode="audio">
  <h3 class="uitkijkje__title">Luister naar wat niet klinkt</h3>
  <div class="uitkijkje__media">
    <audio controls preload="none">
      <source src="/onafgesloten/media/hoofdstuk-06/rust-fragment.mp3" type="audio/mpeg" />
      Je browser kan dit audiobestand niet afspelen.
    </audio>
  </div>
  <div class="uitkijkje__action">
    <p><strong>Luister één minuut.</strong> Let alleen op de momenten waarop niets wordt gespeeld.</p>
  </div>
</aside>
```

### 5.2 Commerciële / auteursrechtelijk beschermde muziek

Niet zelf hosten. Gebruik een duidelijke externe luisterlink, of later een provider-embed wanneer die technisch en privacytechnisch bewust is gekozen.

```html
<p class="uitkijkje__media-link">
  <a href="..." target="_blank" rel="noopener noreferrer">Luister naar het fragment ↗</a>
</p>
```

De tekst moet ook begrijpelijk blijven wanneer de externe dienst niet beschikbaar is.

## 6. Video

Video kent twee niveaus.

### Niveau A — standaard: duidelijke link

Dit is de veilige default omdat third-party embeds tracking, cookies en fragiele URLs kunnen introduceren.

```html
<aside class="uitkijkje" data-mode="video">
  <h3 class="uitkijkje__title">Stoelen, lichamen, bijna-botsingen</h3>
  <p class="uitkijkje__media-link">
    <a href="..." target="_blank" rel="noopener noreferrer">Bekijk een fragment ↗</a>
  </p>
  <div class="uitkijkje__action">
    <p>Kijk één minuut zonder te beslissen wie hier voor wie zorgt.</p>
  </div>
</aside>
```

### Niveau B — embed

Embeds worden alleen toegevoegd wanneer:

- de bron stabiel en legitiem is;
- embedding door de aanbieder is toegestaan;
- privacy-impact acceptabel is;
- `title`, `loading="lazy"` en responsieve verhouding zijn ingesteld;
- de inhoud ook via een gewone link bereikbaar blijft.

Technisch patroon:

```html
<div class="uitkijkje__embed">
  <iframe
    src="..."
    title="Beschrijvende videotitel"
    loading="lazy"
    allow="fullscreen; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
```

Een embed is dus een bewuste uitzondering, niet de standaardrenderer.

## 7. Handeling

Een handelingsuitkijkje moet iets vragen dat buiten gewoon doorlezen valt. De opdracht is kort, concreet en niet therapeutisch dwingend.

```html
<aside class="uitkijkje" data-mode="action">
  <h3 class="uitkijkje__title">Dertig seconden niets</h3>
  <div class="uitkijkje__action">
    <p><strong>Leg de tekst even weg.</strong></p>
    <p>Kijk dertig seconden uit het raam. Merk alleen op hoeveel beweging er verschijnt zonder dat je er iets mee hoeft.</p>
  </div>
</aside>
```

Regels:

- één duidelijke handeling;
- meestal uitvoerbaar in 15 seconden tot 2 minuten;
- geen verplichte zelfonthulling;
- geen gezondheids- of therapeutische claim;
- altijd veilig over te slaan;
- liever werkwoorden dan uitleg: kijk, luister, loop, tel, teken, leg neer, zoek, wacht.

## 8. Gemengd uitkijkje

Wanneer een afbeelding pas door een kleine opdracht werkelijk uit de leesmodus haalt:

```html
<aside class="uitkijkje" data-mode="mixed">
  <h3 class="uitkijkje__title">Een toren van taal</h3>
  <figure class="uitkijkje__figure">...</figure>
  <div class="uitkijkje__action">
    <p><strong>Kijk twintig seconden.</strong> Zoek één detail dat je in de eerste blik niet zag.</p>
  </div>
</aside>
```

De handeling hoeft niet daarna door de hoofdtekst te worden uitgelegd.

## 9. CSS-contract

De bestaande `.uitkijkje`, `.uitkijkje__figure`, `.uitkijkje__text` en `.uitkijkje__source` blijven bruikbaar.

Toe te voegen klassen:

```text
.uitkijkje__caption
.uitkijkje__media
.uitkijkje__media-link
.uitkijkje__embed
.uitkijkje__action
.uitkijkje__figure--contain
```

Gewenst gedrag:

- `audio` gebruikt de volle breedte van het uitkijkje;
- video-embed gebruikt een responsieve 16:9-container;
- `action` krijgt iets meer visuele ruimte dan gewone contexttekst, maar geen gamified knopstijl;
- `figcaption` is kleiner en rustiger;
- links naar media zijn duidelijk genoeg om als handeling herkenbaar te zijn;
- de huidige zachte papieren vormgeving blijft behouden;
- reduced-motion vereist geen bijzondere code zolang uitkijkjes zelf niet animeren.

## 10. Geen JavaScript nodig voor versie 1

Versie 1 heeft bewust geen centrale JavaScript-renderer nodig.

Waarom:

- `<audio>` en `<iframe>` zijn native HTML;
- afbeeldingen werken al;
- handelingen zijn inhoud, geen applicatielogica;
- minder clientcode betekent minder fragiliteit;
- de Markdownbestanden blijven zelfstandig begrijpelijk.

Later kan JavaScript eventueel worden toegevoegd voor:

- click-to-load privacyvriendelijke embeds;
- optionele timers bij oefeningen;
- analytics op modaliteit, uitsluitend wanneer dat privacytechnisch wenselijk is.

Geen van deze uitbreidingen is nodig voor de eerste multimodale ronde.

## 11. Validatie

Per uitkijkje wordt redactioneel gecontroleerd:

1. staat `data-mode` op het aside;
2. bevat het minstens één ervaringsdrager (`figure`, `audio`, videolink/embed of `uitkijkje__action`);
3. is het zonder die drager niet gewoon hetzelfde mini-essay;
4. kan de hoofdtekst volledig functioneren wanneer het hele aside wordt verwijderd;
5. zijn bron/rechten bij beeld en lokale media controleerbaar;
6. is een externe media-link stabiel genoeg en als externe link herkenbaar;
7. is de handeling veilig, kort en overslaanbaar;
8. verschilt de modaliteit voldoende van naburige uitkijkjes om ritmische variatie te geven.

In een latere technische fase kan een build-check deze regels deels automatisch afdwingen. Voor nu is dit onderdeel van de redactionele toets.

## 12. Register uitbreiden

`UITKIJKJES_REGISTER.md` krijgt twee extra kolommen:

- **modus** — image / audio / video / action / mixed;
- **drager gereed** — ja / nee / te vervangen.

Daarmee wordt onmiddellijk zichtbaar welke huidige uitkijkjes nog text-only zijn en in stap 2 inhoudelijk moeten worden verrijkt.

## 13. Ritme als richtlijn, niet als quotum

Technisch wordt geen automatische eis zoals “ieder hoofdstuk exact twee uitkijkjes” ingebouwd.

Redactionele richtlijn:

- ieder regulier hoofdstuk heeft minimaal één werkelijk multimodaal adempunt;
- lange of cognitief zware hoofdstukken hebben doorgaans twee;
- als globale waarschuwingsgrens geldt ongeveer 900–1400 woorden zware hoofdtekst zonder werkelijke onderbreking;
- een extra uitkijkje wordt alleen toegevoegd wanneer het de ervaring verandert, niet om een telling te halen.

## 14. Migratievolgorde

Na goedkeuring van dit contract:

1. CSS-klassen toevoegen aan `src/styles/global.css`;
2. sectie 9 van `CONTENT_SCHEMA.md` vervangen door dit multimodale contract in verkorte vorm;
3. register uitbreiden met `modus` en `drager gereed`;
4. huidige uitkijkjes 00–16 inventariseren;
5. text-only uitkijkjes markeren;
6. per hoofdstuk concrete werken, beelden, luisterlinks, video's en handelingen kiezen;
7. migreren in kleine inhoudelijke PR's of enkele logisch gegroepeerde rondes;
8. pas daarna beoordelen of click-to-load embeds of andere clientinteractie werkelijk nodig zijn.

## 15. Definition of done voor de multimodale laag

De eerste migratie is afgerond wanneer:

- ieder publiek hoofdstuk minstens één uitkijkje heeft dat feitelijk uit de leesmodus haalt;
- geen enkel uitkijkje uitsluitend extra proza bevat;
- ieder beeld een controleerbare rechtenstatus heeft;
- iedere audio/video-verwijzing functioneert zonder dat de hoofdtekst ervan afhankelijk is;
- handelingen concreet, veilig en overslaanbaar zijn;
- mediumvariatie over het geheel zichtbaar is;
- de publieke tekst ook met alle uitkijkjes verwijderd volledig blijft staan.
