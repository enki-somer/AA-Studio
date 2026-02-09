'use client';

import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { Heading2, BodyText } from '@/components/Typography';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';
import type { ArchitectureSection } from '@/lib/caseStudies/camundaJumpEffect';

interface ArchitectureAccordionProps {
  sections: ArchitectureSection[];
}

export default function ArchitectureAccordion({ sections }: ArchitectureAccordionProps) {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={fastTransition}
      className="max-w-5xl mx-auto"
    >
      <Heading2 className="mb-6 text-center">Architecture Deep Dive</Heading2>

      <Accordion.Root type="single" collapsible className="space-y-3 md:space-y-4">
        {sections.map((section) => (
          <Accordion.Item
            key={section.title}
            value={section.title}
            className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5"
          >
            <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
              <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">{section.icon}</span>
                <span>{section.title}</span>
              </span>
              <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">
                ▼
              </span>
            </Accordion.Trigger>
            <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
              <div className="space-y-3 md:space-y-4">
                {/* Main Content */}
                {section.content.map((paragraph, idx) => (
                  <BodyText key={idx} className="text-xs md:text-sm">
                    {paragraph}
                  </BodyText>
                ))}

                {/* Highlights */}
                {section.highlights && section.highlights.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {section.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-accent/10 border border-accent/20"
                      >
                        <div className="font-semibold text-xs md:text-sm mb-1 text-accent">
                          {highlight.title}
                        </div>
                        <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                          {highlight.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </motion.div>
  );
}
