'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';

export default function ResizableTasksDemo() {
  const [view, setView] = useState<'before' | 'after'>('before');
  const shouldAnimate = !prefersReducedMotion();

  return (
    <div className="my-6">
      {/* Toggle Control */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setView('before')}
          className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all duration-200 ${
            view === 'before'
              ? 'bg-accent text-base-dark shadow-accent-glow scale-105 elevation-2'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light dark:text-text-dark hover:bg-accent-muted/15'
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setView('after')}
          className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all duration-200 ${
            view === 'after'
              ? 'bg-accent text-base-dark shadow-accent-glow scale-105 elevation-2'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light dark:text-text-dark hover:bg-accent-muted/15'
          }`}
        >
          After
        </button>
      </div>

      {/* SVG Demo */}
      <div className="w-full bg-base-light dark:bg-base-dark border border-accent-muted/20 rounded-lg p-6 md:p-8 elevation-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={shouldAnimate ? { opacity: 0, scale: 0.98 } : false}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 1 }}
            exit={shouldAnimate ? { opacity: 0, scale: 0.98 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <svg viewBox="0 0 400 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {view === 'before' ? (
                <>
                  {/* Before: Fixed size task */}
                  <g>
                    <rect x="150" y="75" width="100" height="50" rx="5" fill="#22D3EE" stroke="#0891B2" strokeWidth="2" />
                    <text x="200" y="103" textAnchor="middle" fontSize="12" fill="#000" opacity="0.8">Task</text>
                    <text x="200" y="145" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">Fixed Size</text>
                  </g>
                </>
              ) : (
                <>
                  {/* After: Task with resize handles */}
                  <g>
                    <rect x="150" y="75" width="100" height="50" rx="5" fill="#22D3EE" stroke="#0891B2" strokeWidth="2" />
                    <text x="200" y="103" textAnchor="middle" fontSize="12" fill="#000" opacity="0.8">Task</text>
                    
                    {/* Resize handles - corners */}
                    <rect x="146" y="71" width="8" height="8" fill="#1976D2" stroke="#FFF" strokeWidth="1" rx="2" />
                    <rect x="246" y="71" width="8" height="8" fill="#1976D2" stroke="#FFF" strokeWidth="1" rx="2" />
                    <rect x="246" y="121" width="8" height="8" fill="#1976D2" stroke="#FFF" strokeWidth="1" rx="2" />
                    <rect x="146" y="121" width="8" height="8" fill="#1976D2" stroke="#FFF" strokeWidth="1" rx="2" />
                    
                    {/* Resize handles - sides */}
                    <rect x="196" y="71" width="8" height="8" fill="#1976D2" stroke="#FFF" strokeWidth="1" rx="2" />
                    <rect x="246" y="96" width="8" height="8" fill="#1976D2" stroke="#FFF" strokeWidth="1" rx="2" />
                    <rect x="196" y="121" width="8" height="8" fill="#1976D2" stroke="#FFF" strokeWidth="1" rx="2" />
                    <rect x="146" y="96" width="8" height="8" fill="#1976D2" stroke="#FFF" strokeWidth="1" rx="2" />
                    
                    <text x="200" y="145" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">8 Resize Handles</text>
                  </g>
                </>
              )}
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description */}
      <p className="text-center text-xs md:text-sm text-text-light/60 dark:text-text-dark/60 mt-3">
        {view === 'before'
          ? 'Fixed-size task boxes'
          : 'Interactive resize handles on all corners and sides'}
      </p>
    </div>
  );
}
