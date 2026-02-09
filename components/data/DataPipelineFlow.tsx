'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';
import { InlineCode } from '@/components/Typography';

interface PipelineStage {
  id: string;
  label: string;
  description: string;
  techs: string[];
}

interface DataPipelineFlowProps {
  stages: PipelineStage[];
  className?: string;
}

export default function DataPipelineFlow({
  stages,
  className = '',
}: DataPipelineFlowProps) {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <div className={`my-8 ${className}`}>
      <div className="relative">
        {/* Pipeline stages */}
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={shouldAnimate ? { opacity: 0, x: -20 } : { opacity: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...fastTransition, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                {/* Stage number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-muted text-base-dark font-bold text-lg flex items-center justify-center elevation-2">
                  {index + 1}
                </div>

                {/* Stage content */}
                <div className="flex-1 pb-6">
                  <div className="bg-gradient-to-br from-accent/5 to-accent-muted/5 dark:from-accent/10 dark:to-accent-muted/10 rounded-lg p-5 border border-accent/20 elevation-1">
                    <h4 className="text-h3 font-semibold text-accent mb-2">
                      {stage.label}
                    </h4>
                    <p className="text-body text-text-light/80 dark:text-text-dark/80 mb-3">
                      {stage.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stage.techs.map((tech) => (
                        <InlineCode key={tech} className="text-xs">
                          {tech}
                        </InlineCode>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting arrow */}
              {index < stages.length - 1 && (
                <motion.div
                  initial={shouldAnimate ? { opacity: 0, scaleY: 0 } : { opacity: 1 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...fastTransition, delay: index * 0.1 + 0.2 }}
                  className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-accent to-accent-muted origin-top"
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
