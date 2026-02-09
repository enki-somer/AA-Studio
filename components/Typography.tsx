'use client';

import React, { ReactNode, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fastTransition } from '@/lib/animations';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function Heading1({ children, className = '' }: HeadingProps) {
  return (
    <h1
      className={`text-h1 md:text-display font-sans text-text-light dark:text-text-dark font-semibold ${className}`}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className = '' }: HeadingProps) {
  return (
    <h2
      className={`text-h2 font-sans text-text-light dark:text-text-dark font-semibold ${className}`}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className = '' }: HeadingProps) {
  return (
    <h3
      className={`text-h3 font-sans text-text-light dark:text-text-dark font-semibold ${className}`}
    >
      {children}
    </h3>
  );
}

export function BodyText({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-body text-text-light dark:text-text-dark ${className}`}
    >
      {children}
    </p>
  );
}

export function InlineCode({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <code
      className={`font-mono text-small bg-accent/20 dark:bg-accent/25 text-accent dark:text-accent font-medium px-2 py-0.5 rounded border border-accent/30 dark:border-accent/40 transition-all duration-200 hover:bg-accent/25 dark:hover:bg-accent/30 hover:border-accent/50 dark:hover:border-accent/60 hover:scale-105 ${className}`}
    >
      {children}
    </code>
  );
}

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  className?: string;
}

export function CodeBlock({
  children,
  language = 'text',
  className = '',
}: CodeBlockProps) {
  return (
    <pre
      className={`font-mono text-small bg-accent-muted/5 dark:bg-accent-muted/10 border border-accent-muted/20 rounded-lg p-4 overflow-x-auto elevation-2 ${className}`}
    >
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}

interface TooltipProps {
  children: ReactNode;
  content: string;
  className?: string;
}

export function Tooltip({ children, content, className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={fastTransition}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-base-dark dark:bg-base-light text-text-dark dark:text-text-light text-small rounded shadow-lifted z-50 whitespace-nowrap pointer-events-none"
          >
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-base-dark dark:border-t-base-light" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

interface CalloutProps {
  children: ReactNode;
  type?: 'info' | 'warning' | 'success' | 'note';
  title?: string;
  className?: string;
}

export function Callout({
  children,
  type = 'note',
  title,
  className = '',
}: CalloutProps) {
  const typeStyles = {
    info: 'border-accent/30 bg-accent/5 dark:bg-accent/10',
    warning: 'border-yellow-500/30 bg-yellow-500/5 dark:bg-yellow-500/10',
    success: 'border-green-500/30 bg-green-500/5 dark:bg-green-500/10',
    note: 'border-accent-muted/30 bg-accent-muted/5 dark:bg-accent-muted/10',
  };

  return (
    <div
      className={`border-l-4 rounded-r-lg p-4 elevation-2 ${typeStyles[type]} ${className}`}
    >
      {title && (
        <h4 className="text-h3 font-semibold text-text-light dark:text-text-dark mb-2">
          {title}
        </h4>
      )}
      <div className="text-body text-text-light/80 dark:text-text-dark/80">
        {children}
      </div>
    </div>
  );
}
