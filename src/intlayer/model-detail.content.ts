import { t, type Dictionary } from 'intlayer';

/**
 * Model detail page (`src/pages/ai-models/[slug].astro`).
 *
 * Sections, stat labels, NSFW tier explanations and pricing table headers.
 */
const modelDetailContent = {
  key: 'model-detail',
  content: {
    breadcrumbHome: t({ en: 'Home', de: 'Startseite' }),
    breadcrumbCollection: t({ en: 'AI Models', de: 'KI-Modelle' }),

    sectionCapabilities: t({ en: 'Capabilities', de: 'Fähigkeiten' }),
    sectionTags: t({ en: 'Tags', de: 'Schlagwörter' }),
    sectionParameters: t({ en: 'Recommended Parameters', de: 'Empfohlene Parameter' }),
    sectionNotes: t({ en: '✦ Notes', de: '✦ Notizen' }),
    sectionPricing: t({ en: 'Pricing', de: 'Preise' }),
    pricingProviderSingular: t({ en: '1 provider', de: '1 Anbieter' }),
    pricingProviderPlural: t({ en: '{count} providers', de: '{count} Anbieter' }),
    pricingDisclaimer: t({
      en: 'Prices are illustrative and may have changed since this entry was last reviewed. Always confirm with the provider before relying on them.',
      de: 'Die Preise sind illustrativ und können sich seit der letzten Überprüfung geändert haben. Verifiziere sie immer beim Anbieter, bevor du dich darauf verlässt.',
    }),
    pricingPageLink: t({ en: 'pricing page', de: 'Preisseite' }),

    // NSFW tier labels & descriptions
    nsfwBlocked: t({ en: 'Blocked', de: 'Blockiert' }),
    nsfwLimited: t({ en: 'Limited', de: 'Eingeschränkt' }),
    nsfwAllowed: t({ en: 'Allowed', de: 'Erlaubt' }),
    nsfwBlockedDescription: t({
      en: 'Built-in safety refuses to generate explicit sexual or graphic content.',
      de: 'Die eingebaute Sicherheit verweigert die Generierung expliziter sexueller oder grafischer Inhalte.',
    }),
    nsfwLimitedDescription: t({
      en: 'Permits some mature content; behavior depends on the host (e.g. open weights minus their guardrails).',
      de: 'Erlaubt einige reife Inhalte; das Verhalten hängt vom Host ab (z. B. offene Gewichte ohne Leitplanken).',
    }),
    nsfwAllowedDescription: t({
      en: 'Generates mature content without built-in restrictions or refusals.',
      de: 'Generiert reife Inhalte ohne eingebaute Einschränkungen oder Verweigerungen.',
    }),

    // Pill labels on ModelCard
    nsfwPillBlocked: t({ en: 'NSFW Blocked', de: 'NSFW Blockiert' }),
    nsfwPillLimited: t({ en: 'NSFW Limited', de: 'NSFW Eingeschränkt' }),
    nsfwPillAllowed: t({ en: 'NSFW Allowed', de: 'NSFW Erlaubt' }),

    // Stat labels (uppercase styling is applied via CSS)
    statContextWindow: t({ en: 'Context Window', de: 'Kontextfenster' }),
    statFormat: t({ en: 'Format', de: 'Format' }),
    statSize: t({ en: 'Size', de: 'Größe' }),
    statLicense: t({ en: 'License', de: 'Lizenz' }),
    statContentPolicy: t({ en: 'Content Policy', de: 'Inhaltsrichtlinie' }),
    statBaseModel: t({ en: 'Base Model', de: 'Basismodell' }),
    statReleased: t({ en: 'Released', de: 'Veröffentlicht' }),
    statAuthor: t({ en: 'Author', de: 'Autor' }),

    // Recommended Parameters labels (used on detail page + modal)
    paramTemperature: t({ en: 'Temperature', de: 'Temperatur' }),
    paramMinP: t({ en: 'Min P', de: 'Min P' }),
    paramRepPen: t({ en: 'Rep. Penalty', de: 'Wiederholungsstrafe' }),
    paramTopP: t({ en: 'Top P', de: 'Top P' }),
    paramTopK: t({ en: 'Top K', de: 'Top K' }),
    paramPresence: t({ en: 'Presence Pen.', de: 'Präsenzstrafe' }),
    paramFrequency: t({ en: 'Frequency Pen.', de: 'Frequenzstrafe' }),

    // Pricing table column headers
    colProvider: t({ en: 'Provider', de: 'Anbieter' }),
    colTextInput: t({ en: 'In / 1k', de: 'Ein / 1k' }),
    colTextOutput: t({ en: 'Out / 1k', de: 'Aus / 1k' }),
    colCachedInput: t({ en: 'Cached / 1k', de: 'Gecacht / 1k' }),
    colImage: t({ en: 'Image', de: 'Bild' }),
    colAudioPerSec: t({ en: 'Audio / sec', de: 'Audio / Sek.' }),
    colAudioPerMin: t({ en: 'Audio / min', de: 'Audio / Min.' }),
    colVideoPerSec: t({ en: 'Video / sec', de: 'Video / Sek.' }),
    colVideoPerMin: t({ en: 'Video / min', de: 'Video / Min.' }),
    colEmbedding: t({ en: 'Embedding / 1k', de: 'Embedding / 1k' }),
    colNotes: t({ en: 'Notes', de: 'Notizen' }),
    freeBadge: t({ en: 'FREE', de: 'GRATIS' }),
  },
} satisfies Dictionary;

export default modelDetailContent;