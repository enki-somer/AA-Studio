'use client';

import { Heading3, BodyText } from '@/components/Typography';
import CodeSnippet from '@/components/automation/CodeSnippet';
import JumpEffectDemo from './JumpEffectDemo';
import ColorManagementDemo from './ColorManagementDemo';
import ResizableTasksDemo from './ResizableTasksDemo';
import type { PluginShowcase as PluginShowcaseType } from '@/lib/caseStudies/camundaJumpEffect';

interface PluginShowcaseProps {
  plugin: PluginShowcaseType;
  index: number;
}

const PluginDemoMap: Record<string, React.ComponentType> = {
  'jump-effect': JumpEffectDemo,
  'color-management': ColorManagementDemo,
  'resizable-tasks': ResizableTasksDemo,
};

export default function PluginShowcase({ plugin, index }: PluginShowcaseProps) {
  const isEven = index % 2 === 0;
  const DemoComponent = PluginDemoMap[plugin.id];

  return (
    <div
      className={`mb-12 max-w-6xl mx-auto ${
        isEven ? '' : 'md:flex-row-reverse'
      }`}
    >
      {/* Plugin Header */}
      <div className="mb-6">
        <Heading3 className="text-xl md:text-2xl mb-2">{plugin.name}</Heading3>
        <div className="text-sm md:text-base text-accent font-medium mb-3">
          {plugin.tagline}
        </div>
        <BodyText className="text-sm md:text-base text-text-light/80 dark:text-text-dark/80">
          {plugin.description}
        </BodyText>
      </div>

      {/* Before/After - Show appropriate demo */}
      {DemoComponent ? (
        <DemoComponent />
      ) : (
        <div className="mb-6 p-6 md:p-8 rounded-lg bg-gradient-to-br from-accent/5 to-accent-muted/10 border border-accent/20 elevation-2">
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-3">🔄</div>
            <div className="text-sm font-medium text-accent mb-2">
              Before / After Comparison
            </div>
            <div className="text-xs text-text-light/60 dark:text-text-dark/60">
              {plugin.beforeAfterNote}
            </div>
            <div className="mt-4 text-xs text-text-light/50 dark:text-text-dark/50 italic">
              SVG diagram placeholder - actual BPMN export to be provided
            </div>
          </div>
        </div>
      )}

      {/* Features & Technical Details Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6">
        {/* Features */}
        <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/5 to-green-500/10 border border-green-500/20">
          <div className="text-sm font-semibold mb-3 text-green-600 dark:text-green-400">
            Features
          </div>
          <ul className="space-y-1.5 text-xs md:text-sm text-text-light/90 dark:text-text-dark/90">
            {plugin.features.map((feature, idx) => (
              <li key={idx}>• {feature}</li>
            ))}
          </ul>
        </div>

        {/* Technical Details */}
        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20">
          <div className="text-sm font-semibold mb-3 text-blue-600 dark:text-blue-400">
            Technical Implementation
          </div>
          <ul className="space-y-1.5 text-xs md:text-sm text-text-light/90 dark:text-text-dark/90">
            {plugin.technicalDetails.map((detail, idx) => (
              <li key={idx}>• {detail}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Code Snippets */}
      {plugin.codeSnippets.length > 0 && (
        <div className="space-y-4">
          <div className="text-sm font-semibold text-text-light dark:text-text-dark">
            Code Highlights
          </div>
          {plugin.codeSnippets.map((snippet, idx) => (
            <div key={idx}>
              {snippet.description && (
                <div className="text-xs md:text-sm text-text-light/70 dark:text-text-dark/70 mb-2">
                  {snippet.description}
                </div>
              )}
              <CodeSnippet code={snippet.code} language={snippet.language} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
