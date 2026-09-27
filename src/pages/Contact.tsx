import { useState, type FormEvent } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', reason: 'Job Opportunity', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', reason: 'Job Opportunity', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="section container" style={{ maxWidth: '600px' }}>
      <h1 style={{ letterSpacing: '0.05em' }}>LET'S BUILD SOMETHING</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Have a project, opportunity, technical discussion, or collaboration in mind?
      </p>

      {status === 'success' ? (
        <div className="glass" style={{ padding: '3rem', textAlign: 'center', borderColor: 'var(--accent-primary)' }}>
          <h2 style={{ color: 'var(--accent-primary)' }}>Message Sent</h2>
          <p>Thank you for reaching out. I'll get back to you shortly.</p>
          <button className="btn" style={{ marginTop: '2rem' }} onClick={() => setStatus('idle')}>Send Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass" style={{ padding: '2rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
            <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#050505', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
            <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#050505', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Reason</label>
            <select value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#050505', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}>
              <option>Job Opportunity</option>
              <option>Collaboration</option>
              <option>Technical Discussion</option>
              <option>Other</option>
            </select>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
            <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#050505', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px', minHeight: '150px' }}></textarea>
          </div>
          <button type="submit" className="btn" style={{ width: '100%' }} disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'error' && <p style={{ color: '#dc2626', marginTop: '1rem', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
        </form>
      )}
    </div>
  );
};
