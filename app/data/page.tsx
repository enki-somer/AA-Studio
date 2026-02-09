'use client';

import Section from '@/components/Section';
import { Heading2, Heading3, BodyText, InlineCode } from '@/components/Typography';
import JsonVisual from '@/components/about/JsonVisual';
import BeforeAfter from '@/components/case-studies/BeforeAfter';
import DataFlow from '@/components/case-studies/DataFlow';
import DataPipelineFlow from '@/components/data/DataPipelineFlow';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';

const pipelineStages = [
  {
    id: 'ingestion',
    label: 'Data Ingestion',
    description: 'Raw data enters the system from multiple sources: application databases, external APIs, file uploads, and event streams. Ingestion validates schemas, handles various formats, and queues data for processing.',
    techs: ['PostgreSQL', 'REST APIs', 'CSV/JSON', 'Event Streams'],
  },
  {
    id: 'validation',
    label: 'Quality Validation',
    description: 'Data quality checks run automatically: null value detection, referential integrity verification, business rule validation, and anomaly detection. Issues are logged, stakeholders notified, and bad data quarantined.',
    techs: ['Python', 'Great Expectations', 'Data Profiling', 'Alerting'],
  },
  {
    id: 'transformation',
    label: 'ETL Transformation',
    description: 'Data is cleaned, normalized, and transformed into analytics-ready formats. Calculations are performed, dimensions are enriched, and aggregations are pre-computed. Star schemas optimize query performance.',
    techs: ['Python/Pandas', 'SQL', 'dbt', 'Airflow'],
  },
  {
    id: 'storage',
    label: 'Data Warehouse',
    description: 'Transformed data is stored in optimized schemas designed for analytics workloads. Partitioning improves query performance. Materialized views pre-aggregate common calculations. Indexes accelerate filtering and joining.',
    techs: ['PostgreSQL', 'Star Schema', 'Indexes', 'Materialized Views'],
  },
  {
    id: 'analytics',
    label: 'Analytics Layer',
    description: 'Business intelligence tools connect to the data warehouse. Dashboards, reports, and ad-hoc queries enable data-driven decision making. APIs expose data to operational systems and custom applications.',
    techs: ['Power BI', 'Tableau', 'REST APIs', 'GraphQL'],
  },
];

const qualityMetricsFlow = {
  nodes: [
    { id: 'source', label: 'Raw Data', description: 'Multiple sources' },
    { id: 'validate', label: 'Validation', description: 'Schema & rules' },
    { id: 'profile', label: 'Profiling', description: 'Statistical analysis' },
    { id: 'alert', label: 'Alerting', description: 'Issue notification' },
    { id: 'quarantine', label: 'Quarantine', description: 'Bad data isolation' },
  ],
  edges: [
    { from: 'source', to: 'validate' },
    { from: 'validate', to: 'profile' },
    { from: 'profile', to: 'alert' },
    { from: 'alert', to: 'quarantine' },
  ],
};

