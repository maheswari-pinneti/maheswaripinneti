import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ProjectWfaSqlite = () => {
  return (
    <div className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Link to="/work" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Work
        </Link>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1rem', lineHeight: 1.1 }}>
          WFA-SQLite
        </h1>
        <p style={{ color: '#10b981', fontSize: '1.25rem', fontWeight: 500, marginBottom: '2rem' }}>
          Workforce Administration Platform
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0', marginBottom: '4rem' }}>
        <div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Role</div>
          <div style={{ fontWeight: 500 }}>Lead Engineer</div>
        </div>
        <div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Timeline</div>
          <div style={{ fontWeight: 500 }}>2024 (Completed)</div>
        </div>
        <div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Stack</div>
          <div style={{ fontWeight: 500 }}>React, Node.js, SQLite</div>
        </div>
        <div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Links</div>
          <a href="https://github.com/maheswari-pinneti/wfa-sqlite" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: 500, textDecoration: 'underline' }}>GitHub Repo</a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Overview</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            WFA-SQLite is a comprehensive, scalable Workforce Administration system engineered to manage core HR functions efficiently. Designed from the ground up, it eliminates the need for expensive enterprise software by providing a lean, highly performant monolith.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            <strong>The Problem:</strong> Managing distributed workforces involves scattered spreadsheets for attendance, complex leave tracking, and disjointed payroll. <br/><br/>
            <strong>The Solution:</strong> A centralized, real-time platform with robust RBAC (Role-Based Access Control) ensuring security, efficiency, and automated operational workflows.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Architecture</h2>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', overflowX: 'auto' }}>
            User Action → React UI → Redux State / React Query →<br/>
            Express API (Rate Limited / Zod Validated) → SQLite Database
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            I opted for a highly optimized monolithic architecture. Using <code>better-sqlite3</code> allows for blazing-fast synchronous database operations, bypassing network latency inherent in microservices, perfect for a single-tenant enterprise tool.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Core Features</h2>
          <ul style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>RBAC Security:</strong> Strict authorization layers separating Admins, Managers, and Employees.</li>
            <li><strong>Attendance & Shifts:</strong> Real-time clock-in/out via Socket.IO, linked to dynamic shift rostering.</li>
            <li><strong>Payroll & Expenses:</strong> Automated calculations and multi-tier approval workflows.</li>
            <li><strong>Audit Logging:</strong> Immutable tracking of all database modifications for compliance.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Engineering & Testing Quality</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Production readiness was prioritized. The system enforces strict Type-Safety across the stack using TypeScript and Zod.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', fontWeight: 600, marginBottom: '0.5rem' }}>Unit Tests</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Vitest covering complex business logic.</div>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', fontWeight: 600, marginBottom: '0.5rem' }}>API Testing</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Supertest validating all Express routes.</div>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', fontWeight: 600, marginBottom: '0.5rem' }}>E2E Automation</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Playwright covering critical user journeys.</div>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Lessons Learned</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Handling complex relational data in SQLite taught me the importance of <code>foreign_keys = ON</code>, WAL mode for concurrent reads, and writing strict parameterized queries. Implementing real-time features taught me how to effectively decouple state logic between Redux and React Query to avoid race conditions.
          </p>
        </section>
        
      </motion.div>
    </div>
  );
};
