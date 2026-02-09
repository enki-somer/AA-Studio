'use client';

import { CodeBlock } from '@/components/Typography';

interface CodeExcerptProps {
  code: string;
  language?: string;
  description?: string;
  className?: string;
}

export default function CodeExcerpt({
  code,
  language = 'javascript',
  description,
  className = '',
}: CodeExcerptProps) {
  return (
    <div className={`my-6 ${className}`}>
      {description && (
        <div className="text-small text-text-light/60 dark:text-text-dark/60 mb-2">
          {description}
        </div>
      )}
      <CodeBlock language={language}>{code}</CodeBlock>
    </div>
  );
}
