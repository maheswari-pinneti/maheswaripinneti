import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'freelance',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', reason: 'freelance', message: '' });
      } else {
        const data = await res.json();
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          Contact.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Reach out for collaborations, freelance opportunities, or just to talk architecture.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
        
        {/* Contact Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Email</h3>
            <a href="mailto:pinnetimaheswari17@gmail.com" style={{ fontSize: '1.1rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2px' }}>
              pinnetimaheswari17@gmail.com
            </a>
          </div>
          <div>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Location</h3>
            <div style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>
              Bengaluru, Karnataka, India
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Socials</h3>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/maheswari-pinneti" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>GitHub</a>
              <a href="https://linkedin.com/in/maheswari-pinneti" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>LinkedIn</a>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}
        >
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(16,185,129,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>Message Received.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Thank you for reaching out. I'll get back to you as soon as I review it.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                style={{ background: 'transparent', border: '1px solid var(--text-main)', color: 'var(--text-main)', padding: '0.75rem 1.5rem', borderRadius: '100px', fontWeight: 500, cursor: 'pointer' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {status === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '0.9rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  {errorMessage}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Name *</label>
                  <input 
                    id="name" name="name" 
                    value={formData.name} onChange={handleChange} 
                    required
                    style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Email *</label>
                  <input 
                    id="email" name="email" type="email"
                    value={formData.email} onChange={handleChange} 
                    required
                    style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="reason" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Reason for Contact *</label>
                <select 
                  id="reason" name="reason"
                  value={formData.reason} onChange={handleChange}
                  style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.2s', appearance: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = '#10b981'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <option value="freelance">Freelance / Contract Work</option>
                  <option value="fulltime">Full-Time Opportunity</option>
                  <option value="collaboration">Open Source Collaboration</option>
                  <option value="other">Other / Just saying hi</option>
                </select>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Message *</label>
                <textarea 
                  id="message" name="message"
                  value={formData.message} onChange={handleChange} 
                  required
                  rows={6}
                  style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical' }}
                  onFocus={(e) => e.target.style.borderColor = '#10b981'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div style={{ marginTop: '1rem' }}>
                <button 
                  type="submit" 
                  disabled={submitting}
                  style={{ background: submitting ? 'rgba(255,255,255,0.2)' : 'var(--text-main)', color: '#000', padding: '1rem 2rem', width: '100%', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: submitting ? 'not-allowed' : 'pointer', border: 'none', transition: 'background-color 0.2s' }}
                >
                  {submitting ? 'Transmitting...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
};
