'use client';

import ScrollProgressIndicator from '@/components/about/ScrollProgressIndicator';
import { Heading1, BodyText } from '@/components/Typography';
import AppDevelopmentSection from '@/components/about/sections/AppDevelopmentSection';
import DataAnalysisSection from '@/components/about/sections/DataAnalysisSection';
import PowerPlatformSection from '@/components/about/sections/PowerPlatformSection';
import AIProjectManagementSection from '@/components/about/sections/AIProjectManagementSection';
import ProductContributionSection from '@/components/about/sections/ProductContributionSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { prefersReducedMotion, fastTransition } from '@/lib/animations';
import Lottie from 'lottie-react';
import brainAnimation from '@/public/lotties/brain.json';

export default function Home() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <>
      <ScrollProgressIndicator totalSections={5} />

      <section className="relative overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <motion.div
            ref={heroRef}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={fastTransition}
            className="text-center space-y-3"
          >
            <Heading1 className="text-4xl md:text-5xl">Building Systems That Think</Heading1>
            <BodyText className="text-text-light/60 dark:text-text-dark/60 text-base md:text-lg">
              Full-stack capabilities across AI, data, automation, and intelligent applications
            </BodyText>
          </motion.div>
          
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ ...fastTransition, delay: 0.2 }}
          >
            <Lottie
              animationData={brainAnimation}
              loop={true}
              autoplay={!shouldReduceMotion}
              className="w-full h-full max-h-96"
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid meet',
                progressiveLoad: false,
              }}
            />
          </motion.div>
        </div>
      </section>

      <AppDevelopmentSection />
      <DataAnalysisSection />
      <PowerPlatformSection />
      <AIProjectManagementSection />
      <ProductContributionSection />
    </>
  );
}
