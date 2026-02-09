'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';
import { InlineCode } from '@/components/Typography';

interface PyramidLevel {
  label: string;
  description: string;
  examples: string[];
  percentage: string;
  color: string;
}

const pyramidLevels: PyramidLevel[] = [
  {
    label: 'E2E Tests',
    description: 'Critical user journeys and business workflows',
    examples: ['User registration flow', 'Payment processing', 'Report generation'],
    percentage: '10%',
    color: 'from-red-500/20 to-red-500/30 dark:from-red-500/30 dark:to-red-500/40',
  },
  {
    label: 'Integration Tests',
    description: 'Component interactions and API contracts',
    examples: ['API endpoint tests', 'Database queries', 'Service integrations'],
    percentage: '30%',
    color: 'from-orange-500/20 to-orange-500/30 dark:from-orange-500/30 dark:to-orange-500/40',
  },
  {
    label: 'Unit Tests',
    description: 'Individual functions and business logic',
    examples: ['Validation functions', 'Calculations', 'Data transformations'],
    percentage: '60%',
    color: 'from-green-500/20 to-green-500/30 dark:from-green-500/30 dark:to-green-500/40',
  },
];

export default function TestingPyramid() {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <div className="my-12">
      <div className="max-w-2xl mx-auto">
        {/* Pyramid visualization */}
        <div className="relative space-y-3">
          {pyramidLevels.map((level, index) => {
            const widthPercentage = 40 + (pyramidLevels.length - index - 1) * 30;
            
            return (
              <motion.div
                key={level.label}
                initial={shouldAnimate ? { opacity: 0, y: 20, scale: 0.9 } : { opacity: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...fastTransition, delay: index * 0.15 }}
                className="relative"
                style={{
                  width: `${widthPercentage}%`,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <div
                  className={`bg-gradient-to-br ${level.color} border border-accent/30 rounded-lg p-6 elevation-2 hover:elevation-3 transition-all duration-300 group cursor-pointer`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-h3 font-bold text-text-light dark:text-text-dark group-hover:text-accent transition-colors">
                      {level.label}
                    </h4>
                    <span className="text-xl font-bold text-accent">
                      {level.percentage}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-small text-text-light/80 dark:text-text-dark/80 mb-3">
                    {level.description}
                  </p>

                  {/* Examples */}
                  <div className="flex flex-wrap gap-2">
                    {level.examples.map((example) => (
                      <InlineCode key={example} className="text-xs">
                        {example}
                      </InlineCode>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...fastTransition, delay: 0.5 }}
          className="mt-8 text-center text-small text-text-light/60 dark:text-text-dark/60"
        >
          Tests are distributed across layers: unit tests form the foundation, integration tests verify component interactions, and E2E tests validate critical workflows.
        </motion.div>
      </div>
    </div>
  );
}
