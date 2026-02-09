'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';

export default function BeforeAfterBpmnDemo() {
  const [view, setView] = useState<'before' | 'after'>('before');
  const shouldAnimate = !prefersReducedMotion();

  return (
    <div className="my-16">
      {/* Toggle Control */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <button
          onClick={() => setView('before')}
          className={`px-6 py-3 text-small font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            view === 'before'
              ? 'bg-accent text-base-dark shadow-accent-glow dark:shadow-accent-glow-dark font-semibold scale-105 elevation-2'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light/70 dark:text-text-dark/70 hover:bg-accent-muted/15 dark:hover:bg-accent-muted/22 transition-all duration-300 ease-in-out'
          }`}
          aria-pressed={view === 'before'}
        >
          Before
        </button>
        <button
          onClick={() => setView('after')}
          className={`px-6 py-3 text-small font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            view === 'after'
              ? 'bg-accent text-base-dark shadow-accent-glow dark:shadow-accent-glow-dark font-semibold scale-105 elevation-2'
              : 'bg-accent-muted/10 dark:bg-accent-muted/20 text-text-light/70 dark:text-text-dark/70 hover:bg-accent-muted/15 dark:hover:bg-accent-muted/22 transition-all duration-300 ease-in-out'
          }`}
          aria-pressed={view === 'after'}
        >
          After
        </button>
      </div>

      {/* SVG Demo */}
      <div className="w-full max-w-4xl mx-auto bg-base-light dark:bg-base-dark border border-accent-muted/20 rounded-lg p-8 elevation-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={shouldAnimate ? { opacity: 0, scale: 0.98 } : false}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 1 }}
            exit={shouldAnimate ? { opacity: 0, scale: 0.98 } : { opacity: 1 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background grid (subtle) */}
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.1"
                  />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#grid)" />

              {view === 'before' ? (
                <>
                  {/* Before: Flat crossing lines */}
                  <g>
                    {/* Horizontal line */}
                    <line
                      x1="50"
                      y1="150"
                      x2="350"
                      y2="150"
                      stroke="#22D3EE"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Vertical line (crossing) */}
                    <line
                      x1="200"
                      y1="50"
                      x2="200"
                      y2="250"
                      stroke="#22D3EE"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Intersection point highlight */}
                    <circle
                      cx="200"
                      cy="150"
                      r="4"
                      fill="#EF4444"
                      opacity="0.8"
                    />
                  </g>
                  {/* Labels */}
                  <text
                    x="200"
                    y="140"
                    textAnchor="middle"
                    className="text-small fill-red-500 dark:fill-red-400 font-semibold"
                    fontSize="12"
                  >
                    Overlap
                  </text>
                </>
              ) : (
                <>
                  {/* After: Bridge arc (one line jumps over) */}
                  <g>
                    {/* Horizontal line with bridge arc */}
                    <path
                      d="M 50,150 L 180,150 Q 200,130 220,150 L 350,150"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Vertical line (straight, goes under) */}
                    <line
                      x1="200"
                      y1="50"
                      x2="200"
                      y2="250"
                      stroke="#22D3EE"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                      opacity="0.6"
                    />
                    {/* Bridge arc highlight */}
                    <path
                      d="M 180,150 Q 200,130 220,150"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="4"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </g>
                  {/* Labels */}
                  <text
                    x="200"
                    y="125"
                    textAnchor="middle"
                    className="text-small fill-green-500 dark:fill-green-400 font-semibold"
                    fontSize="12"
                  >
                    Bridge Arc
                  </text>
                  <text
                    x="200"
                    y="270"
                    textAnchor="middle"
                    className="text-small fill-text-light/50 dark:fill-text-dark/50"
                    fontSize="10"
                  >
                    (goes under)
                  </text>
                </>
              )}

              {/* Start/End markers */}
              {view === 'before' ? (
                <>
                  <circle cx="50" cy="150" r="6" fill="#22D3EE" />
                  <circle cx="350" cy="150" r="6" fill="#22D3EE" />
                  <circle cx="200" cy="50" r="6" fill="#22D3EE" />
                  <circle cx="200" cy="250" r="6" fill="#22D3EE" />
                </>
              ) : (
                <>
                  <circle cx="50" cy="150" r="6" fill="#22D3EE" />
                  <circle cx="350" cy="150" r="6" fill="#22D3EE" />
                  <circle cx="200" cy="50" r="6" fill="#22D3EE" opacity="0.6" />
                  <circle cx="200" cy="250" r="6" fill="#22D3EE" opacity="0.6" />
                </>
              )}
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description */}
      <p className="text-center text-small text-text-light/60 dark:text-text-dark/60 mt-4">
        {view === 'before'
          ? 'Crossing lines overlap, making it hard to follow the flow'
          : 'Bridge arc makes the crossing clear—one line jumps over the other'}
      </p>
    </div>
  );
}
