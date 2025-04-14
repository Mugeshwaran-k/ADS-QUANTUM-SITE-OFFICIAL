import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import { Mesh, Color } from 'three';

const QuantumProcessor = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <MeshDistortMaterial
        color={new Color('#9900ff')}
        emissive={new Color('#6e00ff')}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
        distort={0.3}
        speed={2}
      />
    </mesh>
  );
};

const DataStreams = () => {
  const particlesRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.002;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={particlesRef} position={[0, 0, 0]} scale={2.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color="#00ffff"
        wireframe={true}
        transparent={true}
        opacity={0.2}
      />
    </mesh>
  );
};

const QuantumChip: React.FC = () => {
  return (
    <div className="w-full h-full glass-card overflow-hidden rounded-2xl">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
        
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        
        <QuantumProcessor />
        <DataStreams />
      </Canvas>
    </div>
  );
};

export default QuantumChip;