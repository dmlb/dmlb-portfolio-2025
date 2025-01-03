import sanityClient from "./sanityClient";
import imageUrlBuilder from '@sanity/image-url';

// https://www.sanity.io/docs/image-url

const builder = imageUrlBuilder(sanityClient)

const sanityImageUrl = (source: string) => {
    return builder.image(source);
};

export default sanityImageUrl;