import  { useRef } from 'react';
import {  useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';

export function RotatingObject() {
  const meshRef = useRef();

  useFrame(() => {
    // Rotate the box
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
  });

  return (
    <Torus ref={meshRef} args={[1, 0.5, 50]} rotation={[0, Math.PI, 0]} >
      <meshStandardMaterial color="red" />
    </Torus>
    
  );
}