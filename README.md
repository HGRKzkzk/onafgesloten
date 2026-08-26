# Onafgesloten — schoon Astro-project

Dit project is bewust eenvoudig gehouden.

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

Die map wordt niet als website gepubliceerd.

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
