import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/**
 * A string that may be either a plain value (used for the default locale)
 * or a `{ locale: text }` map. See `src/lib/localized.ts` for the
 * runtime resolver and rationale.
 */
const localizedStringSchema = z.union([
  z.string(),
  z.record(z.string(), z.string()),
]);

export type LocalizedString = z.infer<typeof localizedStringSchema>;

const settingsSchema = z
  .object({
    min_p: z.number().optional(),
    rep_pen: z.number().optional(),
    top_p: z.number().optional(),
    top_k: z.number().optional(),
    presence_penalty: z.number().optional(),
    frequency_penalty: z.number().optional(),
  })
  .optional();

/**
 * Pricing schema for AI models.
 *
 * A model can be served by **one or more providers** (e.g. an open-weight
 * checkpoint on Hugging Face *and* an OpenAI-compatible API endpoint) and
 * each provider may charge differently across modalities. We model
 * `price` as an array of providers; each provider in turn has an array
 * of `pricing` entries discriminated by `type`.
 *
 * Conventions:
 *   - `text` / `embedding` prices are **per 1k tokens** (default USD).
 *   - `image` prices are **per generated image**.
 *   - `audio` prices use `perSecond` (TTS) or `perMinute` (STT).
 *   - `video` prices are **per second** of generated video.
 *   - `free` means no usage charge (e.g. self-hosted open weights).
 *
 * Currency can be overridden per line item so a regional provider can
 * bill in EUR without forcing every sibling entry to follow.
 */
const priceCurrency = z.enum(['USD', 'EUR']).default('USD');

/** LLM-style per-1k-token pricing. */
const textPrice = z.object({
  type: z.literal('text'),
  currency: priceCurrency,
  input: z.number().nonnegative(),
  output: z.number().nonnegative(),
  cachedInput: z.number().nonnegative().optional(),
});

/** Per-image generation cost. */
const imagePrice = z.object({
  type: z.literal('image'),
  currency: priceCurrency,
  perImage: z.number().nonnegative(),
});

/**
 * Audio pricing - STT typically bills per minute, TTS per second, and
 * some providers bill per 1k tokens. Any combination of these keys is
 * allowed; the YAML author picks whichever the provider actually uses.
 */
const audioPrice = z.object({
  type: z.literal('audio'),
  currency: priceCurrency,
  perSecond: z.number().nonnegative().optional(),
  perMinute: z.number().nonnegative().optional(),
  input: z.number().nonnegative().optional(),
  output: z.number().nonnegative().optional(),
});

/**
 * Video generation pricing. `perSecond` is required; `perMinute` may be
 * supplied as an alternative bucket for providers that round up to whole
 * minutes.
 */
const videoPrice = z.object({
  type: z.literal('video'),
  currency: priceCurrency,
  perSecond: z.number().nonnegative(),
  perMinute: z.number().nonnegative().optional(),
});

/** Embedding-model pricing - input tokens only (no output tokens). */
const embeddingPrice = z.object({
  type: z.literal('embedding'),
  currency: priceCurrency,
  input: z.number().nonnegative(),
});

/** Self-hosted / free tier - no monetary charge. */
const freePrice = z.object({
  type: z.literal('free'),
  currency: priceCurrency,
  notes: z.string().optional(),
});

/** Single priced line item under a provider. */
const priceSchema = z.discriminatedUnion('type', [
  textPrice,
  imagePrice,
  audioPrice,
  videoPrice,
  embeddingPrice,
  freePrice,
]);

/**
 * A provider is a host/platform that exposes the model behind its own
 * pricing. `pricing` must contain at least one line item, but the
 * `pricing` array may be omitted entirely to indicate the provider is
 * available without published pricing.
 */
const providerSchema = z.object({
  provider: z.string(),
  url: z.url().optional(),
  notes: z.string().optional(),
  pricing: z.array(priceSchema).min(1).optional(),
});

/** Optional at the model level - not every model has public pricing. */
const modelPricesSchema = z.array(providerSchema).optional();

const modelArtifactSchema = z.object({
  format: z.string(),
  size: z.string(),
  source: z.enum(['api', 'self-hosted']).optional(),
  repository: z.url().optional(),
  quantizations: z.array(z.string()).optional().default([]),
});

const modelArtifactsSchema = z.array(modelArtifactSchema).min(1);

const resourceSchema = z.object({
  name: z.string(),
  description: localizedStringSchema,
  url: z.url().optional(),
  category: z.string(),
  subcategory: z.string(),
  tags: z.array(z.string()).optional().default([]),
  icon: z.string().optional().default('globe'),
  featured: z.boolean().optional().default(false),
});

/**
 * The fixed vocabulary of capabilities a model can advertise.
 * Drives both validation (Zod) and rendering (icons + colors).
 */
export const CAPABILITY_IDS = [
  'Vision',
  'Audio Input',
  'Video Input',
  'Reasoning',
  'PDF Upload',
  'Tool Calling',
] as const;

export type CapabilityId = (typeof CAPABILITY_IDS)[number];

const modelSchema = z.object({
  name: z.string(),
  author: z.string().optional().default('Unknown'),
  released: z.string().optional(),
  artifacts: modelArtifactsSchema,
  description: localizedStringSchema,
  added_at: z.string().optional(),
  last_verified_at: z.string().optional(),
  verification_note: z.string().optional(),
  context: z.string().optional().default('8k'),
  temperature: z.number().optional(),
  settings: settingsSchema,
  baseModel: z.string().optional(),
  base: z.boolean().optional().default(false),
  nsfw: z.enum(['allowed', 'limited', 'blocked']).optional().default('blocked'),
  license: z.string().optional().default('Open Weight'),
  notes: localizedStringSchema.optional(),
  url: z.url().optional(),
  category: z.string(),
  subcategory: z.string(),
  tags: z.array(z.string()).optional().default([]),
  capabilities: z.array(z.enum(CAPABILITY_IDS)).optional().default([]),
  icon: z.string().optional().default('brain'),
  featured: z.boolean().optional().default(false),
  price: modelPricesSchema,
});

const navigationSchema = z.object({
  title: localizedStringSchema,
  categories: z.array(
    z.object({
      name: localizedStringSchema,
      subcategories: z.array(localizedStringSchema),
    }),
  ),
});

/** Inferred shape of an entry's `data` for each content collection. */
export type ResourceData = z.infer<typeof resourceSchema>;
export type ModelData = z.infer<typeof modelSchema>;
export type NavigationData = z.infer<typeof navigationSchema>;
export type SettingsData = NonNullable<z.infer<typeof settingsSchema>>;
export type Price = z.infer<typeof priceSchema>;
export type Provider = z.infer<typeof providerSchema>;

export const collections = {
  'ai-models': defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/ai-models' }),
    schema: modelSchema,
  }),
  frontends: defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/frontends' }),
    schema: resourceSchema,
  }),
  tools: defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/tools' }),
    schema: resourceSchema,
  }),
  navigation: defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/navigation' }),
    schema: navigationSchema,
  }),
};