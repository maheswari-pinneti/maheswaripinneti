import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/" style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-main)', letterSpacing: '-0.05em', textDecoration: 'none' }}>Maheswari.</Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '250px' }}>
              Frontend Developer specializing in scalable React architectures and production-grade UIs.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Engineering</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/work" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Work</Link>
              <Link to="/engineering" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Lab</Link>
              <Link to="/test-lab" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Tests</Link>
              <Link to="/github" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Open Source</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Personal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>About</Link>
              <Link to="/resume" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Resume</Link>
              <Link to="/uses" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Uses</Link>
              <Link to="/dashboard" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Dashboard</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
              <Link to="/guestbook" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Guestbook</Link>
              <a href="https://github.com/maheswari-pinneti" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>GitHub</a>
              <a href="https://linkedin.com/in/maheswari-pinneti" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>LinkedIn</a>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Maheswari Pinneti. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy</Link>
            <Link to="/world" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Location</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
