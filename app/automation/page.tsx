'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { Heading2, Heading3, BodyText, InlineCode } from '@/components/Typography';
import JsonVisual from '@/components/about/JsonVisual';
import SystemFlow from '@/components/case-studies/SystemFlow';
import CodeSnippet from '@/components/automation/CodeSnippet';
import BpmnPlaceholder from '@/components/automation/BpmnPlaceholder';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';

const pythonCode = `<span class="text-purple-400">import</span> <span class="text-blue-400">pytesseract</span>
<span class="text-purple-400">from</span> <span class="text-blue-400">PIL</span> <span class="text-purple-400">import</span> Image
<span class="text-purple-400">import</span> <span class="text-blue-400">pandas</span> <span class="text-purple-400">as</span> <span class="text-blue-400">pd</span>
<span class="text-purple-400">import</span> <span class="text-blue-400">re</span>

<span class="text-purple-400">def</span> <span class="text-yellow-400">extract_coordinates_from_image</span>(image_path):
    <span class="text-gray-500"># Load and process PNG dataset</span>
    img = Image.<span class="text-orange-400">open</span>(image_path)
    
    <span class="text-gray-500"># Extract text with bounding boxes</span>
    ocr_data = pytesseract.<span class="text-orange-400">image_to_data</span>(
        img, 
        output_type=pytesseract.Output.DICT
    )
    
    <span class="text-gray-500"># Parse coordinate patterns (lat, lon)</span>
    coordinates = []
    pattern = <span class="text-green-400">r'(-?\d+\.\d+),\s*(-?\d+\.\d+)'</span>
    
    <span class="text-purple-400">for</span> i, text <span class="text-purple-400">in</span> <span class="text-orange-400">enumerate</span>(ocr_data[<span class="text-green-400">'text'</span>]):
        matches = re.<span class="text-orange-400">findall</span>(pattern, text)
        <span class="text-purple-400">if</span> matches:
            coordinates.<span class="text-orange-400">append</span>({
                <span class="text-green-400">'lat'</span>: <span class="text-orange-400">float</span>(matches[<span class="text-cyan-400">0</span>][<span class="text-cyan-400">0</span>]),
                <span class="text-green-400">'lon'</span>: <span class="text-orange-400">float</span>(matches[<span class="text-cyan-400">0</span>][<span class="text-cyan-400">1</span>]),
                <span class="text-green-400">'confidence'</span>: ocr_data[<span class="text-green-400">'conf'</span>][i]
            })
    
    <span class="text-gray-500"># Export to structured format</span>
    df = pd.<span class="text-orange-400">DataFrame</span>(coordinates)
    df.<span class="text-orange-400">to_csv</span>(<span class="text-green-400">'extracted_coordinates.csv'</span>)
    <span class="text-purple-400">return</span> df`;

