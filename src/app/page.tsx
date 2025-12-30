"use client";
import NavBarDigital from "../../components/NavBarDigital";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StrapiVideo from "../../components/StrapiVideo";
import { useEffect, useMemo, useRef, useState } from "react";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import Link from "next/link";
import StrapiImage from "../../components/StrapiImage";
import * as THREE from "three";
import { createRoot } from "react-dom/client";
import { useFrame, ThreeElements } from "@react-three/fiber";
import EjemploScroll from "../../components/EjemploScroll";
import FooterDigital from "../../components/FooterDigital";

const App = () => {
  gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger, MorphSVGPlugin);

  const edos = useRef<HTMLParagraphElement>(null);
  const contadorEdos = { val: 0 };
  const teles = useRef<HTMLParagraphElement>(null);
  const contadorTeles = { val: 0 };
  const emps = useRef<HTMLParagraphElement>(null);
  const contadorEmps = { val: 0 };

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".card");
    gsap.from(cards, {
      y: "random(-300, 300)",
      x: gsap.utils.random(-300, 300),
      autoAlpha: 0,
      stagger: 0.2,
      duration: 0.2,
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: edos.current,
      },
    });

    gsap.to("#cubo", {
      scrollTrigger: {
        trigger: "#videoEnfrente",
        start: "bottom 80%",
        //markers: true,
        endTrigger: "#foot",
        end: "top 80%",
        scrub: true,
      },
      xPercent: -2000,
      yPercent: 1800,
    });
    gsap.to("#wave1", {
      morphSVG: "#wave2",
      duration: 2,
      ease: "expo.inOut",
      repeat: -1,
      yoyo: true,
    });

    const paras = gsap.utils.toArray<HTMLElement>(".aparece");
    paras.forEach((para) => {
      gsap.from(para, {
        scrollTrigger: {
          trigger: para,
          start: "top-=100% bottom",
          end: "top-=100% bottom",
          markers: true,
          once: true,
          onEnter: () => {
            // const items = gsap.utils.toArray<HTMLElement>(".items-start");

            // gsap.from(items, {
            //   x: -500,
            //   autoAlpha: 0,
            //   duration: 0.5,
            //   stagger: 0.5,
            // });
            //estados
            timeline.to(
              contadorEdos,
              {
                val: 31,
                // scrollTrigger: {
                //   trigger: "#estados",
                // },
                duration: 3,
                snap: { val: 1 },
                ease: "power2.out",
                onUpdate: () => {
                  if (edos.current) {
                    edos.current.innerText = `${contadorEdos.val} estados`;
                  }
                },
              },
              0
            );
            timeline.to(
              "#estados",
              {
                scale: 1.2,
                color: "#3030ccff",
                duration: 3,
                ease: "power2.out",
              },
              0
            );
            //fin estados
            //pantallas
            timeline.to(
              contadorTeles,
              {
                val: 10000,
                // scrollTrigger: {
                //   trigger: "#pantallas",
                // },
                duration: 3,
                snap: { val: 1 },
                ease: "power2.out",
                onUpdate: () => {
                  if (teles.current) {
                    teles.current.innerText = `Mas de ${contadorTeles.val} pantallas`;
                  }
                },
              },
              0
            );
            timeline.to(
              "#pantallas",
              {
                scale: 1.2,
                color: "#3030ccff",
                duration: 3,
                ease: "power2.out",
              },
              0
            );
            //fin pantallas
            //trabajadores
            timeline.to(
              contadorEmps,
              {
                val: 30,
                // scrollTrigger: {
                //   trigger: "#colaboradores",
                // },
                duration: 3,
                snap: { val: 1 },
                ease: "power2.out",
                onUpdate: () => {
                  if (emps.current) {
                    emps.current.innerText = `Mas de ${contadorEmps.val} colaboradores`;
                  }
                },
              },
              0
            );
            timeline.to(
              "#colaboradores",
              {
                scale: 1.2,
                color: "#3030ccff",
                duration: 3,
                ease: "power2.out",
              },
              0
            );
            //fin trabajadores
          },
        },
        y: 500,
        autoAlpha: 0,
      });
    });
  }, []);

  function Box(props: ThreeElements["mesh"]) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    });

    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 4.5 : 3}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "#2f74c0"} />
      </mesh>
    );
  }

  return (
    <div className="min-h-[200vh] relative overflow-x-hidden">
      <NavBarDigital></NavBarDigital>
      {/*<Canvas className="min-h-[50vh]">
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, -4, 0]} />
        <mesh></mesh>
      </Canvas>*/}
      <div id="scrolleable">
        <EjemploScroll></EjemploScroll>
      </div>

      {/*      <div className="grid-cols-3 relative overflow-hidden" id="main">
        <div
          className="absolute scale-1000 w-20 h-20 bg-cyan-100 rotate-45 translate-x-[1900%] translate-y-[1000%] -z-10"
          id="cubo"
        ></div>
        <div className="-z-10 absolute w-full h-auto">
          <video
            src="footage.mp4"
            className={`object-fill w-full h-full blur-[10px]`}
            autoPlay
            muted
            loop
            style={{ scale: 1.07 }}
          ></video>
        </div>
        <div
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-black/70 rounded-sm"
          id="videoEnfrente"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-2">
              <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl dark:text-white">
                Soluciones
              </h2>

              <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-gray-200">
                Videowalls, amorfas, circulares. Las pantallas y señalizacion
                que manejamos se adaptan a tus necesidades. Todo con el objetivo
                de que tu marca se posicione de una forma mas competitiva
              </p>
              /~ Masonry Cards ~/
              <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                /~ Grid ~/
                <div className="grid sm:grid-cols-12 gap-6">
                  <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                    /~ Card ~/
                    <a
                      className="group relative block rounded-xl overflow-hidden focus:outline-hidden card"
                      href="#"
                    >
                      <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img
                          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                          src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                          alt="Masonry Cards Image"
                        />
                      </div>
                      <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition delay-25 duration-200 ease-in-out">
                        <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                          Tarjeta 1
                        </div>
                      </div>
                    </a>
                    /~ End Card ~/
                  </div>
                  /~ End Col ~/

                  <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
                    /~ Card ~/
                    <a
                      className="group relative block rounded-xl overflow-hidden focus:outline-hidden card"
                      href="#"
                    >
                      <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img
                          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                          src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                          alt="Masonry Cards Image"
                        />
                      </div>
                      <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl opacity-0 group-hover:opacity-100 transition delay-25 duration-200 ease-in-out">
                          Tarjeta 2
                        </div>
                      </div>
                    </a>
                    /~ End Card ~/
                  </div>
                  /~ End Col ~/

                  <div className="col-span-12 md:col-span-4">
                    /~ Card ~/
                    <a
                      className="group relative block rounded-xl overflow-hidden focus:outline-hidden card"
                      href="#"
                    >
                      <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img
                          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                          src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                          alt="Masonry Cards Image"
                        />
                      </div>
                      <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl opacity-0 group-hover:opacity-100 transition delay-25 duration-200 ease-in-out">
                          Tarjeta 3
                        </div>
                      </div>
                    </a>
                    /~ End Card ~/
                  </div>
                  /~ End Col ~/

                  <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    /~ Card ~/
                    <a
                      className="group relative block rounded-xl overflow-hidden focus:outline-hidden card"
                      href="#"
                    >
                      <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img
                          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                          src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                          alt="Masonry Cards Image"
                        />
                      </div>
                      <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl opacity-0 group-hover:opacity-100 transition delay-25 duration-200 ease-in-out">
                          Tarjeta 4
                        </div>
                      </div>
                    </a>
                    /~ End Card ~/
                  </div>
                  /~ End Col ~/

                  <div className="col-span-12 sm:col-span-6 md:col-span-4">
                    /~ Card ~/
                    <a
                      className="group relative block rounded-xl overflow-hidden focus:outline-hidden card"
                      href="#"
                    >
                      <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                        <img
                          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                          src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                          alt="Masonry Cards Image"
                        />
                      </div>
                      <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                        <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl opacity-0 group-hover:opacity-100 transition delay-25 duration-200 ease-in-out">
                          Tarjeta 5
                        </div>
                      </div>
                    </a>
                    /~ End Card ~/
                  </div>
                  /~ End Col ~/
                </div>
                /~ End Grid ~/
              </div>
              /~ End Masonry Cards ~/
            </div>

            <div className="space-y-6 grid-cols-1">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Videowall
                  </h3>

                  <p className="mt-1 text-gray-700 dark:text-gray-200">
                    Son pantallas en formato grande, usando muros y paredes para
                    anuncios
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Amorfas
                  </h3>

                  <p className="mt-1 text-gray-700 dark:text-gray-200">
                    Triangulares, hexagonales, sin formas definidas. Las
                    pantallas amorfas salen del molde usual para dar un mayor
                    impacto
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Circulares
                  </h3>

                  <p className="mt-1 text-gray-700 dark:text-gray-200">
                    Relojes, espejos de Realidad Aumentada, señalizacion de
                    rutas. Las pantallas circulares permiten llamar la atencion
                    inmediatamente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aparece mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-black/70 mt-4 rounded-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Presencia Nacional
                  </h3>

                  <p
                    className="font-mono tabular-nums mt-1 mx-auto origin-top-left drop-shadow-sm drop-shadow-cyan-600"
                    id="estados"
                    ref={edos}
                  >
                    31 estados
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Capacidad de administracion
                  </h3>

                  <p
                    className="mt-1 font-mono tabular-nums origin-top-left drop-shadow-sm drop-shadow-cyan-600"
                    id="pantallas"
                    ref={teles}
                  >
                    Mas de 10000 pantallas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="font-mono tabular-nums text-lg font-semibold text-gray-900 dark:text-white">
                    Soporte extendido
                  </h3>

                  <p
                    className="mt-1 origin-top-left drop-shadow-sm drop-shadow-cyan-600"
                    id="colaboradores"
                    ref={emps}
                  >
                    Mas de 30 colaboradores
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl dark:text-white">
                Instalamos, mantenemos y operamos a nivel nacional
              </h2>

              <p className="mt-4 text-lg text-pretty text-gray-700 dark:text-gray-200">
                Desde Tijuana hasta Quintana Roo, estamos ahi. Nuestras
                pantallas ayudan a las empresas a dirigir a los clientes, cerrar
                oportunidades de venta y ayudar a los consumidores
              </p>
            </div>
          </div>
        </div>
        <form className="flex flex-col items-center text-sm text-slate-800">
          <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
            Contactanos
          </p>
          <h1 className="text-4xl px-2 font-bold py-4 text-center text-slate-300  bg-black/70 rounded-sm">
            ¿En que te podemos ayudar?
          </h1>

          <div className="max-w-96 pb-4 w-full px-4  bg-black/70 rounded-b-sm">
            <label htmlFor="name" className="font-medium text-slate-400">
              Nombre o Razon social
            </label>
            <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                  fill="#87a1c4ff"
                />
              </svg>
              <input
                type="text"
                className="h-full px-2 w-full outline-none bg-transparent text-slate-200"
                placeholder="Juan Perez"
                required
              />
            </div>

            <label
              htmlFor="email-address"
              className="font-medium mt-4 text-slate-400"
            >
              Direccion de correo electronico
            </label>
            <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                  fill="#8ba6cbff"
                />
              </svg>
              <input
                type="email"
                className="h-full px-2 w-full outline-none bg-transparent text-slate-200"
                placeholder="ejemplo@dominio.com"
                required
              />
            </div>

            <label
              htmlFor="message"
              className="font-medium mt-4 text-slate-400"
            >
              Tu mensaje
            </label>
            <textarea
              rows={4}
              className="w-full mt-2 p-2 bg-transparent text-slate-200 border border-slate-400 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all"
              placeholder="Queremos multiples pantallas..."
              required
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition"
            >
              Enviar
              <svg
                className="mt-0.5"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <>
              <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
              <div className="col-span-1 bg-black/70 rounded-sm px-2">
                <h1 className="text-3xl font-semibold text-center mx-auto">
                  Casos de Exito
                </h1>
                <p className="text-sm text-center mt-2 max-w-lg mx-auto">
                  Nuestros proyectos completados, ayudando a nuestros clientes a
                  ser mejores
                </p>
                <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                  <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img
                      className="h-full w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
                      alt="image"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h1 className="text-3xl">Totems Walmart</h1>
                      <p className="text-sm">
                        Walmart necesitaba soluciones tecnologicas para su
                        señalizacion digital. Nosotros lo hicimos realidad
                      </p>
                    </div>
                  </div>
                  <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img
                      className="h-full w-full object-cover object-right"
                      src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
                      alt="image"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h1 className="text-3xl">Farmacias del Ahorro</h1>
                      <p className="text-sm">
                        Promociones, descuentos, anuncios. Farmacias del Ahorro
                        necesitaba comunicar la calidad a sus clientes de forma
                        llamativa
                      </p>
                    </div>
                  </div>
                  <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img
                      className="h-full w-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
                      alt="image"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h1 className="text-3xl">Algun otro caso de exito</h1>
                      <p className="text-sm">
                        Texto generico sobre como solucionamos una problematica
                        que el cliente ficticio tenia, manipulando al lector
                        para que diga "Oh vaya, en Digital Solution si tienen la
                        capacidad necesaria"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
            <div>
              <section className="flex flex-col items-center justify-center px-4 md:px-0">
                <h1 className="text-3xl font-semibold text-center mx-auto">
                  Nuestros partners
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mt-14">
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Airbnb.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Figma.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/CloudFlare.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Discord.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Dropbox.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/GoogleAnalytics.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Dribbble.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/GitHub.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Postman.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Reddit.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Microsoft.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/GoogleAds.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/GoDaddy.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Google.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/GitLab.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Pinterest.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Framer.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Vercel.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Spotify.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md">
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/mark/Spline.svg"
                      alt="Logo"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-4"
        id="articulos"
      >
        <h1 className="col-span-1 sm:col-span-2 lg:col-span-3 text-3xl font-semibold text-center">
          Nuestro blog
        </h1>
        /~ mapear los articulos y crear multiples article ~/
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-black-500 rounded-lg overflow-hidden group transition delay-150 duration-300 hover:scale-107 h-fit"
          >
            /~ componente custom que si corre en local, carga imagenes no optimizadas ~/
            <Link href={`/blog/${article.slug}`}>
              <StrapiImage
                className="w-full h-48 object-cover"
                src={STRAPI_URL + article.cover.url}
                alt={article.title}
                width={180}
                height={38}
                priority
              />
            </Link>

            <div className="p-4 bg-[#777777] rounded-b-lg shadow-xl/50 group-hover:bg-linear-to-r group-hover:backdrop-blur-xl from-green-500/50 to-blue-500/50 transition delay-50 duration-150">
              /~ <div className="p-4 bg-[#777777] rounded-b-lg shadow-xl/50 group-hover:bg-[#777777]/70 group-hover:backdrop-blur-xl transition delay-50 duration-150"> ~/
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p className="text-sm text-white">Publicado:</p>
              <p className="text-sm text-white">
                Descripcion: {article.description}
              </p>
              /~ strapi blocksrenderer para renderizar correctamente los rich text (block) de strapi en el cms
                  <BlocksRenderer content={article.TextoRico}></BlocksRenderer> ~/
              /~ componente de reactmarkdown para renderizar el rich text (markdown) de strapi en el cms ~/
              /~ <Streamdown controls={false}>
                    {article.TextoMarkdown}
                  </Streamdown> ~/
              <p className="text-sm text-white">{article.summary}</p>
            </div>
          </article>
        ))}
      </div>
*/}
      <FooterDigital></FooterDigital>
    </div>
  );
};

export default App;
