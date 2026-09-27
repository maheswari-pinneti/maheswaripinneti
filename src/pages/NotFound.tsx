import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="section container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', letterSpacing: '-0.05em', color: 'var(--accent-primary)', marginBottom: '0' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '400px', marginBottom: '3rem', fontSize: '1.1rem' }}>
        The path you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn" style={{ textDecoration: 'none' }}>
        Return Home
      </Link>
    </div>
  );
};
