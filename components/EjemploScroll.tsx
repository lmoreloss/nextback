"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Center, Float } from "@react-three/drei";
import { context } from "three/tsl";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const CarModel = () => {
  const geoRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Load assets
  const fbx = useLoader(FBXLoader, "/car_1.fbx"); // Ensure path has /
  let [texture1, texture2] = useLoader(THREE.TextureLoader, [
    "/Car Texture 1.png",
    "/Car Texture 2.png",
  ]);

  // Extract Geometry
  const geo = useMemo(() => {
    let geom: THREE.BufferGeometry | undefined;
    fbx.traverse((item) => {
      if (item instanceof THREE.Mesh) {
        geom = item.geometry;
      }
    });
    return geom;
  }, [fbx]);

  // --- THE GSAP ANIMATION ---
  // useGSAP(() => {
  //   if (!meshRef.current) return;

  //   // Create a timeline linked to the scroll of the whole page
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "body", // The whole page is the trigger
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 1, // Smoothly animate with scroll
  //     },
  //   });

  //   // Phase 1: Move from Center to Left and Rotate
  //   tl.to(meshRef.current.position, {
  //     x: -3, // Move Left
  //     z: 2, // Move Closer
  //     duration: 2,
  //   });

  //   tl.to(
  //     meshRef.current.rotation,
  //     {
  //       y: Math.PI / 2, // Rotate 90 degrees
  //       duration: 2,
  //     },
  //     "<"
  //   ); // Run at same time as previous animation

  //   // Phase 2: Move to Right and Spin
  //   tl.to(meshRef.current.position, {
  //     x: 3, // Move Right
  //     y: 1, // Move Up
  //     duration: 2,
  //   });

  //   tl.to(
  //     meshRef.current.rotation,
  //     {
  //       y: Math.PI * 2, // Full spin
  //       x: Math.PI / 90,
  //       duration: 2,
  //     },
  //     "<"
  //   );
  // }, []); // Run once on mount

  useGSAP(() => {
    if (!groupRef.current) return;
    // groupRef.current.position.x = 0;
    // groupRef.current.position.y = 0;
    // groupRef.current.position.z = 0;
    const mm = gsap.matchMedia();

    mm.add(
      {
        esDesktop: "(min-width: 800px)",
        esMovil: "(max-width: 799px)",
      },
      (context) => {
        const { esDesktop, esMovil } = context.conditions as any;
        if (!groupRef.current) return;
        if (esDesktop) {
          console.log("desktop");
        } else {
          console.log("movil");
        }
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#pinned-section", // 1. Target the HTML ID
            start: "top top", // 2. Start when top of section hits top of screen
            end: "+=150%", // 3. Pin for 150% of the viewport height (duration)
            pin: true, // 4. THIS STICKS THE HTML
            scrub: 1,
            pinSpacing: true, // 6. Pushes the next section down so it doesn't overlap
          },
        });

        // The car moves while the user scrolls through that pinned duration
        tl.to(groupRef.current.position, {
          x: esDesktop ? 3 : 1,
          z: esDesktop ? 2 : 1,
        });

        tl.to(
          groupRef.current.rotation,
          {
            x: convertirARadianes(-90), //Las rotaciones son en base a radianos.Pi radianes son 180 grados,
          },
          "<"
        );

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#right-section",
            start: "top top", // Start when top of section hits bottom of viewport
            end: "+=300%",
            pin: true,
            pinSpacing: true, // Finish when section is in middle of screen
            scrub: 1,
          },
        });

        tl2.to(groupRef.current.position, {
          x: esDesktop ? -1.7 : -0.7, // Move to right
          y: 0,
          z: esDesktop ? 3 : 1,
        });

        tl2.to(
          groupRef.current.rotation,
          {
            z: convertirARadianes(135),
            y: convertirARadianes(10),
          },
          "<"
        );
        tl2.to(
          geoRef.current!.material,
          {
            wireframe: true,
            onComplete: () => {
              if (matRef.current) {
                matRef.current.map = texture2;
                matRef.current.needsUpdate = true;
              }
            },
            onReverseComplete: () => {
              if (matRef.current) {
                matRef.current.map = texture1;
                matRef.current.needsUpdate = true;
              }
            },
          },

          "<"
        );
        tl2.to(geoRef.current!.material, {
          wireframe: false,
        });
        gsap.to(geoRef.current!.material, {
          scrollTrigger: {
            trigger: "#foot",
            start: "top bottom",
            end: "center bottom",
            scrub: true,
          },
          opacity: 0,
        });
      }
    );
    gsap.to("#soluciones", {
      scrollTrigger: {
        trigger: "#pinned-section",
        start: "top top",
        once: true,
      },
      autoAlpha: 1,
      duration: 1.5,
    });
    gsap.to("#experiencia", {
      scrollTrigger: {
        trigger: "#right-section",
        start: "top top",
        once: true,
        markers: true,
      },
      autoAlpha: 1,
      duration: 1.5,
    });
    return () => mm.revert();
  }, []);

  function convertirARadianes(grados: number): number {
    return (Math.PI / 180) * grados;
  }

  if (!geo) return null;

  return (
    <group ref={groupRef}>
      <Float>
        <Center>
          <mesh
            ref={geoRef}
            geometry={geo}
            scale={0.5}
            position={[-1, -0.5, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshPhysicalMaterial
              map={texture1}
              ref={matRef}
              transparent={true}
              wireframe={false}
            />
          </mesh>
        </Center>
      </Float>
    </group>
  );
};

export default function Page() {
  return (
    <div className="relative w-full">
      {/* 1. The Fixed 3D Background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[linear-gradient(to_right,#0172bf,#00ade5,#0172bf)]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 5, 2]} />
          <CarModel />
        </Canvas>
      </div>

      {/* 2. The HTML Content (Scrollable) */}
      <main className="w-full text-white">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Digital Solution</h1>
        </section>
        <section
          id="pinned-section"
          className="h-screen flex items-center justify-start px-20 bg-black/20"
        >
          <div className="max-w-md opacity-0" id="soluciones">
            <h2 className="text-4xl font-bold mb-4">Soluciones</h2>
            <p className="text-xl">
              Diferentes pantallas para distintas necesidades, desde pantallas
              rectangulares hasta amorfas
            </p>
          </div>
        </section>
        <section
          id="right-section"
          className="h-screen flex items-center justify-end px-20"
        >
          <div className="max-w-md text-right opacity-0" id="experiencia">
            <h2 className="text-4xl font-bold mb-4">Experiencia</h2>
            <p className="text-xl">
              El contar con la experiencia de 10 años te da la certeza de que{" "}
              <strong>sabemos lo que hacemos</strong>
            </p>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center px-20">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold mb-4">Alcance</h2>
            <p className="text-xl">
              Tenemos mas de 5000 pantallas en todo Mexico, en los 31 estados, y
              nuestros mas de 60 colaboradores estan listos para ayudarte
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
