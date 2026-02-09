'use client';

import { motion } from 'framer-motion';
import { Heading2 } from '@/components/Typography';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';
import type { TechStackItem } from '@/lib/caseStudies/camundaJumpEffect';

interface TechStackGridProps {
  techStack: TechStackItem[];
}

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  Framework: {
    bg: 'from-blue-500/10 to-blue-600/10',
    border: 'border-blue-500/30',
    text: 'text-blue-600 dark:text-blue-400',
  },
  Language: {
    bg: 'from-purple-500/10 to-purple-600/10',
    border: 'border-purple-500/30',
    text: 'text-purple-600 dark:text-purple-400',
  },
  Graphics: {
    bg: 'from-teal-500/10 to-teal-600/10',
    border: 'border-teal-500/30',
    text: 'text-teal-600 dark:text-teal-400',
  },
  Library: {
    bg: 'from-orange-500/10 to-orange-600/10',
    border: 'border-orange-500/30',
    text: 'text-orange-600 dark:text-orange-400',
  },
  Architecture: {
    bg: 'from-green-500/10 to-green-600/10',
    border: 'border-green-500/30',
    text: 'text-green-600 dark:text-green-400',
  },
  Platform: {
    bg: 'from-pink-500/10 to-pink-600/10',
    border: 'border-pink-500/30',
    text: 'text-pink-600 dark:text-pink-400',
  },
};

export default function TechStackGrid({ techStack }: TechStackGridProps) {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={fastTransition}
      className="max-w-6xl mx-auto"
    >
      <Heading2 className="mb-6 text-center">Tech Stack</Heading2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {techStack.map((tech, index) => {
          const colors = categoryColors[tech.category] || {
            bg: 'from-gray-500/10 to-gray-600/10',
            border: 'border-gray-500/30',
            text: 'text-gray-600 dark:text-gray-400',
          };

          return (
            <motion.div
              key={tech.name}
              initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : { opacity: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...fastTransition, delay: shouldAnimate ? index * 0.05 : 0 }}
              className={`p-4 md:p-6 rounded-lg bg-gradient-to-br ${colors.bg} border ${colors.border} flex flex-col items-center justify-center text-center min-h-[120px] md:min-h-[140px]`}
            >
              <div className={`text-xl md:text-2xl font-bold ${colors.text} mb-1 md:mb-2`}>
                {tech.name}
              </div>
              <div className="text-[10px] md:text-xs text-text-light/70 dark:text-text-dark/70 mb-2">
                {tech.category}
              </div>
              <div className="text-[10px] md:text-xs text-text-light/60 dark:text-text-dark/60">
                {tech.description}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
