"use client";
import { useEffect, useState } from "react";
import FooterDigital from "../../../components/FooterDigital";
import NavBarDigital from "../../../components/NavBarDigital";

export interface Partners {
  id: string;
  Imagen: any;
  titulo: string;
}

export default function funcion() {
  const [empresas, setEmpresas] = useState<Partners[]>([]);
  const getPartners = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/empresas?populate=*`
    );
    const data = await response.json();
    setEmpresas(data.data);
  };

  useEffect(() => {
    getPartners();
  }, []);
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#0172bf,#00ade5,#0172bf)] h-auto">
      <NavBarDigital></NavBarDigital>
      <div className="pt-24"></div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="col-span-1 bg-black/20 rounded-2xl px-2">
              <h1 className="text-3xl font-semibold text-center mx-auto">
                Casos de Exito
              </h1>
              <p className="text-sm text-center mt-2 max-w-lg mx-auto">
                Nuestros proyectos completados, ayudando a nuestros clientes a
                ser mejores
              </p>
              <div className="flex [&>:last-child>*:last-child]:rounded-r-2xl [&>:first-child>*:last-child]:rounded-l-2xl [&>:first-child>*:first-child]:rounded-l-2xl [&>:last-child>*:first-child]:rounded-r-2xl items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
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
                      que el cliente ficticio tenia, manipulando al lector para
                      que diga "Oh vaya, en Digital Solution si tienen la
                      capacidad necesaria"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
          <div>
            <section className="flex flex-col items-center justify-center px-4 md:px-0 bg-black/20 rounded-2xl">
              <h1 className="text-3xl font-semibold text-center mx-auto">
                Nuestros partners
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mt-14">
                {empresas.map((empresa) => (
                  <div
                    key={empresa.id}
                    className="grid place-content-center aspect-square size-15 bg-gray-50 border border-gray-200 rounded-md"
                  >
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_URL + empresa.Imagen.url
                      }
                      alt="Logo"
                    />
                  </div>
                ))}

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
      <FooterDigital></FooterDigital>
    </div>
  );
}
