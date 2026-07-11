import { slugify } from './slugify';
import { resolveLocalized } from './localized';
import type { NavigationData } from '../content.config';
import type { ContentItem } from './collections';

export interface StructuredSubcategory {
  name: string;
  slug: string;
  items: ContentItem[];
}

export interface StructuredCategory {
  name: string;
  slug: string;
  subcategories: StructuredSubcategory[];
}

function keyFor(category: string, subcategory: string): string {
  return `${category}\u0000${subcategory}`;
}

function buildItemIndex(items: ContentItem[]): Map<string, ContentItem[]> {
  const index = new Map<string, ContentItem[]>();
  for (const item of items) {
    const key = keyFor(item.data.category, item.data.subcategory);
    const bucket = index.get(key);
    if (bucket) {
      bucket.push(item);
    } else {
      index.set(key, [item]);
    }
  }
  return index;
}

export function buildStructuredCollectionData(
  navigation: NavigationData,
  items: ContentItem[],
  locale: string,
  defaultLocale: string,
): StructuredCategory[] {
  const index = buildItemIndex(items);

  return navigation.categories.map((cat) => {
    const localizedCatName = resolveLocalized(cat.name, locale);
    const defaultCatName = resolveLocalized(cat.name, defaultLocale);

    return {
      name: localizedCatName,
      slug: slugify(localizedCatName),
      subcategories: cat.subcategories.map((sub) => {
        const localizedSub = resolveLocalized(sub, locale);
        const defaultSub = resolveLocalized(sub, defaultLocale);
        const key = keyFor(defaultCatName, defaultSub);

        return {
          name: localizedSub,
          slug: slugify(`${localizedCatName}-${localizedSub}`),
          items: index.get(key) ?? [],
        };
      }),
    };
  });
}