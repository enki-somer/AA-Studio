import Section from '@/components/Section';
import CaseStudyCard from '@/components/CaseStudyCard';

const caseStudies = [
  {
    slug: 'camunda-jump-effect',
    title: 'Camunda BPMN Development Contributions',
    description:
      'Comprehensive BPMN.js extension suite with 3 custom plugins covering visual enhancement, UX improvements, and advanced rendering. Features jump effect for crossing connections, BPMN 2.0 color management, and resizable tasks. Includes PR contribution to camunda-modeler.',
    technologies: ['JavaScript ES6+', 'BPMN.js', 'SVG', 'diagram-js', 'Event-Driven Architecture'],
    techStack: [
      { name: 'JavaScript', icon: '/icons/node.jpg' },
      { name: 'BPMN.js', icon: '/icons/icon.png'},
      { name: 'SVG', icon: '/icons/js.jpg'},
    ],
    metrics: [
      { label: 'Plugins', value: '3' },
      { label: 'Code', value: '1000+ lines' },
    ],
  },
  {
    slug: 'property-management-platform',
    title: 'Multi-Role Property Management Platform',
    description:
      'Architected a production property management system serving tenants, owners, and administrators through dedicated mobile apps and web dashboard. Evolved from Next.js PWA to Flutter multi-app architecture with unified Node.js backend.',
    technologies: ['Flutter', 'Next.js', 'Node.js', 'PostgreSQL'],
    techStack: [
      { name: 'Next.js', icon: '/icons/nextjs.png'},
      { name: 'Node.js', icon: '/icons/node.jpg'},
      { name: 'Flutter', icon: '/icons/flutter.jpg' },
    ],
    metrics: [
      { label: 'uptime', value: '99.9%' },
      { label: 'API latency', value: '<180ms' },
    ],
  },
  {
    slug: 'erp-financial-system',
    title: 'Construction Financial Management System',
    description:
      'Project-centric ERP system for construction companies with multi-role access, offline PWA capabilities, and real-time financial tracking. Manages projects, contractors, invoices, payroll, and cash flow with ACID guarantees.',
    technologies: ['Next.js 15', 'Node.js', 'PostgreSQL', 'TypeScript', 'PWA'],
    techStack: [
      { name: 'Node.js', icon: '/icons/node.jpg' },
      { name: 'PostgreSQL', icon: '/icons/pwa-banner.png' },
      { name: 'Next.js', icon: '/icons/nextjs.jpeg' },
    ],
    metrics: [
      { label: 'user roles', value: '3' },
      { label: 'modules', value: '6+' },
    ],
  },
  
];

export default function CaseStudies() {
  return (
    <Section
      title="Case Studies"
      subtitle="Real problems, constraints, and solutions"
    >
      <div className="max-w-content mx-auto space-y-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={study.slug}
            slug={study.slug}
            title={study.title}
            description={study.description}
            technologies={study.technologies}
            techStack={'techStack' in study ? study.techStack : undefined}
            metrics={study.metrics}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
