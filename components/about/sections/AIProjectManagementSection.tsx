'use client';

import { motion } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';
import { Heading2, BodyText } from '@/components/Typography';
import ScrollRevealCard from '../ScrollRevealCard';

const aiPmCards = [
  {
    id: 'ai-vibe-coding',
    title: 'AI & Prompt Engineering',
    description:
      'Leveraged large language models for code generation and AI-assisted development. Crafted effective prompts for technical documentation, code reviews, and system design. Integrated LLM APIs into applications for intelligent features and context-aware automation.',
    tags: ['AI', 'LLMs', 'Prompt Engineering', 'Vibe Coding'],
    jsonPath: '/lotties/brain.json',
    visualPosition: 'left' as const,
    animationStyle: 'translateUp' as const,
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description:
      'Orchestrated full-system delivery from requirements to production deployment. Coordinated cross-functional teams, managed technical roadmaps, and ensured alignment between business goals and technical implementation. Established processes for code reviews, testing, and continuous integration.',
    tags: ['Project Management', 'Team Coordination', 'Delivery', 'CI/CD'],
    jsonPath: '/lotties/project.json',
    visualPosition: 'right' as const,
    animationStyle: 'translateUp' as const,
  },
];

export default function AIProjectManagementSection() {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section
      id="ai-project-management"
      className="py-16 md:py-24 bg-surface-light/30 dark:bg-surface-dark/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Heading2 className="mb-4">AI & Project Management</Heading2>
          <BodyText className="text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            Combining AI-assisted development with full-system orchestration and team coordination
          </BodyText>
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {aiPmCards.map((card) => (
            <ScrollRevealCard
              key={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
              jsonPath={card.jsonPath}
              visualPosition={card.visualPosition}
              animationStyle={card.animationStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
