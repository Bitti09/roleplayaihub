import { t, type Dictionary } from 'intlayer';

/**
 * Shared UI strings used across multiple pages/components.
 * Centralized so a single key change propagates everywhere.
 */
const commonContent = {
  key: 'common',
  content: {
    home: t({ en: 'Home', de: 'Startseite' }),
    back: t({ en: 'Back', de: 'Zurück' }),
    tryModel: t({ en: 'Try Model', de: 'Modell testen' }),
    visitSite: t({ en: 'Visit Site', de: 'Website besuchen' }),
    details: t({ en: 'Details', de: 'Details' }),
    settings: t({ en: 'Settings', de: 'Einstellungen' }),
    tags: t({ en: 'Tags', de: 'Schlagwörter' }),
    features: t({ en: 'Features', de: 'Funktionen' }),
    context: t({ en: 'Context', de: 'Kontext' }),
    size: t({ en: 'Size', de: 'Größe' }),
    format: t({ en: 'Format', de: 'Format' }),
    by: t({ en: 'by', de: 'von' }),
    language: t({ en: 'Language', de: 'Sprache' }),
    availableLanguages: t({ en: 'Available languages', de: 'Verfügbare Sprachen' }),
    modelCapabilities: t({ en: 'Model capabilities', de: 'Modellfähigkeiten' }),
    capabilityVision: t({ en: 'Vision', de: 'Vision' }),
    capabilityAudioInput: t({ en: 'Audio Input', de: 'Audio-Eingabe' }),
    capabilityVideoInput: t({ en: 'Video Input', de: 'Video-Eingabe' }),
    capabilityReasoning: t({ en: 'Reasoning', de: 'Schlussfolgern' }),
    capabilityPdfUpload: t({ en: 'PDF Upload', de: 'PDF-Upload' }),
    capabilityToolCalling: t({ en: 'Tool Calling', de: 'Tool-Aufrufe' }),
    licenseOpenWeight: t({ en: 'Open Weight', de: 'Offene Gewichte' }),
    licenseProprietary: t({ en: 'Proprietary', de: 'Proprietär' }),
    navigation: t({ en: 'Navigation', de: 'Navigation' }),
    items: t({ en: 'items', de: 'Einträge' }),
    searchPlaceholder: t({ en: 'Search resources...', de: 'Ressourcen suchen...' }),
    noItems: t({
      en: 'No items added to this subcategory yet.',
      de: 'Noch keine Einträge in dieser Unterkategorie.',
    }),
    wipBadge: t({ en: 'WIP', de: 'WIP' }),
    wipMessage: t({
      en: 'This directory is a work in progress. All listings are placeholder data used for testing the site design - nothing here is production content.',
      de: 'Dieses Verzeichnis ist Work in Progress. Alle Einträge sind Platzhalterdaten zur Testung des Seitendesigns - nichts hier ist Produktivinhalt.',
    }),
    placeholderData: t({ en: 'placeholder data', de: 'Platzhalterdaten' }),
    footerMadeWith: t({
      en: 'Made with ♥ for the AI community',
      de: 'Mit ♥ für die KI-Community',
    }),
    footerCopy: t({
      en: '(c) {year} Roleplay AI Hub. Built with Astro & DaisyUI.',
      de: '(c) {year} Roleplay AI Hub. Gebaut mit Astro & DaisyUI.',
    }),
    footerDisclaimer: t({
      en: 'This site does not host any copyrighted files. All links point to external resources.',
      de: 'Diese Seite hostet keine urheberrechtlich geschützten Dateien. Alle Links verweisen auf externe Ressourcen.',
    }),
  },
} satisfies Dictionary;

export default commonContent;