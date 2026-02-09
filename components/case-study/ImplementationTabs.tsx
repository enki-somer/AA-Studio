'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { Heading3, BodyText } from '@/components/Typography';
import CodeExcerpt from './CodeExcerpt';
import { camundaJumpEffectContent } from '@/lib/caseStudies/camundaJumpEffect';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';

export default function ImplementationTabs() {
  const { implementation } = camundaJumpEffectContent;
  const shouldAnimate = !prefersReducedMotion();

  const tabs = [
    {
      value: 'overview',
      label: 'Overview',
      content: implementation.overview,
    },
    {
      value: 'implementation',
      label: 'Implementation',
      content: implementation.implementation,
    },
    {
      value: 'lifecycle',
      label: 'Lifecycle',
      content: implementation.lifecycle,
    },
    {
      value: 'verification',
      label: 'Verification',
      content: implementation.verification,
    },
  ];

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={fastTransition}
      className="my-16"
    >
      <Heading3 className="mb-8 text-center">Implementation Walkthrough</Heading3>
      <Tabs.Root defaultValue="overview" className="w-full">
        <Tabs.List className="flex flex-wrap gap-2 mb-8 border-b border-accent-muted/20 pb-2">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="px-4 py-2 text-small font-medium rounded-t-lg transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 data-[state=active]:bg-accent data-[state=active]:text-base-dark data-[state=active]:shadow-accent-glow dark:data-[state=active]:shadow-accent-glow-dark data-[state=active]:font-semibold data-[state=active]:scale-105 data-[state=inactive]:text-text-light/70 data-[state=inactive]:dark:text-text-dark/70 data-[state=inactive]:hover:text-accent data-[state=inactive]:hover:bg-accent/10 dark:data-[state=inactive]:hover:bg-accent/15 data-[state=inactive]:hover:scale-105"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className="mt-6"
          >
            <div className="space-y-6">
              {tab.content.text.map((paragraph, index) => (
                <BodyText key={index}>{paragraph}</BodyText>
              ))}

              {/* Code excerpts */}
              {'codeSnippets' in tab.content &&
                tab.content.codeSnippets.map((snippet, index) => (
                  <CodeExcerpt
                    key={index}
                    code={snippet.code}
                    language={snippet.language}
                    description={snippet.description}
                  />
                ))}

              {/* Verification steps */}
              {tab.value === 'verification' && 'steps' in tab.content && (
                <div className="mt-6">
                  <div className="text-small font-semibold text-text-light/60 dark:text-text-dark/60 mb-3">
                    Verification Steps:
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-body text-text-light/80 dark:text-text-dark/80">
                    {tab.content.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </motion.div>
  );
}
