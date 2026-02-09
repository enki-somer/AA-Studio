'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

interface BeforeAfterProps {
  before: {
    title: string;
    content: ReactNode;
  };
  after: {
    title: string;
    content: ReactNode;
  };
  className?: string;
}

export default function BeforeAfter({
  before,
  after,
  className = '',
}: BeforeAfterProps) {
  const [view, setView] = useState<'before' | 'after' | 'both'>('both');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={fastTransition}
      className={`my-8 ${className}`}
    >
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setView('before')}
          className={`px-4 py-2 text-small font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            view === 'before'
              ? 'bg-accent text-base-dark shadow-accent-glow dark:shadow-accent-glow-dark font-semibold scale-105'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light dark:text-text-dark hover:bg-accent-muted/15 dark:hover:bg-accent-muted/22 transition-all duration-300 ease-in-out'
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setView('after')}
          className={`px-4 py-2 text-small font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            view === 'after'
              ? 'bg-accent text-base-dark shadow-accent-glow dark:shadow-accent-glow-dark font-semibold scale-105'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light dark:text-text-dark hover:bg-accent-muted/15 dark:hover:bg-accent-muted/22 transition-all duration-300 ease-in-out'
          }`}
        >
          After
        </button>
        <button
          onClick={() => setView('both')}
          className={`px-4 py-2 text-small font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            view === 'both'
              ? 'bg-accent text-base-dark shadow-accent-glow dark:shadow-accent-glow-dark font-semibold scale-105'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light dark:text-text-dark hover:bg-accent-muted/15 dark:hover:bg-accent-muted/22 transition-all duration-300 ease-in-out'
          }`}
        >
          Both
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {(view === 'before' || view === 'both') && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={fastTransition}
            className="p-4 border border-red-500/30 bg-red-500/5 dark:bg-red-500/10 rounded-lg elevation-2"
          >
            <h4 className="text-h3 font-semibold text-red-600 dark:text-red-400 mb-3">
              {before.title}
            </h4>
            <div className="text-body text-text-light/80 dark:text-text-dark/80">
              {before.content}
            </div>
          </motion.div>
        )}
        {(view === 'after' || view === 'both') && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={fastTransition}
            className="p-4 border border-green-500/30 bg-green-500/5 dark:bg-green-500/10 rounded-lg elevation-2"
          >
            <h4 className="text-h3 font-semibold text-green-600 dark:text-green-400 mb-3">
              {after.title}
            </h4>
            <div className="text-body text-text-light/80 dark:text-text-dark/80">
              {after.content}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
