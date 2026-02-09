'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heading3, BodyText, InlineCode } from './Typography';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';
import TechStackCards from './TechStackCards';

interface CaseStudyCardProps {
  title: string;
  slug: string;
  description: string;
  technologies?: string[];
  index?: number;
  metrics?: { label: string; value: string }[];
  techStack?: { name: string; icon: string }[];
}

export default function CaseStudyCard({
  title,
  slug,
  description,
  technologies = [],
  index = 0,
  metrics = [],
  techStack,
}: CaseStudyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.1,
    once: true,
  });

  const shouldAnimate = !prefersReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={isInView ? { opacity: 1, y: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : {}}
      transition={{ ...fastTransition, delay: shouldAnimate ? index * 0.1 : 0 }}
    >
      <Link
        href={`/case-studies/${slug}`}
        className="block border-l-2 border-accent-muted/20 pl-6 py-4 hover:border-accent hover:border-l-4 hover:translate-x-1 transition-all duration-200 ease-out group elevation-1 hover:elevation-3 rounded-r-lg -ml-2 pl-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 bg-gradient-to-r from-accent/5 to-transparent hover:from-accent/10"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <Heading3 className="group-hover:text-accent transition-all duration-200 ease-out mb-2">
              {title}
            </Heading3>
            <BodyText className="text-text-light/70 dark:text-text-dark/70 mb-3">
              {description}
            </BodyText>
            {metrics.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-3 text-small">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="text-text-light/60 dark:text-text-dark/60">
                    <span className="font-semibold text-accent">{metric.value}</span>{' '}
                    {metric.label}
                  </div>
                ))}
              </div>
            )}
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <InlineCode key={tech}>{tech}</InlineCode>
                ))}
              </div>
            )}
          </div>
          {techStack && techStack.length > 0 && (
            <div className="flex-shrink-0 hidden md:block">
              <TechStackCards techStack={techStack} />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
