'use client';

import { motion } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';
import { Heading2, BodyText } from '@/components/Typography';
import { getAssetPath } from '@/lib/assetPath';
import ScrollRevealCard from '../ScrollRevealCard';

const contributionCards = [
  {
    id: 'camunda',
    title: 'Camunda Workflow Engine',
    description:
      'Contributed to BPMN workflow orchestration platform for business process automation. Designed and implemented complex multi-step processes with conditional branching, error handling, and rollback mechanisms. Built custom extensions and monitoring tools for process visibility.',
    tags: ['Camunda', 'BPMN', 'Workflow', 'Automation', 'XML', 'React'],
    image: getAssetPath('/BPMN/Camu.png'),
    visualPosition: 'right' as const,
    animationStyle: 'blur' as const,
  },
  {
    id: 'open-source',
    title: 'Open Source Contributions',
    description:
      'Fixed bugs and optimized performance in open source projects. Refactored legacy code, improved test coverage, and reduced technical debt. Contributed documentation, code reviews, and community support to help maintain sustainable codebases.',
    tags: ['Open Source', 'Bug Fixes', 'Performance', 'Refactoring'],
    image: getAssetPath('/BPMN/cont.jpg'),
    visualPosition: 'left' as const,
    animationStyle: 'rotate' as const,
  },
];

export default function ProductContributionSection() {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section id="product-contribution" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Heading2 className="mb-4">Product Contribution</Heading2>
          <BodyText className="text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            Contributing to workflow automation platforms and open source projects with bug fixes and optimizations
          </BodyText>
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {contributionCards.map((card) => (
            <ScrollRevealCard
              key={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
              imageSrc={card.image as string}
              visualPosition={card.visualPosition}
              animationStyle={card.animationStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
