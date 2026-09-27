import { useEffect, useState } from 'react';
import { profile } from '../content/profile';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

export const GitHub = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic fetch to GitHub API using the profile username
    const username = profile.github.split('/').pop();
    
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
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
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>GITHUB ACTIVITY</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Live open source contributions and repository updates.
      </p>

      {loading ? (
        <div style={{ color: 'var(--text-muted)' }}>Loading repositories...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {repos.map(repo => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '2rem', display: 'block' }}>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>{repo.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', height: '40px', overflow: 'hidden' }}>
                {repo.description || 'No description provided.'}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>{repo.language && <span style={{ color: 'var(--accent-primary)' }}>●</span>} {repo.language}</span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>
              </div>
            </a>
          ))}
          {repos.length === 0 && (
            <div style={{ color: 'var(--text-muted)' }}>No public repositories found or API limit reached.</div>
          )}
        </div>
      )}
    </div>
  );
};
