

export const EngineeringLab = () => {
  return (
    <div className="section container">
      <h1>HOW I ENGINEER</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        A look into my architectural decisions, database modeling, API design, and performance optimizations.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass" style={{ padding: '2rem' }}>
          <h3>API Architecture</h3>
          <p style={{ color: 'var(--text-muted)' }}>Interactive request visualizer showing middleware, controller, and database interaction layers.</p>
          <div style={{ marginTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
            <p>GET /api/projects</p>
            <p>↓ Router</p>
            <p>↓ Middleware (Auth, Rate Limit)</p>
            <p>↓ Controller</p>
            <p>↓ DB Service</p>
          </div>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <h3>Database Lab</h3>
          <p style={{ color: 'var(--text-muted)' }}>SQLite schema models and query optimizations.</p>
          <pre style={{ marginTop: '1rem', background: '#050505', padding: '1rem', borderRadius: '4px', fontSize: '0.8rem' }}>
{`CREATE TABLE employees (
  id TEXT PRIMARY KEY,
  role TEXT CHECK( role IN ('ADMIN','HR','EMP') )
);`}
          </pre>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <h3>Performance</h3>
          <p style={{ color: 'var(--text-muted)' }}>Real metrics measured across my applications.</p>
          <ul style={{ marginTop: '1rem', listStyle: 'none', color: 'var(--accent-primary)' }}>
            <li>LCP: 1.2s</li>
            <li>INP: 45ms</li>
            <li>CLS: 0.01</li>
            <li>Bundle Size: 124KB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
