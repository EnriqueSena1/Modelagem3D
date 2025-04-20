import React, { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Model from '.Model'; // Componete para carregar meu modelo 3D

function App(){
    return (
        <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls /> {/* Permite interagir com a câmera usando o mouse */}
      </Canvas>    
    );
}

export  default App;
