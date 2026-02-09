'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heading2, Heading3, BodyText } from '@/components/Typography';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';
import type { TimelinePhase as TimelinePhaseType } from '@/lib/caseStudies/camundaJumpEffect';

interface TimelinePhaseProps {
  phases: TimelinePhaseType[];
}

export default function TimelinePhase({ phases }: TimelinePhaseProps) {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);
  const shouldAnimate = !prefersReducedMotion();

  const currentPhase = phases.find((p) => p.phase === selectedPhase);

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={fastTransition}
      className="max-w-5xl mx-auto"
    >
      <Heading2 className="mb-6 text-center">Development Timeline</Heading2>

      {/* Timeline Navigation */}
      <div className="flex items-center justify-between mb-8 px-2">
        {phases.map((phase, index) => (
          <div key={phase.phase} className="flex-1 flex items-center">
            <button
              onClick={() => setSelectedPhase(phase.phase)}
              className={`flex-1 flex flex-col items-center transition-all ${
                selectedPhase === phase.phase
                  ? 'opacity-100'
                  : 'opacity-40 hover:opacity-70'
              }`}
              aria-pressed={selectedPhase === phase.phase}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-base md:text-lg mb-1 md:mb-2 transition-all ${
                  selectedPhase === phase.phase
                    ? 'bg-accent text-base-dark scale-110 shadow-accent-glow'
                    : 'bg-accent/20 text-accent'
                }`}
              >
                {phase.phase}
              </div>
              <div className="text-[10px] md:text-xs font-medium text-center px-1">
                {phase.title}
              </div>
            </button>
            {index < phases.length - 1 && (
              <div className="flex-1 h-0.5 bg-accent/20 mx-1 md:mx-2" />
            )}
          </div>
        ))}
      </div>

      {/* Phase Content */}
      {currentPhase && (
        <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-accent/5 to-accent-muted/5 border border-accent/20 elevation-2">
          <Heading3 className="text-accent text-base md:text-lg mb-3 md:mb-4">
            Phase {currentPhase.phase}: {currentPhase.title}
          </Heading3>
          <BodyText className="text-xs md:text-sm mb-4">
            {currentPhase.description}
          </BodyText>

          {/* Plugins */}
          <div className="mb-4">
            <div className="text-xs md:text-sm font-semibold mb-2 text-text-light dark:text-text-dark">
              Plugins Developed:
            </div>
            <div className="flex flex-wrap gap-2">
              {currentPhase.plugins.map((plugin) => (
                <div
                  key={plugin}
                  className="px-3 py-1.5 bg-accent/10 dark:bg-accent/20 border border-accent/30 rounded-md text-xs font-medium"
                >
                  {plugin}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <div className="text-xs md:text-sm font-semibold mb-2 text-text-light dark:text-text-dark">
              Key Achievements:
            </div>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-text-light/90 dark:text-text-dark/90">
              {currentPhase.highlights.map((highlight, index) => (
                <li key={index}>• {highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}
