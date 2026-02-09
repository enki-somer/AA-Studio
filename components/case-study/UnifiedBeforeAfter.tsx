'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetPath';
import { Heading2 } from '@/components/Typography';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';

export default function UnifiedBeforeAfter() {
  const [view, setView] = useState<'before' | 'after'>('before');
  const shouldAnimate = !prefersReducedMotion();

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={fastTransition}
      className="max-w-6xl mx-auto"
    >
      <Heading2 className="mb-6 text-center">Visual Transformation</Heading2>

      {/* Toggle Control */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <button
          onClick={() => setView('before')}
          className={`px-6 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            view === 'before'
              ? 'bg-accent text-base-dark shadow-accent-glow dark:shadow-accent-glow-dark font-semibold scale-105 elevation-2'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light/70 dark:text-text-dark/70 hover:bg-accent-muted/15 dark:hover:bg-accent-muted/22'
          }`}
          aria-pressed={view === 'before'}
        >
          Before Plugins
        </button>
        <button
          onClick={() => setView('after')}
          className={`px-6 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            view === 'after'
              ? 'bg-accent text-base-dark shadow-accent-glow dark:shadow-accent-glow-dark font-semibold scale-105 elevation-2'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light/70 dark:text-text-dark/70 hover:bg-accent-muted/15 dark:hover:bg-accent-muted/22'
          }`}
          aria-pressed={view === 'after'}
        >
          After Plugins
        </button>
      </div>

      {/* SVG Display */}
      <div className="w-full bg-base-light dark:bg-base-dark border border-accent-muted/20 rounded-lg p-4 md:p-6 elevation-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={shouldAnimate ? { opacity: 0, scale: 0.98 } : false}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 1 }}
            exit={shouldAnimate ? { opacity: 0, scale: 0.98 } : { opacity: 1 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            <div className="relative w-full aspect-[1278/540]">
              <Image
                src={getAssetPath(`/BPMN/${view}.svg`)}
                alt={view === 'before' ? 'Default BPMN diagram' : 'Enhanced BPMN diagram with all plugins'}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description */}
      <p className="text-center text-xs md:text-sm text-text-light/60 dark:text-text-dark/60 mt-4 max-w-3xl mx-auto">
        {view === 'before'
          ? 'Default BPMN diagram appearance before any plugin enhancements were applied'
          : 'Same diagram with all plugins active: colors, jump effects, resize handles, styled pools/lanes, and labeled connections'}
      </p>
    </motion.div>
  );
}
