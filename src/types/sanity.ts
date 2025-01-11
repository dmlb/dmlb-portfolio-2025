/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
  _key: string;
}>;

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  projects?: boolean;
  description?: string;
};

export type TechStack = {
  _id: string;
  _type: "techStack";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  icon?: IconPicker;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  teckStack?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "techStack";
  }>;
  publishedAt?: string;
  body?: BlockContent;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  teckStack?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "techStack";
  }>;
  publishedAt?: string;
  body?: BlockContent;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  pronouns: string;
  slug: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  title: string;
  location: string;
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  linkedin?: string;
  github?: string;
  codepen?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type IconPicker = {
  _type: "iconPicker";
  provider?: string;
  name?: string;
  svg?: string;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | BlockContent | Category | TechStack | Project | Post | Author | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | IconPicker | MediaTag | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../src/lib/sanity-utils/sanityQueries.ts
// Variable: AUTHOR_QUERY
// Query: *[_type == "author"][0]{    name,     pronouns,     location,     title,     slug,     linkedin,     codepen,     github  }
export type AUTHOR_QUERYResult = {
  name: string;
  pronouns: string;
  location: string;
  title: string;
  slug: Slug;
  linkedin: string | null;
  codepen: string | null;
  github: string | null;
} | null;
// Variable: AUTHOR_CARD_QUERY
// Query: *[_type == "author" && slug.current == $slug && !(_id in path('drafts.**'))][0]{  name,   pronouns,   location,   bio,   image,  title,   slug,   linkedin,   codepen,   github}
export type AUTHOR_CARD_QUERYResult = {
  name: string;
  pronouns: string;
  location: string;
  bio: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  title: string;
  slug: Slug;
  linkedin: string | null;
  codepen: string | null;
  github: string | null;
} | null;
// Variable: CATEGORIES_QUERY
// Query: *[_type == "category" && defined(slug.current)]{  _id, title, 'slug': slug.current}
export type CATEGORIES_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: string;
}>;
// Variable: CATEGORIES_SLUG_QUERY
// Query: *[_type == "category" && slug.current == $slug][0]{  _id, title}
export type CATEGORIES_SLUG_QUERYResult = {
  _id: string;
  title: string;
} | null;
// Variable: TAGS_QUERY
// Query: *[_type == "techStack" && defined(slug.current)]{  _id, title, slug}
export type TAGS_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: Slug;
}>;
// Variable: TAGS_SLUG_QUERY
// Query: *[_type == "techStack" && slug.current == $slug][0]{  _id, title}
export type TAGS_SLUG_QUERYResult = {
  _id: string;
  title: string;
} | null;
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current)]{    _id, title, slug  }
export type POSTS_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: Slug;
}>;
// Variable: POST_SLUG_QUERY
// Query: *[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{    title,    mainImage,    _createdAt,    _updatedAt,    body,    "categories": categories[]->{title, "slug": slug.current },    "techStack": techStack[]->{title, "slug": slug.current }  }
export type POST_SLUG_QUERYResult = {
  title: string;
  mainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  _createdAt: string;
  _updatedAt: string;
  body: BlockContent | null;
  categories: Array<{
    title: string;
    slug: string;
  }> | null;
  techStack: null;
} | null;
// Variable: POST_CATEGORY_QUERY
// Query: *[_type == "post" && $slug in categories[]->slug.current && !(_id in path('drafts.**'))]{  _id,  title,  slug,  "categories": categories[]->{title, "slug": slug.current },  "techStack": techStack[]->{title, "slug": slug.current },  "author": {      "name": author->name,  }}
export type POST_CATEGORY_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: Slug;
  categories: Array<{
    title: string;
    slug: string;
  }> | null;
  techStack: null;
  author: {
    name: string | null;
  };
}>;
// Variable: POST_TAG_QUERY
// Query: *[_type == "post" && $slug in techStack[]->slug.current && !(_id in path('drafts.**'))]{  _id,  title,  slug,  "categories": categories[]->{title, "slug": slug.current },  "techStack": techStack[]->{title, "slug": slug.current },  "author": {      "name": author->name  }}
export type POST_TAG_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: Slug;
  categories: Array<{
    title: string;
    slug: string;
  }> | null;
  techStack: null;
  author: {
    name: string | null;
  };
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"author\"][0]{\n    name, \n    pronouns, \n    location, \n    title, \n    slug, \n    linkedin, \n    codepen, \n    github\n  }": AUTHOR_QUERYResult;
    "*[_type == \"author\" && slug.current == $slug && !(_id in path('drafts.**'))][0]{\n  name, \n  pronouns, \n  location, \n  bio, \n  image,\n  title, \n  slug, \n  linkedin, \n  codepen, \n  github\n}": AUTHOR_CARD_QUERYResult;
    "*[_type == \"category\" && defined(slug.current)]{\n  _id, title, 'slug': slug.current\n}": CATEGORIES_QUERYResult;
    "*[_type == \"category\" && slug.current == $slug][0]{\n  _id, title\n}": CATEGORIES_SLUG_QUERYResult;
    "*[_type == \"techStack\" && defined(slug.current)]{\n  _id, title, slug\n}": TAGS_QUERYResult;
    "*[_type == \"techStack\" && slug.current == $slug][0]{\n  _id, title\n}": TAGS_SLUG_QUERYResult;
    "*[_type == \"post\" && defined(slug.current)]{\n    _id, title, slug\n  }": POSTS_QUERYResult;
    "*[_type == \"post\" && slug.current == $slug && !(_id in path('drafts.**'))][0]{\n    title,\n    mainImage,\n    _createdAt,\n    _updatedAt,\n    body,\n    \"categories\": categories[]->{title, \"slug\": slug.current },\n    \"techStack\": techStack[]->{title, \"slug\": slug.current }\n  }": POST_SLUG_QUERYResult;
    "*[_type == \"post\" && $slug in categories[]->slug.current && !(_id in path('drafts.**'))]{\n  _id,\n  title,\n  slug,\n  \"categories\": categories[]->{title, \"slug\": slug.current },\n  \"techStack\": techStack[]->{title, \"slug\": slug.current },\n  \"author\": {\n      \"name\": author->name,\n  }\n}": POST_CATEGORY_QUERYResult;
    "*[_type == \"post\" && $slug in techStack[]->slug.current && !(_id in path('drafts.**'))]{\n  _id,\n  title,\n  slug,\n  \"categories\": categories[]->{title, \"slug\": slug.current },\n  \"techStack\": techStack[]->{title, \"slug\": slug.current },\n  \"author\": {\n      \"name\": author->name\n  }\n}": POST_TAG_QUERYResult;
  }
}
