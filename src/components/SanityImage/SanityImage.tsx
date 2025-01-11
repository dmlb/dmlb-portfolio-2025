"use client";

import sanityImageUrl from "@/lib/sanity-utils/sanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
};

export default function SanityImage({ src, alt, ...props }: Props) {
  return (
    <Image
      className="sanity-image"
      src={sanityImageUrl(src).url()}
      alt={alt}
      loader={({ width, quality = 100 }) =>
        sanityImageUrl(src).width(width).quality(quality).url()
      }
      {...props}
    />
  );
}
