
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import { Hero } from './components/Hero';
import { FeaturedProject } from './components/FeaturedProject';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

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
      <Navigation />
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
      
      </main>
      <Footer />
    </Router>
  );
};

export default App;
