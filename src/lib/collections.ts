import type { CollectionEntry, CollectionKey } from 'astro:content';
import { getCollection } from 'astro:content';

import { COLLECTION_ICONS, Globe, type IconComponent } from './icons';

/**
 * The "content-bearing" collections we surface on their own index pages.
 * Order here also controls the order the routes appear in navigation, etc.
 *
 * NOTE: `navigation` is intentionally excluded — it's a config collection,
 * not a content collection the user browses.
 */
export const CONTENT_COLLECTIONS = [
  'ai-models',
  'frontends',
  'tools',
] as const satisfies readonly CollectionKey[];

export type ContentCollection = (typeof CONTENT_COLLECTIONS)[number];

/** Default fallback icon for a collection. */
export const FALLBACK_COLLECTION_ICON: IconComponent = Globe;

/** Resolve the icon component for a given collection slug. */
export function getCollectionIcon(collection: string): IconComponent {
  return COLLECTION_ICONS[collection] ?? FALLBACK_COLLECTION_ICON;
}

/**
 * Items returned by `getCollection()` for any content collection we manage.
 * Use this instead of hand-rolled union types when iterating items.
 */
export type ContentItem =
  | CollectionEntry<'ai-models'>
  | CollectionEntry<'frontends'>
  | CollectionEntry<'tools'>;

/** Convenience type guard. */
export function isContentCollection(value: string): value is ContentCollection {
  return (CONTENT_COLLECTIONS as readonly string[]).includes(value);
}

/**
 * Fetch a content collection's items with proper typing.
 *
 * Generic over the collection name so the returned array is narrowed to
 * that collection's entry type — letting callers pass `item.data` directly
 * to a typed component without further casts.
 *
 * Returns an empty array for unknown collections.
 */
export async function fetchCollection<C extends ContentCollection>(
  collection: C,
): Promise<CollectionEntry<C>[]> {
  return getCollection(collection);
}