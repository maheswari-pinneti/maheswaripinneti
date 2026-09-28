import { useState, useEffect } from 'react';
import { experience } from '../content/experience';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockChartData = [
  { name: 'Mon', views: 120 },
  { name: 'Tue', views: 300 },
  { name: 'Wed', views: 250 },
  { name: 'Thu', views: 450 },
  { name: 'Fri', views: 700 },
  { name: 'Sat', views: 850 },
  { name: 'Sun', views: 1200 },
];

export const Dashboard = () => {
  const [stats, setStats] = useState<{ totalViews: number, topPaths: { path: string, count: number }[] } | null>(null);

  useEffect(() => {
    fetch('/api/analytics/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);
  const codepenProjects = [
    { title: "Glassmorphism UI", link: "https://codepen.io/your-work/pen/1", image: "/projects/1.jpg" },
    { title: "Data Visualization Dashboard", link: "https://codepen.io/your-work/pen/2", image: "/projects/2.jpg" },
    { title: "React Physics Animation", link: "https://codepen.io/your-work/pen/3", image: "/projects/3.jpg" }
  ];

  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>DASHBOARD</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Real-time analytics, metrics, and project tracking.
      </p>

      <div style={{ marginBottom: '4rem' }}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          View Full Resume
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Analytics Section */}
        <div style={{ gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Analytics Overview</h2>
            <span style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '100px', fontWeight: 'bold' }}>LIVE</span>
          </div>
          
          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div className="glass" style={{ padding: '1.5rem', borderTop: '2px solid var(--accent-primary)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Page Views</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>{stats ? stats.totalViews.toLocaleString() : '...'}</div>
              <div style={{ color: '#10b981', fontSize: '0.8rem', marginTop: '0.5rem' }}>+12.5% this week</div>
            </div>
            
            <div className="glass" style={{ padding: '1.5rem', borderTop: '2px solid #3b82f6' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Unique Visitors</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>{stats ? Math.floor(stats.totalViews * 0.65).toLocaleString() : '...'}</div>
              <div style={{ color: '#10b981', fontSize: '0.8rem', marginTop: '0.5rem' }}>+8.2% this week</div>
            </div>

            <div className="glass" style={{ padding: '1.5rem', borderTop: '2px solid #8b5cf6' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Avg. Time on Site</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>2m 45s</div>
              <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>-1.5% this week</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Chart Area */}
            <div className="glass" style={{ padding: '2rem', gridColumn: 'span 2' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Traffic (Last 7 Days)</h3>
              <div style={{ height: '300px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}
                      itemStyle={{ color: 'var(--text-main)' }}
                    />
                    <Area type="monotone" dataKey="views" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorViews)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Paths */}
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
                Top Paths
                <span style={{ fontSize: '0.8rem' }}>Visits</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {stats && stats.topPaths.map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', width: '12px' }}>{i + 1}.</span>
                      <span style={{ color: 'var(--text-main)', fontFamily: 'monospace', fontSize: '0.9rem' }}>{p.path}</span>
                    </div>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{p.count}</span>
                  </div>
                ))}
                {!stats && <span style={{ color: 'var(--text-muted)' }}>Loading live data...</span>}
              </div>
            </div>
          </div>
        </div>

        {/* CodePen Section */}
        <div className="glass" style={{ padding: '2rem', borderTop: '2px solid var(--accent-secondary)' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>CodePen Experiments</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {codepenProjects.map((project, idx) => (
              <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid var(--border-color)', transition: 'all 0.2s ease', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                <img src={project.image} alt={project.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                <div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>{project.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>View on CodePen →</div>
                </div>
              </a>
            ))}
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <a href="https://codepen.io/your-work" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%' }}>
                View All Projects
              </a>
            </div>
          </div>
        </div>
      
      <div className="glass" style={{ padding: '2rem', marginTop: '2rem', borderTop: '2px solid var(--accent-primary)' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Work Experience</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {experience.map((job) => (
            <div key={job.id} style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '1.1rem' }}>{job.role}</div>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{job.company}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{job.dates}</div>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
};
