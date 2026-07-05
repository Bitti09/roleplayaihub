import { Locales, type IntlayerConfig } from 'intlayer';

/**
 * Intlayer configuration for Roleplay AI Hub.
 *
 * - `defaultLocale` is the locale every page renders with at build time.
 *   The site is deployed as a static bundle, so we ship one canonical
 *   language and let the dictionaries under `src/intlayer/` be the
 *   single source of truth for every UI string.
 * - `locales` lists every language we know about. Adding a new locale
 *   is a one-line change here plus translations in the `.content.ts`
 *   files under `src/intlayer/`.
 * - `routing.mode = 'no-prefix'` because the site has no `/en/...` URL
 *   strategy yet — pages keep their current paths and the preferred
 *   locale is remembered via cookie only.
 */
const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH],
    defaultLocale: Locales.ENGLISH,
    requiredLocales: [Locales.ENGLISH],
  },
  routing: {
    mode: 'no-prefix',
  },
  content: {
    // Dictionaries live as `*.content.ts` files anywhere under `src/`.
    fileExtensions: ['.content.ts'],
  },
};

export default config;