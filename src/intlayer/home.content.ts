import { t, type Dictionary } from 'intlayer';

/**
 * Home page (`src/pages/index.astro`) strings.
 */
const homeContent = {
  key: 'home',
  content: {
    pageTitle: t({ en: 'Home' }),
    heroBadge: t({ en: 'June Updates' }),
    heroHeadline: t({ en: 'Roleplay AI Hub' }),
    heroTagline: t({
      en: 'A collection of AI models, frontends, and tools on the internet!',
    }),
    ctaExplore: t({ en: 'Explore Models' }),
    ctaFrontends: t({ en: 'Frontends' }),
    ctaTools: t({ en: 'Tools' }),
    categoriesDivider: t({ en: 'Or browse these categories ✨' }),

    // Category cards (keyed by category slug). Each card has a title +
    // short description. Add more locales later — only `en` is required.
    categoryTextModelsTitle: t({ en: 'Text Models' }),
    categoryTextModelsDescription: t({
      en: 'Explore advanced large language models, chat assistants, and translation engines.',
    }),
    categoryImageModelsTitle: t({ en: 'Image Models' }),
    categoryImageModelsDescription: t({
      en: 'Create stunning visuals using next-generation text-to-image and editing models.',
    }),
    categoryAudioModelsTitle: t({ en: 'Audio Models' }),
    categoryAudioModelsDescription: t({
      en: 'Convert text to high-fidelity speech and run automatic voice recognition.',
    }),
    categoryWebClientsTitle: t({ en: 'Web Clients' }),
    categoryWebClientsDescription: t({
      en: 'Connect your models to self-hosted, multi-provider web chat interfaces.',
    }),
    categoryDesktopClientsTitle: t({ en: 'Desktop Clients' }),
    categoryDesktopClientsDescription: t({
      en: 'Beautiful native desktop applications to run and chat with local LLMs offline.',
    }),
    categoryMobileClientsTitle: t({ en: 'Mobile Clients' }),
    categoryMobileClientsDescription: t({
      en: 'Experience roleplay and assistant chat on the go with Android and iOS apps.',
    }),
    categoryCliClientsTitle: t({ en: 'CLI Clients' }),
    categoryCliClientsDescription: t({
      en: 'Lightweight, developer-first terminal interfaces and TUI chat clients.',
    }),
    categoryInferenceServersTitle: t({ en: 'Inference Servers' }),
    categoryInferenceServersDescription: t({
      en: 'Host models locally with KoboldCPP, Ollama, or OpenAI-compatible backends.',
    }),
    categoryDevToolsTitle: t({ en: 'Development Tools' }),
    categoryDevToolsDescription: t({
      en: 'CLI helpers, database scrapers, lorebook creators, and context managers.',
    }),
  },
} satisfies Dictionary;

export default homeContent;