'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';
import { Heading2, Heading3, BodyText, InlineCode } from '@/components/Typography';
import StickyVisualStage from '../StickyVisualStage';
import JsonVisual from '../JsonVisual';

const steps = [
  {
    id: 'html-css-js',
    title: 'HTML + CSS + JS',
    subtitle: 'Foundation',
    description: 'Built responsive web interfaces with vanilla JavaScript, focusing on semantic HTML, modern CSS, and progressive enhancement. Mastered DOM manipulation, event handling, and browser APIs.',
    learned: 'Constraints over trends - chose technologies based on project requirements',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'ES6+'],
    jsonPath: '/lotties/html_css_js.json',
    alt: 'HTML CSS JavaScript animation',
  },
  {
    id: 'fullstack',
    title: 'Full-stack',
    subtitle: 'Next.js + Node.js + PostgreSQL',
    description: 'Architected enterprise applications with Next.js App Router for server-side rendering, Node.js for REST APIs and real-time features, and PostgreSQL for ACID-compliant data persistence. Built ERP systems handling inventory, financial transactions, and multi-tenant operations at scale.',
    learned: 'Systems that degrade gracefully - implement error boundaries and fallbacks',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'REST API', 'TypeScript'],
    jsonPath: '/lotties/fullstack_arch_flow.json',
    alt: 'Full-stack architecture animation',
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development',
    subtitle: 'Flutter, Capacitor, Expo',
    description: 'Developed cross-platform mobile applications using Flutter for native performance, Capacitor for web-to-native bridges, and Expo for rapid React Native development. Implemented offline-first architectures, background sync, and native device integrations.',
    learned: 'Build for constraints - users need apps that work without connectivity',
    tags: ['Flutter', 'Dart', 'Capacitor', 'Expo', 'React Native'],
    jsonPath: '/lotties/Mobile_App_Showcase.json',
    alt: 'Mobile app development animation',
  },
];

export default function AppDevelopmentSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shouldReduceMotion = prefersReducedMotion();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="app-development"
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Heading2 className="mb-4">App Development</Heading2>
          <BodyText className="text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            Progressive skill evolution from web fundamentals to full-stack and mobile development
          </BodyText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Steps List (scrolls) */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="min-h-[60vh] flex items-center"
              >
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4 w-full"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-h3 font-sans text-accent font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Heading3>{step.title}</Heading3>
                  </div>

                  <p className="text-small text-accent-muted uppercase tracking-wide">
                    {step.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <InlineCode key={tag}>{tag}</InlineCode>
                    ))}
                  </div>

                  <BodyText>{step.description}</BodyText>

                  <div className="pl-4 border-l-2 border-accent/30">
                    <p className="text-small italic text-text-light/70 dark:text-text-dark/70">
                      {step.learned}
                    </p>
                  </div>

                  {/* Mobile: Inline visual for each step */}
                  <div className="md:hidden mt-6">
                    <div className="w-full h-48 sm:h-56 rounded-lg glass elevation-2 p-3 sm:p-4 overflow-hidden">
                      <JsonVisual
                        jsonPath={step.jsonPath}
                        alt={step.alt}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right: Sticky Visual Stage - Desktop only */}
          <div className="hidden md:block">
            <StickyVisualStage
              activeStep={activeStep}
              steps={steps.map((step) => ({
                id: step.id,
                jsonPath: step.jsonPath,
                alt: step.alt,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
