'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { Heading2, Heading3, BodyText } from '@/components/Typography';
import CodeSnippet from '@/components/automation/CodeSnippet';
import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';

export default function PropertyManagementPlatform() {
  const shouldAnimate = !prefersReducedMotion();
  const [selectedPhase, setSelectedPhase] = useState<1 | 2 | 3>(1);

  return (
    <Section
      title="Multi-Role Property Management Platform"
      subtitle="Unified backend serving web and mobile clients with role-based security"
    >
      <div className="max-w-wide mx-auto space-y-8">
        {/* Hero Dashboard - 2 sentence summary + metrics */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fastTransition}
          className="space-y-6"
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <BodyText className="text-sm md:text-lg mb-4">
              Built a multi-platform property management system coordinating tenants, owners, and admins with role-specific mobile apps and a unified web dashboard. The architecture maintains financial integrity through PostgreSQL ACID guarantees while serving three Flutter mobile apps and a Next.js PWA from a single Node.js backend.
            </BodyText>
          </div>

          {/* Tech Stack Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">Node.js</div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70">Backend API</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 md:mb-2">PostgreSQL</div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70">ACID Database</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-teal-500/10 to-teal-600/10 border border-teal-500/30 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1 md:mb-2">3 Apps</div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70">Flutter Mobile</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1 md:mb-2">Next.js</div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70">Web PWA</div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Timeline Stepper */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">Development Evolution</Heading2>
          
          {/* Timeline Navigation */}
          <div className="flex items-center justify-between mb-8 px-2">
            {[1, 2, 3].map((phase) => (
              <div key={phase} className="flex-1 flex items-center">
                <button
                  onClick={() => setSelectedPhase(phase as 1 | 2 | 3)}
                  className={`flex-1 flex flex-col items-center transition-all ${
                    selectedPhase === phase
                      ? 'opacity-100'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-base md:text-lg mb-1 md:mb-2 transition-all ${
                      selectedPhase === phase
                        ? 'bg-accent text-base-dark scale-110 shadow-accent-glow'
                        : 'bg-accent/20 text-accent'
                    }`}
                  >
                    {phase}
                  </div>
                  <div className="text-[10px] md:text-xs font-medium text-center px-1">
                    {phase === 1 && 'Web Platform'}
                    {phase === 2 && 'Mobile Expansion'}
                    {phase === 3 && 'Production System'}
                  </div>
                </button>
                {phase < 3 && (
                  <div className="flex-1 h-0.5 bg-accent/20 mx-1 md:mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Phase Content */}
          <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-accent/5 to-accent-muted/5 border border-accent/20 elevation-2">
            {selectedPhase === 1 && (
              <div className="space-y-3 md:space-y-4">
                <Heading3 className="text-accent text-base md:text-lg">Phase 1: Web Platform Foundation</Heading3>
                <BodyText className="text-xs md:text-sm">
                  Built Next.js web dashboard with server-side rendering and API routes. Established PostgreSQL database with role-based filtering and JWT authentication for secure access control.
                </BodyText>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-text-light/90 dark:text-text-dark/90">
                  <li>• Next.js App Router with co-located API routes</li>
                  <li>• Role-based data filtering at query level</li>
                  <li>• JWT tokens with refresh rotation</li>
                </ul>
              </div>
            )}
            
            {selectedPhase === 2 && (
              <div className="space-y-3 md:space-y-4">
                <Heading3 className="text-accent text-base md:text-lg">Phase 2: Mobile-First Expansion</Heading3>
                <BodyText className="text-xs md:text-sm">
                  Developed three dedicated Flutter apps (Tenant, Owner, Admin) sharing common packages. Each app optimized for its role with focused UX and smaller bundle sizes.
                </BodyText>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-text-light/90 dark:text-text-dark/90">
                  <li>• Separate apps per role for focused UX</li>
                  <li>• Shared Dart packages for API clients and models</li>
                  <li>• Platform-specific UI patterns and gestures</li>
                </ul>
              </div>
            )}
            
            {selectedPhase === 3 && (
              <div className="space-y-3 md:space-y-4">
                <Heading3 className="text-accent text-base md:text-lg">Phase 3: Production Multi-Platform System</Heading3>
                <BodyText className="text-xs md:text-sm">
                  Unified system with real-time WebSocket synchronization, offline-first architecture, and push notifications. Defense-in-depth security across API, database, and UI layers.
                </BodyText>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-text-light/90 dark:text-text-dark/90">
                  <li>• Real-time sync with WebSocket connections</li>
                  <li>• Offline-first with local SQLite cache</li>
                  <li>• Multi-layer authorization enforcement</li>
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        {/* Architecture Visual - Side by Side */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">System Architecture</Heading2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
            {/* Architecture Diagram Placeholder */}
            <div className="h-[250px] md:h-[300px] rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-accent/20 flex items-center justify-center elevation-2">
              <div className="text-center p-4 md:p-6">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">🏗️</div>
                <div className="text-sm font-medium text-accent">System Architecture</div>
                <div className="text-xs text-text-light/60 dark:text-text-dark/60 mt-2">
                  Multi-tier: Clients → API → Database
                </div>
              </div>
            </div>

            {/* Tech Decisions */}
            <div className="space-y-3 md:space-y-4">
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-green-500/5 to-green-500/10 border border-green-500/20">
                <div className="font-semibold text-xs md:text-sm text-green-600 dark:text-green-400 mb-1.5 md:mb-2">
                  Why PostgreSQL?
                </div>
                <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                  ACID guarantees for financial transactions, complex JOINs for reporting, and foreign key constraints prevent orphaned records.
                </div>
              </div>
              
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20">
                <div className="font-semibold text-xs md:text-sm text-blue-600 dark:text-blue-400 mb-1.5 md:mb-2">
                  Why 3 Separate Apps?
                </div>
                <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                  Focused UX per role, smaller bundle sizes, targeted app store optimization, and independent deployment cycles.
                </div>
              </div>
              
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-purple-500/5 to-purple-500/10 border border-purple-500/20">
                <div className="font-semibold text-xs md:text-sm text-purple-600 dark:text-purple-400 mb-1.5 md:mb-2">
                  Why JWT Tokens?
                </div>
                <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                  Stateless auth enables horizontal scaling, works offline, and eliminates session storage requirements.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accordion Sections - Detailed Technical Content */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">Technical Deep Dive</Heading2>
          
          <Accordion.Root type="single" collapsible className="space-y-3 md:space-y-4">
            {/* Database Design */}
            <Accordion.Item value="database" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">💾</span>
                  <span>Database Design & Schema</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <BodyText className="text-xs md:text-sm mb-3 md:mb-4">
                  PostgreSQL schema with role-based filtering, ACID guarantees, and optimized indexes for query performance.
                </BodyText>
                <CodeSnippet
                  code={`<span class="text-purple-400">CREATE TABLE</span> users (
  id UUID <span class="text-purple-400">PRIMARY KEY DEFAULT</span> gen_random_uuid(),
  email <span class="text-orange-400">VARCHAR</span>(<span class="text-cyan-400">255</span>) <span class="text-purple-400">UNIQUE NOT NULL</span>,
  role <span class="text-orange-400">VARCHAR</span>(<span class="text-cyan-400">20</span>) <span class="text-purple-400">CHECK</span> (role <span class="text-purple-400">IN</span> (<span class="text-green-400">'tenant'</span>, <span class="text-green-400">'owner'</span>, <span class="text-green-400">'admin'</span>))
);

<span class="text-purple-400">CREATE TABLE</span> properties (
  id UUID <span class="text-purple-400">PRIMARY KEY</span>,
  owner_id UUID <span class="text-purple-400">REFERENCES</span> users(id),
  address TEXT <span class="text-purple-400">NOT NULL</span>
);

<span class="text-purple-400">CREATE TABLE</span> rent_payments (
  tenant_id UUID <span class="text-purple-400">REFERENCES</span> users(id),
  property_id UUID <span class="text-purple-400">REFERENCES</span> properties(id),
  amount <span class="text-orange-400">DECIMAL</span>(<span class="text-cyan-400">10</span>, <span class="text-cyan-400">2</span>) <span class="text-purple-400">CHECK</span> (amount > <span class="text-cyan-400">0</span>)
);`}
                  language="sql"
                />
              </Accordion.Content>
            </Accordion.Item>

            {/* Authentication Strategy */}
            <Accordion.Item value="auth" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">🔐</span>
                  <span>Authentication & Authorization</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="h-[180px] md:h-[200px] rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 flex items-center justify-center">
                    <div className="text-center p-3 md:p-4">
                      <div className="text-2xl md:text-3xl mb-1.5 md:mb-2">🔑</div>
                      <div className="text-xs font-medium">JWT Flow</div>
                      <div className="text-[11px] md:text-xs text-text-light/60 dark:text-text-dark/60 mt-1">
                        Login → Token → Refresh → Validation
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-2.5 md:p-3 rounded bg-accent/10 border border-accent/20">
                      <div className="font-semibold text-xs md:text-sm mb-1">Access Tokens</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">Short-lived (15min), validated without DB lookup</div>
                    </div>
                    <div className="p-2.5 md:p-3 rounded bg-accent/10 border border-accent/20">
                      <div className="font-semibold text-xs md:text-sm mb-1">Refresh Tokens</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">Long-lived, stored in secure keychain/keystore</div>
                    </div>
                    <div className="p-2.5 md:p-3 rounded bg-accent/10 border border-accent/20">
                      <div className="font-semibold text-xs md:text-sm mb-1">Role Claims</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">Embedded in JWT, verified at API layer</div>
                    </div>
                  </div>
                </div>
                <CodeSnippet
                  code={`<span class="text-purple-400">export</span> <span class="text-purple-400">async function</span> <span class="text-yellow-400">GET</span>(request: NextRequest) {
  <span class="text-gray-500">// Verify JWT and extract user context</span>
  <span class="text-purple-400">const</span> user = <span class="text-purple-400">await</span> <span class="text-orange-400">verifyAuth</span>(request);
  
  <span class="text-purple-400">if</span> (!user) {
    <span class="text-purple-400">return</span> NextResponse.<span class="text-orange-400">json</span>(
      { error: <span class="text-green-400">'Unauthorized'</span> }, 
      { status: <span class="text-cyan-400">401</span> }
    );
  }
  
  <span class="text-gray-500">// Role-based data filtering at API layer</span>
  <span class="text-purple-400">const</span> payments = <span class="text-purple-400">await</span> <span class="text-orange-400">getPaymentsByRole</span>(user.id, user.role);
  <span class="text-purple-400">return</span> NextResponse.<span class="text-orange-400">json</span>({ payments });
}`}
                  language="typescript"
                />
              </Accordion.Content>
            </Accordion.Item>

            {/* Role-Based Security */}
            <Accordion.Item value="security" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">🛡️</span>
                  <span>Multi-Layer Role-Based Security</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <BodyText className="text-xs md:text-sm mb-3 md:mb-4">
                  Defense-in-depth security enforced at API middleware, database queries, and UI rendering layers.
                </BodyText>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-red-600 dark:text-red-400">Layer 1: API</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      Middleware checks JWT role claims before allowing endpoint access
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-orange-600 dark:text-orange-400">Layer 2: Database</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      Queries automatically filter by user_id and role using WHERE clauses
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-green-500/10 border border-yellow-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-yellow-600 dark:text-yellow-400">Layer 3: UI</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      Role-specific apps only include relevant screens and features
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            {/* Media Pipeline */}
            <Accordion.Item value="media" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">📸</span>
                  <span>Media & Document Management</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <div className="h-[180px] md:h-[200px] rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center mb-3 md:mb-4">
                  <div className="text-center p-3 md:p-4">
                    <div className="text-2xl md:text-3xl mb-1.5 md:mb-2">📤</div>
                    <div className="text-xs font-medium">Upload Pipeline</div>
                    <div className="text-[11px] md:text-xs text-text-light/60 dark:text-text-dark/60 mt-1">
                      Client → Validate → S3/Cloud → DB Reference → Notify
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">1</div>
                    <div>Client uploads receipt/document from mobile or web</div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">2</div>
                    <div>Validate file type (PDF, JPG, PNG) and size limits</div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">3</div>
                    <div>Store in S3/cloud with signed URLs for secure access</div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">4</div>
                    <div>Save reference URL in PostgreSQL with metadata</div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">5</div>
                    <div>Notify relevant parties via push notification/email</div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            {/* Scaling Strategy */}
            <Accordion.Item value="scaling" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">📈</span>
                  <span>Scalability & Future Growth</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-blue-600 dark:text-blue-400">Current State</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80 space-y-0.5 md:space-y-1">
                      <div>• Monolithic API with clear boundaries</div>
                      <div>• Single PostgreSQL instance</div>
                      <div>• Load balancer ready</div>
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-cyan-600 dark:text-cyan-400">Near-Term</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80 space-y-0.5 md:space-y-1">
                      <div>• Redis for session caching</div>
                      <div>• PostgreSQL read replicas</div>
                      <div>• CDN for media assets</div>
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-teal-500/10 to-green-500/10 border border-teal-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-teal-600 dark:text-teal-400">Long-Term</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80 space-y-0.5 md:space-y-1">
                      <div>• Extract high-volume services</div>
                      <div>• Event streaming architecture</div>
                      <div>• Analytics data warehouse</div>
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </motion.div>

        {/* Impact Metrics Footer */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto bg-gradient-to-br from-accent/5 to-accent-muted/5 rounded-xl p-6 md:p-8 border border-accent/20 elevation-2"
        >
          <Heading2 className="mb-6 text-center">Production Impact</Heading2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30 flex flex-col items-center justify-center text-center min-h-[140px]">
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2 md:mb-3">99.9%</div>
              <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">API uptime over 6 months</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 flex flex-col items-center justify-center text-center min-h-[140px]">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 md:mb-3">&lt;180ms</div>
              <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">P95 API response time</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 flex flex-col items-center justify-center text-center min-h-[140px]">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2 md:mb-3">3</div>
              <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">Mobile apps sharing 70% code</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
