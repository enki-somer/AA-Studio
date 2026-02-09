'use client';

import Section from '@/components/Section';
import ArchitectureDecisionCard from '@/components/technical-depth/ArchitectureDecisionCard';

const decisions = [
  {
    title: 'Relational Data Architecture for Mission-Critical Systems',
    subtitle: 'PostgreSQL over NoSQL for transactional enterprise workloads',
    description:
      'For financial, ERP, and operational management systems, transactional consistency and auditability are fundamental requirements. I design core systems around relational databases such as PostgreSQL to ensure ACID compliance, deterministic financial calculations, and reliable reporting pipelines.\n\nRelational modeling enables advanced joins for enterprise dashboards, structured financial tracking, and scalable analytics preparation. While NoSQL platforms such as MongoDB or Firebase are effective for event streams, caching layers, or high-volume unstructured data, transactional systems involving invoices, payments, inventory, or compliance workflows demand the guarantees and schema discipline provided by PostgreSQL.',
    tags: ['PostgreSQL', 'ACID', 'Relational Database', 'Enterprise Systems'],
    jsonPath: '/lotties/fullstack_arch_flow.json',
  },
  {
    title: 'Scalable State Architecture in Flutter Platforms',
    subtitle: 'Riverpod-driven architecture for long-lifecycle applications',
    description:
      'Large Flutter platforms require predictable dependency management, testability, and modular scalability. After evaluating Provider, Bloc, Redux, and Riverpod patterns across multiple production applications, I standardize on Riverpod for large-scale systems due to its compile-time safety, dependency injection capabilities, reduced boilerplate, and strong testability support.\n\nThis architecture allows modular feature isolation, long-term maintainability, and predictable performance across multi-role enterprise applications such as tenant platforms, owner dashboards, and enterprise mobile systems.',
    tags: ['Flutter', 'Riverpod', 'State Management', 'Dependency Injection'],
    jsonPath: '/lotties/Mobile_App_Showcase.json',
  },
  {
    title: 'Server-Driven Web Platforms with Next.js App Router',
    subtitle: 'Secure rendering and computation-efficient architectures',
    description:
      'For enterprise dashboards, reporting systems, and operational portals, I design server-first rendering architectures using the Next.js App Router. Server Components reduce client payload size, improve first-load performance, and prevent unnecessary exposure of sensitive financial or operational datasets to the browser.\n\nThis approach enables secure data computation, scalable reporting pipelines, and improved performance across analytics-heavy platforms while maintaining flexibility for interactive client-side modules where required.',
    tags: ['Next.js', 'App Router', 'Server Components', 'Security'],
    jsonPath: '/lotties/html_css_js.json',
  },
  {
    title: 'Design System Consistency with Utility-First Engineering',
    subtitle: 'Tailwind CSS for scalable UI engineering',
    description:
      'In multi-application ecosystems, UI consistency and development velocity are critical. I leverage Tailwind CSS to enforce design-system discipline, reduce styling fragmentation, and accelerate component-driven development workflows.\n\nRepeated UI patterns are abstracted into reusable components rather than duplicated styling rules, enabling scalable frontend architecture across dashboards, enterprise systems, and SaaS platforms while maintaining performance through JIT compilation and optimized bundling.',
    tags: ['Tailwind CSS', 'Design Systems', 'Component Architecture', 'UI Engineering'],
    jsonPath: '/lotties/react_components.json',
  },
  {
    title: 'Process Automation and Operational Engineering',
    subtitle: 'Automation-first system design philosophy',
    description:
      'Beyond application development, I architect systems with automation as a first-class engineering layer. By combining Power Automate, Python services, AI-assisted workflows, and API-driven integrations, I design operational ecosystems that significantly reduce manual intervention, improve data consistency, and create measurable process efficiency improvements across enterprise departments.',
    tags: ['Power Automate', 'Automation', 'Python', 'API Integration'],
    jsonPath: '/lotties/powerautomate_flow.json',
  },
  {
    title: 'Data-Ready System Design',
    subtitle: 'Engineering applications for analytics from day one',
    description:
      'Applications are designed with structured data pipelines, normalized schemas, and reporting-ready datasets to enable downstream analytics in Power BI, Tableau, and enterprise dashboards. This ensures operational systems are not only functional but also analytics-ready, enabling organizations to transition from operational usage to strategic data insights without costly redesign phases.',
    tags: ['Data Architecture', 'Analytics', 'Power BI', 'Tableau'],
    jsonPath: '/lotties/powerbi_flow.json',
  },
];

export default function TechnicalDepth() {
  return (
    <Section
      title="Technical Depth"
      subtitle="Architecture decisions, engineering trade-offs, and production reasoning"
    >
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
        {decisions.map((decision, index) => (
          <ArchitectureDecisionCard
            key={index}
            title={decision.title}
            description={decision.description}
            tags={decision.tags}
            jsonPath={decision.jsonPath}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
