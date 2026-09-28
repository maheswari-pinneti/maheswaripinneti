import { projects } from '../content/projects';
import { motion } from 'framer-motion';

export const Work = () => {
  return (
    <div className="section container" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '3rem' }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 700, 
          letterSpacing: '-0.04em',
          marginBottom: '1rem' 
        }}>
          Work.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6 }}>
          A selection of projects I've built, focusing on robust architecture and premium user experiences.
        </p>
      </motion.div>

      {/* Project Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '4rem' }}
      >
        <div className="glass" style={{ padding: '1.5rem', borderTop: '2px solid var(--text-main)' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Projects</div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{projects.length}</div>
        </div>
        <div className="glass" style={{ padding: '1.5rem', borderTop: '2px solid #10b981' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Currently Working On</div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{projects.filter(p => p.status === 'Active').length}</div>
        </div>
        <div className="glass" style={{ padding: '1.5rem', borderTop: '2px solid #3b82f6' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Completed</div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{projects.filter(p => p.status === 'Completed').length}</div>
        </div>
      </motion.div>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {project.type}
                </span>
                {project.status === 'Active' && (
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '100px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    In Progress
                  </span>
                )}
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.year}</span>
            </div>
            
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              {project.title}
            </h2>
            
            <p style={{ color: '#888888', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem', flex: 1 }}>
              {project.shortDescription}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {project.technologies.slice(0, 4).map(tech => (
                <span key={tech} style={{ 
                  fontSize: '0.75rem', 
                  padding: '4px 10px', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '100px',
                  color: 'var(--text-muted)'
                }}>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span style={{ fontSize: '0.75rem', padding: '4px 10px', color: 'var(--text-muted)' }}>
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              {project.id === 'wfa-sqlite' ? (
                <a href="/work/wfa-sqlite" style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Read Case Study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              ) : project.demoLink ? (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Live Demo
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              ) : null}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Source
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
