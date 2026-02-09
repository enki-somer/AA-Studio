'use client';

import { motion } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';
import { Heading2, BodyText } from '@/components/Typography';
import ScrollRevealCard from '../ScrollRevealCard';

const dataCards = [
  {
    id: 'tableau',
    title: 'Tableau',
    description:
      'Built interactive dashboards and data visualizations for business intelligence. Designed calculated fields, parameters, and filters to enable self-service analytics. Focused on visual hierarchy and storytelling with data to communicate insights effectively.',
    tags: ['Tableau', 'Data Viz', 'Dashboards', 'BI'],
    jsonPath: '/lotties/tableau_dashboard.json',
    visualPosition: 'left' as const,
    animationStyle: 'slide' as const,
  },
  {
    id: 'powerbi',
    title: 'Power BI',
    description:
      'Developed enterprise reports and data models using DAX formulas for complex calculations. Created ETL pipelines with Power Query to transform and load data from multiple sources. Implemented row-level security and incremental refresh for performance optimization.',
    tags: ['Power BI', 'DAX', 'ETL', 'Data Modeling'],
    jsonPath: '/lotties/powerbi_flow.json',
    visualPosition: 'right' as const,
    animationStyle: 'slide' as const,
  },
];

export default function DataAnalysisSection() {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section
      id="data-analysis"
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
          <Heading2 className="mb-4">Data Analysis</Heading2>
          <BodyText className="text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            Transforming raw data into actionable insights through interactive visualizations and business intelligence
          </BodyText>
        </motion.div>

        <div className="space-y-8 md:space-y-0">
          {dataCards.map((card, index) => (
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
