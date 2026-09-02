# Deployment

De site gebruikt twee eenvoudige GitHub Actions-routes:

- **staging**: iedere push naar `main` wordt automatisch gebouwd en gedeployed;
- **production**: een gecontroleerde commit wordt handmatig naar live gepromoveerd.

## URLs en paden

| Omgeving | URL | Greenhost-pad |
| --- | --- | --- |
| Staging | `https://woutervanitterzon.nl/onafgesloten-staging/` | `/domains/woutervanitterzon.nl/DEFAULT/onafgesloten-staging` |
| Live | `https://woutervanitterzon.nl/onafgesloten/` | `/domains/woutervanitterzon.nl/DEFAULT/onafgesloten` |

Astro gebruikt `DEPLOY_BASE` tijdens de build. Daardoor worden links en assets voor staging met
`/onafgesloten-staging` gebouwd en voor live met `/onafgesloten`.

## Eenmalige GitHub-instelling

Maak onder **Settings → Environments** twee environments:

1. `staging`
2. `production`

Voeg in beide environments deze secrets toe:

- `SFTP_HOST`
- `SFTP_USER`
- `SFTP_PASSWORD`

Dezelfde Greenhost-SFTP-gegevens kunnen voor beide environments worden gebruikt.

Aanbevolen: stel voor `production` een deployment protection rule / required reviewer in als die optie
voor de repository beschikbaar is. De live-workflow blijft daarnaast altijd handmatig.

## Dagelijks gebruik

### Naar staging

1. Werk via een branch en pull request.
2. Merge de PR naar `main`.
3. GitHub Actions start automatisch **Deploy staging**.
4. Controleer de staging-URL.
5. Noteer de commit-SHA uit de workflow-samenvatting.

### Naar live

1. Open **Actions → Deploy live**.
2. Kies **Run workflow**.
3. Vul bij `ref` de commit-SHA in die op staging is gecontroleerd.
4. Start de workflow.
5. De site wordt opnieuw uit exact die broncommit gebouwd, nu met de live base-path, en via SFTP
   naar de live map gespiegeld.

## Belangrijk gedrag

De SFTP-deploy gebruikt `mirror --reverse --delete`. Bestanden die niet meer in de nieuwe build
voorkomen worden dus ook uit de betreffende staging- of live-map verwijderd. De workflow raakt
geen bestanden buiten die doelmap aan.

Staging en live worden apart gebouwd omdat de Astro `base` verschilt. De broncommit blijft bij
promotie wel exact dezelfde.
