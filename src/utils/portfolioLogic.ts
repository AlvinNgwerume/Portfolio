import {
  CASE_STUDIES,
  EXPERIENCE_ROWS,
  KPI_METRICS,
  PIPELINE_STEPS,
  PITCH_VARIANTS,
  type ExperienceItem,
  type ItemTrack,
  type PipelineStep,
  type TrackFilter,
} from '../data/portfolioData';

export function matchesTrack(itemTrack: ItemTrack, activeFilter: TrackFilter): boolean {
  if (activeFilter === 'all') {
    return true;
  }
  if (itemTrack === 'both') {
    return true;
  }
  return itemTrack === activeFilter;
}

export function filterByTrack<T extends { track: ItemTrack }>(
  items: readonly T[],
  activeFilter: TrackFilter,
): T[] {
  return items.filter((item) => matchesTrack(item.track, activeFilter));
}

export function getTrackCounts(activeFilter: TrackFilter) {
  return {
    kpis: filterByTrack(KPI_METRICS, activeFilter).length,
    caseStudies: filterByTrack(CASE_STUDIES, activeFilter).length,
    experience: filterByTrack(EXPERIENCE_ROWS, activeFilter).length,
  };
}

export function getPipelineStep(stepId: string): PipelineStep {
  return PIPELINE_STEPS.find((step) => step.id === stepId) ?? PIPELINE_STEPS[0];
}

export function getPitchText(variantId: 'commercial' | 'tech'): string {
  return PITCH_VARIANTS.find((v) => v.id === variantId)?.text ?? '';
}

export function getAdjacentCaseStudyId(
  currentId: string,
  direction: 'prev' | 'next',
  visibleIds: string[],
): string | null {
  if (visibleIds.length === 0) return null;
  const idx = visibleIds.indexOf(currentId);
  if (idx === -1) return visibleIds[0];
  const nextIdx =
    direction === 'next'
      ? (idx + 1) % visibleIds.length
      : (idx - 1 + visibleIds.length) % visibleIds.length;
  return visibleIds[nextIdx];
}

export function toggleStackRow(expandedIds: string[], rowId: string): string[] {
  if (expandedIds.includes(rowId)) {
    return expandedIds.filter((id) => id !== rowId);
  }
  return [...expandedIds, rowId];
}

export function splitExperienceByCategory(items: readonly ExperienceItem[]): {
  career: ExperienceItem[];
  academic: ExperienceItem[];
} {
  return {
    career: items.filter((item) => item.category === 'career'),
    academic: items.filter((item) => item.category === 'academic'),
  };
}

export function computeStackCardMetrics(
  index: number,
  total: number,
): { range: [number, number]; targetScale: number } {
  const safeTotal = Math.max(total, 1);
  const clampedIndex = Math.max(0, Math.min(index, safeTotal - 1));
  const start = safeTotal <= 1 ? 0 : Math.min(0.85, clampedIndex / safeTotal);
  const targetScale =
    safeTotal <= 1 ? 1 : Math.max(0.86, Number((1 - (safeTotal - 1 - clampedIndex) * 0.035).toFixed(3)));
  return {
    range: [Number(start.toFixed(3)), 1],
    targetScale,
  };
}


