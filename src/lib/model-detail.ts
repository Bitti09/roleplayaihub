import type { ModelData, Provider } from '../content.config';
import { resolveLocalized } from './localized';

type Stat = {
  label: string;
  value: string;
  tone?: string;
  description?: string;
  labelClass?: string;
  valueClass?: string;
};
type NsfwTier = NonNullable<ModelData['nsfw']>;
type Cell = string | null;

export type PricingRow = {
  name: string;
  url: string | null;
  notes: string | null;
  isFree: boolean;
  textInput: Cell;
  textOutput: Cell;
  cachedInput: Cell;
  image: Cell;
  audioPerSec: Cell;
  audioPerMin: Cell;
  videoPerSec: Cell;
  videoPerMin: Cell;
  embedding: Cell;
};

type PricingColumns = {
  textInput: boolean;
  textOutput: boolean;
  cachedInput: boolean;
  image: boolean;
  audioPerSec: boolean;
  audioPerMin: boolean;
  videoPerSec: boolean;
  videoPerMin: boolean;
  embedding: boolean;
};

type ModelDetailDictionary = {
  nsfwBlockedDescription: string;
  nsfwLimitedDescription: string;
  nsfwAllowedDescription: string;
  nsfwBlocked: string;
  nsfwLimited: string;
  nsfwAllowed: string;
  statContextWindow: string;
  statFormat: string;
  statSize: string;
  statLicense: string;
  statContentPolicy: string;
  statBaseModel: string;
  statReleased: string;
  statAuthor: string;
  statQuantizations: string;
  metaAddedAt: string;
  metaLastVerifiedAt: string;
  metaVerificationNote: string;
  pricingProviderSingular: string;
  pricingProviderPlural: string;
};

export interface ModelDetailViewData {
  localizedDescription: string;
  localizedNotes: string;
  stats: Stat[];
  settings: ModelData['settings'];
  temperature: ModelData['temperature'];
  hasSettings: boolean;
  rows: PricingRow[];
  show: PricingColumns;
  hasAnyNotes: boolean;
  hasPricing: boolean;
  providerCountLabel: string;
  metadata: Stat[];
  hasMetadata: boolean;
}

function fmt(n: number, c: 'USD' | 'EUR'): string {
  return (c === 'EUR' ? '€' : '$') + n.toFixed(4);
}

function normalizeProvider(p: Provider): PricingRow {
  const row: PricingRow = {
    name: p.provider,
    url: p.url ?? null,
    notes: p.notes ?? null,
    isFree: false,
    textInput: null,
    textOutput: null,
    cachedInput: null,
    image: null,
    audioPerSec: null,
    audioPerMin: null,
    videoPerSec: null,
    videoPerMin: null,
    embedding: null,
  };

  let hasPaid = false;
  for (const line of p.pricing ?? []) {
    switch (line.type) {
      case 'text':
        hasPaid = true;
        row.textInput = fmt(line.input, line.currency);
        row.textOutput = fmt(line.output, line.currency);
        if (line.cachedInput !== undefined) {
          row.cachedInput = fmt(line.cachedInput, line.currency);
        }
        break;
      case 'image':
        hasPaid = true;
        row.image = fmt(line.perImage, line.currency);
        break;
      case 'audio':
        hasPaid = true;
        if (line.perSecond !== undefined) row.audioPerSec = fmt(line.perSecond, line.currency);
        if (line.perMinute !== undefined) row.audioPerMin = fmt(line.perMinute, line.currency);
        break;
      case 'video':
        hasPaid = true;
        row.videoPerSec = fmt(line.perSecond, line.currency);
        if (line.perMinute !== undefined) row.videoPerMin = fmt(line.perMinute, line.currency);
        break;
      case 'embedding':
        hasPaid = true;
        row.embedding = fmt(line.input, line.currency);
        break;
      case 'free':
        break;
    }
  }

  row.isFree = !hasPaid;
  return row;
}

