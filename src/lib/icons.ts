import {
  MessageSquare,
  Brain,
  Bot,
  Image,
  Mic,
  Globe,
  Laptop,
  Terminal,
  User,
  Server,
  Settings,
  Shield,
  Database,
  Layers,
  BookOpen,
  Compass,
  LayoutDashboard,
} from '@lucide/astro';

/**
 * Lucide ships Astro components for each icon; rather than chasing their
 * internal prop types we treat them as `any` here so consumers don't need
 * to know about the upstream component signature.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = any;

/**
 * Map of icon names (used in YAML / frontmatter) to Lucide components.
 * Default: Globe (used by the basic `Card` component).
 */
export const CARD_ICONS: Record<string, IconComponent> = {
  'message-square': MessageSquare,
  brain: Brain,
  bot: Bot,
  image: Image,
  mic: Mic,
  globe: Globe,
  laptop: Laptop,
  terminal: Terminal,
  user: User,
  server: Server,
  settings: Settings,
  shield: Shield,
  database: Database,
  'layout-dashboard': LayoutDashboard,
};

export { Globe };

/** Resolve an icon component by name, falling back to Globe. */
export function resolveIcon(name?: string): IconComponent {
  if (!name) return Globe;
  return CARD_ICONS[name] ?? Globe;
}

/**
 * Icons used on the collection index pages (one per collection slug).
 * The `tools` collection intentionally reuses Compass as a generic
 * fallback; you can swap it here if you want a dedicated icon later.
 */
export const COLLECTION_ICONS: Record<string, IconComponent> = {
  'ai-models': Layers,
  frontends: BookOpen,
  tools: Compass,
};