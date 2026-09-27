import { motion } from 'framer-motion';

export const Now = () => {
  return (
    <div className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 700, 
          letterSpacing: '-0.04em',
          marginBottom: '1rem' 
        }}>
          Now.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6 }}>
          What I'm currently focused on right now.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Current Role</h2>
          <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', background: 'rgba(255,255,255,0.02)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>Frontend Developer</h3>
            <div style={{ color: '#10b981', fontWeight: 600, marginBottom: '1rem' }}>@ Stackly (Bengaluru)</div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              I'm actively building enterprise workforce analytics interfaces. Currently focused on optimizing large data grid rendering and scaling our Redux Toolkit / React Query architecture to reduce API latency.
            </p>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Current Learning</h2>
          <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
            <li>Advanced Three.js and WebGL rendering optimizations.</li>
            <li>Deep diving into Playwright for bulletproof E2E automation.</li>
            <li>Exploring Rust and WebAssembly for high-performance frontend data processing.</li>
          </ul>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Current Side Projects</h2>
          <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
            <li>Polishing this portfolio using the ultra-minimalist engineering aesthetic.</li>
            <li>Refactoring an older React SPA to use Vite and Zustand.</li>
          </ul>
        </motion.section>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Last updated: September 2026
        </motion.div>
      </div>
    </div>
  );
};
