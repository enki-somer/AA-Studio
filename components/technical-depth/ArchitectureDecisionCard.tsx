'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';
import JsonVisual from '@/components/about/JsonVisual';
import { Heading2, BodyText, InlineCode } from '@/components/Typography';

interface ArchitectureDecisionCardProps {
  title: string;
  description: string;
  tags?: string[];
  jsonPath: string;
  index: number;
}

// Get unique background treatment based on index
const getBackgroundTreatment = (index: number): string => {
  const treatments = [
    'bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10',
    'bg-gradient-to-br from-green-500/5 to-teal-500/5 dark:from-green-500/10 dark:to-teal-500/10',
    'bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10',
    'bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10',
    'bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10',
    'bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10',
  ];
  return treatments[index % treatments.length];
};

export default function ArchitectureDecisionCard({
  title,
  description,
  tags,
  jsonPath,
  index,
}: ArchitectureDecisionCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const shouldReduceMotion = prefersReducedMotion();

  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.96, y: 20 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            delay: index * 0.1,
          },
        },
      };

  const contentVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            delay: index * 0.1 + 0.2,
          },
        },
      };

  return (
    <article
      ref={ref}
      className={`rounded-xl overflow-hidden elevation-3 ${getBackgroundTreatment(index)}`}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={cardVariants}
        style={{ filter: 'none' }}
      >
      {/* Visual Section - Hero */}
      <div className="w-full h-56 sm:h-64 md:h-80 relative overflow-hidden">
        <div className="absolute inset-0 glass opacity-80" />
        <JsonVisual
          jsonPath={jsonPath}
          alt={`${title} architecture visualization`}
          className="w-full h-full p-3 sm:p-4 md:p-8"
        />
      </div>

      {/* Content Section */}
      <motion.div
        variants={contentVariants}
        className="p-6 md:p-8 space-y-4"
      >
        <Heading2>{title}</Heading2>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <InlineCode key={tag}>{tag}</InlineCode>
            ))}
          </div>
        )}

        <div className="space-y-3">
          {description.split('\n\n').map((paragraph, idx) => (
            <BodyText key={idx} className="text-text-light/90 dark:text-text-dark/90 leading-relaxed">
              {paragraph}
            </BodyText>
          ))}
        </div>
      </motion.div>
    </motion.div>
    </article>
  );
}
