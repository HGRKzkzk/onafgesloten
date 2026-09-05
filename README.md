# Onafgesloten Vorm — schoon Astro-project

Dit project is bewust eenvoudig gehouden.

## Naamgeving

De publieke naam van het filosofische project is **Onafgesloten Vorm**.

Intern blijft **OOV** de werknaam. Bestaande technische identifiers zoals `OOV-kern`, source-id’s en historische slugs hoeven daarom niet te worden hernoemd. De afkorting wordt intern niet langer behandeld als een publieke uitschrijving van “Ontologie van Onafgesloten Vorm”.

`Ontologie` blijft beschikbaar als filosofisch register waar de inhoud daar werkelijk om vraagt, maar is geen genrelabel voor het project als geheel en hoort niet als drempel op de publieke voordeur.

## Publicatiepad

De site is geconfigureerd voor:

`https://woutervanitterzon.nl/onafgesloten/`

Daarom staat in `astro.config.mjs`:

```js
site: 'https://woutervanitterzon.nl',
base: '/onafgesloten'
```

## Werken aan de inhoud

De publieke hoofdstukken staan uitsluitend in:

`src/pages/hoofdstukken/`

Ieder hoofdstuk is een zelfstandige Markdown-insteekhoes. Bewerk dus niet `dist/`.

De volledige redactionele moedertekst staat apart in:

`sources/OOV-kern-v4.1.md`

Die map wordt niet als website gepubliceerd. De moedertekst kan historische terminologie bevatten; bij synchronisatie naar de publieke tekst geldt de naamgevingsconventie hierboven.

## Volgorde en navigatie

`src/data/chapters.ts` is de enige plek voor:

- volgorde;
- titel op de landingpage;
- slug / URL;
- korte samenvatting;
- vorige/volgende navigatie.

De Markdownbestanden hoeven daarom geen handmatige navigatielinks te bevatten.

## Uitkijkjes

Artistieke uitkijkjes zijn gewone HTML-`aside`-blokken in Markdown en gebruiken deze classes:

- `.uitkijkje`
- `.uitkijkje__label`
- `.uitkijkje__title`
- `.uitkijkje__figure`
- `.uitkijkje__text`
- `.uitkijkje__source`

De styling staat centraal in `src/styles/global.css`.

De huidige uitkijkjes verwijzen voor hun beeldbestanden nog rechtstreeks naar de genoemde open Wikimedia Commons-bronnen. De bronlinks blijven zichtbaar in de uitkijkjes. Een latere asset-pass kan deze beelden lokaal onder `public/images/` onderbrengen zonder de architectuur te veranderen.

## Ontwikkelen

```powershell
npm install
npm run dev
```

Met de ingestelde base staat de lokale site op:

`http://localhost:4321/onafgesloten/`

## Productie controleren

```powershell
npm run build
npm run preview
```

Open bij preview eveneens de URL mét `/onafgesloten/`.

Upload daarna de inhoud van `dist/` naar de webmap `onafgesloten` op de server.

## Belangrijk

`dist/`, `.astro/` en `node_modules/` zijn gegenereerd. Bewerk daar nooit inhoudelijke bestanden.
