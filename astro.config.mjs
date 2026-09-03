import { defineConfig } from 'astro/config';

const base = process.env.DEPLOY_BASE || '/onafgesloten';
const site = process.env.DEPLOY_SITE || 'https://woutervanitterzon.nl';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always'
});
