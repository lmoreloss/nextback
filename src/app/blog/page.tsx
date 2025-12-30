"use client";
import Link from "next/link";
import FooterDigital from "../../../components/FooterDigital";
import NavBarDigital from "../../../components/NavBarDigital";
import StrapiImage from "../../../components/StrapiImage";
import { useState, useEffect } from "react";

export interface Article {
  id: string;
  title: string;
  cover: any;
  description: string;
  publishedAt: Date;
  TextoMarkdown: string;
  slug: string;
  summary: string;
}
let pagina: number = 1;
let longitudPagina = 2;

export default function funcion() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [textoBoton, setTextoBoton] = useState("Cargar mas entradas");

  const getArticles = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*&sort[0]=createdAt:desc&pagination[page]=${pagina}&pagination[pageSize]=${longitudPagina}`
    );
    const data = await response.json();
    if (data.data.length == 0) {
      pagina--;
      setTextoBoton("No hay mas entradas por mostrar");
    }
    if (articles == null) {
      setArticles(data.data);
    } else {
      setArticles(articles.concat(data.data));
    }
  };

  useEffect(() => {
    getArticles();
    pagina = 1;
  }, []);

  function pagSiguiente() {
    pagina++;
    getArticles();
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#0172bf,#00ade5,#0172bf)] h-auto">
      <NavBarDigital></NavBarDigital>
      <div className="pt-24"></div>
      <div className="max-sm:p-4">
        <article className="max-w-3xl mx-auto py-10 px-4 bg-black/20 rounded-xl">
          <h1 className="text-4xl font-bold mb-4 text-center">Nuestro blog</h1>
        </article>

        <div
          className="grid grid-cols-1 gap-10 m-4 max-w-3xl mx-auto"
          id="articulos"
        >
          {/* mapear los articulos y crear multiples article */}
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-black-500 rounded-lg overflow-hidden group transition delay-150 duration-300 hover:scale-107 h-fit"
            >
              {/* componente custom que si corre en local, carga imagenes no optimizadas */}
              <Link href={`/blog/${article.slug}`} className="block md:flex">
                <StrapiImage
                  className="w-full md:w-1/3 h-auto md:max-h-[205] md:min-h-[204] object-cover"
                  src={process.env.NEXT_PUBLIC_STRAPI_URL + article.cover.url}
                  alt={article.title}
                  width={180}
                  height={38}
                  priority
                />

                <div className="p-4 bg-black/20 md:w-2/3 rounded-b-lg shadow-xl/50 group-hover:bg-linear-to-r group-hover:backdrop-blur-xl from-green-500/100 to-blue-500/100 transition delay-50 duration-150">
                  {/* <div className="p-4 bg-[#777777] rounded-b-lg shadow-xl/50 group-hover:bg-[#777777]/70 group-hover:backdrop-blur-xl transition delay-50 duration-150"> */}
                  <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-white">Publicado:</p>
                  <p className="text-sm text-white">
                    Descripcion: {article.description}
                  </p>
                  {/* strapi blocksrenderer para renderizar correctamente los rich text (block) de strapi en el cms
                  <BlocksRenderer content={article.TextoRico}></BlocksRenderer> */}
                  {/* componente de reactmarkdown para renderizar el rich text (markdown) de strapi en el cms */}
                  {/* <Streamdown controls={false}>
                    {article.TextoMarkdown}
                  </Streamdown> */}
                  <p className="text-sm text-white">{article.summary}</p>
                </div>
              </Link>
            </article>
          ))}
          <button
            className="bg-white 
        text-sky-700 
        font-semibold 
        text-lg
        py-4 
        px-10 
        rounded-full 
        shadow-lg 
        hover:bg-sky-50 
        hover:shadow-xl 
        hover:scale-105 
        active:scale-95
        transition-all 
        duration-300 
        ease-in-out
        focus:outline-none 
        focus:ring-4 
        focus:ring-white/50"
            onClick={pagSiguiente}
          >
            {textoBoton}
          </button>
        </div>
      </div>

      <FooterDigital></FooterDigital>
    </div>
  );
}
