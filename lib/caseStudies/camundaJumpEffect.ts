export interface TechStackItem {
  name: string;
  category: string;
  description: string;
}

export interface TimelinePhase {
  phase: number;
  title: string;
  description: string;
  plugins: string[];
  highlights: string[];
}

export interface PluginShowcase {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  technicalDetails: string[];
  codeSnippets: Array<{
    language: string;
    code: string;
    description?: string;
  }>;
  beforeAfterNote: string;
}

export interface ArchitectureSection {
  title: string;
  icon: string;
  content: string[];
  highlights?: Array<{
    title: string;
    description: string;
  }>;
}

export interface ImplementationContent {
  text: string[];
  codeSnippets?: Array<{
    language: string;
    code: string;
    description?: string;
  }>;
  steps?: string[];
}

export interface CamundaJumpEffectContent {
  hero: {
    title: string;
    subhead: string;
    impactMetrics: Array<{
      value: string;
      label: string;
    }>;
  };
  facts: {
    prNumber: string;
    repo: string;
    totalPlugins: number;
    linesOfCode: string;
  };
  techStack: TechStackItem[];
  timeline: TimelinePhase[];
  plugins: PluginShowcase[];
  architecture: ArchitectureSection[];
  keyDecisions: Array<{
    title: string;
    why: string;
    tradeOff: string;
  }>;
  implementation: {
    overview: ImplementationContent;
    implementation: ImplementationContent;
    lifecycle: ImplementationContent;
    verification: ImplementationContent;
  };
  whatILearned: string[];
  communityContribution: string;
  skillsUnlocked: string[];
  prUrl: string;
}

