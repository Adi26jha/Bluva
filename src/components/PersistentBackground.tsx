import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 50 }) => {
  const meshRef = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const posAttr = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const y = particles[i * 3 + 1];
        posAttr.setY(i, y + Math.sin(time + i) * 0.002);
      }
      posAttr.needsUpdate = true;
      meshRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#90E0EF"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

const PersistentBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default PersistentBackground;
