import { t, type Dictionary } from 'intlayer';

/**
 * Top-nav / branding strings (used in `Layout.astro`).
 * Kept separate from `common` because they're chrome-specific.
 */
const layoutContent = {
  key: 'layout',
  content: {
    siteTitle: t({ en: 'Roleplay AI Hub', de: 'Roleplay AI Hub' }),
    siteTagline: t({ en: 'Roleplay AI Hub', de: 'Roleplay AI Hub' }),
    defaultDescription: t({
      en: 'Roleplay AI Hub - A directory for Roleplay AI Models, Frontends, and Tools',
      de: 'Roleplay AI Hub - Ein Verzeichnis für Roleplay-KI-Modelle, Frontends und Werkzeuge',
    }),
    navModels: t({ en: 'Models', de: 'Modelle' }),
    navFrontends: t({ en: 'UIs', de: 'UIs' }),
    navTools: t({ en: 'Tools', de: 'Werkzeuge' }),
    themeToggleAria: t({ en: 'Theme toggle', de: 'Theme wechseln' }),
    githubAria: t({ en: 'GitHub link', de: 'GitHub-Link' }),
    versionLabel: t({ en: 'v{version}', de: 'v{version}' }),
  },
} satisfies Dictionary;

export default layoutContent;