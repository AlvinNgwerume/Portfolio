import assert from 'node:assert/strict';
import test from 'node:test';
import { CASE_STUDIES, EXPERIENCE_ROWS, KPI_METRICS } from '../data/portfolioData';
import {
  computeStackCardMetrics,
  filterByTrack,
  getAdjacentCaseStudyId,
  getPipelineStep,
  getPitchText,
  getTrackCounts,
  matchesTrack,
  splitExperienceByCategory,
  toggleStackRow,
} from './portfolioLogic';

const PROHIBITED_WORDS = [
  'revolutionize',
  'cutting-edge',
  'game-changer',
  'empower',
  'seamlessly',
  'delve',
  'tapestry',
  'unleash',
  'synergy',
  'world-class',
  'innovative solutions',
  'next-level',
  'unlock potential',
];

test('matchesTrack returns expected results for all, commercial, and tech tracks', () => {
  assert.equal(matchesTrack('commercial', 'all'), true);
  assert.equal(matchesTrack('tech', 'all'), true);
  assert.equal(matchesTrack('both', 'all'), true);

  assert.equal(matchesTrack('commercial', 'commercial'), true);
  assert.equal(matchesTrack('both', 'commercial'), true);
  assert.equal(matchesTrack('tech', 'commercial'), false);

  assert.equal(matchesTrack('tech', 'tech'), true);
  assert.equal(matchesTrack('both', 'tech'), true);
  assert.equal(matchesTrack('commercial', 'tech'), false);
});

test('filterByTrack and getTrackCounts stay synchronized across all views', () => {
  const allCounts = getTrackCounts('all');
  assert.equal(allCounts.kpis, 4);
  assert.equal(allCounts.caseStudies, 3);
  assert.equal(allCounts.experience, 10);

  const commercialCounts = getTrackCounts('commercial');
  assert.equal(commercialCounts.kpis, 4); // 2 commercial + 2 both
  assert.equal(commercialCounts.caseStudies, 2); // Playbook 1 (commercial) + Playbook 2 (both)
  assert.equal(commercialCounts.experience, 8); // 5 career + 3 both-track academic (GIBS, Stellenbosch, UCT)

  const techCounts = getTrackCounts('tech');
  assert.equal(techCounts.kpis, 2); // 2 both
  assert.equal(techCounts.caseStudies, 2); // Playbook 2 (both) + Playbook 3 (tech)
  assert.equal(techCounts.experience, 8); // askOsca, BlinkOps, TASK (both) + 5 academic (2 tech + 3 both)

  assert.equal(filterByTrack(KPI_METRICS, 'tech').length, techCounts.kpis);
  assert.equal(filterByTrack(CASE_STUDIES, 'commercial').length, commercialCounts.caseStudies);
  assert.equal(filterByTrack(EXPERIENCE_ROWS, 'all').length, allCounts.experience);
});

test('getPipelineStep resolves valid IDs and safely falls back to step 01', () => {
  assert.equal(getPipelineStep('step-02').shortTitle, 'AI Research & Qualification');
  assert.equal(getPipelineStep('step-04').stepNumber, '04');
  assert.equal(getPipelineStep('unknown-step').id, 'step-01');
});

test('getAdjacentCaseStudyId cycles cleanly across visible playbooks', () => {
  const ids = ['cs-1', 'cs-2', 'cs-3'];
  assert.equal(getAdjacentCaseStudyId('cs-1', 'next', ids), 'cs-2');
  assert.equal(getAdjacentCaseStudyId('cs-3', 'next', ids), 'cs-1');
  assert.equal(getAdjacentCaseStudyId('cs-1', 'prev', ids), 'cs-3');
  assert.equal(getAdjacentCaseStudyId('cs-1', 'next', []), null);
});

test('pitch copy and portfolio copy avoid prohibited marketing buzzwords', () => {
  const commercialPitch = getPitchText('commercial');
  const techPitch = getPitchText('tech');
  assert.ok(commercialPitch.includes('$800k+'));
  assert.ok(techPitch.includes('Make.com'));

  const corpus = [
    commercialPitch,
    techPitch,
    ...CASE_STUDIES.flatMap((c) => [c.title, c.challenge, c.system, c.outcome]),
    ...EXPERIENCE_ROWS.flatMap((e) => [
      e.role,
      e.organization,
      e.trackLabel,
      e.summary,
      e.impactHighlight,
    ]),
  ]
    .join(' ')
    .toLowerCase();

  for (const word of PROHIBITED_WORDS) {
    assert.equal(
      corpus.includes(word),
      false,
      `Found prohibited buzzword "${word}" in portfolio copy`,
    );
  }
});

test('toggleStackRow expands and collapses capability stack rows cleanly', () => {
  const initial = ['stack-crm'];
  const added = toggleStackRow(initial, 'stack-ai');
  assert.deepEqual(added, ['stack-crm', 'stack-ai']);
  const removed = toggleStackRow(added, 'stack-crm');
  assert.deepEqual(removed, ['stack-ai']);
});

test('splitExperienceByCategory cleanly separates career and academic milestones', () => {
  const { career, academic } = splitExperienceByCategory(EXPERIENCE_ROWS);
  assert.equal(career.length, 5);
  assert.equal(academic.length, 5);
  assert.deepEqual(
    academic.map((item) => item.id),
    ['edu-bsc-ai', 'edu-cambridge-spark', 'edu-gibs', 'edu-stellenbosch', 'edu-uct'],
  );
  assert.ok(career.every((item) => item.category === 'career'));
  assert.ok(academic.every((item) => item.category === 'academic'));
});

test('computeStackCardMetrics produces valid monotonic ranges and bounded target scales', () => {
  const single = computeStackCardMetrics(0, 1);
  assert.deepEqual(single.range, [0, 1]);
  assert.equal(single.targetScale, 1);

  for (let total = 2; total <= 6; total++) {
    for (let i = 0; i < total; i++) {
      const { range, targetScale } = computeStackCardMetrics(i, total);
      assert.ok(range[0] >= 0 && range[0] < range[1] && range[1] <= 1);
      assert.ok(targetScale >= 0.86 && targetScale <= 1);
    }
  }
});


