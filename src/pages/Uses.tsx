export const Uses = () => {
  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>USES</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        A living document of the tools, hardware, and software I use to build things.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div>
          <h2 style={{ color: 'var(--accent-green)', marginBottom: '1rem', fontSize: '1.2rem' }}>DEVELOPMENT ENVIRONMENT</h2>
          <ul style={{ listStyle: 'none', lineHeight: 2, color: 'var(--text-main)' }}>
            <li><strong>Editor:</strong> VS Code with Dark+ Theme</li>
            <li><strong>Terminal:</strong> Windows Terminal (PowerShell)</li>
            <li><strong>Browser:</strong> Chrome Developer Edition</li>
          </ul>
        </div>
        
        <div>
          <h2 style={{ color: 'var(--accent-green)', marginBottom: '1rem', fontSize: '1.2rem' }}>HARDWARE</h2>
          <ul style={{ listStyle: 'none', lineHeight: 2, color: 'var(--text-main)' }}>
            <li><strong>Machine:</strong> Custom Workstation / High-Performance Laptop</li>
            <li><strong>Monitors:</strong> Dual 27" 4K Displays</li>
            <li><strong>Keyboard:</strong> Mechanical Keychron</li>
          </ul>
        </div>

        <div>
          <h2 style={{ color: 'var(--accent-green)', marginBottom: '1rem', fontSize: '1.2rem' }}>FRAMEWORKS & TOOLS</h2>
          <ul style={{ listStyle: 'none', lineHeight: 2, color: 'var(--text-main)' }}>
            <li><strong>Frontend:</strong> React, TypeScript, Vite</li>
            <li><strong>Styling:</strong> CSS Modules / Tailwind (when requested)</li>
            <li><strong>Backend:</strong> Node.js, Express, SQLite</li>
            <li><strong>Testing:</strong> Vitest, Playwright</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
