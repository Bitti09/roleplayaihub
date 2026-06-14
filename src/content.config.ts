import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resourceSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().url().optional(),
  category: z.string(),
  subcategory: z.string(),
  tags: z.array(z.string()).optional().default([]),
  icon: z.string().optional().default('globe'),
  featured: z.boolean().optional().default(false),
});

const modelSchema = z.object({
  name: z.string(),
  author: z.string().optional().default('Unknown'),
  released: z.string().optional(),
  format: z.string().optional().default('GGUF'),
  size: z.string().optional().default('Unknown'),
  description: z.string(),
  context: z.string().optional().default('8k'),
  temperature: z.number().optional(),
  settings: z.object({
    min_p: z.number().optional(),
    rep_pen: z.number().optional(),
    top_p: z.number().optional(),
    top_k: z.number().optional(),
    presence_penalty: z.number().optional(),
    frequency_penalty: z.number().optional(),
  }).optional(),
  baseModel: z.string().optional(),
  base: z.boolean().optional().default(false),
  nsfw: z.enum(['yes', 'limited', 'no']).optional().default('no'),
  license: z.string().optional().default('Open Weight'),
  notes: z.string().optional(),
  url: z.string().url().optional(),
  category: z.string(),
  subcategory: z.string(),
  tags: z.array(z.string()).optional().default([]),
  icon: z.string().optional().default('brain'),
  featured: z.boolean().optional().default(false),
});

const navigationSchema = z.object({
  title: z.string(),
  categories: z.array(z.object({
    name: z.string(),
    subcategories: z.array(z.string())
  }))
});

export const collections = {
  'ai-models': defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/content/ai-models" }),
    schema: modelSchema,
  }),
  'frontends': defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/content/frontends" }),
    schema: resourceSchema,
  }),
  'tools': defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/content/tools" }),
    schema: resourceSchema,
  }),
  'navigation': defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/content/navigation" }),
    schema: navigationSchema,
  })
};
