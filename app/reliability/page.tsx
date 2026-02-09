'use client';

import Section from '@/components/Section';
import { Heading2, Heading3, BodyText, InlineCode } from '@/components/Typography';
import JsonVisual from '@/components/about/JsonVisual';
import BeforeAfter from '@/components/case-studies/BeforeAfter';
import SystemFlow from '@/components/case-studies/SystemFlow';
import TestingPyramid from '@/components/reliability/TestingPyramid';
import ReliabilityLayers from '@/components/reliability/ReliabilityLayers';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';

const cicdPipeline = [
  {
    title: 'Code Commit & Branch',
    description: 'Developer pushes code to feature branch. Pull request is created with description and linked issues. Code review process begins.',
  },
  {
    title: 'Automated Tests',
    description: 'CI pipeline runs: unit tests verify business logic, integration tests check API contracts, linters enforce code style, type checkers validate TypeScript/Python types.',
  },
  {
    title: 'Build & Artifact Creation',
    description: 'Application builds successfully. Docker images are created and tagged. Artifacts are stored in registry. Dependencies are resolved and cached.',
  },
  {
    title: 'Staging Deployment',
    description: 'Approved PRs deploy to staging environment. E2E tests run against real services. Performance benchmarks are measured. Smoke tests verify critical paths.',
  },
  {
    title: 'Production Release',
    description: 'Merged to main branch triggers production deployment. Blue-green or canary strategy ensures zero downtime. Feature flags control gradual rollout. Monitoring alerts watch for anomalies.',
  },
];

