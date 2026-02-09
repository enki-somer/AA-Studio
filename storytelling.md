You are a senior frontend engineer + product designer.

Build the FIRST PAGE (Home) of my personal portfolio as a scroll-driven story.
Tech constraints:
- Next.js (App Router)
- TailwindCSS
- shadcn/ui
- Framer Motion
- Lottie support (use lottie-react OR @dotlottie/react; choose one and implement cleanly)
- TypeScript
- Accessibility (keyboard, aria, focus states)
- Respect prefers-reduced-motion

DO NOT invent content. Use placeholders wherever I didn’t provide exact text or assets.

========================================
GOAL
========================================
Create a storytelling homepage where scrolling narrates my growth and capabilities.
This page is an overview only. Every item links to a detailed page (routes exist as placeholders).

The story must visually evolve:
HTML/CSS/JS -> React+Tailwind -> Next.js+shadcn+Tailwind -> PWAs -> Full-stack (Flutter + Next.js + PostgreSQL + Node.js REST API).
Each step must have:
- Short title
- 1–2 lines max description (outcome-focused)
- 1 “what I learned” micro-line
- Visual: image or Lottie (placeholder paths)
- Link to details page

========================================
LAYOUT REQUIREMENTS
========================================
1) Header (sticky)
- Logo placeholder
- Nav links (Case Studies / Systems / Solutions / About / Contact)
- CTA buttons (Download CV / Contact)
2) Hero (above fold)
- Name placeholder
- 1 sentence subtitle placeholder
- 4 proof chips
- “Scroll to story” indicator
3) Main Scroll Story: “Growth Timeline”
- Desktop: 2-column
   Left: timeline steps (5 steps)
   Right: sticky visual stage that swaps visuals based on active step
- Mobile: visuals inline between text blocks
- Add progress indicator (e.g., 01/05 + vertical bar)
- Active step highlights on scroll (IntersectionObserver or Framer Motion useScroll)
- Visual swap transitions must be smooth (150–250ms)
- DO NOT put huge paragraphs
4) “Apps I Built” section
- Grid of 4–6 cards with image placeholders
- Each has tags and “Read case study”
- If screenshot is private, support “redacted thumbnail mode” (blur overlay + label)
5) “Systems I Initiated” section
- 3–5 milestone items, each “Problem → Solution → Outcome” (placeholders)
6) “Solutions I Implemented” section
- Filter chips, list updates per chip (placeholder data)
7) CTA + Contact
- Simple final section with contact links placeholders + modal optional

========================================
DATA MODEL
========================================
Create a local data file like:
- src/content/homeStory.ts
Include arrays:
- growthSteps[] (id, title, description, learned, lottiePath|imagePath, href)
- apps[] (title, oneLiner, tags[], thumbPath, isRedacted, href)
- systems[] (problem, solution, outcome, href)
- solutions[] (category, items[])

All text should be placeholders where unknown.

========================================
VISUAL ASSETS PLACEHOLDERS
========================================
Assume these exist (but code should not crash if missing):
/public/lotties/html_css_js.json
/public/lotties/react_components.json
/public/lotties/nextjs_app_router.json
/public/lotties/pwa_offline.json
/public/lotties/fullstack_arch_flow.json

If Lottie fails to load, render a fallback static card.

========================================
COMPONENTS
========================================
Create reusable components:
- StickyStoryTimeline.tsx
- StoryStep.tsx
- VisualStage.tsx
- AppCard.tsx (supports redacted mode)
- SectionHeader.tsx
- FilterChips.tsx

========================================
DELIVERABLE
========================================
Implement the page at:
- src/app/page.tsx
and components under:
- src/components/home/

Include clean styling, spacing, typographic hierarchy.
Add subtle depth effects (surface layers, soft borders, minimal glow).
No gaudy gradients. No generic AI landing page vibe.

Return the code changes as a clear file list + content.
