
import { Link } from 'react-router-dom';
import { profile } from '../content/profile';
import { AvailabilityBar } from './AvailabilityBar';

export const Hero = () => {
  return (
    <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px', position: 'relative', zIndex: 10, display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <AvailabilityBar />
          
          <h1 style={{ 
            fontSize: '4rem', 
            lineHeight: 1.1, 
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            {profile.name.toUpperCase()}
          </h1>
          
          <h2 style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1.5rem', 
            fontWeight: 400,
            marginBottom: '2rem'
          }}>
            {profile.title}
          </h2>
          
          <p style={{ 
            fontSize: '1.25rem', 
            maxWidth: '600px', 
            marginBottom: '1rem',
            lineHeight: 1.6
          }}>
            {profile.headline}
          </p>
          
          <p style={{ 
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            marginBottom: '3rem'
          }}>
            {profile.bio}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/work" className="btn">View My Work</Link>
            <Link to="/about" className="btn" style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)'
            }}>Read My Story</Link>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn" style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--text-muted)',
              padding: '0.75rem'
            }}>GitHub</a>
          </div>
        </div>
        
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '350px', 
            aspectRatio: '3/4',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            {/* The user should place their chosen image in the public folder as profile.jpg */}
            <img 
              src="/profile.jpg" 
              alt="Maheswari Pinnetti" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#111;color:var(--text-muted)">Please add profile.jpg to public/</div>';
              }}
            />
          </div>
        </div>
      </div>
      
      {/* 3D Canvas Placeholder */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        zIndex: 1,
        opacity: 0.5,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at center, rgba(16,185,129,0.1) 0%, transparent 70%)'
      }}>
        {/* React Three Fiber canvas goes here */}
      </div>
    </div>
  );
};