const automationTabs = [
  {
    value: 'ai-automation',
    label: 'AI-Powered Automation',
    visualType: 'code' as const,
    content: {
      intro: 'OCR automation extracts structured data from scanned documents and images, handling bilingual text (Arabic/English) through preprocessing and custom-trained models.',
      sections: [
        {
          title: 'Image Preprocessing',
          text: 'Enhance image quality before OCR: noise reduction, contrast adjustment, binarization, and deskewing. Preprocessing improves recognition accuracy from 70% to 95%+.',
        },
        {
          title: 'Bilingual OCR Training',
          text: 'Custom-trained Tesseract models for Arabic and English text recognition. Fine-tuned on domain-specific datasets (invoices, forms) to extract coordinates, dates, and structured fields.',
        },
        {
          title: 'Confidence Validation',
          text: 'OCR confidence scoring identifies uncertain extractions for manual review. Regex patterns validate coordinate formats. Batch processing with error logs ensures data quality.',
        },
      ],
    },
  },
  {
    value: 'bpmn-orchestration',
    label: 'BPMN Orchestration',
    visualType: 'bpmn' as const,
    content: {
      intro: 'Visual workflow orchestration using BPMN diagrams that serve as both documentation and executable code.',
      sections: [
        {
          title: 'Visual Workflows',
          text: 'BPMN diagrams serve as both documentation and executable code. Orchestrate approval chains, data transformations, API integrations, and error handling visually.',
        },
        {
          title: 'Version Control',
          text: 'BPMN files in Git enable branch-based development and code review. Python tooling validates structure and generates test cases automatically.',
        },
        {
          title: 'Process Monitoring',
          text: 'Real-time visibility into execution with React-based UIs. Track active instances, identify bottlenecks, and measure cycle times for continuous improvement.',
        },
      ],
    },
  },
  {
    value: 'power-platform',
    label: 'Power Platform Integration',
    visualType: 'json' as const,
    jsonPath: '/lotties/powerapps_canvas.json',
    content: {
      intro: 'Building robust APIs, data pipelines, and governance that make low-code Power Platform reliable at enterprise scale.',
      sections: [
        {
          title: 'API Design',
          text: 'Well-documented REST APIs with OpenAPI specs, backward compatibility, and optimized query patterns. Flat structures and clear errors for easy low-code consumption.',
        },
        {
          title: 'Data Pipelines',
          text: 'ETL pipelines with star schemas and materialized views feed Power BI dashboards. Scheduled runs handle incremental updates and maintain quality.',
        },
        {
          title: 'Governance',
          text: 'Environment strategies, connection management, and reusable components. Monitoring tracks usage and performance while maintaining security.',
        },
      ],
    },
  },
  {
    value: 'patterns',
    label: 'Automation Patterns',
    visualType: 'json' as const,
    jsonPath: '/lotties/powerautomate_flow.json',
    content: {
      intro: 'Core patterns that ensure automation systems are reliable, observable, and resilient to failure across all platforms.',
      sections: [
        {
          title: 'Idempotency & Retry',
          text: 'Safe retries with unique IDs, exponential backoff, and dead letter queues. Gracefully handle transient failures without duplicate processing.',
        },
        {
          title: 'Event-Driven',
          text: 'Real-time reactions to changes via event streams. Asynchronous processing with message brokers for durability and ordering guarantees.',
        },
        {
          title: 'Observability',
          text: 'Structured logging with correlation IDs, metrics tracking, and distributed tracing. Clear diagnostics transform black boxes into debuggable systems.',
        },
      ],
    },
  },
];

const workflowSteps = [
  {
    title: 'Event Trigger',
    description: 'System detects an event that requires automation: document upload, data change, scheduled interval, or external webhook.',
  },
  {
    title: 'Validation & Routing',
    description: 'Input validation ensures data integrity. Business rules determine workflow routing. Invalid inputs are rejected early with clear error messages.',
  },
  {
    title: 'Processing & Transformation',
    description: 'Core automation logic executes: AI extraction, data transformation, API calls, or business calculations. Operations are logged and monitored.',
  },
  {
    title: 'Integration & Persistence',
    description: 'Results are persisted to databases, sent to downstream systems via APIs, or trigger subsequent workflows. Transactions ensure data consistency.',
  },
  {
    title: 'Notification & Monitoring',
    description: 'Stakeholders receive notifications on completion or errors. Metrics are recorded for monitoring dashboards. Failed operations enter retry queues or alerting systems.',
  },
];

