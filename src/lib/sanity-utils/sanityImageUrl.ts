import sanityClient from "./sanityClient";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// https://www.sanity.io/docs/image-url

const builder = imageUrlBuilder(sanityClient)

const sanityImageUrl = (source: SanityImageSource) => {
    return builder.image(source);
};

export default sanityImageUrl;