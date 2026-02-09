'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

interface DecisionPointProps {
  question: string;
  answer: ReactNode;
  rationale?: ReactNode;
  className?: string;
}

export default function DecisionPoint({
  question,
  answer,
  rationale,
  className = '',
}: DecisionPointProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={fastTransition}
      className={`my-6 border-l-4 border-accent/40 bg-accent/5 dark:bg-accent/10 rounded-r-lg elevation-2 ${className}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-accent/15 dark:hover:bg-accent/20 group hover:translate-x-1 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-r-lg"
        aria-expanded={isExpanded}
      >
        <div>
          <div className="text-small font-semibold text-accent mb-1">
            Decision Point
          </div>
          <h4 className="text-h3 font-semibold text-text-light dark:text-text-dark group-hover:text-accent transition-colors duration-300">
            {question}
          </h4>
        </div>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={fastTransition}
          className="w-5 h-5 text-accent flex-shrink-0 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={fastTransition}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              <div>
                <div className="text-small font-semibold text-text-light/60 dark:text-text-dark/60 mb-1">
                  Decision
                </div>
                <div className="text-body text-text-light/80 dark:text-text-dark/80">
                  {answer}
                </div>
              </div>
              {rationale && (
                <div>
                  <div className="text-small font-semibold text-text-light/60 dark:text-text-dark/60 mb-1">
                    Why this matters
                  </div>
                  <div className="text-body text-text-light/70 dark:text-text-dark/70 italic">
                    {rationale}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
