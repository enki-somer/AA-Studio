'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

interface AlternatingLayoutProps {
  children: ReactNode;
  dense?: boolean;
  className?: string;
}

export default function AlternatingLayout({
  children,
  dense = false,
  className = '',
}: AlternatingLayoutProps) {
  const spacingClass = dense ? 'space-y-4 md:space-y-6' : 'space-y-8 md:space-y-12';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={fastTransition}
      className={`${spacingClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
