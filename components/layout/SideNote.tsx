'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

interface SideNoteProps {
  children: ReactNode;
  className?: string;
}

export default function SideNote({ children, className = '' }: SideNoteProps) {
  return (
    <motion.aside
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={fastTransition}
      className={`border-l-2 border-accent-muted/30 pl-4 py-2 my-6 italic text-small text-text-light/70 dark:text-text-dark/70 ${className}`}
    >
      {children}
    </motion.aside>
  );
}