export default function Reliability() {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <Section
      title="Reliability Engineering"
      subtitle="Building systems that don't break, deploying code that's maintainable, and creating confidence through testing"
    >
      <div className="max-w-wide mx-auto space-y-16">
        {/* Hero Visual */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={fastTransition}
          className="w-full h-64 md:h-80 rounded-xl overflow-hidden elevation-3 bg-gradient-to-br from-green-500/5 to-teal-500/5 dark:from-green-500/10 dark:to-teal-500/10"
        >
          <JsonVisual
            jsonPath="/lotties/tableau_dashboard.json"
            alt="Reliability and deployment architecture"
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
            Reliability isn't an afterthought—it's a discipline that shapes architecture from day one. Through comprehensive testing strategies, systematic performance optimization, automated deployment pipelines, and observability-first design, I build systems that provide confidence through measurable quality. When failures happen (and they will), well-engineered systems degrade gracefully and provide clear diagnostic paths for rapid recovery.
          </BodyText>
        </motion.div>

        {/* Reliability Layers */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
        >
          <Heading2 className="mb-8 text-center">Reliability Stack</Heading2>
          <BodyText className="text-center mb-8 max-w-3xl mx-auto text-text-light/80 dark:text-text-dark/80">
            Reliability is built in layers, each building on the foundation below. From comprehensive testing through performance optimization, deployment automation, and runtime monitoring, each layer contributes to system confidence.
          </BodyText>
          <ReliabilityLayers />
        </motion.div>

        {/* Testing Strategy - Pyramid */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">Testing Pyramid</Heading2>
          <BodyText className="text-center mb-8 max-w-3xl mx-auto text-text-light/80 dark:text-text-dark/80">
            Tests are documentation that happens to run. The pyramid illustrates the ideal distribution: a broad base of fast unit tests, a middle layer of integration tests, and a small set of E2E tests for critical workflows.
          </BodyText>
          <TestingPyramid />
        </motion.div>

        {/* Testing Tools and Frameworks */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={fastTransition}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/5 to-blue-500/10 dark:from-blue-500/10 dark:to-blue-500/20 border border-blue-500/20 elevation-1">
              <Heading3 className="mb-3 text-blue-600 dark:text-blue-400">Unit Testing</Heading3>
              <BodyText className="text-small text-text-light/80 dark:text-text-dark/80 mb-3">
                Verify individual functions and business logic in isolation. Fast execution enables rapid feedback during development.
              </BodyText>
              <div className="flex flex-wrap gap-2">
                <InlineCode className="text-xs">Jest</InlineCode>
                <InlineCode className="text-xs">pytest</InlineCode>
                <InlineCode className="text-xs">Flutter Test</InlineCode>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/5 to-green-500/10 dark:from-green-500/10 dark:to-green-500/20 border border-green-500/20 elevation-1">
              <Heading3 className="mb-3 text-green-600 dark:text-green-400">Integration Testing</Heading3>
              <BodyText className="text-small text-text-light/80 dark:text-text-dark/80 mb-3">
                Test component interactions: API endpoints, database queries, and service integrations. Verify contracts between systems.
              </BodyText>
              <div className="flex flex-wrap gap-2">
                <InlineCode className="text-xs">Supertest</InlineCode>
                <InlineCode className="text-xs">Testcontainers</InlineCode>
                <InlineCode className="text-xs">Postman</InlineCode>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/5 to-purple-500/10 dark:from-purple-500/10 dark:to-purple-500/20 border border-purple-500/20 elevation-1">
              <Heading3 className="mb-3 text-purple-600 dark:text-purple-400">E2E Testing</Heading3>
              <BodyText className="text-small text-text-light/80 dark:text-text-dark/80 mb-3">
                Validate critical user workflows end-to-end. Slow but high confidence. Focus on business-critical paths.
              </BodyText>
              <div className="flex flex-wrap gap-2">
                <InlineCode className="text-xs">Playwright</InlineCode>
                <InlineCode className="text-xs">Cypress</InlineCode>
                <InlineCode className="text-xs">Selenium</InlineCode>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Performance Engineering */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={fastTransition}
            className="space-y-8"
          >
            <div className="text-center">
              <Heading2 className="mb-4">Performance Engineering</Heading2>
              <BodyText className="max-w-3xl mx-auto text-text-light/80 dark:text-text-dark/80">
                Performance is a feature, not an afterthought. Systematic optimization guided by measurement and profiling.
              </BodyText>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10 border border-orange-500/20 elevation-1">
                  <Heading3 className="mb-3 text-orange-600 dark:text-orange-400">Frontend Optimization</Heading3>
                  <ul className="space-y-2 text-small text-text-light/80 dark:text-text-dark/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Bundle size reduction through code splitting and tree shaking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Lazy loading components and routes for faster initial load</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Image optimization with WebP and responsive sizing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Memoization and virtualization for large lists</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-500/20 elevation-1">
                  <Heading3 className="mb-3 text-cyan-600 dark:text-cyan-400">Backend Optimization</Heading3>
                  <ul className="space-y-2 text-small text-text-light/80 dark:text-text-dark/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Database query optimization through explain plans and indexing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Caching strategies with Redis for frequently accessed data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Connection pooling and efficient resource management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Asynchronous processing for long-running operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Performance Before/After */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-4xl mx-auto"
        >
          <Heading2 className="mb-8 text-center">Performance Impact</Heading2>
          <BeforeAfter
            before={{
              title: 'Unoptimized System',
              content: (
                <div className="space-y-3 text-small">
                  <p>• Initial page load: 8.5 seconds</p>
                  <p>• Time to Interactive: 12 seconds</p>
                  <p>• API response time: 2.3 seconds (p95)</p>
                  <p>• Bundle size: 2.8 MB uncompressed</p>
                  <p>• Database queries: Full table scans</p>
                  <p>• No caching layer</p>
                </div>
              ),
            }}
            after={{
              title: 'Optimized System',
              content: (
                <div className="space-y-3 text-small">
                  <p>• Initial page load: 1.2 seconds</p>
                  <p>• Time to Interactive: 2.1 seconds</p>
                  <p>• API response time: 180ms (p95)</p>
                  <p>• Bundle size: 420 KB with code splitting</p>
                  <p>• Database queries: Indexed, sub-10ms</p>
                  <p>• Redis caching with 95% hit rate</p>
                </div>
              ),
            }}
          />
        </motion.div>

        {/* CI/CD Pipeline */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-4xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">CI/CD Pipeline</Heading2>
          <BodyText className="text-center mb-8 text-text-light/80 dark:text-text-dark/80">
            Automated deployment pipeline ensures code quality, enables rapid iteration, and reduces deployment risk through systematic validation and staged rollouts.
          </BodyText>
          <SystemFlow steps={cicdPipeline} />
        </motion.div>

        {/* Monitoring and Observability */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-content mx-auto"
        >
          <Heading2 className="mb-6">Observability Architecture</Heading2>
          <BodyText className="mb-8 text-text-light/80 dark:text-text-dark/80">
            Systems fail. When they do, observability enables rapid diagnosis and recovery. I instrument applications with structured logging, metrics collection, and distributed tracing to provide complete visibility into system behavior.
          </BodyText>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 dark:from-indigo-500/10 dark:to-indigo-500/20 border border-indigo-500/20 elevation-1">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 dark:bg-indigo-500/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <Heading3 className="mb-3 text-indigo-600 dark:text-indigo-400">Structured Logging</Heading3>
              <BodyText className="text-small text-text-light/80 dark:text-text-dark/80">
                JSON-formatted logs with correlation IDs, structured fields, and severity levels. Enables efficient querying and debugging across distributed systems.
              </BodyText>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-500/5 to-pink-500/10 dark:from-pink-500/10 dark:to-pink-500/20 border border-pink-500/20 elevation-1">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 dark:bg-pink-500/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <Heading3 className="mb-3 text-pink-600 dark:text-pink-400">Metrics & Dashboards</Heading3>
              <BodyText className="text-small text-text-light/80 dark:text-text-dark/80">
                Time-series metrics tracking latency, throughput, error rates, and resource utilization. Custom dashboards provide at-a-glance system health visibility.
              </BodyText>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-teal-500/5 to-teal-500/10 dark:from-teal-500/10 dark:to-teal-500/20 border border-teal-500/20 elevation-1">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 dark:bg-teal-500/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <Heading3 className="mb-3 text-teal-600 dark:text-teal-400">Distributed Tracing</Heading3>
              <BodyText className="text-small text-text-light/80 dark:text-text-dark/80">
                End-to-end request tracing across services. Visualize request flows, identify bottlenecks, and understand dependencies in distributed architectures.
              </BodyText>
            </div>
          </div>
        </motion.div>

        {/* Reliability Principles */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-content mx-auto bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 rounded-xl p-8 elevation-2"
        >
          <Heading2 className="mb-6 text-center">Core Principles</Heading2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Design for Failure',
                text: 'Assume everything will fail: network calls, databases, external services. Build retry logic, fallbacks, and graceful degradation.',
              },
              {
                title: 'Measure Everything',
                text: "You can't improve what you don't measure. Instrument systems with metrics, logging, and tracing from day one.",
              },
              {
                title: 'Automate Repetition',
                text: 'Manual processes are error-prone. Automate testing, deployment, and monitoring to reduce human error and increase consistency.',
              },
              {
                title: 'Fast Feedback Loops',
                text: 'The faster you detect issues, the cheaper they are to fix. Invest in CI/CD, automated testing, and real-time monitoring.',
              },
            ].map((principle, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center font-bold text-accent">
                  {idx + 1}
                </div>
                <div>
                  <Heading3 className="mb-2 text-text-light dark:text-text-dark">{principle.title}</Heading3>
                  <BodyText className="text-small text-text-light/80 dark:text-text-dark/80">
                    {principle.text}
                  </BodyText>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Measured Outcomes */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-content mx-auto bg-gradient-to-r from-blue-500/10 to-green-500/10 dark:from-blue-500/20 dark:to-green-500/20 rounded-xl p-8 elevation-2"
        >
          <Heading2 className="mb-6 text-center">Reliability Metrics</Heading2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <BodyText className="text-small">System uptime through automated monitoring and deployment strategies</BodyText>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <BodyText className="text-small">Code coverage through comprehensive testing at all layers</BodyText>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">&lt;10min</div>
              <BodyText className="text-small">Mean time to recovery through observability and automated alerts</BodyText>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
