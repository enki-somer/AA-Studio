'use client';

import { motion } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';
import { Heading2, BodyText } from '@/components/Typography';
import ScrollRevealCard from '../ScrollRevealCard';

const powerPlatformCards = [
  {
    id: 'powerapps',
    title: 'Power Apps Development',
    description:
      'Architected and delivered enterprise-grade business applications using Microsoft Power Apps (Canvas & Model-Driven), building complex solutions such as disciplinary management systems, project management platforms, and operational tracking tools. Designed scalable data architectures integrating SharePoint, SQL Server, and enterprise APIs, implementing advanced business logic, role-based access control, validation frameworks, and performance-optimized UI/UX patterns to support mission-critical organizational workflows.',
    tags: ['Power Apps', 'Canvas Apps', 'Model-driven', 'Low-code'],
    jsonPath: '/lotties/powerapps_canvas.json',
    visualPosition: 'right' as const,
    animationStyle: 'scale' as const,
  },
  {
    id: 'powerautomate',
    title: 'Automation & Intelligent Process Optimization',
    description:
      'Engineered end-to-end automation ecosystems leveraging Power Automate, Python scripting, and AI-assisted workflows to eliminate manual bottlenecks and streamline enterprise operations, successfully automating approximately 75% of repetitive operational tasks. Designed cross-platform integrations, intelligent approval pipelines, notification orchestration, and data synchronization mechanisms, transforming fragmented manual processes into scalable, auditable, and highly efficient digital workflows that significantly improved operational clarity and data consistency.',
    tags: ['Power Automate', 'Cloud Flows', 'RPA', 'MS365'],
    jsonPath: '/lotties/powerautomate_flow.json',
    visualPosition: 'left' as const,
    animationStyle: 'scale' as const,
  },
];

export default function PowerPlatformSection() {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section id="power-platform" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Heading2 className="mb-4">Power Platform & MS365</Heading2>
          <BodyText className="text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            Rapid application development and workflow automation using Microsoft's low-code platform
          </BodyText>
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {powerPlatformCards.map((card) => (
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
