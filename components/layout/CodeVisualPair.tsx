'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

interface CodeVisualPairProps {
  code: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function CodeVisualPair({
  code,
  visual,
  reverse = false,
  className = '',
}: CodeVisualPairProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={fastTransition}
      className={`grid md:grid-cols-2 gap-6 my-8 ${className}`}
    >
      <div className={reverse ? 'md:order-2' : ''}>{code}</div>
      <div className={reverse ? 'md:order-1' : ''}>{visual}</div>
    </motion.div>
  );
}
