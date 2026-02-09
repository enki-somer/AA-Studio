'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

interface FlowStep {
  title: string;
  description: ReactNode | string;
  icon?: ReactNode;
}

interface SystemFlowProps {
  steps: FlowStep[];
  className?: string;
}

export default function SystemFlow({ steps, className = '' }: SystemFlowProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={fastTransition}
      className={`my-8 ${className}`}
    >
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <motion.button
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                className="w-10 h-10 rounded-full bg-accent/15 dark:bg-accent/25 border-2 border-accent/40 flex items-center justify-center text-accent font-semibold hover:bg-accent/25 dark:hover:bg-accent/35 hover:scale-110 hover:border-accent/60 hover:shadow-accent-glow dark:hover:shadow-accent-glow-dark transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.icon || index + 1}
              </motion.button>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-full min-h-8 bg-accent-muted/20 flex-grow my-2" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <motion.button
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                className="text-left w-full"
              >
                <h4 className="text-h3 font-semibold text-text-light dark:text-text-dark mb-2 hover:text-accent hover:translate-x-1 transition-all duration-200 ease-out">
                  {step.title}
                </h4>
              </motion.button>
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={fastTransition}
                    className="overflow-hidden"
                  >
                    <div className="text-body text-text-light/80 dark:text-text-dark/80 pt-2">
                      {typeof step.description === 'string' ? <p>{step.description}</p> : step.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
