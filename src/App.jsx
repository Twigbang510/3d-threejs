import { Canvas } from "@react-three/fiber";
import { RotatingBox } from "./RotatingBox";
import { RotatingObject } from "./RotatingObject";
function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        <ambientLight intensity={1.0} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        {/* Render three rotating boxes with different colors and rotation rates */}
        <group position={[0, 0, 0]}>
          <RotatingBox color="red" rotationSpeed={0.01} position={[-2, 0, 0]} />
          <RotatingBox color="green" rotationSpeed={0.02} position={[2, 0, 0]} />
          <RotatingObject color="blue" rotationSpeed={0.03} position={[0, 5, 0]} />
        </group>
      </Canvas>
    </div>
  );
}

export default App;
