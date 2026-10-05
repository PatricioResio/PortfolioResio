import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const MODEL_URL = `${import.meta.env.BASE_URL}desktop_pc/scene.glb`;

const Computers = ({ isMobile }) => {
  const computer = useGLTF(MODEL_URL);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={6} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.65}
        position={isMobile ? [0, -1, -2.2] : [0, -2.4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Antes era 'max-width:500' (query inválida: nunca matcheaba)
    const mq = window.matchMedia('(max-width: 500px)');
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload(MODEL_URL);

export default ComputersCanvas;
