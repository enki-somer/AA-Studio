'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';

export default function ColorManagementDemo() {
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
                  {/* Before: Grayscale elements */}
                  <g>
                    {/* Start Event - Gray */}
                    <circle cx="60" cy="100" r="20" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                    <text x="60" y="135" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.6">Start</text>
                    
                    {/* Task - Gray */}
                    <rect x="120" y="75" width="80" height="50" rx="5" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                    <text x="160" y="103" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.6">Task</text>
                    
                    {/* Gateway - Gray */}
                    <path d="M 240 100 L 260 80 L 280 100 L 260 120 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                    <text x="260" y="145" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.6">Gateway</text>
                    
                    {/* End Event - Gray */}
                    <circle cx="340" cy="100" r="20" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="3" />
                    <text x="340" y="135" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.6">End</text>
                  </g>
                </>
              ) : (
                <>
                  {/* After: Colored elements */}
                  <g>
                    {/* Start Event - Green */}
                    <circle cx="60" cy="100" r="20" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2" />
                    <text x="60" y="135" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.8">Start</text>
                    
                    {/* Task - Yellow */}
                    <rect x="120" y="75" width="80" height="50" rx="5" fill="#FFEB3B" stroke="#F9A825" strokeWidth="2" />
                    <text x="160" y="103" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.8">Task</text>
                    
                    {/* Gateway - Orange */}
                    <path d="M 240 100 L 260 80 L 280 100 L 260 120 Z" fill="#FF9800" stroke="#E65100" strokeWidth="2" />
                    <text x="260" y="145" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.8">Gateway</text>
                    
                    {/* End Event - Red */}
                    <circle cx="340" cy="100" r="20" fill="#F44336" stroke="#C62828" strokeWidth="3" />
                    <text x="340" y="135" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.8">End</text>
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
          ? 'Default grayscale BPMN elements'
          : 'BPMN 2.0 standard colors: Green starts, Yellow tasks, Orange gateways, Red ends'}
      </p>
    </div>
  );
}
