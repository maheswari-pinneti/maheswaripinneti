export const Articles = () => {
  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>ENGINEERING NOTES</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Thoughts on architecture, React, and building robust systems.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {[
          { title: "Building WFA-SQLite: Architecture Decisions", date: "Sep 2026", category: "Architecture" },
          { title: "Why I test: Escaping the 'It works on my machine' trap", date: "Aug 2026", category: "Testing" },
          { title: "Scaling React state without the tears", date: "Jul 2026", category: "React" }
        ].map((article, idx) => (
          <div key={idx} className="glass" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}
               onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
               onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div>
              <span style={{ color: 'var(--accent-green)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>{article.category}</span>
              <h3 style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>{article.title}</h3>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>
              {article.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
