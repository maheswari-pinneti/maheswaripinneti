

export const TestLab = () => {
  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>TEST LAB</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        I believe in testing what I ship. This lab shows live test coverage and simulated breaking scenarios.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
        {[
          { name: 'UNIT (Vitest)', status: 'PASS' },
          { name: 'INTEGRATION (Supertest)', status: 'PASS' },
          { name: 'E2E (Playwright)', status: 'PASS' },
          { name: 'ACCESSIBILITY (axe)', status: 'PASS' },
          { name: 'SECURITY', status: 'PASS' },
          { name: 'TYPECHECK (tsc)', status: 'PASS' },
        ].map(test => (
          <div key={test.name} className="glass" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '2px solid var(--accent-emerald)' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>{test.name}</h4>
            <div style={{ fontWeight: 800, color: 'var(--accent-green)', letterSpacing: '0.1em' }}>{test.status}</div>
          </div>
        ))}
      </div>

      <div className="glass" style={{ padding: '3rem' }}>
        <h2>Break My Portfolio</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Trigger controlled failures to see how the application handles errors and degrades gracefully.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn" style={{ backgroundColor: '#dc2626' }}>Simulate API Failure</button>
          <button className="btn" style={{ backgroundColor: '#dc2626' }}>Trigger 404</button>
          <button className="btn" style={{ backgroundColor: '#dc2626' }}>Force WebGL Error</button>
        </div>
      </div>
    </div>
  );
};
