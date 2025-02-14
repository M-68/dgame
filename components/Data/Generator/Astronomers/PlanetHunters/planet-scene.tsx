'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { PlanetMesh } from './planet-mesh'
import type { PlanetStats } from '@/utils/planet-physics'
import { Button } from '@/components/ui/button'

interface PlanetSceneProps {
  stats: PlanetStats
  type?: string;
};

export function PlanetScene({ stats, type }: PlanetSceneProps) {
  const planetType = stats.type ?? "terrestrial"; // Fallback to "terrestrial" if undefined

  return (
    <div className="w-full h-[500px] bg-black rounded-lg overflow-hidden">
      {type && (
        <Button variant="link" className="mt-2 text-blue-500">
          {type} Planet
        </Button>
      )}
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PlanetMesh stats={{ ...stats, type: planetType }} />
        <Stars radius={300} depth={50} count={5000} factor={4} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};