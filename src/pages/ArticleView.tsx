import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../content/articles';
import { motion } from 'framer-motion';

export const ArticleView = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  // A very simple markdown parser for the demo
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx} style={{ fontSize: '1.75rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{paragraph.replace('## ', '')}</h2>;
      }
      // Simple inline code replacement
      const formatted = paragraph.replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;font-family:monospace;font-size:0.9em;color:var(--accent-primary)">$1</code>');
      return <p key={idx} style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: formatted }} />;
    });
  };

  return (
    <div className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Link to="/articles" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Writing
        </Link>
        
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.2 }}>
          {article.title}
        </h1>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: 'monospace', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readingTime}</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        {renderContent(article.content)}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>Tags</h3>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {article.tags.map(tag => (
            <span key={tag} style={{ 
              fontSize: '0.85rem', 
              padding: '6px 14px', 
              background: 'rgba(255, 255, 255, 0.05)', 
              color: 'var(--text-muted)',
              borderRadius: '100px'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
