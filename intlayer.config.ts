import { Locales, type IntlayerConfig } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.GERMAN],
    defaultLocale: Locales.ENGLISH,
    requiredLocales: [Locales.ENGLISH, Locales.GERMAN],
  },
  routing: {
    mode: 'prefix-no-default',
  },
  content: {
    fileExtensions: ['.content.ts'],
  },
};

export default config;