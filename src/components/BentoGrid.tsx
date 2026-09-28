import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const BentoGrid = () => {
  return (
    <div className="section" style={{ padding: '2rem 0' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        {/* Now Card */}
        <motion.div 
          className="glass bento-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '16px' }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              Now
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>Frontend Engineer</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/about#experience" style={{ color: 'var(--text-main)', textDecoration: 'none', borderBottom: '1px solid var(--text-main)' }}>
              Roboto Studio · Remote
            </Link>
          </div>
        </motion.div>

        {/* Building Card */}
        <motion.div 
          className="glass bento-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '16px' }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Building</h3>
            <p style={{ color: 'var(--text-muted)' }}>Apps, sites, tools</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/work" style={{ color: 'var(--text-main)', textDecoration: 'none', borderBottom: '1px solid var(--text-main)' }}>
              The Workshop
            </Link>
          </div>
        </motion.div>

        {/* Writing Card */}
        <motion.div 
          className="glass bento-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '16px' }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Writing</h3>
            <p style={{ color: 'var(--text-muted)' }}>Process & patterns</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/articles" style={{ color: 'var(--text-main)', textDecoration: 'none', borderBottom: '1px solid var(--text-main)' }}>
              Engineering reads
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Let's Build Together Card */}
      <motion.div 
        className="glass bento-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ 
          padding: '2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(145deg, rgba(30,30,30,0.4) 0%, rgba(10,10,10,0.4) 100%)',
          borderRadius: '16px'
        }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Let's Build Together</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Clear communication, fast iterations, no surprises
        </p>
        <Link to="/contact" className="btn" style={{ borderRadius: '100px' }}>
          Let's Build Together
        </Link>
      </motion.div>
    </div>
  );
};
