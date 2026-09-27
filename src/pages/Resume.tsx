import { motion } from 'framer-motion';

export const Resume = () => {
  return (
    <div className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}
      >
        <div>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 700, 
            letterSpacing: '-0.04em',
            marginBottom: '1rem' 
          }}>
            Resume.
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '500px', lineHeight: 1.6 }}>
            My professional experience, education, and technical skill set.
          </p>
        </div>
        
        <a 
          href="/resume.pdf" 
          download="Maheswari_Pinneti_Resume.pdf"
          style={{ 
            background: 'var(--text-main)', 
            color: '#000', 
            padding: '0.875rem 1.75rem', 
            borderRadius: '100px',
            fontWeight: 500,
            textDecoration: 'none',
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download PDF
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          width: '100%',
          height: '80vh',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.02)'
        }}
      >
        <iframe 
          src="/resume.pdf" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }}
          title="Maheswari Pinneti Resume"
        />
      </motion.div>
    </div>
  );
};
