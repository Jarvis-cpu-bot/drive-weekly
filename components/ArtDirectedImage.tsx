"use client";

import { useState } from "react";
import Image from "next/image";

// Fallback per the imagery spec: if a remote fetch fails, fall back to a local solid
// plate at 16:9 with a flat asphalt-grade fill — never a gradient, never a blob.
// Treatment: 16:9, daylight-neutral grade, high clarity, no grain (rule 1, row 17).
export default function ArtDirectedImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div role="img" aria-label={alt} className="absolute inset-0" style={{ backgroundColor: "#9aa3aa" }} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover"
      onError={() => setFailed(true)}
      style={{ filter: "saturate(1.02) contrast(1.03) brightness(1.01)" }}
    />
  );
}
