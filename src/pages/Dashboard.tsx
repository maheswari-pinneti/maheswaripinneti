import { experience } from '../content/experience';

export const Dashboard = () => {
  const codepenProjects = [
    { title: "Glassmorphism UI", link: "https://codepen.io/your-work/pen/1" },
    { title: "Data Visualization Dashboard", link: "https://codepen.io/your-work/pen/2" },
    { title: "React Physics Animation", link: "https://codepen.io/your-work/pen/3" }
  ];

  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>DASHBOARD</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '4rem' }}>
        Real-time analytics, metrics, and project tracking.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Analytics Section */}
        <div className="glass" style={{ padding: '2rem', borderTop: '2px solid var(--accent-primary)' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Project Analytics</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>WFA-SQLite Uptime</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>99.98%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Monthly Active Users</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>~12,400</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Lighthouse Score</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>100/100</span>
            </div>
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
