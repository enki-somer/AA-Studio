'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/animations';

interface JsonVisualProps {
  jsonPath: string;
  alt: string;
  className?: string;
}

// Get visual complexity based on file name
const getComplexityLevel = (path: string): number => {
  if (path.includes('html_css_js')) return 1;
  if (path.includes('fullstack')) return 3;
  if (path.includes('pwa_offline') || path.includes('mobile')) return 2;
  if (path.includes('react_components')) return 2;
  if (path.includes('nextjs_app_router')) return 3;
  if (path.includes('tableau') || path.includes('powerbi')) return 3;
  if (path.includes('power')) return 3;
  if (path.includes('ai') || path.includes('brain')) return 4;
  if (path.includes('bpmn') || path.includes('workflow')) return 4;
  if (path.includes('git') || path.includes('contribution')) return 3;
  return 3;
};

// Get icon based on file name
const getIcon = (path: string) => {
  if (path.includes('html') || path.includes('css') || path.includes('js')) {
    return (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      </svg>
    );
  }
  if (path.includes('react')) {
    return (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2"/>
        <ellipse cx="12" cy="12" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    );
  }
  if (path.includes('nextjs') || path.includes('fullstack')) {
    return (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
      </svg>
    );
  }
  if (path.includes('pwa') || path.includes('mobile')) {
    return (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    );
  }
  if (path.includes('tableau') || path.includes('powerbi') || path.includes('data')) {
    return (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    );
  }
  if (path.includes('power')) {
    return (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    );
  }
  if (path.includes('ai') || path.includes('brain')) {
    return (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    );
  }
  if (path.includes('git') || path.includes('contribution')) {
    return (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    );
  }
  // Default icon
  return (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>
  );
};

export default function JsonVisual({ jsonPath, alt, className = '' }: JsonVisualProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = prefersReducedMotion();
  const complexity = getComplexityLevel(jsonPath);

  useEffect(() => {
    let isMounted = true;

    // Get basePath - detect from URL in browser, fallback to env var or default
    const getBasePath = (): string => {
      if (typeof window !== 'undefined') {
        const pathname = window.location.pathname;
        // If pathname starts with /AA-Studio, use it
        if (pathname.startsWith('/AA-Studio')) {
          return '/AA-Studio';
        }
      }
      return process.env.NEXT_PUBLIC_BASE_PATH || '/AA-Studio';
    };
    
    // Ensure jsonPath includes basePath for absolute paths
    const getFullPath = (path: string): string => {
      if (!path.startsWith('/')) {
        return path; // Relative paths don't need basePath
      }
      const basePath = getBasePath();
      // Only prepend basePath if path doesn't already include it
      if (!path.startsWith(basePath)) {
        return `${basePath}${path}`;
      }
      return path;
    };

    const loadAnimation = async () => {
      try {
        const fullPath = getFullPath(jsonPath);
        const response = await fetch(fullPath);
        if (!response.ok) {
          throw new Error('Failed to load animation');
        }
        const data = await response.json();
        
        if (isMounted) {
          setAnimationData(data);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error loading Lottie animation:', err, jsonPath);
        if (isMounted) {
          setError(true);
          setIsLoading(false);
        }
      }
    };

    loadAnimation();

    return () => {
      isMounted = false;
    };
  }, [jsonPath]);

  if (isLoading) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        role="status"
        aria-label="Loading animation"
      >
        <div className="w-16 h-16 border-4 border-accent-muted/20 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  // Show enhanced placeholder when JSON fails to load
  if (error || !animationData) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-surface-light to-surface-light/50 dark:from-surface-dark dark:to-surface-dark/50 rounded-lg border border-accent-muted/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <motion.div
          initial={shouldReduceMotion ? {} : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : {
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mb-4 text-accent/70"
          >
            {getIcon(jsonPath)}
          </motion.div>
          
          <div className="space-y-2">
            <p className="text-body font-semibold text-text-light dark:text-text-dark">
              {alt.replace(' animation', '')}
            </p>
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < complexity
                      ? 'bg-accent'
                      : 'bg-accent-muted/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${className} relative`}
      role="img"
      aria-label={alt}
      style={{ 
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Lottie
        animationData={animationData}
        loop={!shouldReduceMotion}
        autoplay={!shouldReduceMotion}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid meet',
          progressiveLoad: false,
        }}
      />
    </motion.div>
  );
}
