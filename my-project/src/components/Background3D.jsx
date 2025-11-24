import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

function Particles() {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={ref}>
            {Array.from({ length: 100 }).map((_, i) => (
                <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
                    <mesh position={[
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 20
                    ]}>
                        <sphereGeometry args={[0.05, 16, 16]} />
                        <meshStandardMaterial color={Math.random() > 0.5 ? "#00f3ff" : "#00ff9d"} emissive={Math.random() > 0.5 ? "#00f3ff" : "#00ff9d"} emissiveIntensity={2} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-deepSpace">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Particles />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deepSpace/50 to-deepSpace pointer-events-none" />
        </div>
    );
};

export default Background3D;
