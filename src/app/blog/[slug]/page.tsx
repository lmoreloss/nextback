import { notFound } from "next/navigation";
import StrapiImage from "../../../../components/StrapiImage";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import NavBarDigital from "../../../../components/NavBarDigital";

async function getArticleBySlug(slug: string) {
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  // 1. Prepare the query
  // We use 'filters' to find the specific slug
  // We use 'populate=*' to get images and relations
  const query = new URLSearchParams({
    "filters[slug][$eq]": slug,
    populate: "*",
  });

  const res = await fetch(`${STRAPI_URL}/api/articles?${query}`, {
    // Cache configuration:
    // 'force-cache' = Static Generation (SSG) - fast, build time
    // 'no-store' = Server Side Rendering (SSR) - always fresh
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
  params: Promise<{ slug: string }>; // Next.js 15 requires params to be a Promise
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
    <div>
      <NavBarDigital></NavBarDigital>
      <article className="max-w-3xl mx-auto py-10 px-4">
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
      </article>
    </div>
  );
}
