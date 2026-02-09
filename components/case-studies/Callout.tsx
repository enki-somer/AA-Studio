'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

interface CalloutProps {
  children: ReactNode;
  type?: 'info' | 'warning' | 'success' | 'note' | 'decision';
  title?: string;
  className?: string;
}

export default function Callout({
  children,
  type = 'note',
  title,
  className = '',
}: CalloutProps) {
  const typeStyles = {
    info: 'border-accent/30 bg-accent/5 dark:bg-accent/10',
    warning: 'border-yellow-500/30 bg-yellow-500/5 dark:bg-yellow-500/10',
    success: 'border-green-500/30 bg-green-500/5 dark:bg-green-500/10',
    note: 'border-accent-muted/30 bg-accent-muted/5 dark:bg-accent-muted/10',
    decision: 'border-accent/40 bg-accent/10 dark:bg-accent/15',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={fastTransition}
      className={`border-l-4 rounded-r-lg p-4 elevation-2 ${typeStyles[type]} ${className}`}
    >
      {title && (
        <h4 className="text-h3 font-semibold text-text-light dark:text-text-dark mb-2">
          {title}
        </h4>
      )}
      <div className="text-body text-text-light/80 dark:text-text-dark/80">
        {children}
      </div>
    </motion.div>
  );
}
