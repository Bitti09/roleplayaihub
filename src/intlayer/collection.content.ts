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
      de: 'Entdecke und filtere {collection}, kuratiert von der Community.',
    }),
    settingsModalTitle: t({
      en: 'Recommended Parameters',
      de: 'Empfohlene Parameter',
    }),
    settingsModalTagPrefix: t({ en: 'For ', de: 'Für ' }),
    modalClose: t({ en: '✕', de: '✕' }),
  },
} satisfies Dictionary;

export default collectionContent;