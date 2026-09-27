import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Writing', path: '/articles' },
  { name: 'Playground', path: '/playground' },
  { name: 'Contact', path: '/contact' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        background: 'rgba(5, 5, 5, 0.7)', 
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
          <Link 
            to="/" 
            style={{ 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              color: 'var(--text-main)', 
              letterSpacing: '-0.05em',
              textDecoration: 'none'
            }}
          >
            Maheswari.
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'none', gap: '2rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: location.pathname.startsWith(link.path) ? 'var(--text-main)' : 'var(--text-muted)',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle"
            onClick={toggleMenu}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px' }}
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }} style={{ width: '24px', height: '2px', background: 'currentColor' }} />
            <motion.div animate={{ opacity: isOpen ? 0 : 1 }} style={{ width: '24px', height: '2px', background: 'currentColor' }} />
            <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }} style={{ width: '24px', height: '2px', background: 'currentColor' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              zIndex: 99,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: location.pathname.startsWith(link.path) ? 'var(--text-main)' : 'var(--text-muted)',
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle, .mobile-menu { display: none !important; }
        }
      `}} />
    </>
  );
};
