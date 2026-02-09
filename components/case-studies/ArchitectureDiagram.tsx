'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fastTransition, scaleIn } from '@/lib/animations';

interface ArchitectureDiagramProps {
  children: ReactNode;
  title?: string;
  defaultExpanded?: boolean;
  className?: string;
}

export default function ArchitectureDiagram({
  children,
  title = 'Architecture Diagram',
  defaultExpanded = false,
  className = '',
}: ArchitectureDiagramProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={scaleIn}
      transition={fastTransition}
      className={`my-8 elevation-3 rounded-lg overflow-hidden ${className}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-accent-muted/10 dark:bg-accent-muted/20 border-b border-accent-muted/20 flex items-center justify-between hover:bg-accent/10 dark:hover:bg-accent/15 hover:text-accent transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-expanded={isExpanded}
      >
        <span className="text-h3 font-semibold text-text-light dark:text-text-dark">
          {title}
        </span>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={fastTransition}
          className="w-5 h-5 text-accent"
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
            <div className="p-6 bg-base-light dark:bg-base-dark">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
