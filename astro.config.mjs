import { defineConfig } from 'astro/config';

const base = process.env.DEPLOY_BASE || '/onafgesloten';
const site = process.env.DEPLOY_SITE || 'https://woutervanitterzon.nl';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  redirects: {
    '/hoofdstukken/14-twee-toetsgevallen-wat-verandert-er-wanneer-oov-iets-moet-doen/':
      '/hoofdstukken/14-drie-toetsgevallen-wat-verandert-er-wanneer-dit-denken-iets-moet-doen/'
  }
});
