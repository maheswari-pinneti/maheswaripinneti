export const Now = () => {
  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>NOW</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        What I'm focused on right now.
      </p>

      <div className="glass" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-emerald)' }}>
        <h2 style={{ marginBottom: '1rem' }}>Currently Building</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
          I am heavily invested in building out <strong>WFA-SQLite</strong>, refining its RBAC architecture, and optimizing the monolithic React+Express structure for peak performance.
        </p>

        <h2 style={{ marginBottom: '1rem' }}>Currently Learning</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
          Diving deeper into advanced WebGL patterns with <strong>Three.js</strong> and exploring Rust for high-performance WebAssembly modules.
        </p>

        <h2 style={{ marginBottom: '1rem' }}>Current Focus</h2>
        <p style={{ lineHeight: 1.8 }}>
          Finding the perfect balance between engineering rigor (testing, typing, architecture) and delivering exceptional UX and visual design.
        </p>
      </div>
    </div>
  );
};
