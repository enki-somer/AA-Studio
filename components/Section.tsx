'use client';

import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({
  children,
  className = '',
  title,
  subtitle,
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.1,
    once: true,
  });

  const shouldAnimate = !prefersReducedMotion();

  return (
    <section
      ref={ref}
      className={`max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section ${className}`}
    >
      {(title || subtitle) && (
        <motion.header
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={isInView ? { opacity: 1, y: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : {}}
          transition={fastTransition}
          className="mb-12 md:mb-16"
        >
          {title && (
            <h1 className="text-h1 md:text-display font-sans text-text-light dark:text-text-dark mb-4">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-body text-text-light/70 dark:text-text-dark/70 max-w-content">
              {subtitle}
            </p>
          )}
        </motion.header>
      )}
      <motion.div
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={isInView ? { opacity: 1 } : shouldAnimate ? { opacity: 0 } : {}}
        transition={{ ...fastTransition, delay: shouldAnimate ? 0.1 : 0 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
