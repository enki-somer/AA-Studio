import Section from '@/components/Section';
import { Heading2, BodyText } from '@/components/Typography';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import DecisionCards from '@/components/case-study/DecisionCards';
import TechStackGrid from '@/components/case-study/TechStackGrid';
import TimelinePhase from '@/components/case-study/TimelinePhase';
import PluginSwitcher from '@/components/case-study/PluginSwitcher';
import ArchitectureAccordion from '@/components/case-study/ArchitectureAccordion';
import UnifiedBeforeAfter from '@/components/case-study/UnifiedBeforeAfter';
import { camundaJumpEffectContent } from '@/lib/caseStudies/camundaJumpEffect';
import Link from 'next/link';

export default function CamundaJumpEffectPage() {
  const {
    techStack,
    timeline,
    plugins,
    architecture,
    keyDecisions,
    whatILearned,
    communityContribution,
    skillsUnlocked,
    prUrl,
  } = camundaJumpEffectContent;

  return (
    <Section>
      <div className="max-w-wide mx-auto space-y-16">
        {/* Hero Section */}
        <CaseStudyHero />

        {/* Tech Stack Dashboard */}
        <TechStackGrid techStack={techStack} />

        {/* Development Timeline */}
        <TimelinePhase phases={timeline} />

        {/* Unified Before/After */}
        <UnifiedBeforeAfter />

        {/* Plugin Switcher */}
        <PluginSwitcher plugins={plugins} />

        {/* Key Engineering Decisions */}
        <div className="max-w-5xl mx-auto">
          <Heading2 className="mb-8 text-center">Key Engineering Decisions</Heading2>
          <DecisionCards />
        </div>

        {/* Architecture Deep Dive */}
        <ArchitectureAccordion sections={architecture} />

        {/* Learning & Impact Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <Heading2 className="mb-4">What This Unlocked</Heading2>
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-text-light/80 dark:text-text-dark/80">
              {skillsUnlocked.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <Heading2 className="mb-4">What I Learned</Heading2>
            <ul className="space-y-3 list-disc list-inside text-sm md:text-base text-text-light/80 dark:text-text-dark/80">
              {whatILearned.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>

          <div>
            <Heading2 className="mb-4">Community Contribution</Heading2>
            <BodyText className="text-sm md:text-base text-text-light/80 dark:text-text-dark/80">
              {communityContribution}
            </BodyText>
          </div>

          {/* PR Link Button */}
          <div className="pt-8 flex justify-center">
            <Link
              href={prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 elevation-2 hover:elevation-3"
            >
              View Pull Request
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
