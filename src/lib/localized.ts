import { defaultLocale, locales } from 'intlayer';

/**
 * A user-authored string that may be either a plain string (used for the
 * default locale) or a `locale → text` map. YAML authors typically write:
 *
 * ```yaml
 * description: "Plain English blurb."
 * ```
 *
 * or, for translated content:
 *
 * ```yaml
 * description:
 *   en: "Plain English blurb."
 *   de: "Deutscher Text."
 * ```
 *
 * Plain strings are kept compatible with pre-localization entries so a
 * mix of formats works across the collection during the rollout.
 */
export type LocalizedString = string | Partial<Record<string, string>>;

/**
 * Resolve a `LocalizedString` to a single concrete value for a given locale.
 *
 * Lookup order:
 *   1. The requested locale
 *   2. The project's default locale (usually `en`)
 *   3. The first non-empty entry in iteration order
 *   4. The supplied `fallback`
 *
 * Plain strings are returned as-is so existing YAML keeps working.
 *
 * @param value   The candidate value (string or per-locale map).
 * @param locale  The locale to resolve for (e.g. `"en"` / `"de"`).
 * @param fallback Returned only when nothing usable is found.
 */
export function resolveLocalized(
  value: LocalizedString | undefined | null,
  locale: string,
  fallback: string = '',
): string {
  if (value === undefined || value === null) return fallback;
  if (typeof value === 'string') return value || fallback;

  // 1) requested locale
  const direct = value[locale];
  if (direct) return direct;

  // 2) default locale (cast — intlayer's type widens to a string union)
  const def = value[defaultLocale as string];
  if (def) return def;

  // 3) first non-empty value in iteration order (usually English)
  for (const v of Object.values(value)) {
    if (v) return v;
  }

  return fallback;
}

/**
 * Whether a `LocalizedString` actually contains more than one locale.
 * Useful for components that want to hide a "translation" badge when
 * there's nothing to compare against.
 */
export function isMultilingual(value: LocalizedString | undefined | null): boolean {
  if (!value || typeof value === 'string') return false;
  let count = 0;
  for (const v of Object.values(value)) {
    if (v) {
      count += 1;
      if (count > 1) return true;
    }
  }
  return false;
}

/**
 * Return the locales that the project actually translates this value into.
 * Falls back to the full configured locale list when `value` is a plain
 * string, because by definition a plain string is "available" in every
 * locale (we just display the source text).
 */
export function availableLocalesFor(
  value: LocalizedString | undefined | null,
): readonly string[] {
  if (!value) return locales as readonly string[];
  if (typeof value === 'string') return locales as readonly string[];
  return Object.keys(value);
}