'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { prefersReducedMotion, fastTransition } from '@/lib/animations';
import JsonVisual from './JsonVisual';

interface StickyVisualStageProps {
  activeStep: number;
  steps: {
    id: string;
    jsonPath: string;
    alt: string;
  }[];
}

export default function StickyVisualStage({ activeStep, steps }: StickyVisualStageProps) {
  const shouldReduceMotion = prefersReducedMotion();
  const currentStep = steps[activeStep] || steps[0];

  return (
    <div className="sticky top-20 h-[60vh] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          transition={fastTransition}
          className="w-full h-full"
          style={{ filter: 'none' }}
        >
          <JsonVisual
            jsonPath={currentStep.jsonPath}
            alt={currentStep.alt}
            className="w-full h-full rounded-lg glass elevation-2 p-4 md:p-6 overflow-hidden"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
