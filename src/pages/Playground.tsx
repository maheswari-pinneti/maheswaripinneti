import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const PARTICLE_COUNT = 2000;

function Particles() {
  const ref = useRef<any>(null);
  const [hovered, setHover] = useState(false);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Generate random positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, []);

  useFrame(() => {
    // Make particles slowly rotate and move, and react slightly to mouse
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      // Calculate position
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      if (ref.current) {
        ref.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (ref.current) {
      ref.current.instanceMatrix.needsUpdate = true;
      // Gentle global rotation
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.0005;
    }
  });

  return (
    <Instances 
      ref={ref} 
      limit={PARTICLE_COUNT} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)}
    >
      <octahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial 
        color={hovered ? "#10b981" : "#ffffff"} 
        roughness={0.2} 
        metalness={0.8}
        envMapIntensity={2}
      />
      {particles.map((_, i) => (
        <Instance key={i} />
      ))}
    </Instances>
  );
}

export const Playground = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative', overflow: 'hidden', background: '#050505' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '10%', 
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.04em', margin: 0 }}>
          Playground.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginTop: '1rem', maxWidth: '400px' }}>
          Interactive WebGL particle swarm. Drag to rotate. Scroll to zoom. Hover to interact.
        </p>
      </motion.div>

      <div style={{ position: 'absolute', bottom: '5%', right: '5%', zIndex: 10 }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>GPU Accelerated</span>
        </div>
      </div>

      <Canvas camera={{ position: [0, 0, 80], fov: 60 }} style={{ position: 'absolute', inset: 0 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#10b981" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
        <Particles />
        <OrbitControls enablePan={false} enableZoom={true} autoRotate autoRotateSpeed={0.5} maxDistance={150} minDistance={20} />
      </Canvas>
    </div>
  );
};
