# 🎭 Roleplay AI Hub

> A curated directory of AI models, frontends, and tools for interactive
> text-based roleplay and creative writing.

[![Astro](https://img.shields.io/badge/Astro-6.4-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.5-5A0EF8)](https://daisyui.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

---

## ⚠️ Work in Progress

This directory is **under active development**. All listings are currently
**placeholder data** used for testing the site design — nothing here is
production content yet. The data schema, UI, and search are stable; the
content is not.

---

## ✨ Features

- 🎯 **Capability-tagged models** — every AI model advertises which inputs
  it supports (Vision, Audio, Video, Reasoning, PDF Upload, Tool Calling)
  with iconified, accessible tooltips.
- ⚙️ **One-click settings** — recommended Temperature, Min-P, Repetition
  Penalty, Top-P and Top-K for each model in a clean settings drawer.
- 🔍 **Static full-text search** — [Pagefind](https://pagefind.app) builds
  a search index at build time; the ~640 KB UI bundle is **lazy-loaded**
  on first search-box focus, not on every page view.
- 🌓 **Light & dark themes** — DaisyUI 5 with system-aware default; toggle
  persists in `localStorage`.
- 📱 **Responsive layout** — mobile-first, three-column metadata strips
  on desktop, single-column on small screens.
- 🚀 **Static output, edge-deployed** — built with `output: 'static'`,
  served from Cloudflare Pages with zero runtime compute.

---

## 🧱 Tech Stack

| Layer | Choice | Version |
| --- | --- | --- |
| Framework | [Astro](https://astro.build) | `^6.4.6` |
| Adapter | [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) | `^13.7.0` |
| Styles | [Tailwind CSS](https://tailwindcss.com) + [`@tailwindcss/vite`](https://tailwindcss.com/docs/installation/using-vite) | `^4.3.1` |
| Component library | [DaisyUI](https://daisyui.com) | `^5.5.23` |
| Icons | [`@lucide/astro`](https://lucide.dev) | `^1.18.0` |
| Search | [`astro-pagefind`](https://github.com/HiDeoo/astro-pagefind) | `^2.0.0` |
| Schema validation | [Zod](https://zod.dev) | `^4.4.3` |
| Type-check | [`@astrojs/check`](https://www.npmjs.com/package/@astrojs/check) + TypeScript | `^0.9.9` / `^6.0.3` |
| Deploy | [Cloudflare Pages](https://pages.cloudflare.com) via [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | `^4.100.0` |

---

## 📁 Project Structure

```text
rpaihub/
├── astro.config.mjs          # Astro config (static output + pagefind + tailwind)
├── wrangler.toml             # Cloudflare Pages deployment config
├── tsconfig.json             # Strict TypeScript config
├── public/                   # Static assets served as-is (favicon, etc.)
├── scripts/                  # Build / maintenance scripts
└── src/
    ├── components/           # Reusable .astro components
    │   ├── Capabilities.astro
    │   ├── Card.astro
    │   ├── EmptyState.astro
    │   ├── ModelCard.astro
    │   ├── ModelSettingsModal.astro
    │   ├── PageHeader.astro
    │   ├── Sidebar.astro
    │   └── TagList.astro
    ├── content/              # Astro content collections (YAML data)
    │   ├── ai-models/        # AI model entries
    │   ├── frontends/        # Frontend app entries
    │   ├── navigation/       # Sidebar navigation config
    │   └── tools/            # Tool entries
    ├── content.config.ts     # Zod schemas for each collection
    ├── layouts/
    │   └── Layout.astro      # Base layout (head, theme, search)
    ├── lib/                  # Pure TypeScript helpers
    │   ├── capabilities.ts   # Capability enum → icon/color/label
    │   ├── collections.ts    # Content-collection helpers
    │   ├── colors.ts         # Deterministic per-name color
    │   ├── icons.ts          # Lucide icon registry
    │   └── slugify.ts        # URL/anchor slug generation
    ├── pages/                # File-based routes
    │   ├── index.astro       # Landing page
    │   ├── [collection].astro# Generic collection route
    │   └── ai-models/
    │       └── [slug].astro  # Per-model detail page
    ├── scripts/              # Browser-side TS modules
    │   ├── scrollSpy.ts      # Sidebar section highlight
    │   └── theme.ts          # Theme toggle
    └── styles/
        └── global.css        # Tailwind + DaisyUI + custom CSS
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js ≥ 22.12.0** (declared in `package.json#engines`)
- **pnpm** (recommended; lockfile is `pnpm-lock.yaml`)

### Install

```bash
pnpm install
```

### Develop

```bash
pnpm dev          # http://localhost:4321
```

Hot-reloads on file changes; `astro check` runs in the background if you
add `--check`.

### Type-check

```bash
pnpm astro check  # 0 errors / 0 warnings / 0 hints
```

### Build

```bash
pnpm build        # Outputs static site to ./dist
```

This produces a fully static `dist/` tree ready for any static host
(Cloudflare Pages, Netlify, GitHub Pages, etc.). Pagefind indexes are
generated automatically as part of the build.

### Preview

```bash
pnpm preview      # Serves ./dist locally on http://localhost:4321
```

---

## ✏️ Contributing Content

All listings live as plain **YAML** files inside `src/content/`. The
schema is enforced by Zod in `src/content.config.ts` — the build fails
if a YAML file doesn't match.

### Adding an AI model

1. Create `src/content/ai-models/<slug>.yaml` (use `chatgpt.yaml` or
   `llama3.yaml` as a template).
2. Fill in the required fields and any optional ones you want to expose.
3. Save — Astro will hot-reload in dev, or rebuild on `pnpm build`.

### AI-model schema

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `name` | string | ✅ | Display name (e.g. `ChatGPT`) |
| `description` | string | ✅ | 1–2 sentence summary |
| `author` | string | ✅ | Creator / organization |
| `context` | string | ✅ | Context window (e.g. `128k`, `8k`) |
| `format` | string | ✅ | Distribution format (e.g. `API`, `GGUF`, `Safetensors`) |
| `size` | string | ✅ | Model size / param count |
| `license` | string | ✅ | License name (e.g. `MIT`, `Apache 2.0`) |
| `released` | string | — | ISO date or year |
| `baseModel` | string | — | Parent model lineage |
| `nsfw` | `'allowed'` \| `'limited'` \| `'blocked'` | — | Content policy |
| `capabilities` | array of `CapabilityId` | — | See below |
| `settings` | object | — | Recommended sampling parameters |
| `tags` | string[] | — | Free-form labels |
| `notes` | string[] | — | Tip strings (rendered as collapsible) |

### `capabilities` enum

`vision` · `audio` · `video` · `reasoning` · `pdf` · `tools`

Each id maps to a Lucide icon + color in `src/lib/capabilities.ts`.

### Other collections

- **Frontends** → `src/content/frontends/*.yaml` (schema in `content.config.ts`)
- **Tools** → `src/content/tools/*.yaml`
- **Navigation** → `src/content/navigation/*.yaml` (sidebar groups & ordering)

---

## ☁️ Deployment

The site is configured for **Cloudflare Pages** via `wrangler.toml`.

```bash
pnpm build
pnpm wrangler pages deploy dist
```

Custom domain routes (`roleplayaihub.gg`) are configured in `wrangler.toml`.

For any other static host, just upload the contents of `dist/` after
running `pnpm build` — no server-side runtime required.

---

## 📜 License

TBD. All brand names and model names referenced in placeholder data are
the property of their respective owners.
