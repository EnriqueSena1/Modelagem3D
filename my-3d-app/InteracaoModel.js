//Parece que esse cod e colocado em Model.js dentro de public




import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Model() {
  const mesh = useRef();
  const { scene } = useGLTF('/path/to/your/model.glb');
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (active) {
      mesh.current.rotation.y += delta;
    }
  });

  return (
    <primitive
      ref={mesh}
      object={scene}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
    />
  );
}

export default Model;