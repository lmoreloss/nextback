"use client";

import Image, { ImageProps } from "next/image";

interface StrapiImageProps extends Omit<ImageProps, "src"> {
  src: string; // We override src to ensure it's just the path (e.g. /uploads/...)
}

// Helper to get the full URL
export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if it's already an absolute URL (starts with http)
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise, prepend the Strapi URL
  // Use env variable or fallback to localhost
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  console.log(`23${STRAPI_URL}${url}`);
  return `${STRAPI_URL}${url}`;
}

export default function StrapiImage({ src, ...props }: StrapiImageProps) {
  const imageUrl = getStrapiMedia(src);

  if (!imageUrl) {
    return null;
  }

  // LOGIC: If we are running on localhost, disable optimization to avoid
  // the "private ip" error. In production, this will use standard Next.js optimization.
  // const isLocalhost =
  //   imageUrl.includes("localhost") || imageUrl.includes("127.0.0.1");
  const shouldSkipOptimization =
    imageUrl.includes("localhost") ||
    imageUrl.includes("127.0.0.1") ||
    imageUrl.includes("192.168.");

  return (
    <Image
      {...props}
      src={imageUrl}
      // Force unoptimized if on localhost, otherwise let Next.js optimize it
      unoptimized={shouldSkipOptimization}
      // Optional: Add a loader if you want to control the URL generation specifically
    />
  );
}
