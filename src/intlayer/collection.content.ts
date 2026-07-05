import { t, type Dictionary } from 'intlayer';

/**
 * Strings used on the per-collection listing pages
 * (`src/pages/[collection].astro`) — header, sidebar, item cards.
 */
const collectionContent = {
  key: 'collection',
  content: {
    defaultDescription: t({
      en: 'Discover and filter {collection} curated by the community.',
    }),
    settingsModalTitle: t({ en: 'Recommended Parameters' }),
    settingsModalTagPrefix: t({ en: 'For ' }),
    modalClose: t({ en: '✕' }),
  },
} satisfies Dictionary;

export default collectionContent;