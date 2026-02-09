'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heading2 } from '@/components/Typography';
import PluginShowcase from './PluginShowcase';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';
import type { PluginShowcase as PluginShowcaseType } from '@/lib/caseStudies/camundaJumpEffect';

interface PluginSwitcherProps {
  plugins: PluginShowcaseType[];
}

export default function PluginSwitcher({ plugins }: PluginSwitcherProps) {
  const [selectedPluginId, setSelectedPluginId] = useState(plugins[0]?.id || '');
  const shouldAnimate = !prefersReducedMotion();

  const selectedPlugin = plugins.find((p) => p.id === selectedPluginId);

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={fastTransition}
      className="max-w-6xl mx-auto"
    >
      <Heading2 className="mb-6 text-center">Plugin Details</Heading2>

      {/* Plugin Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {plugins.map((plugin) => (
            <button
              key={plugin.id}
              onClick={() => setSelectedPluginId(plugin.id)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${
                selectedPluginId === plugin.id
                  ? 'bg-accent text-base-dark shadow-accent-glow scale-105 elevation-2'
                  : 'bg-accent/10 dark:bg-accent/20 text-text-light dark:text-text-dark hover:bg-accent/20 dark:hover:bg-accent/30'
              }`}
            >
              {plugin.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Plugin Content */}
      {selectedPlugin && (
        <motion.div
          key={selectedPluginId}
          initial={shouldAnimate ? { opacity: 0, y: 10 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PluginShowcase plugin={selectedPlugin} index={0} />
        </motion.div>
      )}
    </motion.div>
  );
}
