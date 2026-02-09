'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Heading3 } from '@/components/Typography';
import { fadeInUp, fastTransition, prefersReducedMotion } from '@/lib/animations';

const BOX_WIDTH = 140;
const BOX_HEIGHT = 64;
const GAP = 48;
const PADDING = 40;

const components = [
  { id: 'eventbus', label: 'EventBus' },
  { id: 'renderer', label: 'Renderer Override' },
  { id: 'intersection', label: 'Intersection Logic' },
  { id: 'path', label: 'Path Builder' },
  { id: 'graphics', label: 'GraphicsFactory' },
].map((comp, i) => ({
  ...comp,
  x: PADDING + i * (BOX_WIDTH + GAP),
  y: 150,
}));

const totalWidth = PADDING * 2 + components.length * BOX_WIDTH + (components.length - 1) * GAP;
const viewBox = `0 0 ${totalWidth} 300`;

export default function SystemDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const shouldAnimate = !prefersReducedMotion();

  useEffect(() => {
    if (!isInView || !shouldAnimate) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      setHighlighted(components[currentIndex].id);
      currentIndex = (currentIndex + 1) % components.length;
    }, 800);

    return () => clearInterval(interval);
  }, [isInView, shouldAnimate]);

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={isInView ? { opacity: 1, y: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
      transition={fastTransition}
      className="my-16"
    >
      <Heading3 className="mb-8 text-center">System Architecture</Heading3>
      <div className="w-full max-w-4xl mx-auto bg-base-light dark:bg-base-dark border border-accent-muted/20 rounded-lg p-8 elevation-2 overflow-x-auto">
        <svg
          viewBox={viewBox}
          className="w-full h-auto min-h-[280px]"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arrows between components */}
          {components.slice(0, -1).map((comp, index) => {
            const next = components[index + 1];
            return (
              <motion.line
                key={`arrow-${comp.id}`}
                x1={comp.x + BOX_WIDTH}
                y1={comp.y}
                x2={next.x - 8}
                y2={next.y}
                stroke="#22D3EE"
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
                initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
                animate={
                  isInView && shouldAnimate
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 1, opacity: 1 }
                }
                transition={{ ...fastTransition, delay: index * 0.1 }}
              />
            );
          })}

          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#22D3EE" />
            </marker>
          </defs>

          {/* Component boxes */}
          {components.map((comp, index) => (
            <g key={comp.id}>
              <motion.rect
                x={comp.x}
                y={comp.y - BOX_HEIGHT / 2}
                width={BOX_WIDTH}
                height={BOX_HEIGHT}
                rx="8"
                fill={highlighted === comp.id ? '#22D3EE' : undefined}
                stroke={highlighted === comp.id ? '#0891B2' : undefined}
                strokeWidth={highlighted === comp.id ? '3' : '2'}
                className={
                  highlighted === comp.id
                    ? ''
                    : 'fill-gray-100 dark:fill-accent-muted/10 stroke-gray-300 dark:stroke-accent-muted/30'
                }
                initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : false}
                animate={
                  isInView && shouldAnimate
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1 }
                }
                transition={{ ...fastTransition, delay: index * 0.1 }}
              />
              <motion.text
                x={comp.x + BOX_WIDTH / 2}
                y={comp.y + 6}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill={highlighted === comp.id ? '#FFFFFF' : undefined}
                className={highlighted === comp.id ? '' : 'fill-text-light dark:fill-text-dark'}
                initial={shouldAnimate ? { opacity: 0 } : false}
                animate={
                  isInView && shouldAnimate
                    ? { opacity: 1 }
                    : { opacity: 1 }
                }
                transition={{ ...fastTransition, delay: index * 0.1 + 0.1 }}
              >
                {comp.label}
              </motion.text>
            </g>
          ))}
        </svg>
      </div>
      <p className="text-center text-small text-text-light/60 dark:text-text-dark/60 mt-4">
        Flow of sequence flow rendering through the plugin architecture
      </p>
    </motion.div>
  );
}
