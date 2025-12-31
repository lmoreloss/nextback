"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import FooterDigital from "../../../components/FooterDigital";
import NavBarDigital from "../../../components/NavBarDigital";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Float, Center } from "@react-three/drei";

const Modelo = () => {
  const groupRef = useRef<THREE.Group>(null);

  const digisols = useLoader(FBXLoader, "/models/digisols.fbx");

  const geo = useMemo(() => {
    let geom: THREE.BufferGeometry | undefined;
    digisols.traverse((item) => {
      if (item instanceof THREE.Mesh) {
        geom = item.geometry;
      }
    });
    return geom;
  }, [digisols]);
  return (
    <group ref={groupRef}>
      <Float>
        <Center>
          <mesh
            geometry={geo}
            scale={14.5}
            position={[0, 0, 0]}
            rotation={[convertirARadianes(270), 0, 0]}
          >
            <meshPhysicalMaterial transparent={false} wireframe={true} />
          </mesh>
        </Center>
      </Float>
    </group>
  );
};

function convertirARadianes(grados: number): number {
  return (Math.PI / 180) * grados;
}

export default function funcion() {
  const fechaInicio = new Date(2014, 3, 6);
  const hoy = new Date();
  const milisEnAnio = 1000 * 60 * 60 * 24 * 365;
  const anios = Math.floor(
    (hoy.getTime() - fechaInicio.getTime()) / milisEnAnio
  );

  console.log(hoy);
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#0172bf,#00ade5,#0172bf)] h-auto">
      <NavBarDigital></NavBarDigital>
      <div className="pt-24"></div>
      <div className="max-sm:p-4">
        <article className="max-w-3xl mx-auto py-10 px-4 bg-black/20 rounded-xl">
          <h1 className="text-4xl font-bold mb-4 text-center">Quienes somos</h1>
        </article>
      </div>
      <div className="flex">
        <section className="min-w-2/3 flex items-center px-20 ">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Experiencia</h2>
            <p className="text-xl">
              Llevamos <strong>{anios} años</strong> en el mercado de la
              señalizacion digital
            </p>
            <br />
            <h2 className="text-4xl font-bold mb-4">
              Multiples clientes confian en nosotros
            </h2>
            <p className="text-xl">
              Todos nuestros clientes son igual de importantes. Es por eso que
              dedicamos todo por ellos
            </p>
            <br />
            <h2 className="text-4xl font-bold mb-4">Soluciones</h2>
            <p className="text-xl">
              Diferentes pantallas para distintas necesidades, desde pantallas
              rectangulares hasta amorfas
            </p>
          </div>
        </section>
        <section className="min-w-1/3 max-w-1/3 ml-auto">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 5, 2]} />
            <Modelo></Modelo>
          </Canvas>
        </section>
      </div>

      <FooterDigital></FooterDigital>
    </div>
  );
}
