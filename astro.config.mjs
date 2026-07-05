// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import pagefind from 'astro-pagefind';
import { intlayer } from 'astro-intlayer';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [intlayer(), pagefind()],
  vite: {
    plugins: [tailwindcss()]
  }
});