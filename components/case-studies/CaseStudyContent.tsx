'use client';

import { ReactNode, useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Heading1, Heading2, Heading3, BodyText, CodeBlock, InlineCode } from '@/components/Typography';
import ArchitectureDiagram from './ArchitectureDiagram';
import SystemFlow from './SystemFlow';
import DecisionPoint from './DecisionPoint';
import BeforeAfter from './BeforeAfter';
import ViewToggle from './ViewToggle';
import DataFlow from './DataFlow';
import CaseStudyCallout from './Callout';
import CaseStudyTooltip from './Tooltip';

interface CaseStudyContentProps {
  content: MDXRemoteSerializeResult;
}

export default function CaseStudyContent({ content }: CaseStudyContentProps) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    const headingElements = document.querySelectorAll('h2, h3');
    const headingData = Array.from(headingElements).map((el) => {
      const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      if (!el.id) {
        el.id = id;
      }
      return {
        id,
        text: el.textContent || '',
        level: parseInt(el.tagName.charAt(1)),
      };
    });
    setHeadings(headingData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        const currentIndex = headings.findIndex((h) => h.id === activeHeading);
        if (currentIndex < headings.length - 1) {
          const nextHeading = headings[currentIndex + 1];
          document.getElementById(nextHeading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        const currentIndex = headings.findIndex((h) => h.id === activeHeading);
        if (currentIndex > 0) {
          const prevHeading = headings[currentIndex - 1];
          document.getElementById(prevHeading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [headings, activeHeading]);

  const components = {
    h1: (props: any) => <Heading1 className="mb-6" {...props} />,
    h2: (props: any) => (
      <Heading2
        className="mt-12 mb-6 scroll-mt-20"
        id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')}
        {...props}
      />
    ),
    h3: (props: any) => (
      <Heading3
        className="mt-8 mb-4 scroll-mt-20"
        id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')}
        {...props}
      />
    ),
    p: (props: any) => <BodyText className="mb-4" {...props} />,
    code: (props: any) => {
      if (props.className) {
        return <InlineCode {...props} />;
      }
      return <InlineCode {...props} />;
    },
    pre: (props: any) => {
      const codeElement = props.children;
      if (codeElement && typeof codeElement === 'object' && codeElement.props) {
        const code = codeElement.props.children || '';
        const className = codeElement.props.className || '';
        const language = className.replace('language-', '') || 'text';
        return <CodeBlock language={language}>{code}</CodeBlock>;
      }
      return (
        <pre className="font-mono text-small bg-accent-muted/5 dark:bg-accent-muted/10 border border-accent-muted/20 rounded-lg p-4 overflow-x-auto my-6 elevation-2">
          {props.children}
        </pre>
      );
    },
    ArchitectureDiagram,
    SystemFlow,
    DecisionPoint,
    BeforeAfter,
    ViewToggle,
    DataFlow,
    Callout: CaseStudyCallout,
    Tooltip: CaseStudyTooltip,
  };

  return (
    <div className="flex gap-8">
      <article className="flex-1 max-w-content">
        <MDXRemote {...content} components={components} />
      </article>
      {headings.length > 0 && (
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-24" aria-label="Table of contents">
            <div className="text-small font-semibold text-text-light/60 dark:text-text-dark/60 mb-4">
              Contents
            </div>
            <div className="text-xs text-text-light/50 dark:text-text-dark/50 mb-2">
              Ctrl+↑/↓ to navigate
            </div>
            <ul className="space-y-2">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(heading.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', `#${heading.id}`);
                      }
                    }}
                    className={`block text-small transition-all duration-200 ease-out hover:text-accent hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded ${
                      heading.level === 3 ? 'pl-4' : ''
                    } ${
                      activeHeading === heading.id
                        ? 'text-accent font-semibold'
                        : 'text-text-light/70 dark:text-text-dark/70'
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
}
