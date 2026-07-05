import { t, type Dictionary } from 'intlayer';

/**
 * Model detail page (`src/pages/ai-models/[slug].astro`).
 *
 * Sections, stat labels, NSFW tier explanations and pricing table headers.
 */
const modelDetailContent = {
  key: 'model-detail',
  content: {
    breadcrumbHome: t({ en: 'Home' }),
    breadcrumbCollection: t({ en: 'AI Models' }),

    sectionCapabilities: t({ en: 'Capabilities' }),
    sectionTags: t({ en: 'Tags' }),
    sectionParameters: t({ en: 'Recommended Parameters' }),
    sectionNotes: t({ en: '📝 Notes' }),
    sectionPricing: t({ en: 'Pricing' }),
    pricingProviderSingular: t({ en: '1 provider' }),
    pricingProviderPlural: t({ en: '{count} providers' }),
    pricingDisclaimer: t({
      en: 'Prices are illustrative and may have changed since this entry was last reviewed. Always confirm with the provider before relying on them.',
    }),
    pricingPageLink: t({ en: 'pricing page' }),

    // NSFW tier labels & descriptions
    nsfwBlocked: t({ en: 'Blocked' }),
    nsfwLimited: t({ en: 'Limited' }),
    nsfwAllowed: t({ en: 'Allowed' }),
    nsfwBlockedDescription: t({
      en: 'Built-in safety refuses to generate explicit sexual or graphic content.',
    }),
    nsfwLimitedDescription: t({
      en: 'Permits some mature content; behavior depends on the host (e.g. open weights minus their guardrails).',
    }),
    nsfwAllowedDescription: t({
      en: 'Generates mature content without built-in restrictions or refusals.',
    }),

    // Pill labels on ModelCard
    nsfwPillBlocked: t({ en: 'NSFW Blocked' }),
    nsfwPillLimited: t({ en: 'NSFW Limited' }),
    nsfwPillAllowed: t({ en: 'NSFW Allowed' }),

    // Stat labels (uppercase styling is applied via CSS)
    statContextWindow: t({ en: 'Context Window' }),
    statFormat: t({ en: 'Format' }),
    statSize: t({ en: 'Size' }),
    statLicense: t({ en: 'License' }),
    statContentPolicy: t({ en: 'Content Policy' }),
    statBaseModel: t({ en: 'Base Model' }),
    statReleased: t({ en: 'Released' }),
    statAuthor: t({ en: 'Author' }),

    // Recommended Parameters labels (used on detail page + modal)
    paramTemperature: t({ en: 'Temperature' }),
    paramMinP: t({ en: 'Min P' }),
    paramRepPen: t({ en: 'Rep. Penalty' }),
    paramTopP: t({ en: 'Top P' }),
    paramTopK: t({ en: 'Top K' }),
    paramPresence: t({ en: 'Presence Pen.' }),
    paramFrequency: t({ en: 'Frequency Pen.' }),

    // Pricing table column headers
    colProvider: t({ en: 'Provider' }),
    colTextInput: t({ en: 'In / 1k' }),
    colTextOutput: t({ en: 'Out / 1k' }),
    colCachedInput: t({ en: 'Cached / 1k' }),
    colImage: t({ en: 'Image' }),
    colAudioPerSec: t({ en: 'Audio / sec' }),
    colAudioPerMin: t({ en: 'Audio / min' }),
    colVideoPerSec: t({ en: 'Video / sec' }),
    colVideoPerMin: t({ en: 'Video / min' }),
    colEmbedding: t({ en: 'Embedding / 1k' }),
    colNotes: t({ en: 'Notes' }),
    freeBadge: t({ en: 'FREE' }),
  },
} satisfies Dictionary;

export default modelDetailContent;