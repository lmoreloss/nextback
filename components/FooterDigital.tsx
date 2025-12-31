"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import logoDigisols from "/ddigisolsHorizontal.png";

export default function NavbarDigital() {
  const linkSections = [
    {
      title: "Acceso rapido",
      links: [
        { nombre: "Inicio", ruta: "/" },
        { nombre: "Acerca de Nosotros", ruta: "/quienes-somos" },
        { nombre: "Casos de Exito", ruta: "/casos-exito" },
        { nombre: "Blog", ruta: "/blog" },
        { nombre: "Contacto", ruta: "/contacto" },
        { nombre: "Mapa del Sitio", ruta: "/" },
      ],
    },
    {
      title: "Siguenos",
      links: [
        { nombre: "Instagram", ruta: "/" },
        { nombre: "Twitter", ruta: "/" },
        { nombre: "Facebook", ruta: "/" },
        { nombre: "YouTube", ruta: "/" },
      ],
    },
  ];

  gsap.registerPlugin(MorphSVGPlugin);

  useGSAP(() => {
    gsap.to("#wave1", {
      morphSVG: "#wave2",
      duration: 2,
      ease: "expo.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div className="relative bottom-0 bg-black/50 backdrop-blur-md shadow-xl">
      <div
        className="flex rounded-t-lg w-full relative border-slate-700 flex-col md:flex-row items-start justify-between gap-10 border-gray-500/30 text-gray-500 p-14 overflow-hidden"
        id="foot"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          /* Added bottom-0 here to ensure wave anchors to bottom of container */
          className="absolute bottom-0 left-0 w-full h-auto scale-x-110 max-sm:-translate-x-[9%] max-sm:scale-x-120 -z-10"
        >
          <path
            id="wave1"
            fill="#0099ff"
            fillOpacity="1"
            d="M0,96L21.8,117.3C43.6,139,87,181,131,192C174.5,203,218,181,262,181.3C305.5,181,349,203,393,218.7C436.4,235,480,245,524,250.7C567.3,256,611,256,655,256C698.2,256,742,256,785,266.7C829.1,277,873,299,916,261.3C960,224,1004,128,1047,112C1090.9,96,1135,160,1178,170.7C1221.8,181,1265,139,1309,128C1352.7,117,1396,139,1418,149.3L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
          <path
            id="wave2"
            fill="transparent"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,149.3C672,171,768,181,864,202.7C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div>
          <img
            className="w-55 md:w-50 justify-self-center"
            src="/images/ddigisolsHorizontal.png"
            alt="dummyLogoColored"
          />
          <p className="max-w-[410px] mt-6 text-gray-300 max-sm:text-center">
            Digital Solution. Señalizacion Especializada Digital. Todos los
            derechos reservados
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-300 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1 text-gray-300">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.ruta} className="hover:underline transition">
                      {link.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10 pb-4">
        <p className="text-center text-sm md:text-base text-white/90 font-medium">
          Copyright 2025 © <a href="/">Señalizacion Especializada Digital</a>
        </p>
      </div>
    </div>
  );
}
