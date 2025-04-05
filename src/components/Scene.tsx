'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <meshStandardMaterial
        color="#9333ea"
        wireframe
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <AnimatedSphere />
    </Canvas>
  );
} 