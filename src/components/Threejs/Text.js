import React, { useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";

function Text(props) {
  const mesh = useRef();
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}

export { Text };
