'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

type ViewType = 'problem' | 'solution' | 'constraints' | 'outcome';

interface ViewToggleProps {
  problem: ReactNode;
  solution: ReactNode;
  constraints: ReactNode;
  outcome: ReactNode;
  className?: string;
}

export default function ViewToggle({
  problem,
  solution,
  constraints,
  outcome,
  className = '',
}: ViewToggleProps) {
  const [activeView, setActiveView] = useState<ViewType>('problem');

  const views: { key: ViewType; label: string; content: ReactNode }[] = [
    { key: 'problem', label: 'Problem', content: problem },
    { key: 'solution', label: 'Solution', content: solution },
    { key: 'constraints', label: 'Constraints', content: constraints },
    { key: 'outcome', label: 'Outcome', content: outcome },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={fastTransition}
      className={`my-8 elevation-3 rounded-lg overflow-hidden ${className}`}
    >
      <div className="flex flex-wrap gap-2 p-4 bg-accent-muted/10 dark:bg-accent-muted/20 border-b border-accent-muted/20">
        {views.map((view) => (
          <button
            key={view.key}
            onClick={() => setActiveView(view.key)}
            className={`px-4 py-2 text-small font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
              activeView === view.key
                ? 'bg-accent text-base-dark shadow-accent-glow dark:shadow-accent-glow-dark font-semibold scale-105'
                : 'bg-transparent text-text-light/70 dark:text-text-dark/70 hover:text-accent hover:bg-accent/10 dark:hover:bg-accent/15 hover:scale-105 transition-all duration-200 ease-out'
            }`}
          >
            {view.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={fastTransition}
          className="p-6 bg-base-light dark:bg-base-dark"
        >
          {views.find((v) => v.key === activeView)?.content}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
