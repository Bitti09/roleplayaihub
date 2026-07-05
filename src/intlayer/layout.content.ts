import { t, type Dictionary } from 'intlayer';

/**
 * Top-nav / branding strings (used in `Layout.astro`).
 * Kept separate from `common` because they're chrome-specific.
 */
const layoutContent = {
  key: 'layout',
  content: {
    siteTitle: t({ en: 'Roleplay AI Hub' }),
    siteTagline: t({ en: 'Roleplay AI Hub' }),
    defaultDescription: t({
      en: 'Roleplay AI Hub - A directory for Roleplay AI Models, Frontends, and Tools',
    }),
    navModels: t({ en: 'Models' }),
    navFrontends: t({ en: 'UIs' }),
    navTools: t({ en: 'Tools' }),
    themeToggleAria: t({ en: 'Theme toggle' }),
    githubAria: t({ en: 'GitHub link' }),
    versionLabel: t({ en: 'v{version}' }),
  },
} satisfies Dictionary;

export default layoutContent;