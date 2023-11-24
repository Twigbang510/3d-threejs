import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

export function RotatingBox({ color, rotationSpeed, position }) {
  const meshRef = useRef();

  useFrame(() => {
    // Rotate the box
    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed;
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]} rotation={[0, Math.PI, 0]} position={position}>
      <meshStandardMaterial color={color} />
    </Box>
  );
}
