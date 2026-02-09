'use client';

import { motion } from 'framer-motion';
import { prefersReducedMotion, fastTransition } from '@/lib/animations';

interface CodeSnippetProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeSnippet({ code, language = 'python', className = '' }: CodeSnippetProps) {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={fastTransition}
      className={`w-full rounded-xl overflow-hidden elevation-3 ${className}`}
    >
      <div className="bg-[#1e1e1e] border border-accent/20">
        {/* Header */}
        <div className="px-4 py-2 bg-[#2d2d2d] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs text-white/60 ml-2">{language}</span>
          </div>
        </div>

        {/* Code */}
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
            <code
              className="font-mono"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
