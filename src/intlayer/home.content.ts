import { t, type Dictionary } from 'intlayer';

/**
 * Home page (`src/pages/index.astro`) strings.
 */
const homeContent = {
  key: 'home',
  content: {
    pageTitle: t({ en: 'Home', de: 'Startseite' }),
    heroBadge: t({ en: 'June Updates', de: 'Juni-Updates' }),
    heroHeadline: t({ en: 'Roleplay AI Hub', de: 'Roleplay AI Hub' }),
    heroTagline: t({
      en: 'A collection of AI models, frontends, and tools on the internet!',
      de: 'Eine Sammlung von KI-Modellen, Frontends und Werkzeugen im Internet!',
    }),
    ctaExplore: t({ en: 'Explore Models', de: 'Modelle entdecken' }),
    ctaFrontends: t({ en: 'Frontends', de: 'Frontends' }),
    ctaTools: t({ en: 'Tools', de: 'Werkzeuge' }),
    categoriesDivider: t({ en: 'Or browse these categories →', de: 'Oder stöbere in diesen Kategorien →' }),

    // Category cards (keyed by category slug). Each card has a title +
    // short description.
    categoryTextModelsTitle: t({ en: 'Text Models', de: 'Textmodelle' }),
    categoryTextModelsDescription: t({
      en: 'Explore advanced large language models, chat assistants, and translation engines.',
      de: 'Entdecke fortschrittliche große Sprachmodelle, Chat-Assistenten und Übersetzungs-Engines.',
    }),
    categoryImageModelsTitle: t({ en: 'Image Models', de: 'Bildmodelle' }),
    categoryImageModelsDescription: t({
      en: 'Create stunning visuals using next-generation text-to-image and editing models.',
      de: 'Erstelle beeindruckende Bilder mit Text-zu-Bild- und Bearbeitungsmodellen der nächsten Generation.',
    }),
    categoryAudioModelsTitle: t({ en: 'Audio Models', de: 'Audiomodelle' }),
    categoryAudioModelsDescription: t({
      en: 'Convert text to high-fidelity speech and run automatic voice recognition.',
      de: 'Wandle Text in hochwertige Sprache um und führe automatische Spracherkennung durch.',
    }),
    categoryWebClientsTitle: t({ en: 'Web Clients', de: 'Web-Clients' }),
    categoryWebClientsDescription: t({
      en: 'Connect your models to self-hosted, multi-provider web chat interfaces.',
      de: 'Verbinde deine Modelle mit selbstgehosteten, Multi-Provider-Webchat-Oberflächen.',
    }),
    categoryDesktopClientsTitle: t({ en: 'Desktop Clients', de: 'Desktop-Clients' }),
    categoryDesktopClientsDescription: t({
      en: 'Beautiful native desktop applications to run and chat with local LLMs offline.',
      de: 'Schöne native Desktop-Anwendungen, um lokale LLMs offline zu betreiben und zu chatten.',
    }),
    categoryMobileClientsTitle: t({ en: 'Mobile Clients', de: 'Mobile-Clients' }),
    categoryMobileClientsDescription: t({
      en: 'Experience roleplay and assistant chat on the go with Android and iOS apps.',
      de: 'Erlebe Roleplay und Assistenten-Chat unterwegs mit Android- und iOS-Apps.',
    }),
    categoryCliClientsTitle: t({ en: 'CLI Clients', de: 'CLI-Clients' }),
    categoryCliClientsDescription: t({
      en: 'Lightweight, developer-first terminal interfaces and TUI chat clients.',
      de: 'Leichtgewichtige, entwicklerfreundliche Terminal-Oberflächen und TUI-Chat-Clients.',
    }),
    categoryInferenceServersTitle: t({ en: 'Inference Servers', de: 'Inferenz-Server' }),
    categoryInferenceServersDescription: t({
      en: 'Host models locally with KoboldCPP, Ollama, or OpenAI-compatible backends.',
      de: 'Hoste Modelle lokal mit KoboldCPP, Ollama oder OpenAI-kompatiblen Backends.',
    }),
    categoryDevToolsTitle: t({ en: 'Development Tools', de: 'Entwicklerwerkzeuge' }),
    categoryDevToolsDescription: t({
      en: 'CLI helpers, database scrapers, lorebook creators, and context managers.',
      de: 'CLI-Helfer, Datenbank-Scraper, Lorebook-Ersteller und Kontext-Manager.',
    }),
  },
} satisfies Dictionary;

export default homeContent;