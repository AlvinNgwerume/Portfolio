/**
 * Alvin Dzingai Ngwerume — B2B Commercial Growth & GTM Systems Portfolio
 * =====================================================================
 * GITHUB PAGES PUBLISHING INSTRUCTIONS:
 * 1. Customize links/copy in `src/data/portfolioData.ts`.
 * 2. Run `npm run build` to generate the static `dist/` bundle with relative `./` paths.
 * 3. Push to GitHub:
 *      git init && git add . && git commit -m "Initial portfolio release"
 *      git branch -M main && git remote add origin https://github.com/<user>/<repo>.git
 *      git push -u origin main
 * 4. Enable GitHub Pages in Repository Settings -> Pages -> Build and deployment.
 */
import { MotionConfig } from 'motion/react';
import { useMemo, useState } from 'react';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ContactFooter } from './components/ContactFooter';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PlaybookModal } from './components/PlaybookModal';
import { StackAndPipelineSection } from './components/StackAndPipelineSection';
import {
  CASE_STUDIES,
  EXPERIENCE_ROWS,
  KPI_METRICS,
  PIPELINE_STEPS,
  STACK_GROUPS,
  type TrackFilter,
} from './data/portfolioData';
import {
  filterByTrack,
  getAdjacentCaseStudyId,
  getTrackCounts,
  toggleStackRow,
} from './utils/portfolioLogic';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<TrackFilter>('all');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [activePipelineStepId, setActivePipelineStepId] = useState<string>(PIPELINE_STEPS[0].id);
  const [expandedStackIds, setExpandedStackIds] = useState<string[]>([STACK_GROUPS[0].id]);

  const visibleKpis = useMemo(
    () => filterByTrack(KPI_METRICS, activeFilter),
    [activeFilter],
  );
  const visibleCaseStudies = useMemo(
    () => filterByTrack(CASE_STUDIES, activeFilter),
    [activeFilter],
  );
  const visibleExperience = useMemo(
    () => filterByTrack(EXPERIENCE_ROWS, activeFilter),
    [activeFilter],
  );
  const counts = useMemo(() => getTrackCounts(activeFilter), [activeFilter]);

  const activeCaseStudy = useMemo(
    () => CASE_STUDIES.find((cs) => cs.id === selectedCaseStudyId) ?? null,
    [selectedCaseStudyId],
  );

  const handleNavigateCaseStudy = (direction: 'prev' | 'next') => {
    if (!selectedCaseStudyId) return;
    const ids = visibleCaseStudies.map((cs) => cs.id);
    const nextId = getAdjacentCaseStudyId(selectedCaseStudyId, direction, ids);
    if (nextId) {
      setSelectedCaseStudyId(nextId);
    }
  };

  const handleToggleStackRow = (rowId: string) => {
    setExpandedStackIds((prev) => toggleStackRow(prev, rowId));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#121212] text-[#F8FAFC]">
        <Navbar />

        <main>
          <HeroSection
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            visibleKpis={visibleKpis}
            counts={counts}
          />

          <CaseStudiesSection
            caseStudies={visibleCaseStudies}
            activeFilter={activeFilter}
            onSelectCaseStudy={setSelectedCaseStudyId}
          />

          <ExperienceSection
            items={visibleExperience}
            activeFilter={activeFilter}
            onResetFilter={() => setActiveFilter('all')}
          />

          <StackAndPipelineSection
            activeStepId={activePipelineStepId}
            onSelectStep={setActivePipelineStepId}
            expandedStackIds={expandedStackIds}
            onToggleStackRow={handleToggleStackRow}
          />
        </main>

        <ContactFooter />

        <PlaybookModal
          caseStudy={activeCaseStudy}
          onClose={() => setSelectedCaseStudyId(null)}
          onNavigate={handleNavigateCaseStudy}
          canNavigate={visibleCaseStudies.length > 1}
        />
      </div>
    </MotionConfig>
  );
}
