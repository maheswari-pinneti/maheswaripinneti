import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Ping the backend on route change
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: location.pathname })
    }).catch(() => {
      // Ignore errors silently for analytics
    });
  }, [location.pathname]);

  return null;
};
