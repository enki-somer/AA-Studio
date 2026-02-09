'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';
import { Heading3, BodyText } from '@/components/Typography';

interface Layer {
  id: string;
  title: string;
  description: string;
  practices: string[];
  color: string;
  borderColor: string;
}

const layers: Layer[] = [
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    description: 'Visibility into system behavior through logging, metrics, and tracing',
    practices: [
      'Structured logging with correlation IDs',
      'Metrics tracking (latency, errors, throughput)',
      'Distributed tracing across services',
      'Error tracking and alerting (Sentry)',
      'Custom dashboards for operations teams',
    ],
    color: 'from-purple-500/10 to-purple-500/20 dark:from-purple-500/20 dark:to-purple-500/30',
    borderColor: 'border-purple-500/40',
  },
  {
    id: 'deployment',
    title: 'DevOps & Deployment',
    description: 'Safe, automated deployment with version control and CI/CD pipelines',
    practices: [
      'Git branching strategies (feature branches, PRs)',
      'CI/CD pipelines (automated tests, builds)',
      'Blue-green deployments for zero-downtime',
      'Canary releases for gradual rollouts',
      'Feature flags for controlled releases',
    ],
    color: 'from-blue-500/10 to-blue-500/20 dark:from-blue-500/20 dark:to-blue-500/30',
    borderColor: 'border-blue-500/40',
  },
  {
    id: 'performance',
    title: 'Performance Engineering',
    description: 'Systematic optimization guided by profiling and measurement',
    practices: [
      'Performance profiling to identify bottlenecks',
      'Database query optimization',
      'Caching strategies (Redis, CDN)',
      'Bundle size optimization and lazy loading',
      'Memory and CPU profiling',
    ],
    color: 'from-green-500/10 to-green-500/20 dark:from-green-500/20 dark:to-green-500/30',
    borderColor: 'border-green-500/40',
  },
  {
    id: 'testing',
    title: 'Testing Strategy',
    description: 'Comprehensive test coverage across unit, integration, and E2E layers',
    practices: [
      'Unit tests for business logic (Jest, pytest)',
      'Integration tests for API endpoints',
      'E2E tests for critical user paths',
      'Test coverage tracking',
      'Automated test runs in CI pipeline',
    ],
    color: 'from-orange-500/10 to-orange-500/20 dark:from-orange-500/20 dark:to-orange-500/30',
    borderColor: 'border-orange-500/40',
  },
];

export default function ReliabilityLayers() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>('testing');
  const shouldAnimate = !prefersReducedMotion();

  return (
    <div className="my-12 max-w-4xl mx-auto">
      <div className="space-y-3">
        {layers.map((layer, index) => {
          const isExpanded = expandedLayer === layer.id;
          
          return (
            <motion.div
              key={layer.id}
              initial={shouldAnimate ? { opacity: 0, x: -20 } : { opacity: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...fastTransition, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${layer.color} border ${layer.borderColor} rounded-lg overflow-hidden elevation-2`}
            >
              {/* Layer header - clickable */}
              <button
                onClick={() => setExpandedLayer(isExpanded ? null : layer.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 dark:hover:bg-black/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <div className="flex-1">
                  <Heading3 className="mb-1 text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                    {layer.title}
                  </Heading3>
                  <p className="text-small text-text-light/70 dark:text-text-dark/70">
                    {layer.description}
                  </p>
                </div>
                
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={fastTransition}
                  className="w-5 h-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={fastTransition}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 border-t border-accent/10">
                      <ul className="space-y-2 mt-4">
                        {layer.practices.map((practice, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ ...fastTransition, delay: idx * 0.05 }}
                            className="flex items-start gap-3 text-body text-text-light/80 dark:text-text-dark/80"
                          >
                            <svg
                              className="w-5 h-5 shrink-0 text-accent mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{practice}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Annotation */}
      <motion.p
        initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ...fastTransition, delay: 0.5 }}
        className="text-center text-small text-text-light/60 dark:text-text-dark/60 mt-6"
      >
        Click each layer to explore reliability practices. These layers build upon each other to create robust, maintainable systems.
      </motion.p>
    </div>
  );
}
