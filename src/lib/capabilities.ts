import { Image, Mic, Video, Brain, FileText, Wrench } from '@lucide/astro';
import type { IconComponent } from './icons';

export type { CapabilityId } from '../content.config';

/**
 * Visual definition for a single capability: icon, label, color.
 * `color` is a Tailwind text class so Lucide's `currentColor` picks it up.
 */
export interface CapabilityDef {
  label: string;
  icon: IconComponent;
  color: string;
}

/**
 * Single source of truth for capability rendering.
 * The id keys here must match `CAPABILITY_IDS` in `content.config.ts`.
 */
export const CAPABILITIES: Record<string, CapabilityDef> = {
  Vision:       { icon: Image,    color: 'text-teal-400',    label: 'Vision' },
  'Audio Input': { icon: Mic,      color: 'text-purple-400',  label: 'Audio Input' },
  'Video Input': { icon: Video,    color: 'text-rose-400',    label: 'Video Input' },
  Reasoning:    { icon: Brain,    color: 'text-amber-400',   label: 'Reasoning' },
  'PDF Upload': { icon: FileText, color: 'text-blue-400',    label: 'PDF Upload' },
  'Tool Calling': { icon: Wrench,  color: 'text-orange-400',  label: 'Tool Calling' },
};

/**
 * Display order (capabilities without a position here are appended).
 */
export const CAPABILITY_ORDER = [
  'Vision',
  'Audio Input',
  'Video Input',
  'Reasoning',
  'PDF Upload',
  'Tool Calling',
] as const;

/**
 * Look up a capability by id, falling back to a sensible default if the YAML
 * contains a value we don't recognize (e.g. schema evolution).
 */
export function getCapability(id: string): CapabilityDef | undefined {
  return CAPABILITIES[id];
}

/**
 * Filter the raw YAML list to known capabilities and preserve the canonical
 * display order. Unknown values are silently dropped.
 */
export function normalizeCapabilities(
  ids: readonly string[],
): Array<keyof typeof CAPABILITIES> {
  const known = ids.filter((id): id is keyof typeof CAPABILITIES =>
    Object.prototype.hasOwnProperty.call(CAPABILITIES, id),
  );
  const ordered = CAPABILITY_ORDER.filter((id) => known.includes(id));
  const extras = known.filter((id) => !(CAPABILITY_ORDER as readonly string[]).includes(id));
  return [...ordered, ...extras];
}