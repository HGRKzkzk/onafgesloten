# Deployment

De site gebruikt twee eenvoudige GitHub Actions-routes:

- **staging**: iedere push naar `main` wordt automatisch gebouwd en naar de stagingmap op Cloud86 gedeployed;
- **production**: een gecontroleerde commit wordt handmatig naar live gepromoveerd.

## URLs

- Staging: `https://woutervanitterzon.nl/onafgesloten-staging/`
- Live: `https://woutervanitterzon.nl/onafgesloten/`

Astro gebruikt `DEPLOY_BASE` tijdens de build. Daardoor worden links en assets voor staging met
`/onafgesloten-staging` gebouwd en voor live met `/onafgesloten`.

## GitHub environments

Maak onder **Settings → Environments** twee environments:

1. `staging`
2. `production`

### Secrets voor staging

Voeg aan het environment `staging` toe:

- `SFTP_HOST`
- `SFTP_USER`
- `SFTP_PASSWORD`
- `STAGING_REMOTE_PATH`
- `STAGING_AUTH_USER`
- `STAGING_AUTH_PASSWORD`
- `STAGING_AUTH_FILE`

### Secrets voor production

Voeg aan het environment `production` toe:

- `SFTP_HOST`
- `SFTP_USER`
- `SFTP_PASSWORD`
- `LIVE_REMOTE_PATH`

Dezelfde Cloud86-SFTP-inloggegevens kunnen voor beide environments worden gebruikt.

## Staging Basic Auth

De staging-workflow maakt bij iedere build automatisch twee bestanden in de build-output:

- `.htaccess`
- `.htpasswd`

De gebruikersnaam en het wachtwoord zelf staan niet in Git. De workflow genereert een bcrypt-hash
met `htpasswd` uit de GitHub Secrets `STAGING_AUTH_USER` en `STAGING_AUTH_PASSWORD`.

De gegenereerde `.htaccess` bevat:

```apache
AuthType Basic
AuthName "Onafgesloten staging"
AuthUserFile /absoluut/serverpad/naar/onafgesloten-staging/.htpasswd
Require valid-user

<Files ".htpasswd">
  Require all denied
</Files>

Options -Indexes

<IfModule mod_headers.c>
  Header set X-Robots-Tag "noindex, nofollow, noarchive"
</IfModule>
```

`STAGING_AUTH_FILE` moet dus het **absolute serverbestandspad** van de `.htpasswd` op Cloud86 zijn,
niet het SFTP-pad en niet een URL.

### Het absolute pad vinden

Cloud86 biedt SSH-toegang. Log eenmalig via SSH in en ga naar de stagingmap. Bijvoorbeeld:

```bash
cd /pad/dat/je/via/sftp/gebruikt/voor/onafgesloten-staging
pwd
```

Als `pwd` bijvoorbeeld teruggeeft:

```text
/var/www/vhosts/woutervanitterzon.nl/httpdocs/onafgesloten-staging
```

dan wordt `STAGING_AUTH_FILE`:

```text
/var/www/vhosts/woutervanitterzon.nl/httpdocs/onafgesloten-staging/.htpasswd
```

Gebruik hier het pad dat Cloud86 daadwerkelijk teruggeeft; neem het voorbeeld niet blind over.

## Dagelijks gebruik

### Naar staging

1. Werk via een branch en pull request.
2. Merge de PR naar `main`.
3. GitHub Actions start automatisch **Deploy staging**.
4. De workflow bouwt de site, maakt de Basic Auth-bestanden en spiegelt alles naar `STAGING_REMOTE_PATH`.
5. Open de staging-URL en log in met `STAGING_AUTH_USER` / `STAGING_AUTH_PASSWORD`.
6. Controleer de site.
7. Noteer de commit-SHA uit de workflow-samenvatting.

### Naar live

1. Open **Actions → Deploy live**.
2. Kies **Run workflow**.
3. Vul bij `ref` de commit-SHA in die op staging is gecontroleerd.
4. Start de workflow.
5. De site wordt uit exact die broncommit opnieuw gebouwd met de live base-path en naar `LIVE_REMOTE_PATH` gedeployed.

## Belangrijk gedrag

De SFTP-deploy gebruikt `mirror --reverse --delete`. Bestanden die niet meer in de nieuwe build
voorkomen worden uit de betreffende staging- of live-map verwijderd.

Omdat de staging-workflow de `.htaccess` en `.htpasswd` vóór iedere deploy opnieuw genereert,
blijft de wachtwoordbeveiliging ook bij `--delete` intact.

De `.htpasswd` staat in deze eenvoudige opzet in de stagingmap zelf, maar directe HTTP-toegang
ernaar wordt expliciet door de `.htaccess` geblokkeerd. Wil je hem later buiten de document-root
plaatsen, dan kan dat zonder de rest van de buildstraat te veranderen; alleen het uploadpad en
`STAGING_AUTH_FILE` hoeven dan te worden aangepast.

Aanbevolen: stel voor `production` een deployment protection rule / required reviewer in als die optie
voor de repository beschikbaar is. De live-workflow blijft daarnaast altijd handmatig.
