export const BucketList = () => {
  const items = [
    { title: "Ship a production desktop app", status: "In Progress" },
    { title: "Speak at a tech conference", status: "Planned" },
    { title: "Contribute to a major open source project", status: "Planned" },
    { title: "Build a custom mechanical keyboard", status: "Completed" },
    { title: "Travel to Japan", status: "Planned" }
  ];

  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>BUCKET LIST</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Professional and personal goals.
      </p>

      <div className="glass" style={{ padding: '2rem' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item, i) => (
            <li key={i} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '1.5rem 0', 
              borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--border-color)' 
            }}>
              <span style={{ fontSize: '1.1rem' }}>{item.title}</span>
              <span style={{ 
                color: item.status === 'Completed' ? 'var(--accent-green)' : 'var(--text-muted)',
                fontWeight: item.status === 'Completed' ? 600 : 400
              }}>
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
