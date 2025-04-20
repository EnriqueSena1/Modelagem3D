import React,{useRef} from 'react';
import { useGLTF } from '@react-three/drei';

function Model(){
    const {scene} = useGLTF('/path/to/your/model.glb') // Subtitua pelo o meu caminhanho do meu modelo de 3d que vai ser renderizado!!!
    return <primitive object={scene}/>;
}
export default Model;
