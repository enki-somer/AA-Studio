'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { Heading2, Heading3, BodyText } from '@/components/Typography';
import CodeSnippet from '@/components/automation/CodeSnippet';
import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { fastTransition, prefersReducedMotion } from '@/lib/animations';

export default function ERPFinancialSystem() {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <Section
      title="Construction Financial Management System"
      subtitle="Project-centric ERP with multi-role access and offline capabilities"
    >
      <div className="max-w-wide mx-auto space-y-8">
        {/* Hero Section - 2-3 sentence summary */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fastTransition}
          className="space-y-6"
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <BodyText className="text-sm md:text-lg mb-4">
              Developed a comprehensive financial management system specifically designed for construction companies, handling projects, contractors, invoices, payroll, and cash flow. The system serves three distinct user roles with granular permissions, operates offline through PWA capabilities, and maintains financial integrity via PostgreSQL ACID guarantees.
            </BodyText>
          </div>

          {/* Tech Stack Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">Next.js 15</div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70">React 19 + PWA</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 md:mb-2">Node.js</div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70">Express API</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 md:mb-2">PostgreSQL</div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70">ACID Database</div>
            </div>
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 flex flex-col items-center justify-center text-center min-h-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1 md:mb-2">TypeScript</div>
              <div className="text-xs text-text-light/70 dark:text-text-dark/70">Full-Stack</div>
            </div>
          </div>
        </motion.div>

        {/* System Overview Section */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">System Overview</Heading2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Architecture Flow */}
            <div className="p-4 md:p-6 rounded-lg bg-gradient-to-br from-accent/5 to-accent-muted/5 border border-accent/20 elevation-2">
              <Heading3 className="text-base md:text-lg mb-3 md:mb-4">Project-Centric Model</Heading3>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-xs">1</div>
                  <div>Projects created with budgets and timelines</div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-xs">2</div>
                  <div>Categories assigned to contractors with estimates</div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-xs">3</div>
                  <div>Invoices submitted and approved</div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-xs">4</div>
                  <div>Payments processed from central treasury</div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-xs">5</div>
                  <div>Real-time tracking and financial reports</div>
                </div>
              </div>
            </div>

            {/* Role-Based Access */}
            <div className="space-y-3 md:space-y-4">
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-green-500/5 to-green-500/10 border border-green-500/20">
                <div className="font-semibold text-xs md:text-sm text-green-600 dark:text-green-400 mb-1.5 md:mb-2 flex items-center gap-2">
                  <span className="text-lg">👑</span> Administrator
                </div>
                <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                  Full access: manage projects, approve invoices, process payments, view all financial data
                </div>
              </div>
              
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20">
                <div className="font-semibold text-xs md:text-sm text-blue-600 dark:text-blue-400 mb-1.5 md:mb-2 flex items-center gap-2">
                  <span className="text-lg">📝</span> Data Entry
                </div>
                <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                  Limited access: create invoices and expenses, no financial visibility or payment authority
                </div>
              </div>
              
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-purple-500/5 to-purple-500/10 border border-purple-500/20">
                <div className="font-semibold text-xs md:text-sm text-purple-600 dark:text-purple-400 mb-1.5 md:mb-2 flex items-center gap-2">
                  <span className="text-lg">👥</span> Partners
                </div>
                <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                  Read-only access: view financial reports and safe balance for transparency
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Decisions */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">Key Technical Decisions</Heading2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="p-4 md:p-5 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 elevation-2">
              <div className="flex items-start gap-3 mb-2 md:mb-3">
                <div className="text-2xl">🗄️</div>
                <div>
                  <div className="font-semibold text-sm md:text-base mb-1">Why PostgreSQL?</div>
                  <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">
                    ACID compliance ensures financial data integrity, complex JOINs enable sophisticated reporting, and foreign key constraints prevent orphaned records in multi-table workflows.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 elevation-2">
              <div className="flex items-start gap-3 mb-2 md:mb-3">
                <div className="text-2xl">🔑</div>
                <div>
                  <div className="font-semibold text-sm md:text-base mb-1">Why JWT Tokens?</div>
                  <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">
                    Stateless authentication enables horizontal scaling without session storage, works offline in PWA mode, and embeds role claims for quick permission checks.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 rounded-lg bg-gradient-to-br from-teal-500/10 to-teal-600/10 border border-teal-500/30 elevation-2">
              <div className="flex items-start gap-3 mb-2 md:mb-3">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="font-semibold text-sm md:text-base mb-1">Why PWA Architecture?</div>
                  <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">
                    Construction sites often have poor connectivity. Service workers and IndexedDB enable offline data access, queued operations sync when online, and field workers maintain productivity.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 elevation-2">
              <div className="flex items-start gap-3 mb-2 md:mb-3">
                <div className="text-2xl">🔌</div>
                <div>
                  <div className="font-semibold text-sm md:text-base mb-1">Why Separate Backend?</div>
                  <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">
                    Dedicated API server enables mobile apps, allows independent scaling of frontend/backend, provides clear separation of concerns, and simplifies testing and deployment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features Accordion */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">Core Features</Heading2>
          
          <Accordion.Root type="single" collapsible className="space-y-3 md:space-y-4">
            {/* Financial Tracking */}
            <Accordion.Item value="financial" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">💰</span>
                  <span>Real-Time Financial Tracking</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <BodyText className="text-xs md:text-sm mb-3 md:mb-4">
                  Central treasury system tracks all cash inflows and outflows with automatic balance calculation and comprehensive audit trails.
                </BodyText>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-green-600 dark:text-green-400">Project Budgets</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80 space-y-1">
                      <div>• Track allocated vs. spent budget</div>
                      <div>• Calculate profit margins per project</div>
                      <div>• Monitor category-level spending</div>
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-blue-600 dark:text-blue-400">Cash Flow</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80 space-y-1">
                      <div>• Real-time safe balance updates</div>
                      <div>• Transaction history with references</div>
                      <div>• Funding source tracking</div>
                    </div>
                  </div>
                </div>
                <CodeSnippet
                  code={`<span class="text-gray-500">// Balance integrity maintained</span>
<span class="text-purple-400">const</span> balance = {
  previous: <span class="text-cyan-400">100000</span>,
  transaction: <span class="text-cyan-400">-15000</span>,
  new: <span class="text-cyan-400">85000</span>,
  audit: {
    user: <span class="text-green-400">'admin@example.com'</span>,
    timestamp: <span class="text-green-400">'2024-01-15T10:30:00Z'</span>,
    reference: <span class="text-green-400">'invoice_INV-2024-001'</span>
  }
};`}
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-red-600 dark:text-red-400">Layer 1: API</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      Middleware validates JWT tokens and checks role permissions before route access
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-orange-600 dark:text-orange-400">Layer 2: Database</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      SQL queries automatically filter by user_id and role using WHERE clauses
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-green-500/10 border border-yellow-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2 text-yellow-600 dark:text-yellow-400">Layer 3: UI</div>
                    <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      Components conditionally render based on user permissions and role
                    </div>
                  </div>
                </div>
                <CodeSnippet
                  code={`<span class="text-gray-500">// API Layer - JWT Middleware</span>
<span class="text-purple-400">export</span> <span class="text-purple-400">async function</span> <span class="text-yellow-400">authMiddleware</span>(req, res, next) {
  <span class="text-purple-400">const</span> token = req.headers.authorization;
  <span class="text-purple-400">const</span> user = <span class="text-purple-400">await</span> <span class="text-orange-400">verifyJWT</span>(token);
  
  <span class="text-purple-400">if</span> (!user || !<span class="text-orange-400">hasPermission</span>(user.role, req.route)) {
    <span class="text-purple-400">return</span> res.<span class="text-orange-400">status</span>(<span class="text-cyan-400">403</span>).<span class="text-orange-400">json</span>({ error: <span class="text-green-400">'Forbidden'</span> });
  }
  
  req.user = user;
  <span class="text-orange-400">next</span>();
}`}
                  language="typescript"
                />
              </Accordion.Content>
            </Accordion.Item>

            {/* Offline PWA */}
            <Accordion.Item value="pwa" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">📡</span>
                  <span>Offline-First PWA Architecture</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <BodyText className="text-xs md:text-sm mb-3 md:mb-4">
                  Service workers and IndexedDB enable offline access to critical data with automatic synchronization when connectivity returns.
                </BodyText>
                <div className="space-y-2 text-xs md:text-sm mb-3 md:mb-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">1</div>
                    <div>
                      <div className="font-semibold mb-0.5">Offline Data Access</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">View cached projects, employees, contractors, and transaction history</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">2</div>
                    <div>
                      <div className="font-semibold mb-0.5">Queued Operations</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">Create invoices and expenses offline, queued in IndexedDB for sync</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">3</div>
                    <div>
                      <div className="font-semibold mb-0.5">Automatic Sync</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">Background sync when online, conflict resolution for concurrent edits</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center font-bold text-xs">4</div>
                    <div>
                      <div className="font-semibold mb-0.5">Network Detection</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">UI indicators show connection status and sync progress</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 md:p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-xs md:text-sm font-semibold mb-1 text-yellow-700 dark:text-yellow-400">⚠️ Security Constraint</div>
                  <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                    Payment operations require online connection and real-time balance validation to prevent overdrafts and maintain financial integrity.
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            {/* Approval Workflows */}
            <Accordion.Item value="workflows" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">✅</span>
                  <span>Approval Workflows & Audit Trails</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <BodyText className="text-xs md:text-sm mb-3 md:mb-4">
                  Multi-step approval workflows ensure proper authorization while comprehensive audit trails maintain accountability for all financial operations.
                </BodyText>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-2 md:mb-3 text-blue-600 dark:text-blue-400">Invoice Workflow</div>
                    <div className="space-y-1.5 text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      <div className="flex items-center gap-2">
                        <span className="font-mono">1.</span> Data entry creates invoice
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">2.</span> Admin reviews and verifies
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">3.</span> Admin approves or rejects with reason
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">4.</span> Approved invoices enable payment
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">5.</span> Payment updates balance and records
                      </div>
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-2 md:mb-3 text-purple-600 dark:text-purple-400">Audit Trail</div>
                    <div className="space-y-1.5 text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      <div>• Who: User identity and role</div>
                      <div>• What: Action performed and data changed</div>
                      <div>• When: Precise timestamp</div>
                      <div>• Why: Reason for edits/deletions</div>
                      <div>• Previous: Original values before change</div>
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </motion.div>

        {/* Architecture Deep Dive */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto"
        >
          <Heading2 className="mb-6 text-center">Architecture Deep Dive</Heading2>
          
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
                  Normalized PostgreSQL schema with role-based row-level filtering, foreign key constraints for referential integrity, and optimized indexes for reporting queries.
                </BodyText>
                <CodeSnippet
                  code={`<span class="text-gray-500">-- Projects with financial tracking</span>
<span class="text-purple-400">CREATE TABLE</span> projects (
  id UUID <span class="text-purple-400">PRIMARY KEY DEFAULT</span> gen_random_uuid(),
  name <span class="text-orange-400">VARCHAR</span>(<span class="text-cyan-400">255</span>) <span class="text-purple-400">NOT NULL</span>,
  budget_estimate <span class="text-orange-400">DECIMAL</span>(<span class="text-cyan-400">15</span>, <span class="text-cyan-400">2</span>),
  created_by UUID <span class="text-purple-400">REFERENCES</span> users(id)
);

<span class="text-gray-500">-- Category assignments link projects to contractors</span>
<span class="text-purple-400">CREATE TABLE</span> category_assignments (
  id UUID <span class="text-purple-400">PRIMARY KEY</span>,
  project_id UUID <span class="text-purple-400">REFERENCES</span> projects(id),
  contractor_id UUID <span class="text-purple-400">REFERENCES</span> contractors(id),
  estimated_cost <span class="text-orange-400">DECIMAL</span>(<span class="text-cyan-400">15</span>, <span class="text-cyan-400">2</span>)
);

<span class="text-gray-500">-- Safe transactions with audit trail</span>
<span class="text-purple-400">CREATE TABLE</span> safe_transactions (
  id UUID <span class="text-purple-400">PRIMARY KEY</span>,
  type <span class="text-orange-400">VARCHAR</span>(<span class="text-cyan-400">50</span>) <span class="text-purple-400">CHECK</span> (type <span class="text-purple-400">IN</span> (
    <span class="text-green-400">'funding'</span>, <span class="text-green-400">'invoice_payment'</span>, 
    <span class="text-green-400">'salary_payment'</span>, <span class="text-green-400">'general_expense'</span>
  )),
  amount <span class="text-orange-400">DECIMAL</span>(<span class="text-cyan-400">15</span>, <span class="text-cyan-400">2</span>) <span class="text-purple-400">NOT NULL</span>,
  balance_before <span class="text-orange-400">DECIMAL</span>(<span class="text-cyan-400">15</span>, <span class="text-cyan-400">2</span>),
  balance_after <span class="text-orange-400">DECIMAL</span>(<span class="text-cyan-400">15</span>, <span class="text-cyan-400">2</span>),
  created_by UUID <span class="text-purple-400">REFERENCES</span> users(id),
  created_at <span class="text-orange-400">TIMESTAMP DEFAULT</span> NOW()
);`}
                  language="sql"
                />
              </Accordion.Content>
            </Accordion.Item>

            {/* Authentication Flow */}
            <Accordion.Item value="auth" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">🔐</span>
                  <span>JWT Authentication Flow</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <BodyText className="text-xs md:text-sm mb-3 md:mb-4">
                  Stateless JWT-based authentication with refresh token rotation for enhanced security and offline support.
                </BodyText>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="space-y-2 text-xs md:text-sm">
                    <div className="p-2.5 md:p-3 rounded bg-accent/10 border border-accent/20">
                      <div className="font-semibold text-xs md:text-sm mb-1">Access Token</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">Short-lived (15 min), contains user ID and role, validated without DB</div>
                    </div>
                    <div className="p-2.5 md:p-3 rounded bg-accent/10 border border-accent/20">
                      <div className="font-semibold text-xs md:text-sm mb-1">Refresh Token</div>
                      <div className="text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">Long-lived (7 days), stored in httpOnly cookie, rotated on use</div>
                    </div>
                  </div>
                  <div className="h-[180px] md:h-[200px] rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 flex items-center justify-center">
                    <div className="text-center p-3 md:p-4">
                      <div className="text-2xl md:text-3xl mb-1.5 md:mb-2">🔄</div>
                      <div className="text-xs font-medium">Token Rotation</div>
                      <div className="text-[11px] md:text-xs text-text-light/60 dark:text-text-dark/60 mt-1">
                        Login → Access + Refresh → Expire → Refresh → New Tokens
                      </div>
                    </div>
                  </div>
                </div>
                <CodeSnippet
                  code={`<span class="text-gray-500">// Generate JWT tokens</span>
<span class="text-purple-400">export</span> <span class="text-purple-400">function</span> <span class="text-yellow-400">generateTokens</span>(user: User) {
  <span class="text-purple-400">const</span> accessToken = jwt.<span class="text-orange-400">sign</span>(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: <span class="text-green-400">'15m'</span> }
  );
  
  <span class="text-purple-400">const</span> refreshToken = jwt.<span class="text-orange-400">sign</span>(
    { id: user.id },
    process.env.REFRESH_SECRET,
    { expiresIn: <span class="text-green-400">'7d'</span> }
  );
  
  <span class="text-purple-400">return</span> { accessToken, refreshToken };
}`}
                  language="typescript"
                />
              </Accordion.Content>
            </Accordion.Item>

            {/* Safe Transaction Flow */}
            <Accordion.Item value="safe" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">🏦</span>
                  <span>Safe Transaction & Balance Integrity</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <BodyText className="text-xs md:text-sm mb-3 md:mb-4">
                  Central treasury maintains balance integrity through PostgreSQL transactions, preventing race conditions and ensuring accurate financial records.
                </BodyText>
                <div className="space-y-2 text-xs md:text-sm mb-3 md:mb-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-xs">1</div>
                    <div>Begin database transaction with row-level lock on safe_state</div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-xs">2</div>
                    <div>Read current balance and validate sufficient funds for outflows</div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-xs">3</div>
                    <div>Calculate new balance (previous ± transaction amount)</div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-xs">4</div>
                    <div>Insert transaction record with before/after balance</div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-xs">5</div>
                    <div>Update safe_state with new balance</div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-xs">6</div>
                    <div>Commit transaction or rollback on error</div>
                  </div>
                </div>
                <CodeSnippet
                  code={`<span class="text-gray-500">// Safe transaction with ACID guarantees</span>
<span class="text-purple-400">export</span> <span class="text-purple-400">async function</span> <span class="text-yellow-400">processPayment</span>(
  amount: <span class="text-orange-400">number</span>,
  reference: <span class="text-orange-400">string</span>
) {
  <span class="text-purple-400">const</span> client = <span class="text-purple-400">await</span> pool.<span class="text-orange-400">connect</span>();
  
  <span class="text-purple-400">try</span> {
    <span class="text-purple-400">await</span> client.<span class="text-orange-400">query</span>(<span class="text-green-400">'BEGIN'</span>);
    
    <span class="text-gray-500">// Lock safe_state row</span>
    <span class="text-purple-400">const</span> { rows } = <span class="text-purple-400">await</span> client.<span class="text-orange-400">query</span>(
      <span class="text-green-400">'SELECT balance FROM safe_state FOR UPDATE'</span>
    );
    
    <span class="text-purple-400">const</span> currentBalance = rows[<span class="text-cyan-400">0</span>].balance;
    <span class="text-purple-400">if</span> (currentBalance < amount) {
      <span class="text-purple-400">throw new</span> <span class="text-orange-400">Error</span>(<span class="text-green-400">'Insufficient funds'</span>);
    }
    
    <span class="text-purple-400">const</span> newBalance = currentBalance - amount;
    
    <span class="text-gray-500">// Record transaction</span>
    <span class="text-purple-400">await</span> client.<span class="text-orange-400">query</span>(
      <span class="text-green-400">'INSERT INTO safe_transactions VALUES ($1, $2, $3, $4)'</span>,
      [amount, currentBalance, newBalance, reference]
    );
    
    <span class="text-gray-500">// Update balance</span>
    <span class="text-purple-400">await</span> client.<span class="text-orange-400">query</span>(
      <span class="text-green-400">'UPDATE safe_state SET balance = $1'</span>,
      [newBalance]
    );
    
    <span class="text-purple-400">await</span> client.<span class="text-orange-400">query</span>(<span class="text-green-400">'COMMIT'</span>);
    <span class="text-purple-400">return</span> { success: <span class="text-cyan-400">true</span>, newBalance };
  } <span class="text-purple-400">catch</span> (error) {
    <span class="text-purple-400">await</span> client.<span class="text-orange-400">query</span>(<span class="text-green-400">'ROLLBACK'</span>);
    <span class="text-purple-400">throw</span> error;
  } <span class="text-purple-400">finally</span> {
    client.<span class="text-orange-400">release</span>();
  }
}`}
                  language="typescript"
                />
              </Accordion.Content>
            </Accordion.Item>

            {/* Offline Sync Strategy */}
            <Accordion.Item value="sync" className="border border-accent/20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-muted/5">
              <Accordion.Trigger className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-accent/10 transition-colors group">
                <span className="font-semibold text-sm md:text-base text-left flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">🔄</span>
                  <span>Offline Sync Strategy</span>
                </span>
                <span className="text-accent group-data-[state=open]:rotate-180 transition-transform text-sm md:text-base flex-shrink-0 ml-2">▼</span>
              </Accordion.Trigger>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                <BodyText className="text-xs md:text-sm mb-3 md:mb-4">
                  IndexedDB stores pending operations during offline periods, with background sync automatically processing the queue when connectivity returns.
                </BodyText>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-2 md:mb-3 text-cyan-600 dark:text-cyan-400">Offline Queue</div>
                    <div className="space-y-1.5 text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      <div>• Operations stored in IndexedDB</div>
                      <div>• Timestamped for order preservation</div>
                      <div>• Optimistic UI updates</div>
                      <div>• Conflict detection metadata</div>
                    </div>
                  </div>
                  <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20">
                    <div className="font-semibold text-xs md:text-sm mb-2 md:mb-3 text-green-600 dark:text-green-400">Sync Process</div>
                    <div className="space-y-1.5 text-[11px] md:text-xs text-text-light/80 dark:text-text-dark/80">
                      <div>• Background sync on reconnect</div>
                      <div>• Sequential processing of queue</div>
                      <div>• Retry with exponential backoff</div>
                      <div>• Server-wins conflict resolution</div>
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastTransition}
          className="max-w-5xl mx-auto bg-gradient-to-br from-accent/5 to-accent-muted/5 rounded-xl p-6 md:p-8 border border-accent/20 elevation-2"
        >
          <Heading2 className="mb-6 text-center">System Impact</Heading2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 flex flex-col items-center justify-center text-center min-h-[140px]">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 md:mb-3">3 Roles</div>
              <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">Admin, Data Entry, Partners with granular permissions</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30 flex flex-col items-center justify-center text-center min-h-[140px]">
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2 md:mb-3">6+ Modules</div>
              <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">Projects, Safe, HR, Contractors, Expenses, Reports</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 flex flex-col items-center justify-center text-center min-h-[140px]">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2 md:mb-3">Offline</div>
              <div className="text-xs md:text-sm text-text-light/80 dark:text-text-dark/80">PWA with service workers and IndexedDB sync</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
