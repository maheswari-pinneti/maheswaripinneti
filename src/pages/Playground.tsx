import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, MeshDistortMaterial } from '@react-three/drei';

export const Playground = () => {
  return (
    <div className="section container">
      <h1 style={{ letterSpacing: '0.05em' }}>PLAYGROUND</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
        Experiments in WebGL, 3D interactions, and creative coding.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="glass" style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
            <h3>Cyber Runner (3D)</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Interactive WebGL Experiment</p>
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <Sphere args={[1, 32, 32]}>
                <MeshDistortMaterial color="#10b981" attach="material" distort={0.5} speed={2} />
              </Sphere>
              <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
          </div>
        </div>

        <div className="glass" style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
            <h3>Geometry Lab</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Physics & Render Tests</p>
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <Canvas camera={{ position: [2, 2, 2] }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} />
              <Box args={[1, 1, 1]}>
                <meshStandardMaterial color="#059669" wireframe />
              </Box>
              <OrbitControls autoRotate autoRotateSpeed={4} />
            </Canvas>
          </div>
        </div>
        
      </div>
    </div>
  );
};
