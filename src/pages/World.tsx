import { useState } from 'react';

export const World = () => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [coords, setCoords] = useState<{lat: number, lng: number} | null>(null);
  
  const handleEnableLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationEnabled(true);
        },
        (error) => {
          console.error("Error obtaining location", error);
        }
      );
    }
  };

  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>MY WORLD</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Interactive map and geolocation laboratory.
      </p>

      <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h3>Geofence Lab</h3>
        {!locationEnabled ? (
          <div style={{ marginTop: '1rem' }}>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              This experiment requires location access to calculate your distance from my primary work hub. 
              Location data is processed locally in your browser and is not stored on any server.
            </p>
            <button onClick={handleEnableLocation} className="btn">Enable Location Access</button>
          </div>
        ) : (
          <div style={{ marginTop: '1rem' }}>
            <p style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>✓ Location Active</p>
            <p style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              Lat: {coords?.lat.toFixed(4)} | Lng: {coords?.lng.toFixed(4)}
            </p>
            <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
              <h4>Status</h4>
              <p style={{ color: 'var(--text-muted)' }}>OUTSIDE PRIMARY ZONE</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Distance calculation active...</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="glass" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#050505' }}>
        <p style={{ color: 'var(--text-muted)' }}>Interactive Globe Placeholder</p>
      </div>
    </div>
  );
};
