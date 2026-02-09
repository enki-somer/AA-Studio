'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fastTransition } from '@/lib/animations';

interface FlowNode {
  id: string;
  label: string;
  description?: string;
}

interface FlowEdge {
  from: string;
  to: string;
  label?: string;
}

interface DataFlowProps {
  nodes: FlowNode[];
  edges: FlowEdge[];
  className?: string;
}

export default function DataFlow({
  nodes,
  edges,
  className = '',
}: DataFlowProps) {
  return (
    <div className={`my-8 p-6 bg-accent-muted/5 dark:bg-accent-muted/10 rounded-lg elevation-2 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeInUp}
        transition={fastTransition}
        style={{ filter: 'none' }}
      >
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {nodes.map((node, index) => {
          const nodeEdges = edges.filter((e) => e.from === node.id);
          const hasOutgoing = nodeEdges.length > 0;

          return (
            <div key={node.id} className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...fastTransition, delay: index * 0.1 }}
                className="relative"
              >
                <div className="px-4 py-2 bg-accent/10 dark:bg-accent/20 border border-accent/30 rounded-lg elevation-1 min-w-[120px] text-center">
                  <div className="text-small font-semibold text-accent mb-1">
                    {node.label}
                  </div>
                  {node.description && (
                    <div className="text-xs text-text-light/60 dark:text-text-dark/60">
                      {node.description}
                    </div>
                  )}
                </div>
              </motion.div>
              {hasOutgoing && index < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...fastTransition, delay: index * 0.1 + 0.1 }}
                  className="flex items-center"
                >
                  <svg
                    className="w-6 h-6 text-accent-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
      </motion.div>
    </div>
  );
}
