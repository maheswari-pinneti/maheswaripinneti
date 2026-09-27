import { Link } from 'react-router-dom';
import { profile } from '../content/profile';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '4rem',
      position: 'relative'
    }}>
      
      {/* Subtle Background Glow - Signature Aayush Bharti Style */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '6px 12px', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '2rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 10px rgba(16,185,129,0.5)' }} />
          Available for new opportunities
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
            lineHeight: 1.05, 
            marginBottom: '1.5rem',
            letterSpacing: '-0.04em',
            fontWeight: 700,
            color: 'var(--text-main)'
          }}
        >
          Hi, I'm {profile.name}.<br/>
          <span style={{ color: 'var(--text-muted)' }}>{profile.title}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ 
            fontSize: '1.15rem', 
            maxWidth: '540px', 
            marginBottom: '3rem', 
            lineHeight: 1.6,
            color: '#888888'
          }}
        >
          {profile.headline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <Link to="/work" style={{ 
            background: 'var(--text-main)', 
            color: '#000', 
            padding: '0.875rem 1.75rem', 
            borderRadius: '100px',
            fontWeight: 500,
            textDecoration: 'none',
            fontSize: '0.95rem',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            See my work
          </Link>

          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ 
            color: 'var(--text-main)',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.95rem',
            padding: '0.875rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'opacity 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            LinkedIn
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
          
          <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ 
            color: 'var(--text-main)',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.95rem',
            padding: '0.875rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'opacity 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            GitHub
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
