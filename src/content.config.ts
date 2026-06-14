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
    schema: resourceSchema,
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
