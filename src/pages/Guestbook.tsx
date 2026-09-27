import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  website: string | null;
  created_at: string;
}

export const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await fetch('/api/guestbook');
      if (res.ok) {
        const data = await res.json();
        setEntries(data);
      }
    } catch (err) {
      console.error('Failed to fetch guestbook', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Name and message are required.');
      return;
    }
    
    setError('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, website })
      });

      if (res.ok) {
        setName('');
        setMessage('');
        setWebsite('');
        await fetchEntries();
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to sign guestbook.');
      }
    } catch (err) {
      setError('A network error occurred.');
    } finally {
      setSubmitting(false);
    }
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
          Guestbook.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Leave a trace. Sign the guestbook, share a thought, or just say hello.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Sign the Guestbook</h2>
        
        {error && <div style={{ color: '#ef4444', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Name *</label>
              <input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
                style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '8px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="website" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Website (Optional)</label>
              <input 
                id="website" 
                value={website} 
                onChange={(e) => setWebsite(e.target.value)} 
                type="url"
                placeholder="https://"
                style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '8px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Message *</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
              rows={4}
              style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '8px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical' }}
              onFocus={(e) => e.target.style.borderColor = '#10b981'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          <div>
            <button 
              type="submit" 
              disabled={submitting}
              style={{ background: submitting ? 'rgba(255,255,255,0.2)' : 'var(--text-main)', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '100px', fontWeight: 500, fontSize: '0.95rem', cursor: submitting ? 'not-allowed' : 'pointer', border: 'none', transition: 'transform 0.1s' }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {submitting ? 'Signing...' : 'Sign Guestbook'}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Entries</h2>
        
        {entries.length === 0 ? (
          <div style={{ color: 'var(--text-muted)' }}>No entries yet. Be the first!</div>
        ) : (
          entries.map(entry => (
            <div key={entry.id} style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem', color: 'var(--text-main)' }}>
                {entry.message}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{entry.name}</span>
                {entry.website && (
                  <>
                    <span>·</span>
                    <a href={entry.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Website</a>
                  </>
                )}
                <span>·</span>
                <span>{new Date(entry.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};
