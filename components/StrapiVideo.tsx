"use client";

import { VideoHTMLAttributes } from "react";
// Import your helper from the previous file (assuming it's in utils or same directory)
// import { getStrapiMedia } from "./StrapiImage";

// 1. Re-declare helper if in a new file (OR import it from your existing file)
export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  return `${STRAPI_URL}${url}`;
}

// 2. Define props extends standard HTML Video attributes
interface StrapiVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string; // The video URL path from Strapi
  poster?: string; // Optional: The preview image URL path from Strapi
}

export default function StrapiVideo({
  src,
  poster,
  ...props
}: StrapiVideoProps) {
  const videoUrl = getStrapiMedia(src);
  const posterUrl = getStrapiMedia(poster || null);

  if (!videoUrl) {
    return null;
  }

  return (
    <video
      // Pass standard props (controls, autoPlay, className, etc.)
      {...props}
      // Set the resolved URLs
      src={videoUrl}
      poster={posterUrl || undefined}
    >
      {/* Fallback for very old browsers */}
      Your browser does not support the video tag.
    </video>
  );
}