export const camundaJumpEffectContent: CamundaJumpEffectContent = {
  hero: {
    title: 'Camunda BPMN Development Contributions',
    subhead: 'Comprehensive BPMN.js extension suite covering visual enhancement, UX improvements, and workflow features across 7 custom plugins',
    impactMetrics: [
      { value: '3', label: 'Custom Plugins' },
      { value: '2', label: 'Rendering Extensions' },
      { value: '3', label: 'UX Enhancements' },
      { value: '1000+', label: 'Lines of Code' },
    ],
  },
  facts: {
    prNumber: '5585',
    repo: 'camunda/camunda-modeler',
    totalPlugins: 3,
    linesOfCode: '1000+',
  },
  techStack: [
    {
      name: 'BPMN.js',
      category: 'Framework',
      description: 'Core BPMN rendering and modeling framework',
    },
    {
      name: 'JavaScript ES6+',
      category: 'Language',
      description: 'Modern JavaScript with classes and modules',
    },
    {
      name: 'SVG',
      category: 'Graphics',
      description: 'Scalable Vector Graphics manipulation',
    },
    {
      name: 'diagram-js',
      category: 'Library',
      description: 'Diagram rendering and interaction toolkit',
    },
    {
      name: 'Event-Driven',
      category: 'Architecture',
      description: 'EventBus-based plugin coordination',
    },
    {
      name: 'Camunda Modeler',
      category: 'Platform',
      description: 'Desktop BPMN modeling application',
    },
  ],
  timeline: [
    {
      phase: 1,
      title: 'Visual Foundation',
      description: 'Established core visual enhancements for BPMN elements with automatic coloring',
      plugins: ['Color Management'],
      highlights: [
        'BPMN 2.0 standard color scheme implementation',
        'Automatic coloring on element creation',
        'Interactive color picker for customization',
      ],
    },
    {
      phase: 2,
      title: 'UX Enhancements',
      description: 'Improved modeling experience with direct manipulation features',
      plugins: ['Resizable Tasks'],
      highlights: [
        'Interactive resize handles for all task types',
        '8-point resize control (corners + sides)',
        'Minimum size constraints for usability',
      ],
    },
    {
      phase: 3,
      title: 'Advanced Rendering',
      description: 'Sophisticated rendering techniques with geometric algorithms and lifecycle management',
      plugins: ['Jump Effect'],
      highlights: [
        'Circuit diagram-style connection crossings',
        'Geometric intersection detection algorithms',
        'Performance-optimized event handling',
      ],
    },
  ],
  plugins: [
    {
      id: 'jump-effect',
      name: 'Jump Effect Plugin',
      tagline: 'Bridge arcs for crossing sequence flows',
      description: 'Extends BPMN renderer to draw bridge arcs at connection intersections, similar to circuit diagrams. Only one connection jumps per crossing, determined by ID for consistency.',
      features: [
        'One-way deterministic jumps by connection ID',
        'Geometric intersection detection with angle filtering',
        'Lifecycle-aware: disabled during editing, debounced updates',
        'Performance-optimized with caching and throttling',
        'Quadratic Bézier curves for smooth arcs',
      ],
      technicalDetails: [
        'Renderer pipeline extension via handler override',
        'Line-segment intersection algorithms',
        'SVG path manipulation with Bézier curves',
        'Event-driven updates via EventBus',
      ],
      codeSnippets: [
        {
          language: 'javascript',
          code: `this._originalSequenceFlowHandler = this.handlers["bpmn:SequenceFlow"];
this.handlers["bpmn:SequenceFlow"] = (parentGfx, element, attrs) => {
  if (this._connectionsBeingEdited.has(element.id)) {
    return this._originalSequenceFlowHandler(parentGfx, element, attrs);
  }
  if (this.jumpEffect && this._shouldApplyJumps(element)) {
    return this._renderWithSelectiveJumps(parentGfx, element, attrs);
  }
  return this._originalSequenceFlowHandler(parentGfx, element, attrs);
};`,
          description: 'Handler override pattern with fallback',
        },
        {
          language: 'javascript',
          code: `JumpConnectionRenderer.prototype._shouldJumpOver = function (thisConnection, otherConnection) {
  if (thisConnection.id && otherConnection.id) {
    return thisConnection.id > otherConnection.id;
  }
  return false;
};`,
          description: 'Deterministic jump rule ensures consistency',
        },
      ],
      beforeAfterNote: 'Shows overlapping connections vs. clean bridge arcs at intersections',
    },
    {
      id: 'color-management',
      name: 'Color Management Plugin',
      tagline: 'Auto-coloring with interactive picker',
      description: 'Applies BPMN 2.0 standard colors automatically (green starts, red ends, yellow tasks, orange gateways) with context menu color picker for customization.',
      features: [
        'Automatic standard coloring on element creation',
        'Interactive color picker via right-click context menu',
        '20+ professional color palette',
        'Reset to default colors option',
        'Automatic stroke color adjustment for contrast',
      ],
      technicalDetails: [
        'BpmnRenderer extension for automatic coloring',
        'Context pad integration for color picker UI',
        'SVG attribute manipulation (fill, stroke)',
        'Color state management with Map structure',
      ],
      codeSnippets: [
        {
          language: 'javascript',
          code: `const standardColors = {
  'bpmn:StartEvent': '#4CAF50',      // Green
  'bpmn:EndEvent': '#F44336',        // Red
  'bpmn:Task': '#FFEB3B',            // Yellow
  'bpmn:Gateway': '#FF9800',         // Orange
  'bpmn:IntermediateEvent': '#FF9800' // Orange
};

function applyStandardColor(element, gfx) {
  const color = standardColors[element.type];
  if (color) {
    gfx.querySelector('circle, rect, path').setAttribute('fill', color);
  }
}`,
          description: 'Standard color mapping and application',
        },
      ],
      beforeAfterNote: 'Grayscale BPMN elements transformed to color-coded, easily distinguishable diagram',
    },
    {
      id: 'resizable-tasks',
      name: 'Resizable Tasks Plugin',
      tagline: 'Direct manipulation resize handles',
      description: 'Adds 8-point resize handles to all BPMN task elements, enabling direct size manipulation with mouse drag. Handles appear on hover.',
      features: [
        '8-point resize handles (4 corners + 4 sides)',
        'Hover activation for clean appearance',
        'Minimum size constraints (80x60px)',
        'Real-time visual feedback during resize',
        'Supports all task types (User, Service, Script, etc.)',
      ],
      technicalDetails: [
        'SVG rect elements for resize handles',
        'Mouse event handling for drag operations',
        'Bounds calculation for all handle positions',
        'Integration with modeling API for shape updates',
      ],
      codeSnippets: [
        {
          language: 'javascript',
          code: `ResizableTasksModule.prototype._createResizeHandle = function (position, size) {
  const handle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  handle.setAttribute('x', position.x);
  handle.setAttribute('y', position.y);
  handle.setAttribute('width', size);
  handle.setAttribute('height', size);
  handle.setAttribute('fill', '#1976d2');
  handle.style.cursor = position.cursor;
  
  handle.addEventListener('mousedown', (e) => {
    this._startResize(e, element, position.type);
  });
  
  return handle;
};`,
          description: 'Resize handle creation with event binding',
        },
      ],
      beforeAfterNote: 'Fixed-size tasks vs. tasks with interactive resize handles on hover',
    },
  ],
  architecture: [
    {
      title: 'Plugin Architecture',
      icon: '🏗️',
      content: [
        'All plugins follow an event-driven design pattern, subscribing to BPMN.js EventBus for diagram lifecycle events (import, element creation, editing, removal).',
        'Renderer extensions use handler override pattern: store original handler, conditionally apply enhancement, fallback to original for edge cases.',
        'Lifecycle management ensures plugins activate at appropriate times (after import, during editing, before export) and clean up properly on diagram clear or element removal.',
        'Plugin composition allows multiple enhancements to coexist without conflicts through careful DOM manipulation scoping and event priority ordering.',
      ],
      highlights: [
        {
          title: 'Event-Driven Core',
          description: 'EventBus subscriptions for import.done, element.added, element.changed, directEditing lifecycle',
        },
        {
          title: 'Handler Override Pattern',
          description: 'Preserve original handlers, conditionally apply enhancements, graceful fallback',
        },
        {
          title: 'Lifecycle Awareness',
          description: 'Activation timing, cleanup on removal, state management across interactions',
        },
      ],
    },
    {
      title: 'Performance Optimizations',
      icon: '⚡',
      content: [
        'Debouncing and throttling prevent excessive redraws during rapid user interactions (element dragging, connection editing). Typical debounce: 50-100ms for visual updates.',
        'RequestAnimationFrame batches DOM operations for smooth 60fps rendering. All visual updates scheduled through RAF to avoid layout thrashing.',
        'Caching strategies reduce redundant calculations: intersection detection results cached until connections change, color picker state persists across diagrams.',
        'Lazy initialization delays plugin setup until first use, reducing initial load time and memory footprint for unused features.',
      ],
      highlights: [
        {
          title: 'Debounced Updates',
          description: '50ms debounce for movement, 100ms for editing completion, prevents flicker',
        },
        {
          title: 'RAF Batching',
          description: 'All DOM updates through requestAnimationFrame for smooth 60fps',
        },
        {
          title: 'Smart Caching',
          description: 'Intersection results, color state, handle positions cached with invalidation',
        },
      ],
    },
    {
      title: 'Cross-Plugin Coordination',
      icon: '🔗',
      content: [
        'Shared EventBus enables loose coupling: plugins communicate through events rather than direct references, allowing independent development and testing.',
        'DOM manipulation scoping prevents conflicts: each plugin owns specific SVG elements or attributes, with clear boundaries (Jump Effect: paths, Color: fill/stroke, Resizable: separate handle groups).',
        'Loading order considerations: styling plugins load first for base appearance, interaction plugins after for event handling, renderer extensions last to override default behavior.',
        'State isolation ensures plugins don\'t interfere: separate data structures (Maps, Sets) per plugin, no shared global state, clear ownership of element lifecycle.',
      ],
      highlights: [
        {
          title: 'Event Communication',
          description: 'Plugins coordinate via EventBus, no direct coupling',
        },
        {
          title: 'DOM Ownership',
          description: 'Clear boundaries: paths vs. fill vs. handles vs. labels',
        },
        {
          title: 'Load Order',
          description: 'Styling → Interaction → Renderer extensions',
        },
      ],
    },
  ],
  keyDecisions: [
    {
      title: 'Event-driven over polling',
      why: 'EventBus pattern ensures plugins respond exactly when needed (element added, diagram imported, editing completed) without wasteful continuous checking.',
      tradeOff: 'Requires understanding BPMN.js event lifecycle and careful subscription management, but results in efficient, reactive plugins.',
    },
    {
      title: 'CSS for base styling, JS for dynamics',
      why: 'CSS handles static visual properties (colors, borders) efficiently, while JavaScript manages dynamic behaviors (resize handles, intersection detection) that require computation.',
      tradeOff: 'Split approach adds complexity but leverages each technology&apos;s strengths: CSS performance for static styles, JS flexibility for dynamic features.',
    },
    {
      title: 'One plugin per concern',
      why: 'Separate plugins for color, resize, styling, and rendering allow independent development, testing, and optional activation. Users can mix and match features.',
      tradeOff: 'More files and initialization overhead, but benefits of modularity, maintainability, and flexibility outweigh the cost.',
    },
    {
      title: 'Handler override pattern',
      why: 'Preserving original handlers and selectively applying enhancements allows graceful degradation and feature toggling without breaking core functionality.',
      tradeOff: 'More complex implementation than full replacement, but provides safety, testability, and backward compatibility.',
    },
    {
      title: 'Aggressive performance optimization',
      why: 'Debouncing, RAF batching, and caching ensure plugins don&apos;t degrade diagram interaction quality even with complex features like intersection detection.',
      tradeOff: 'Additional code complexity for optimization logic, but essential for maintaining 60fps and responsive user experience.',
    },
  ],
  implementation: {
    overview: {
      text: [
        'The Camunda BPMN plugin suite extends the core BPMN.js rendering engine with visual enhancements, UX improvements, and workflow optimizations.',
        'Each plugin follows a consistent architecture pattern: event-driven initialization, handler override for rendering, and lifecycle-aware cleanup.',
      ],
    },
    implementation: {
      text: [
        'Plugins integrate with BPMN.js through the EventBus, subscribing to diagram lifecycle events and overriding renderer handlers when needed.',
        'The handler override pattern preserves original functionality while adding enhancements, ensuring compatibility with core BPMN.js features.',
      ],
      codeSnippets: [
        {
          language: 'javascript',
          code: `// Handler override pattern
this._originalHandler = this.handlers["bpmn:SequenceFlow"];
this.handlers["bpmn:SequenceFlow"] = (parentGfx, element, attrs) => {
  // Custom logic here
  return this._originalHandler(parentGfx, element, attrs);
};`,
          description: 'Preserving original handlers for graceful fallback',
        },
      ],
    },
    lifecycle: {
      text: [
        'Plugins activate after diagram import completes, ensuring all elements are available before applying enhancements.',
        'During editing, plugins respond to element changes and connection updates, maintaining visual consistency.',
        'Cleanup occurs on diagram clear or element removal to prevent memory leaks and stale references.',
      ],
    },
    verification: {
      text: [
        'Each plugin includes comprehensive test coverage for core functionality and edge cases.',
        'Visual regression testing ensures rendering consistency across different diagram configurations.',
      ],
      steps: [
        'Verify plugin loads without errors',
        'Test visual enhancements render correctly',
        'Confirm event handlers respond appropriately',
        'Validate cleanup on diagram clear',
        'Check performance with large diagrams',
      ],
    },
  },
  whatILearned: [
    'BPMN.js architecture: Deep understanding of diagram-js rendering pipeline, EventBus patterns, and modeler lifecycle from import through editing to export.',
    'SVG manipulation mastery: Direct attribute updates, path generation with Bézier curves, namespace handling, and performance considerations for complex diagrams.',
    'Plugin composition patterns: How to design loosely-coupled extensions that enhance without conflicting, using clear ownership boundaries and event-driven coordination.',
    'Event lifecycle management: Proper subscription/cleanup, debouncing strategies, understanding timing of import vs. render vs. edit vs. export phases.',
    'Performance optimization: RequestAnimationFrame for smooth animations, caching strategies for expensive calculations, throttling for high-frequency events.',
    'Cross-browser compatibility: SVG DOM APIs work differently across browsers, requiring defensive coding and fallback strategies.',
    'User experience design: When to show/hide features (hover states, editing modes), balancing visual richness with performance and clarity.',
  ],
  communityContribution:
    'These plugins demonstrate comprehensive BPMN.js extensibility patterns for the Camunda community. The Jump Effect PR shows advanced renderer extension, while the full suite provides reference implementations for common needs: visual enhancement, UX improvement, and workflow optimization. Each plugin uses clean architecture principles, making them templates for other developers building BPMN.js extensions. The modular approach shows how to compose features without core library modifications.',
  skillsUnlocked: [
    'BPMN.js renderer pipeline extension and handler override patterns',
    'SVG path manipulation with quadratic Bézier curves',
    'Geometric intersection algorithms with significance filtering',
    'Event-driven plugin architecture with EventBus coordination',
    'Performance optimization: debouncing, throttling, RAF batching, caching',
    'Context pad integration for custom UI elements',
    'DOM manipulation with proper lifecycle management',
    'Cross-plugin coordination and composition patterns',
  ],
  prUrl: 'https://github.com/enki-somer/camunda-8.8'
};
