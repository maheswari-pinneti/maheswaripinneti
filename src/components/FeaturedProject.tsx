
import { Link } from 'react-router-dom';
import { projects } from '../content/projects';

export const FeaturedProject = () => {
  const project = projects[0];
  
  if (!project) return null;

  return (
    <div className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '2rem', letterSpacing: '0.1em' }}>
        CURRENTLY BUILDING
      </p>
      
      <div className="glass" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
        <div style={{ flex: '1 1 400px', padding: '3rem' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.title}</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            {project.shortDescription}
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {project.technologies.slice(0, 6).map(tech => (
              <span key={tech} style={{ 
                padding: '0.25rem 0.75rem', 
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '4px',
                fontSize: '0.875rem'
              }}>
                {tech}
              </span>
            ))}
          </div>
          
          <Link to={`/work/${project.id}`} className="btn">View Case Study</Link>
        </div>
        <div style={{ 
          flex: '1 1 400px', 
          backgroundColor: '#050505', 
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '1px solid var(--border-color)'
        }}>
          {/* Architecture diagram placeholder */}
          <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            {project.architecture}
          </div>
        </div>
      </div>
    </div>
  );
};
