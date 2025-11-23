'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate particle positions
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  // Add mouse listener
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Animate particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.075;

      // Mouse interaction
      ref.current.rotation.x += mousePosition.y * 0.01;
      ref.current.rotation.y += mousePosition.x * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (mesh1.current) {
      mesh1.current.rotation.x = time * 0.2;
      mesh1.current.rotation.y = time * 0.3;
      mesh1.current.position.y = Math.sin(time * 0.5) * 2;
    }

    if (mesh2.current) {
      mesh2.current.rotation.x = time * 0.15;
      mesh2.current.rotation.z = time * 0.25;
      mesh2.current.position.y = Math.cos(time * 0.4) * 2;
    }

    if (mesh3.current) {
      mesh3.current.rotation.y = time * 0.25;
      mesh3.current.rotation.z = time * 0.2;
      mesh3.current.position.x = Math.sin(time * 0.3) * 3;
    }
  });

  return (
    <>
      <mesh ref={mesh1} position={[-10, 0, -5]}>
        <torusGeometry args={[3, 0.5, 16, 100]} />
        <meshStandardMaterial
          color="#bd00ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      <mesh ref={mesh2} position={[10, 5, -10]}>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      <mesh ref={mesh3} position={[0, -5, -8]}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial
          color="#ff00e5"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bd00ff" />

        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
