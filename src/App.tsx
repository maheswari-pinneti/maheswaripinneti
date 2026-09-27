
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import { Hero } from './components/Hero';
import { FeaturedProject } from './components/FeaturedProject';

import { EngineeringLab } from './pages/EngineeringLab';
import { TestLab } from './pages/TestLab';
import { About } from './pages/About';
import { Playground } from './pages/Playground';
import { World } from './pages/World';
import { GitHub } from './pages/GitHub';
import { Articles } from './pages/Articles';
import { ArticleView } from './pages/ArticleView';
import { Uses } from './pages/Uses';
import { Now } from './pages/Now';
import { Guestbook } from './pages/Guestbook';
import { BucketList } from './pages/BucketList';
import { Links } from './pages/Links';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Dashboard } from './pages/Dashboard';
import { Work } from './pages/Work';
import { ProjectWfaSqlite } from './pages/ProjectWfaSqlite';

const Home = () => (
  <div className="container">
    <Hero />
    <FeaturedProject />
  </div>
);

const App = () => {
  return (
    <Router>
      <nav className="glass" style={{ padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-main)', letterSpacing: '-0.05em' }}>MP</Link>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/engineering">Engineering</Link>
            <Link to="/test-lab">Test Lab</Link>
            <Link to="/playground">Playground</Link>
            <Link to="/world">World</Link>
            <Link to="/github">GitHub</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/wfa-sqlite" element={<ProjectWfaSqlite />} />
        <Route path="/engineering" element={<EngineeringLab />} />
        <Route path="/test-lab" element={<TestLab />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/world" element={<World />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/now" element={<Now />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/links" element={<Links />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      
      <footer className="glass" style={{ padding: '4rem 0', marginTop: '4rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>MAHESWARI PINNETTI</h2>
            <p style={{ color: 'var(--text-muted)' }}>Developed by Maheswari Pinneti<br/>Frontend Developer – Stackly</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1rem' }}>PERSONAL</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/uses">Uses</Link>
              <Link to="/now">Now</Link>
              <Link to="/guestbook">Guestbook</Link>
              <Link to="/bucket-list">Bucket List</Link>
              <Link to="/links">Links</Link>
            </div>
          </div>
          <div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1rem' }}>PROFESSIONAL</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy & Legal</Link>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;
