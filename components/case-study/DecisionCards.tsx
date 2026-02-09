'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heading3, BodyText } from '@/components/Typography';
import { fastTransition, prefersReducedMotion, staggerContainer, staggerItem } from '@/lib/animations';
import { camundaJumpEffectContent } from '@/lib/caseStudies/camundaJumpEffect';

export default function DecisionCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  const shouldAnimate = !prefersReducedMotion();
  const { keyDecisions } = camundaJumpEffectContent;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={shouldAnimate ? staggerContainer : {}}
      className="my-16"
    >
      <Heading3 className="mb-6 text-center">Key Decisions</Heading3>
      <div className="max-w-2xl mx-auto space-y-2">
        {keyDecisions.map((decision, index) => (
          <motion.div
            key={index}
            variants={shouldAnimate ? staggerItem : {}}
            className="border-l-4 border-accent/40 bg-accent/5 dark:bg-accent/10 rounded-r-lg elevation-2 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 hover:bg-accent/15 dark:hover:bg-accent/20 group hover:translate-x-1 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-r-lg"
              aria-expanded={expandedIndex === index}
            >
              <span className="text-small font-semibold text-text-light dark:text-text-dark group-hover:text-accent transition-colors duration-300">
                {decision.title}
              </span>
              <motion.svg
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={fastTransition}
                className="w-4 h-4 shrink-0 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={fastTransition}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 pt-0 space-y-3 border-t border-accent/10 dark:border-accent/20 mt-0">
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">Why</span>
                      <BodyText className="text-small text-text-light/80 dark:text-text-dark/80 mt-1">
                        {decision.why}
                      </BodyText>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-text-light/60 dark:text-text-dark/60 uppercase tracking-wide">Trade-off</span>
                      <BodyText className="text-small text-text-light/70 dark:text-text-dark/70 italic mt-1">
                        {decision.tradeOff}
                      </BodyText>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-xs text-text-light/50 dark:text-text-dark/50 mt-3">
        Click a decision to expand
      </p>
    </motion.div>
  );
}
