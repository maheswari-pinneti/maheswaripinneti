
import { experience } from '../content/experience';
import { education } from '../content/education';

export const About = () => {
  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>ENGINEER BEHIND THE INTERFACE</h1>
      
      <div style={{ display: 'flex', gap: '4rem', marginTop: '4rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ color: 'var(--text-muted)' }}>Who I Am</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            I am a software developer with a strong focus on frontend engineering and product building. I specialize in React ecosystems and care deeply about architecture, testing, and performance.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            My core philosophy: <strong>BUILD → TEST → BREAK → DEBUG → MEASURE → SHIP</strong>
          </p>
          
          <h2 style={{ color: 'var(--text-muted)', marginTop: '3rem' }}>What I Care About</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            <li>✓ Resilient architectures</li>
            <li>✓ Developer experience</li>
            <li>✓ Real-world performance</li>
            <li>✓ Comprehensive testing</li>
            <li>✓ Data-driven workforce analytics</li>
          </ul>
        </div>
        
        <div style={{ flex: '2 1 500px' }}>
          <h2 style={{ color: 'var(--text-muted)' }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
            {experience.map(job => (
              <div key={job.id} className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{job.role}</h3>
                    <div style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{job.company}</div>
                  </div>
                  <div style={{ color: 'var(--text-muted)', textAlign: 'right' }}>
                    <div>{job.dates}</div>
                    <div style={{ fontSize: '0.9rem' }}>{job.location} · {job.workMode}</div>
                  </div>
                </div>
                
                <p style={{ marginTop: '1rem', color: 'var(--text-main)' }}>{job.overview}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {job.technologies.map(tech => (
                    <span key={tech} style={{ 
                      padding: '0.25rem 0.75rem', 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                {job.cta && job.cta.url !== '#' && (
                  <div style={{ marginTop: '2rem' }}>
                    <a href={job.cta.url} target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                      {job.cta.text}
                    </a>
                  </div>
                )}
              </div>
            ))}
            </div>
          
          <h2 style={{ color: 'var(--text-muted)', marginTop: '4rem' }}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
            {education.map(edu => (
              <div key={edu.id} className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                    <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '1.1rem' }}>{edu.institution}</div>
                  </div>
                  <div style={{ color: 'var(--text-muted)', textAlign: 'right' }}>
                    <div>{edu.dates}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginTop: '0.25rem' }}>{edu.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
