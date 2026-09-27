import { profile } from '../content/profile';
import { experience } from '../content/experience';

export const Resume = () => {
  return (
    <div className="section container" style={{ maxWidth: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid var(--border-color)', paddingBottom: '2rem', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '3rem', letterSpacing: '-0.02em' }}>{profile.name.toUpperCase()}</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--accent-green)', fontWeight: 600, marginTop: '0.5rem' }}>{profile.title}</p>
        </div>
        <div style={{ textAlign: 'right', color: 'var(--text-muted)' }}>
          <p>{profile.location}</p>
          <p>{profile.email}</p>
          <p>{profile.github.replace('https://', '')}</p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>SUMMARY</h2>
        <p style={{ lineHeight: 1.8 }}>{profile.bio}</p>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>EXPERIENCE</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experience.map(job => (
            <div key={job.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{job.role} <span style={{ color: 'var(--accent-green)' }}>@ {job.company}</span></h3>
                <span style={{ color: 'var(--text-muted)' }}>{job.dates}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{job.location} · {job.workMode}</p>
              <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <button className="btn" onClick={() => window.print()}>Print / Download PDF</button>
      </div>
    </div>
  );
};
