'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';

interface ScrollProgressIndicatorProps {
  totalSections: number;
}

export default function ScrollProgressIndicator({ totalSections }: ScrollProgressIndicatorProps) {
  const [activeSection, setActiveSection] = useState(1);
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = prefersReducedMotion();

  useEffect(() => {
    const updateActiveSection = (latest: number) => {
      const section = Math.min(
        Math.ceil(latest * totalSections) || 1,
        totalSections
      );
      setActiveSection(section);
    };

    const unsubscribe = scrollYProgress.on('change', updateActiveSection);

    return () => unsubscribe();
  }, [scrollYProgress, totalSections]);

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <div className="fixed top-20 right-4 z-40 flex flex-col items-end gap-2 md:right-8">
      <div className="glass px-4 py-2 rounded-full border border-accent-muted/20 elevation-2">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          style={{ filter: 'none' }}
        >
          <span className="text-small font-sans text-text-light dark:text-text-dark">
            Section <span className="text-accent font-semibold">{activeSection}</span> of{' '}
            {totalSections}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="w-32 h-1 bg-accent-muted/20 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-accent rounded-full"
          style={{ width: shouldReduceMotion ? '0%' : progressWidth }}
        />
      </motion.div>
    </div>
  );
}
