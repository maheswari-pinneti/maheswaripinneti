
import { profile } from '../content/profile';

export const AvailabilityBar = () => {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      marginBottom: '2rem'
    }}>
      <span style={{
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--accent-green)',
        borderRadius: '50%',
        boxShadow: '0 0 8px var(--accent-green)'
      }}></span>
      <span style={{
        fontSize: '0.875rem',
        fontWeight: 600,
        color: 'var(--accent-green)',
        letterSpacing: '0.05em'
      }}>
        {profile.availability}
      </span>
    </div>
  );
};
