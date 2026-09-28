import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../content/projects';

export const CaseStudies = () => {
  return (
    <div className="section" style={{ padding: '4rem 0' }}>
      <h2 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
        CASE STUDIES
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass"
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              padding: '2rem',
              borderRadius: '16px',
              textDecoration: 'none',
              color: 'var(--text-main)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              {project.shortDescription}
            </p>
            <Link to={`/work/${project.id}`} style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>
              View Case Study
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <Link to="/work" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
          See more projects
        </Link>
      </div>
    </div>
  );
};
