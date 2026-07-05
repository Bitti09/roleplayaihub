/**
 * Shared Tailwind color palette used by category cards, sidebar links, and
 * collection icons. Centralized so the visual style stays consistent and a
 * change to the palette only needs to happen in one place.
 */
export const COLOR_PALETTE = [
  'text-pink-500 bg-pink-500/10 border-pink-500/20',
  'text-blue-500 bg-blue-500/10 border-blue-500/20',
  'text-purple-500 bg-purple-500/10 border-purple-500/20',
  'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  'text-amber-500 bg-amber-500/10 border-amber-500/20',
  'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
  'text-rose-500 bg-rose-500/10 border-rose-500/20',
  'text-violet-500 bg-violet-500/10 border-violet-500/20',
  'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
  'text-teal-500 bg-teal-500/10 border-teal-500/20',
] as const;

export type ColorClass = (typeof COLOR_PALETTE)[number];

/**
 * Deterministically pick a palette entry for a given string (e.g. a card's
 * name). Uses a simple char-code sum so it stays stable across renders.
 */
export function colorForName(name: string): ColorClass {
  const sum = name
    .split('')
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return COLOR_PALETTE[sum % COLOR_PALETTE.length];
}

/** Default header icon gradient used on collection pages. */
export const HEADER_ICON_GRADIENT =
  'bg-gradient-to-tr from-pink-500/10 to-purple-500/10 border-pink-500/20 text-pink-400';