export default function Automation() {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <Section
      title="Automation & Intelligent Systems"
      subtitle="Engineering scalable automation with AI, workflow orchestration, and integration platforms"
    >
      <div className="max-w-wide mx-auto space-y-16">
        {/* Hero Visual */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={fastTransition}
          className="w-full h-64 md:h-80 rounded-xl overflow-hidden elevation-3 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10"
        >
          <JsonVisual
            jsonPath="/lotties/powerautomate_flow.json"
            alt="Automation workflow architecture"
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
            Automation eliminates repetitive manual work through intelligent systems. From OCR document processing that handles bilingual Arabic/English text, to BPMN workflow orchestration, to low-code Power Platform integration—I architect solutions that reduce manual intervention by 80% while maintaining accuracy through preprocessing, validation, and error handling. The result is measurable efficiency gains and freed capacity for strategic work.
          </BodyText>
        </motion.div>

        {/* Automation Domains - Tabs */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-8 text-center">Automation Domains</Heading2>
          
          <Tabs.Root defaultValue="ai-automation" className="w-full">
            <Tabs.List className="flex flex-wrap gap-2 mb-8 border-b border-accent-muted/20 pb-2 justify-center">
              {automationTabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className="px-4 py-2 text-small font-medium rounded-t-lg transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 data-[state=active]:bg-accent data-[state=active]:text-base-dark data-[state=active]:shadow-accent-glow dark:data-[state=active]:shadow-accent-glow-dark data-[state=active]:font-semibold data-[state=active]:scale-105 data-[state=inactive]:text-text-light/70 data-[state=inactive]:dark:text-text-dark/70 data-[state=inactive]:hover:text-accent data-[state=inactive]:hover:bg-accent/10 dark:data-[state=inactive]:hover:bg-accent/15 data-[state=inactive]:hover:scale-105"
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {automationTabs.map((tab) => (
              <Tabs.Content key={tab.value} value={tab.value} className="mt-6">
                <div className="space-y-8">
                  {/* Large Visual Hero */}
                  {tab.visualType === 'code' ? (
                    <CodeSnippet 
                      code={pythonCode}
                      language="python"
                      className="h-96 md:h-[500px]"
                    />
                  ) : tab.visualType === 'bpmn' ? (
                    <BpmnPlaceholder className="h-96 md:h-[500px]" />
                  ) : (
                    <motion.div
                      initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : { opacity: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={fastTransition}
                      className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden elevation-3 bg-gradient-to-br from-accent/5 to-accent-muted/5 dark:from-accent/10 dark:to-accent-muted/10"
                    >
                      <JsonVisual
                        jsonPath={tab.jsonPath!}
                        alt={`${tab.label} visualization`}
                        className="w-full h-full p-12"
                      />
                    </motion.div>
                  )}

                  {/* Intro */}
                  <div className="max-w-4xl mx-auto text-center">
                    <BodyText className="text-xl font-medium text-accent leading-relaxed">
                      {tab.content.intro}
                    </BodyText>
                  </div>

                  {/* Content Cards Grid */}
                  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {tab.content.sections.map((section, idx) => (
                      <motion.div
                        key={idx}
                        initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...fastTransition, delay: idx * 0.1 }}
                        className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/10 dark:from-white/5 dark:to-white/10 border border-accent/20 elevation-1 hover:elevation-2 transition-all duration-300"
                      >
                        <Heading3 className="mb-3 text-accent">
                          {section.title}
                        </Heading3>
                        <BodyText className="text-small leading-relaxed text-text-light/90 dark:text-text-dark/90">
                          {section.text}
                        </BodyText>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </motion.div>

        {/* Workflow Pipeline */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-4xl mx-auto"
        >
          <Heading2 className="mb-8 text-center">Automation Pipeline Architecture</Heading2>
          <BodyText className="text-center mb-8 text-text-light/80 dark:text-text-dark/80">
            A typical automation workflow progresses through these stages, with error handling and observability at each step.
          </BodyText>
          <SystemFlow steps={workflowSteps} />
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-content mx-auto"
        >
          <Heading2 className="mb-6">Engineering Principles</Heading2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Preprocessing First',
                text: 'Clean and enhance images before OCR: denoise, adjust contrast, deskew. Quality input dramatically improves extraction accuracy.',
              },
              {
                title: 'Custom Model Training',
                text: 'Train Tesseract on domain-specific datasets. Generic OCR models struggle with specialized formats—custom training ensures reliable extraction.',
              },
              {
                title: 'Confidence-Based Validation',
                text: 'Use OCR confidence scores to flag uncertain extractions. High-confidence results auto-process; low-confidence triggers manual review.',
              },
              {
                title: 'Gradual Automation',
                text: 'Start with human-in-the-loop validation. As confidence grows, increase automation thresholds. Maintain manual override for edge cases.',
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-accent/5 to-accent-muted/5 dark:from-accent/10 dark:to-accent-muted/10 border border-accent/20 elevation-1"
              >
                <Heading3 className="mb-3 text-accent">{principle.title}</Heading3>
                <BodyText className="text-text-light/80 dark:text-text-dark/80">
                  {principle.text}
                </BodyText>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Real-World Impact */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-content mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl p-8 elevation-2"
        >
          <Heading2 className="mb-6 text-center">Measured Impact</Heading2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <BodyText className="text-small">OCR accuracy on bilingual documents through custom Tesseract training</BodyText>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">80%</div>
              <BodyText className="text-small">Reduction in manual data entry through automated document processing</BodyText>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <BodyText className="text-small">Automated workflows deployed across enterprise departments</BodyText>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
