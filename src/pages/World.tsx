import { useState } from 'react';
import { motion } from 'framer-motion';

export const World = () => {
  const [locationStatus, setLocationStatus] = useState<'idle' | 'requesting' | 'granted' | 'denied'>('idle');
  const [distance, setDistance] = useState<number | null>(null);

  // Bengaluru coordinates
  const baseLat = 12.9716;
  const baseLng = 77.5946;

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return Math.floor(R * c); 
  };

  const handleRequestLocation = () => {
    setLocationStatus('requesting');
    
    if (!navigator.geolocation) {
      setLocationStatus('denied');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dist = calculateDistance(
          position.coords.latitude, 
          position.coords.longitude, 
          baseLat, 
          baseLng
        );
        setDistance(dist);
        setLocationStatus('granted');
      },
      () => {
        setLocationStatus('denied');
      }
    );
  };

  return (
    <div className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      
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
          World.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Currently based in Bengaluru, India. Building software for the globe.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: '300px', 
            background: '#050505', 
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          {/* Abstract Radar Effect */}
          <div style={{ position: 'absolute', width: '400px', height: '400px', border: '1px solid rgba(16,185,129,0.1)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', width: '200px', height: '200px', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', width: '100px', height: '100px', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '50%' }} />
          
          <div style={{ zIndex: 10, textAlign: 'center' }}>
            <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', margin: '0 auto 1rem auto', boxShadow: '0 0 20px #10b981' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Bengaluru</h2>
            <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>12.9716° N, 77.5946° E</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>Location Ping</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1.05rem' }}>
            Want to see how far away we are? This experiment calculates the exact physical distance between your current location and Bengaluru using the Haversine formula. 
          </p>
          
          {/* Privacy Disclaimer */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem', color: '#888' }}>
            <strong>Privacy Note:</strong> Location data is calculated strictly on your device (client-side). No data is transmitted to a server, logged, or stored.
          </div>

          {locationStatus === 'idle' && (
            <button 
              onClick={handleRequestLocation}
              style={{ background: 'var(--text-main)', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '100px', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer', border: 'none' }}
            >
              Calculate Distance
            </button>
          )}

          {locationStatus === 'requesting' && (
            <div style={{ color: '#10b981', fontWeight: 500 }}>Requesting device permission...</div>
          )}

          {locationStatus === 'denied' && (
            <div style={{ color: '#ef4444', fontWeight: 500 }}>Permission denied or unavailable.</div>
          )}

          {locationStatus === 'granted' && distance !== null && (
            <div style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>
              We are exactly <strong style={{ color: '#10b981', fontSize: '2rem' }}>{distance.toLocaleString()}</strong> kilometers apart.
            </div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Travel Timeline</h2>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', marginLeft: '1rem', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-37px', top: '4px', width: '11px', height: '11px', background: '#10b981', borderRadius: '50%' }} />
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Bengaluru, Karnataka</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Current Base · Tech Hub of India</div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-37px', top: '4px', width: '11px', height: '11px', background: 'var(--text-muted)', borderRadius: '50%' }} />
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Hyderabad, Telangana</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Previous Base · Exner Technologies</div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-37px', top: '4px', width: '11px', height: '11px', background: 'var(--text-muted)', borderRadius: '50%' }} />
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Bapatla, Andhra Pradesh</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>B.Tech Engineering</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
