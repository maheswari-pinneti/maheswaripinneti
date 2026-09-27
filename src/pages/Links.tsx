import { profile } from '../content/profile';

export const Links = () => {
  const links = [
    { name: "GitHub", url: profile.github },
    { name: "LinkedIn", url: profile.linkedin },
    { name: "CodePen", url: profile.codepen },
    { name: "Email", url: `mailto:${profile.email}` },
    { name: "Resume", url: "/resume" }
  ];

  return (
    <div className="section container" style={{ maxWidth: '600px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ letterSpacing: '0.05em', marginBottom: '1rem' }}>LINKS</h1>
        <p style={{ color: 'var(--text-muted)' }}>Connect with me across the web.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {links.map((link, i) => (
          <a key={i} href={link.url} target={link.url.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" 
             className="glass" 
             style={{ 
               padding: '1.5rem', 
               textAlign: 'center', 
               fontSize: '1.25rem', 
               fontWeight: 600,
               color: 'var(--text-main)',
               transition: 'all 0.2s',
               textDecoration: 'none'
             }}
             onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-emerald)'; e.currentTarget.style.color = 'white'; }}
             onMouseOut={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--text-main)'; }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