export default function Data() {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <Section
      title="Data Engineering & Analytics"
      subtitle="Building reliable data pipelines from operational systems to strategic insights"
    >
      <div className="max-w-wide mx-auto space-y-16">
        {/* Hero Visual */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={fastTransition}
          className="w-full h-64 md:h-80 rounded-xl overflow-hidden elevation-3 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10"
        >
          <JsonVisual
            jsonPath="/lotties/powerbi_flow.json"
            alt="Data pipeline architecture"
            className="w-full h-full p-8"
          />
        </motion.div>

        {/* Opening Narrative */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-content mx-auto"
        >
          <BodyText className="text-lg leading-relaxed">
            Data is only valuable when it&apos;s accurate, accessible, and actionable. I design systems with data as a first-class concern: normalized schemas for integrity, automated quality pipelines for reliability, and optimized storage for analytics performance. Applications are built to generate analytics-ready data from day one, enabling organizations to transition from operational usage to strategic insights without costly redesign phases.
          </BodyText>
        </motion.div>

        {/* Data Pipeline Flow */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-4xl mx-auto"
        >
          <Heading2 className="mb-8 text-center">End-to-End Data Pipeline</Heading2>
          <BodyText className="text-center mb-8 text-text-light/80 dark:text-text-dark/80">
            A production data pipeline progresses through these stages, transforming raw operational data into analytics-ready insights.
          </BodyText>
          <DataPipelineFlow stages={pipelineStages} />
        </motion.div>

        {/* Quality Pipelines Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={fastTransition}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Content */}
            <div className="space-y-4">
              <Heading2>Data Quality Pipelines</Heading2>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                Data quality isn&apos;t validated once—it&apos;s a continuous process. Automated pipelines check incoming data at ingestion, flag anomalies using statistical profiling, and maintain complete data lineage for debugging and compliance.
              </BodyText>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                Python scripts run validation rules: null checks, referential integrity, business constraints, and outlier detection. When issues are detected, the system logs detailed diagnostics, notifies stakeholders via alerts, and quarantines problematic data to prevent downstream contamination.
              </BodyText>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                The goal is catching data quality issues early, before they propagate through reports and analytics, creating misleading insights or eroding trust in data systems.
              </BodyText>
            </div>

            {/* Visual */}
            <div>
              <DataFlow nodes={qualityMetricsFlow.nodes} edges={qualityMetricsFlow.edges} />
            </div>
          </motion.div>
        </div>

        {/* Analytics Tools Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={fastTransition}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Visual - Left side */}
            <div className="order-2 md:order-1">
              <div className="h-64 md:h-80 rounded-xl overflow-hidden elevation-2 bg-gradient-to-br from-accent/5 to-accent-muted/5 dark:from-accent/10 dark:to-accent-muted/10">
                <JsonVisual
                  jsonPath="/lotties/tableau_dashboard.json"
                  alt="Analytics dashboard visualization"
                  className="w-full h-full p-6"
                />
              </div>
            </div>

            {/* Content - Right side */}
            <div className="order-1 md:order-2 space-y-4">
              <Heading2>Analytics & Reporting Tools</Heading2>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                Tableau and Power BI are powerful visualization platforms, but they&apos;re only as effective as the data infrastructure beneath them. I build the data warehouses, ETL pipelines, and APIs that these tools consume.
              </BodyText>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                The engineering work involves designing star schemas for efficient querying, optimizing SQL for large datasets, and ensuring data freshness through scheduled pipelines. Python scripts automate transformations, handle edge cases, and maintain quality.
              </BodyText>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                The dashboards business users see are the final presentation layer. The real work happens in the data pipeline: reliable ingestion, consistent transformation, and optimized storage.
              </BodyText>
            </div>
          </motion.div>
        </div>

        {/* Database Design Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={fastTransition}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Content */}
            <div className="space-y-4">
              <Heading2>Database Design & Optimization</Heading2>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                PostgreSQL and MySQL are powerful relational databases, but they require careful design to perform well at scale. Schema design balances normalization for data integrity with strategic denormalization for read performance.
              </BodyText>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                Query optimization starts with understanding execution plans. Indexes accelerate filtering and joins, but over-indexing slows writes. For analytical workloads, materialized views pre-compute aggregations. Partitioning enables efficient querying of historical data.
              </BodyText>
              <BodyText className="leading-relaxed text-text-light/90 dark:text-text-dark/90">
                For transactional systems, the focus shifts to reducing lock contention, optimizing write paths, and ensuring ACID compliance for financial and operational consistency.
              </BodyText>
            </div>

            {/* Visual */}
            <div>
              <div className="h-64 md:h-80 rounded-xl overflow-hidden elevation-2 bg-gradient-to-br from-accent/5 to-accent-muted/5 dark:from-accent/10 dark:to-accent-muted/10">
                <JsonVisual
                  jsonPath="/lotties/fullstack_arch_flow.json"
                  alt="Database architecture"
                  className="w-full h-full p-6"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Before/After - Schema Design */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-4xl mx-auto"
        >
          <Heading2 className="mb-8 text-center">Schema Design Impact</Heading2>
          <BeforeAfter
            before={{
              title: 'Ad-hoc Schema',
              content: (
                <div className="space-y-3 text-small">
                  <p>• Denormalized tables with redundant data</p>
                  <p>• Missing foreign key constraints</p>
                  <p>• No indexes on frequently queried columns</p>
                  <p>• Queries scanning full tables (10+ seconds)</p>
                  <p>• Data inconsistencies from manual updates</p>
                  <p>• No clear data lineage or audit trail</p>
                </div>
              ),
            }}
            after={{
              title: 'Optimized Design',
              content: (
                <div className="space-y-3 text-small">
                  <p>• Normalized schema with referential integrity</p>
                  <p>• Strategic indexes on query patterns</p>
                  <p>• Materialized views for common aggregations</p>
                  <p>• Queries returning in milliseconds</p>
                  <p>• Automated data quality validation</p>
                  <p>• Complete audit logging for compliance</p>
                </div>
              ),
            }}
          />
        </motion.div>

        {/* Data-Driven Decision Making */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-content mx-auto"
        >
          <Heading2 className="mb-6">Engineering for Analytics</Heading2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-500/20 elevation-1">
              <Heading3 className="mb-3 text-blue-600 dark:text-blue-400">
                Analytics-First Schema Design
              </Heading3>
              <BodyText className="text-text-light/80 dark:text-text-dark/80">
                Operational databases are designed for transactional consistency. Analytics databases are designed for query performance. I build both: OLTP systems with normalized schemas for data integrity, and OLAP warehouses with star schemas optimized for aggregation and reporting. ETL pipelines bridge the two, transforming operational data into analytics-ready formats on scheduled intervals.
              </BodyText>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/5 to-teal-500/5 dark:from-green-500/10 dark:to-teal-500/10 border border-green-500/20 elevation-1">
              <Heading3 className="mb-3 text-green-600 dark:text-green-400">
                Data Quality as Code
              </Heading3>
              <BodyText className="text-text-light/80 dark:text-text-dark/80">
                Data quality rules are version-controlled Python code, not manual spreadsheet checks. Validation logic runs automatically in pipelines: null checks, range validation, referential integrity, and business rule enforcement. Test suites verify transformations produce expected outputs. This approach makes data quality reproducible, testable, and maintainable—just like application code.
              </BodyText>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-500/20 elevation-1">
              <Heading3 className="mb-3 text-purple-600 dark:text-purple-400">
                Self-Service Analytics Infrastructure
              </Heading3>
              <BodyText className="text-text-light/80 dark:text-text-dark/80">
                Business users need data access without engineering bottlenecks. I build self-service infrastructure: well-documented APIs with clear schemas, curated datasets in analytics tools, and query-optimized views that abstract complexity. The goal is enabling analysts and decision-makers to answer their own questions while maintaining data governance and security.
              </BodyText>
            </div>
          </div>
        </motion.div>

        {/* Measured Outcomes */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-content mx-auto bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-xl p-8 elevation-2"
        >
          <Heading2 className="mb-6 text-center">Data Pipeline Outcomes</Heading2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100x</div>
              <BodyText className="text-small">Query performance improvement through indexing and materialized views</BodyText>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <BodyText className="text-small">Data quality score through automated validation pipelines</BodyText>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15min</div>
              <BodyText className="text-small">Dashboard refresh latency from daily batch to near real-time</BodyText>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
