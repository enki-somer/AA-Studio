'use client';

import { Heading1, BodyText, InlineCode } from '@/components/Typography';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';
import { camundaJumpEffectContent } from '@/lib/caseStudies/camundaJumpEffect';

export default function CaseStudyHero() {
  const { hero, facts } = camundaJumpEffectContent;
  const shouldAnimate = !prefersReducedMotion();

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1 }}
      transition={fastTransition}
      className="mb-16"
    >
      <Heading1 className="mb-4">{hero.title}</Heading1>
      <BodyText className="text-lg md:text-xl text-text-light/70 dark:text-text-dark/70 mb-8 max-w-4xl">
        {hero.subhead}
      </BodyText>

      {/* Impact Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
        {hero.impactMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : { opacity: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...fastTransition, delay: shouldAnimate ? index * 0.05 : 0 }}
            className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-accent/10 to-accent-muted/10 border border-accent/30 flex flex-col items-center justify-center text-center min-h-[100px] md:min-h-[120px]"
          >
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
              {metric.value}
            </div>
            <div className="text-xs text-text-light/70 dark:text-text-dark/70">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Facts Row */}
      <div className="flex flex-wrap gap-4 text-small text-text-light/60 dark:text-text-dark/60">
        <div className="flex items-center gap-2">
          <span className="font-semibold">PR:</span>
          <InlineCode>#{facts.prNumber}</InlineCode>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Repo:</span>
          <InlineCode>{facts.repo}</InlineCode>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Plugins:</span>
          <span>{facts.totalPlugins}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Code:</span>
          <span>{facts.linesOfCode} lines</span>
        </div>
      </div>
    </motion.div>
  );
}
