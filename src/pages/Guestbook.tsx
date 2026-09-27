import { useState, useEffect, type FormEvent } from 'react';

interface Entry {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export const Guestbook = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/guestbook')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setEntries(data);
      })
      .catch(console.error);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message })
      });
      const newEntry = await res.json();
      if (res.ok) {
        setEntries([newEntry, ...entries]);
        setName('');
        setMessage('');
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>GUESTBOOK</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Leave a trace. Let me know you were here.
      </p>

      <form onSubmit={handleSubmit} className="glass" style={{ padding: '2rem', marginBottom: '4rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', background: '#050505', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <textarea 
            placeholder="Your Message" 
            value={message}
            onChange={e => setMessage(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', background: '#050505', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px', minHeight: '100px' }}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Signing...' : 'Sign Guestbook'}
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {entries.map(entry => (
          <div key={entry.id} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--accent-green)' }}>{entry.name}</h4>
            <p style={{ color: 'var(--text-main)', marginTop: '0.5rem' }}>{entry.message}</p>
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '0.5rem' }}>
              {new Date(entry.created_at).toLocaleDateString()}
            </small>
          </div>
        ))}
        {entries.length === 0 && <p style={{ color: 'var(--text-muted)' }}>No entries yet. Be the first!</p>}
      </div>
    </div>
  );
};
