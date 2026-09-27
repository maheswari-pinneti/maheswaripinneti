import { useState, useEffect } from 'react';
import { experience } from '../content/experience';

export const Dashboard = () => {
  const [stats, setStats] = useState<{ totalViews: number, topPaths: { path: string, count: number }[] } | null>(null);

  useEffect(() => {
    fetch('/api/analytics/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);
  const codepenProjects = [
    { title: "Glassmorphism UI", link: "https://codepen.io/your-work/pen/1" },
    { title: "Data Visualization Dashboard", link: "https://codepen.io/your-work/pen/2" },
    { title: "React Physics Animation", link: "https://codepen.io/your-work/pen/3" }
  ];

  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>DASHBOARD</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Real-time analytics, metrics, and project tracking.
      </p>

      <div style={{ marginBottom: '4rem' }}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          View Full Resume
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Analytics Section */}
        <div className="glass" style={{ padding: '2rem', borderTop: '2px solid var(--accent-primary)' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>Live Traffic</span>
            <span style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '100px', fontWeight: 'bold' }}>LIVE</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Page Views</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{stats ? stats.totalViews.toLocaleString() : '...'}</span>
            </div>
            
            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top Paths</h3>
            {stats && stats.topPaths.map((p, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '0.9rem' }}>{p.path}</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem' }}>{p.count}</span>
              </div>
            ))}
            {!stats && <span style={{ color: 'var(--text-muted)' }}>Loading live data...</span>}
          </div>
        </div>

        {/* CodePen Section */}
        <div className="glass" style={{ padding: '2rem', borderTop: '2px solid var(--accent-secondary)' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>CodePen Experiments</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {codepenProjects.map((project, idx) => (
              <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid var(--border-color)', transition: 'all 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>{project.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>View on CodePen →</div>
              </a>
            ))}
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <a href="https://codepen.io/your-work" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%' }}>
                View All Projects
              </a>
            </div>
          </div>
        </div>
      
      <div className="glass" style={{ padding: '2rem', marginTop: '2rem', borderTop: '2px solid var(--accent-primary)' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Work Experience</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {experience.map((job) => (
            <div key={job.id} style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '1.1rem' }}>{job.role}</div>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{job.company}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{job.dates}</div>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
};
