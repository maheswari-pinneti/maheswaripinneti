import { Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../content/profile';
import { AvailabilityBar } from './AvailabilityBar';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

function Starfield(props: any) {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffffff" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export const Hero = () => {
  return (
    <div className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      
      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Starfield />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 10, display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: '1 1 450px' }}
        >
          <AvailabilityBar />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ 
              fontSize: '4.5rem', 
              lineHeight: 1.1, 
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              fontWeight: 800
            }}
          >
            {profile.name.toUpperCase()}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '2rem' }}
          >
            {profile.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}
          >
            {profile.headline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link to="/work" className="btn" style={{ padding: '0.8rem 2rem' }}>View My Work</Link>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '0.8rem 2rem' }}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '0.8rem 2rem' }}>LinkedIn</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ 
            width: '100%', 
            maxWidth: '380px', 
            aspectRatio: '3/4',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            position: 'relative'
          }}>
            <img 
              src="/images/media_1790519883582.jpg" 
              alt="Maheswari Pinneti" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
