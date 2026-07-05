import { t, type Dictionary } from 'intlayer';

/**
 * Shared UI strings used across multiple pages/components.
 * Centralized so a single key change propagates everywhere.
 */
const commonContent = {
  key: 'common',
  content: {
    home: t({ en: 'Home' }),
    back: t({ en: 'Back' }),
    tryModel: t({ en: 'Try Model' }),
    visitSite: t({ en: 'Visit Site' }),
    details: t({ en: 'Details' }),
    settings: t({ en: 'Settings' }),
    tags: t({ en: 'Tags' }),
    features: t({ en: 'Features' }),
    context: t({ en: 'Context' }),
    size: t({ en: 'Size' }),
    format: t({ en: 'Format' }),
    navigation: t({ en: 'Navigation' }),
    items: t({ en: 'items' }),
    searchPlaceholder: t({ en: 'Search resources...' }),
    noItems: t({ en: 'No items added to this subcategory yet.' }),
    wipBadge: t({ en: 'WIP' }),
    wipMessage: t({
      en: 'This directory is a work in progress. All listings are placeholder data used for testing the site design — nothing here is production content.',
    }),
    placeholderData: t({ en: 'placeholder data' }),
    footerMadeWith: t({ en: 'Made with 💖 for the AI community' }),
    footerCopy: t({
      en: '© {year} Roleplay AI Hub. Built with Astro & DaisyUI.',
    }),
    footerDisclaimer: t({
      en: 'This site does not host any copyrighted files. All links point to external resources.',
    }),
  },
} satisfies Dictionary;

export default commonContent;