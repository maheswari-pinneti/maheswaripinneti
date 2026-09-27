import { articles } from '../content/articles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Articles = () => {
  return (
    <div className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 700, 
          letterSpacing: '-0.04em',
          marginBottom: '1rem' 
        }}>
          Writing.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: 1.6 }}>
          Thoughts on software architecture, frontend performance, and my engineering journey.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {articles.map((article, index) => (
          <motion.div 
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              to={`/articles/${article.slug}`}
              style={{
                display: 'block',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.01)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.02em', margin: 0 }}>
                  {article.title}
                </h2>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                  {article.date} · {article.readingTime}
                </div>
              </div>
              
              <p style={{ color: '#888888', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {article.description}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {article.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.75rem', 
                    padding: '4px 10px', 
                    background: 'rgba(16, 185, 129, 0.1)', 
                    color: '#10b981',
                    borderRadius: '100px',
                    fontWeight: 500
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
