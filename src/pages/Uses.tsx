import { motion } from 'framer-motion';

export const Uses = () => {
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
          Uses.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6 }}>
          My personal developer ecosystem, hardware, and software stack.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Hardware</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)' }}>
              <div style={{ fontWeight: 500, marginBottom: '0.5rem' }}>MacBook Pro 14" (M-Series)</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>The standard for frontend development. Fast builds, silent operation.</div>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)' }}>
              <div style={{ fontWeight: 500, marginBottom: '0.5rem' }}>Dell UltraSharp 27" 4K</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>High pixel density is crucial for UI perfection.</div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Editor & Terminal</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)' }}>
              <div style={{ fontWeight: 500, marginBottom: '0.5rem' }}>VS Code</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Theme: Vesper / GitHub Dark. Font: Fira Code.</div>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)' }}>
              <div style={{ fontWeight: 500, marginBottom: '0.5rem' }}>Warp / iTerm2</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Using Zsh with Oh My Zsh and powerlevel10k.</div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Development Stack</h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'Zustand', 'React Query', 'Framer Motion', 'Node.js', 'Express', 'SQLite', 'Zod', 'Playwright'].map(tech => (
              <span key={tech} style={{ 
                fontSize: '0.9rem', 
                padding: '8px 16px', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                color: 'var(--text-main)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
