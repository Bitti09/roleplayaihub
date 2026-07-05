import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

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

const resourceSchema = z.object({
  name: z.string(),
  description: z.string(),
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
  format: z.string().optional().default('GGUF'),
  size: z.string().optional().default('Unknown'),
  description: z.string(),
  context: z.string().optional().default('8k'),
  temperature: z.number().optional(),
  settings: settingsSchema,
  baseModel: z.string().optional(),
  base: z.boolean().optional().default(false),
  nsfw: z.enum(['allowed', 'limited', 'blocked']).optional().default('blocked'),
  license: z.string().optional().default('Open Weight'),
  notes: z.string().optional(),
  url: z.url().optional(),
  category: z.string(),
  subcategory: z.string(),
  tags: z.array(z.string()).optional().default([]),
  capabilities: z.array(z.enum(CAPABILITY_IDS)).optional().default([]),
  icon: z.string().optional().default('brain'),
  featured: z.boolean().optional().default(false),
});

const navigationSchema = z.object({
  title: z.string(),
  categories: z.array(
    z.object({
      name: z.string(),
      subcategories: z.array(z.string()),
    }),
  ),
});

/** Inferred shape of an entry's `data` for each content collection. */
export type ResourceData = z.infer<typeof resourceSchema>;
export type ModelData = z.infer<typeof modelSchema>;
export type NavigationData = z.infer<typeof navigationSchema>;
export type SettingsData = NonNullable<z.infer<typeof settingsSchema>>;

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