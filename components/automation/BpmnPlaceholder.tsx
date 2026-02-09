'use client';

import { motion } from 'framer-motion';
import { prefersReducedMotion, fastTransition } from '@/lib/animations';

export default function BpmnPlaceholder({ className = '' }: { className?: string }) {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={fastTransition}
      className={`w-full rounded-xl overflow-hidden elevation-3 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full p-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Start Event */}
        <circle
          cx="80"
          cy="250"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-green-500"
        />
        <text x="80" y="310" textAnchor="middle" className="text-xs fill-current text-text-light dark:text-text-dark">
          Start
        </text>

        {/* Arrow 1 */}
        <line x1="110" y1="250" x2="180" y2="250" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <polygon points="180,250 170,245 170,255" fill="currentColor" className="text-accent" />

        {/* Task 1 */}
        <rect
          x="180"
          y="220"
          width="120"
          height="60"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-500"
        />
        <text x="240" y="255" textAnchor="middle" className="text-xs fill-current text-text-light dark:text-text-dark font-medium">
          Validate Input
        </text>

        {/* Arrow 2 */}
        <line x1="300" y1="250" x2="350" y2="250" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <polygon points="350,250 340,245 340,255" fill="currentColor" className="text-accent" />

        {/* Gateway */}
        <rect
          x="350"
          y="220"
          width="60"
          height="60"
          rx="0"
          transform="rotate(45 380 250)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-yellow-500"
        />
        <text x="380" y="310" textAnchor="middle" className="text-xs fill-current text-text-light dark:text-text-dark">
          Decision
        </text>

        {/* Arrow 3 - Success */}
        <line x1="422" y1="250" x2="480" y2="250" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <polygon points="480,250 470,245 470,255" fill="currentColor" className="text-accent" />

        {/* Task 2 */}
        <rect
          x="480"
          y="220"
          width="120"
          height="60"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-purple-500"
        />
        <text x="540" y="255" textAnchor="middle" className="text-xs fill-current text-text-light dark:text-text-dark font-medium">
          Process Data
        </text>

        {/* Arrow 4 */}
        <line x1="600" y1="250" x2="660" y2="250" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <polygon points="660,250 650,245 650,255" fill="currentColor" className="text-accent" />

        {/* End Event */}
        <circle
          cx="690"
          cy="250"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-red-500"
        />
        <circle
          cx="690"
          cy="250"
          r="25"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-red-500"
        />
        <text x="690" y="310" textAnchor="middle" className="text-xs fill-current text-text-light dark:text-text-dark">
          End
        </text>

        {/* Arrow 5 - Error path */}
        <line x1="380" y1="292" x2="380" y2="350" stroke="currentColor" strokeWidth="2" className="text-accent" strokeDasharray="5,5" />
        <polygon points="380,350 375,340 385,340" fill="currentColor" className="text-accent" />

        {/* Error Handler */}
        <rect
          x="320"
          y="350"
          width="120"
          height="60"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-orange-500"
        />
        <text x="380" y="385" textAnchor="middle" className="text-xs fill-current text-text-light dark:text-text-dark font-medium">
          Error Handler
        </text>
      </svg>
    </motion.div>
  );
}
