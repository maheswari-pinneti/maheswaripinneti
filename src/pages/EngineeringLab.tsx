import { motion } from 'framer-motion';

const experiments = [
  {
    id: "sqlite-concurrency",
    title: "SQLite High Concurrency via WAL",
    category: "Database",
    problem: "SQLite is traditionally known for locking the entire database during writes, making it problematic for web apps with concurrent users.",
    experiment: "Enable Write-Ahead Logging (WAL) and measure concurrent read/write performance under load.",
    implementation: "Using `better-sqlite3`, I executed `PRAGMA journal_mode = WAL; PRAGMA synchronous = NORMAL;`. I then spawned a Node.js script firing 10,000 asynchronous read/write requests targeting a single table.",
    result: "Reads were completely unblocked by writes. Write performance skyrocketed because synchronous commits were reduced.",
    learned: "SQLite is highly capable for mid-scale web applications when configured correctly. Bypassing TCP overhead of traditional DBs makes it exceptionally fast for monolithic Node.js apps."
  },
  {
    id: "react-render-optimization",
    title: "React Re-render Isolation",
    category: "Frontend Performance",
    problem: "A complex data grid in my application was causing the entire page to stutter because updating one cell re-rendered all 500 rows.",
    experiment: "Isolate state at the cell level and use memoization to prevent cascading updates.",
    implementation: "I removed the global state holding the grid data from the top-level provider. Instead, I passed stable IDs to each row/cell and used Zustand to allow individual cells to subscribe directly to their specific data slice.",
    result: "Input latency dropped from 120ms to 4ms. The React Profiler confirmed that only the exact cell being edited was committing to the DOM.",
    learned: "Context API is bad for rapidly changing state. Atomic state management (Zustand/Jotai) or Redux selectors are mandatory for complex React UIs."
  },
  {
    id: "framer-motion-layout",
    title: "Shared Layout Animations",
    category: "UI/UX",
    problem: "Transitioning an element from a grid view into a full-screen modal felt jarring and broke spatial context.",
    experiment: "Use Framer Motion's `layoutId` to animate an element smoothly across different component trees.",
    implementation: "I wrapped the grid item and the modal item in `motion.div` tags sharing the identical `layoutId='project-card'`. I had to carefully manage border-radius and image scaling to prevent distortion during the morph.",
    result: "The element seamlessly expands from the grid into the modal at 60fps, giving a native iOS-like feel.",
    learned: "Shared layout animations require absolute consistency in aspect ratios and careful handling of child text elements (which don't morph automatically)."
  }
];

export const EngineeringLab = () => {
  return (
    <div className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh' }}>
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
          Engineering Lab.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '650px', lineHeight: 1.6 }}>
          A collection of isolated technical experiments where I test hypotheses, break things, and explore advanced concepts beyond standard UI development.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiments.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                  {exp.category}
                </span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}>
                  {exp.title}
                </h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 600 }}>Problem</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{exp.problem}</p>
              </div>
              
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 600 }}>Hypothesis / Experiment</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{exp.experiment}</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 600 }}>Implementation</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{exp.implementation}</p>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1.25rem', borderRadius: '8px', marginTop: '0.5rem' }}>
                <h4 style={{ color: '#10b981', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 600 }}>Result & Metrics</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{exp.result}</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 600 }}>What I Learned</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{exp.learned}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
