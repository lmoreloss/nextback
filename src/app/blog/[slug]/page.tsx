import { notFound } from "next/navigation";
import StrapiImage from "../../../../components/StrapiImage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import NavBarDigital from "../../../../components/NavBarDigital";
import FooterDigital from "../../../../components/FooterDigital";

async function getArticleBySlug(slug: string) {
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  const query = new URLSearchParams({
    "filters[slug][$eq]": slug,
    populate: "*",
  });

  const res = await fetch(`${STRAPI_URL}/api/articles?${query}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const json = await res.json();

  // Strapi returns { data: [ ... ] }. Since slugs are unique, we take the first one.
  const article = json.data[0];
  return article || null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  // 1. Await the params (Standard in Next.js 15, good practice in 14)
  const { slug } = await params;

  // 2. Fetch data
  const article = await getArticleBySlug(slug);

  // 3. Handle 404 if slug doesn't exist
  if (!article) {
    return notFound();
  }

  return (
    <div className="bg-[linear-gradient(to_right,#0172bf,#00ade5,#0172bf)] h-auto min-h-100vh">
      <NavBarDigital></NavBarDigital>
      <div className="pt-24"></div>
      <article className="max-w-3xl mx-auto py-10 px-4 bg-black/20 rounded-xl">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

          {/* The Cover Image */}
          {article.cover && (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <StrapiImage
                src={article.cover.url}
                alt={article.cover.alternativeText || article.title}
                fill // Using 'fill' makes it responsive within the parent div
                className="object-cover"
                priority // Loads this image immediately for LCP score
              />
            </div>
          )}
        </header>

        {/* Content Section */}
        <div className="prose lg:prose-xl markdown">
          {/* <BlocksRenderer content={article.TextoRico}></BlocksRenderer> */}
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkRehype, rehypeRaw]}>
            {article.TextoMarkdown}
          </ReactMarkdown>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-start">Entrada anterior</p>
          </div>
          <div>
            <p className="text-end">Entrada siguiente</p>
          </div>
        </div>
      </article>
      <FooterDigital></FooterDigital>
    </div>
  );
}
