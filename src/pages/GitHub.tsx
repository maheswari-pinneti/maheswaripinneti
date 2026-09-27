import { useEffect, useState } from 'react';
import { profile } from '../content/profile';
import { motion } from 'framer-motion';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
  updated_at: string;
}

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  login: string;
  html_url: string;
}

export const GitHub = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = profile.github.split('/').pop();
    
    // Fetch User Data
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.login) setUser(data);
      })
      .catch(console.error);

    // Fetch Repos
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=9`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Filter out forks if desired, but here we just show top updated
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch GitHub repos", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="section container" style={{ paddingTop: '8rem', minHeight: '100vh', paddingBottom: '8rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 700, 
          letterSpacing: '-0.04em',
          marginBottom: '1rem' 
        }}>
          Open Source.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Live feed of my public repositories, experiments, and open-source contributions pulled directly from the GitHub API.
        </p>
      </motion.div>

      {user && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '1.5rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            marginBottom: '3rem',
            maxWidth: '400px'
          }}
        >
          <img src={user.avatar_url} alt={user.login} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>@{user.login}</div>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span><strong>{user.public_repos}</strong> Repos</span>
              <span><strong>{user.followers}</strong> Followers</span>
            </div>
          </div>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', background: 'var(--text-main)', color: '#000', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>
            Follow
          </a>
        </motion.div>
      )}

      {loading ? (
        <div style={{ color: 'var(--text-muted)' }}>Fetching repository data...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {repos.map((repo, index) => (
            <motion.a 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
              style={{ 
                padding: '1.5rem', 
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 600 }}>{repo.name}</h3>
                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    {repo.stargazers_count}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path><path d="M12 12v3"></path></svg>
                    {repo.forks_count}
                  </span>
                </div>
              </div>
              
              <p style={{ color: '#888888', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5, flex: 1 }}>
                {repo.description || 'No description provided.'}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {repo.language && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />}
                  {repo.language || 'Unknown'}
                </div>
                <div>Updated {new Date(repo.updated_at).toLocaleDateString()}</div>
              </div>
            </motion.a>
          ))}
          {repos.length === 0 && !loading && (
            <div style={{ color: 'var(--text-muted)' }}>No public repositories found or API limit reached.</div>
          )}
        </div>
      )}
    </div>
  );
};
