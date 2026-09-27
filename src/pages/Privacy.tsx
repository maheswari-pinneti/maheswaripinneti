export const Privacy = () => {
  return (
    <div className="section container" style={{ maxWidth: '800px' }}>
      <h1 style={{ letterSpacing: '0.05em' }}>LEGAL & PRIVACY</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Transparency in data handling.
      </p>

      <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Privacy Policy</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.8 }}>
          This website is built with data minimization in mind.
        </p>
        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
          <li><strong>Location Data:</strong> Geolocation features require explicit permission and are processed purely on the client-side. No location data is sent to or stored on our servers.</li>
          <li><strong>Guestbook & Contact:</strong> Information submitted through the guestbook and contact forms is stored in a private SQLite database solely for the purpose of maintaining the guestbook or responding to inquiries.</li>
          <li><strong>Analytics:</strong> Currently, no third-party tracking scripts are active.</li>
        </ul>
      </div>

      <div className="glass" style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Licenses & Copyright</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
          &copy; {new Date().getFullYear()} Maheswari Pinnetti. All rights reserved.<br/>
          Built with React, Vite, Express, and SQLite.<br/>
          Source code is available on GitHub under the MIT License where applicable.
        </p>
      </div>
    </div>
  );
};