export function buildModelDetailViewData(
  data: ModelData,
  locale: string,
  detail: ModelDetailDictionary,
): ModelDetailViewData {
  const primaryArtifact = data.artifacts[0];
  const artifactFormat = primaryArtifact?.format ?? '—';
  const artifactSize = primaryArtifact?.size ?? '—';

  const localizedDescription = resolveLocalized(data.description, locale);
  const localizedNotes = resolveLocalized(data.notes, locale);

  const nsfwTone: Record<NsfwTier, string> = {
    allowed: 'text-emerald-400',
    limited: 'text-amber-400',
    blocked: 'text-red-400',
  };

  const nsfwDescription: Record<NsfwTier, string> = {
    blocked: detail.nsfwBlockedDescription,
    limited: detail.nsfwLimitedDescription,
    allowed: detail.nsfwAllowedDescription,
  };

  const nsfwLabels: Record<NsfwTier, string> = {
    blocked: detail.nsfwBlocked,
    limited: detail.nsfwLimited,
    allowed: detail.nsfwAllowed,
  };

  const nsfwValue: NsfwTier = data.nsfw ?? 'blocked';
  const nsfwLabel = nsfwLabels[nsfwValue];
  const quantLabel = detail.statQuantizations?.trim() || 'Quants';
  const quantizations = Array.from(
    new Set(data.artifacts.flatMap((artifact) => artifact.quantizations ?? [])),
  );

  const stats: Stat[] = [
    { label: detail.statContextWindow, value: data.context },
    { label: detail.statFormat, value: artifactFormat },
    { label: detail.statSize, value: artifactSize },
    { label: detail.statLicense, value: data.license },
    {
      label: detail.statContentPolicy,
      value: nsfwLabel,
      tone: nsfwTone[nsfwValue],
      description: nsfwDescription[nsfwValue],
    },
    { label: detail.statBaseModel, value: data.baseModel ?? '—' },
    { label: detail.statReleased, value: data.released ?? '—' },
    {
      label: quantLabel,
      labelClass: 'text-[11px] font-bold uppercase tracking-wider text-base-content/70',
      value: quantizations.length > 0 ? quantizations.join(' / ') : '—',
      valueClass: 'text-xs sm:text-sm font-mono leading-relaxed whitespace-normal break-words',
    },
  ].filter((s) => s.value && s.value !== '—');

  const settings = data.settings;
  const temperature = data.temperature;
  const hasSettings =
    temperature !== undefined ||
    (settings !== undefined && Object.values(settings).some((v) => v !== undefined));

  const providers: Provider[] = data.price ?? [];
  const rows: PricingRow[] = providers.map(normalizeProvider);
  const hasPricing = rows.length > 0;

  const show: PricingColumns = {
    textInput: rows.some((r) => r.textInput !== null),
    textOutput: rows.some((r) => r.textOutput !== null),
    cachedInput: rows.some((r) => r.cachedInput !== null),
    image: rows.some((r) => r.image !== null),
    audioPerSec: rows.some((r) => r.audioPerSec !== null),
    audioPerMin: rows.some((r) => r.audioPerMin !== null),
    videoPerSec: rows.some((r) => r.videoPerSec !== null),
    videoPerMin: rows.some((r) => r.videoPerMin !== null),
    embedding: rows.some((r) => r.embedding !== null),
  };

  const hasAnyNotes = rows.some((r) => r.notes !== null);
  const providerCountLabel =
    rows.length === 1
      ? detail.pricingProviderSingular
      : detail.pricingProviderPlural.replace('{count}', String(rows.length));

  const metadata: Stat[] = [
    { label: detail.metaAddedAt, value: data.added_at ?? '—' },
    { label: detail.metaLastVerifiedAt, value: data.last_verified_at ?? '—' },
    { label: detail.metaVerificationNote, value: data.verification_note ?? '—' },
  ].filter((item) => item.value && item.value !== '—');

  return {
    localizedDescription,
    localizedNotes,
    stats,
    settings,
    temperature,
    hasSettings,
    rows,
    show,
    hasAnyNotes,
    hasPricing,
    providerCountLabel,
    metadata,
    hasMetadata: metadata.length > 0,
  };
}