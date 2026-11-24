/**
 * Skiper 16 StickyCard_001 — React + Motion
 * Adapted from @skiper-ui/skiper16 using motion/react (`useScroll`, `useTransform`)
 * with dynamic array-length clamping and sticky offset spacing to ensure smooth,
 * error-free scrolling across variable-length career and academic card stacks.
 */
import { type MotionValue, motion, useScroll, useTransform } from 'motion/react';
import { type ReactNode, useRef } from 'react';
import { computeStackCardMetrics } from '../../utils/portfolioLogic';

export interface StickyCardProps {
  i: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  children: ReactNode;
  testId?: string;
}

export function StickyCard_001({
  i,
  total,
  progress,
  range,
  targetScale,
  children,
  testId,
}: StickyCardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const isLast = i === total - 1;
  const stickyTopOffset = 92 + i * 16;

  return (
    <div
      className={`sticky ${isLast ? 'mb-0' : 'mb-[14vh] sm:mb-[18vh]'}`}
      style={{ top: `${stickyTopOffset}px`, zIndex: i + 1 }}
    >
      <motion.div
        data-testid={testId}
        style={{ scale }}
        className="origin-top will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface Skiper16StackProps<T> {
  items: readonly T[];
  getKey: (item: T) => string;
  renderCard: (item: T, index: number) => ReactNode;
  itemTestId?: string;
  stackLabel: string;
}

export function Skiper16Stack<T>({
  items,
  getKey,
  renderCard,
  itemTestId,
  stackLabel,
}: Skiper16StackProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      aria-label={stackLabel}
      className="relative w-full pb-6 pt-2"
    >
      {items.map((item, index) => {
        const { range, targetScale } = computeStackCardMetrics(index, items.length);
        return (
          <StickyCard_001
            key={getKey(item)}
            i={index}
            total={items.length}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
            testId={itemTestId}
          >
            {renderCard(item, index)}
          </StickyCard_001>
        );
      })}
    </div>
  );
}
