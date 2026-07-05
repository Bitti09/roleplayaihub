/**
 * Convert a string into a URL-safe slug.
 *
 * Used for anchor IDs, sidebar target links, and element IDs across the site.
 * Always lower-case so it matches the home page's anchor links.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

/**
 * Build a stable, URL-safe id from an item's name (used for card headings,
 * modal targets, etc.). Mirrors the existing slug behavior but is a separate
 * helper so the intent is clear at the call site.
 */
export function idFromName(name: string): string {
  return name
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .toLowerCase();
}