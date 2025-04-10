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

export type Education = {
  _id: string;
  _type: "education";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  program: string;
  year: string;
  institution: string;
  degree: string;
  major?: string;
  honours?: boolean;
};

export type Jobs = {
  _id: string;
  _type: "jobs";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  position: string;
  startYear: string;
  endYear?: string;
  company: string;
  companyUrl?: string;
};

export type FilmCredits = {
  _id: string;
  _type: "filmCredits";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  year: string;
  role: string;
  duration: string;
  format: string;
  genre: string;
  director: string;
  tagline?: string;
  synopsis?: string;
  festival?: string;
  link?: string;
  trailer?: string;
};

export type Endorsement = {
  _id: string;
  _type: "endorsement";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  quote: string;
  person: string;
  position: string;
  company: string;
  year: string;
};

export type ProfessionalDevelopment = {
  _id: string;
  _type: "professionalDevelopment";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  course: string;
  year: string;
  techStack?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "techStack";
  }>;
};

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

export type TechWork = {
  _id: string;
  _type: "techWork";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  position: string;
  startYear: string;
  endYear?: string;
  techStack: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "techStack";
  }>;
  company: string;
  companyUrl: string;
  methodology: string;
  location: "remote" | "hybrid" | "onsite";
};

export type TechProject = {
  _id: string;
  _type: "techProject";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  projectLink: string;
  startYear: string;
  endYear?: string;
  categories: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  techStack: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "techStack";
  }>;
  body?: BlockContent;
};

export type OtherProject = {
  _id: string;
  _type: "otherProject";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  logo?: {
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
  startYear: string;
  endYear?: string;
  link?: string;
  discord?: string;
  instagram?: string;
  linkedin?: string;
  description?: BlockContent;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  author: {
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
  categories: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  techStack?: Array<{
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
  shortBio: string;
  currently: string;
  hideResume: boolean;
  resumePdfUrl?: string;
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
  }>;
  coreValues: Array<string>;
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

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | BlockContent | Education | Jobs | FilmCredits | Endorsement | ProfessionalDevelopment | Category | TechStack | TechWork | TechProject | OtherProject | Post | Author | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | IconPicker | MediaTag | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../src/lib/sanity-utils/sanityQueries.ts
// Variable: AUTHOR_QUERY
// Query: *[_type == "author" && !(_id in path('drafts.**'))][0]{    name,     pronouns,     title,     location,    "socials": {      linkedin,      codepen,      github    }  }
export type AUTHOR_QUERYResult = {
  name: string;
  pronouns: string;
  title: string;
  location: string;
  socials: {
    linkedin: string | null;
    codepen: string | null;
    github: string | null;
  };
} | null;
// Variable: AUTHOR_INTRO_QUERY
// Query: *[_type == "author" && !(_id in path('drafts.**'))][0]{   name,     pronouns,    shortBio,    hideResume,     resumePdfUrl,    "socials": {      linkedin,      codepen,      github    }}
export type AUTHOR_INTRO_QUERYResult = {
  name: string;
  pronouns: string;
  shortBio: string;
  hideResume: boolean;
  resumePdfUrl: string | null;
  socials: {
    linkedin: string | null;
    codepen: string | null;
    github: string | null;
  };
} | null;
// Variable: AUTHOR_CARD_QUERY
// Query: *[_type == "author" && slug.current == 'danielle-bastien' && !(_id in path('drafts.**'))][0]{  name,   pronouns,   title,  shortBio,   image {    _type,    asset,    "alt": asset->altText,  },}
export type AUTHOR_CARD_QUERYResult = {
  name: string;
  pronouns: string;
  title: string;
  shortBio: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    } | null;
    alt: string | null;
  } | null;
} | null;
// Variable: ABOUT_QUERY
// Query: *[_type == "author" && slug.current == 'danielle-bastien' && !(_id in path('drafts.**'))][0]{  name,   pronouns,   title,  location,  bio,   currently,  image {    _type,    asset,    "alt": asset->altText,  },  coreValues,  hideResume,  resumePdfUrl,  "socials": {      linkedin,      codepen,      github  }}
export type ABOUT_QUERYResult = {
  name: string;
  pronouns: string;
  title: string;
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
  }>;
  currently: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    } | null;
    alt: string | null;
  } | null;
  coreValues: Array<string>;
  hideResume: boolean;
  resumePdfUrl: string | null;
  socials: {
    linkedin: string | null;
    codepen: string | null;
    github: string | null;
  };
} | null;
// Variable: TECH_WORK_QUERY
// Query: *[_type == "techWork" && !(_id in path('drafts.**'))] | order(startYear desc) {  methodology,    startYear,    companyUrl,    company,    location,    endYear,    position,    "techStack": techStack[]->{title, icon, "slug": slug.current },}
export type TECH_WORK_QUERYResult = Array<{
  methodology: string;
  startYear: string;
  companyUrl: string;
  company: string;
  location: "hybrid" | "onsite" | "remote";
  endYear: string | null;
  position: string;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }>;
}>;
// Variable: PROF_DEV_QUERY
// Query: *[_type == "professionalDevelopment" && !(_id in path('drafts.**'))] |order(year desc) {  course,    year,    "techStack": techStack[]->{title, icon, "slug": slug.current }}
export type PROF_DEV_QUERYResult = Array<{
  course: string;
  year: string;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }> | null;
}>;
// Variable: JOBS_QUERY
// Query: *[_type == "jobs" && !(_id in path('drafts.**'))] |order(endYear desc) {  startYear,    companyUrl,    company,    endYear,    position,}
export type JOBS_QUERYResult = Array<{
  startYear: string;
  companyUrl: string | null;
  company: string;
  endYear: string | null;
  position: string;
}>;
// Variable: EDUCATION_QUERY
// Query: *[_type == "education" && !(_id in path('drafts.**'))]|order(year desc) {  program,    year,    institution,    degree,    major,    honours}
export type EDUCATION_QUERYResult = Array<{
  program: string;
  year: string;
  institution: string;
  degree: string;
  major: string | null;
  honours: boolean | null;
}>;
// Variable: FILM_CREDITS_QUERY
// Query: *[_type == "filmCredits" && !(_id in path('drafts.**'))]|order(year desc) {  title,    year,    role,    director,    duration,    format,    genre,    tagline,    synopsis,    festival,    link,    trailer}
export type FILM_CREDITS_QUERYResult = Array<{
  title: string;
  year: string;
  role: string;
  director: string;
  duration: string;
  format: string;
  genre: string;
  tagline: string | null;
  synopsis: string | null;
  festival: string | null;
  link: string | null;
  trailer: string | null;
}>;
// Variable: ENDORSEMENT_QUERY
// Query: *[_type == "endorsement" && !(_id in path('drafts.**'))]|order(year desc) {  quote,    person,    position,    company}
export type ENDORSEMENT_QUERYResult = Array<{
  quote: string;
  person: string;
  position: string;
  company: string;
}>;
// Variable: PROJECT_TYPE_QUERY
// Query: *[_type == "category" && defined(slug.current) && projects == true  && !(_id in path('drafts.**'))]{  _id, title, 'slug': slug.current}
export type PROJECT_TYPE_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: string;
}>;
// Variable: CATEGORIES_QUERY
// Query: *[_type == "category" && defined(slug.current) && !(_id in path('drafts.**'))]|order(projects asc){  _id, title, 'slug': slug.current}
export type CATEGORIES_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: string;
}>;
// Variable: CATEGORIES_SLUG_QUERY
// Query: *[_type == "category" && slug.current == $slug && !(_id in path('drafts.**'))][0]{  _id, title}
export type CATEGORIES_SLUG_QUERYResult = {
  _id: string;
  title: string;
} | null;
// Variable: TAGS_QUERY
// Query: *[_type == "techStack" && defined(slug.current) && !(_id in path('drafts.**'))]{  _id, title, 'slug': slug.current, icon}
export type TAGS_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: string;
  icon: IconPicker | null;
}>;
// Variable: TAGS_SLUG_QUERY
// Query: *[_type == "techStack" && slug.current == $slug && !(_id in path('drafts.**'))][0]{  _id, title}
export type TAGS_SLUG_QUERYResult = {
  _id: string;
  title: string;
} | null;
// Variable: PROJECTS_QUERY
// Query: *[_type == "techProject" && defined(slug.current) && !(_id in path('drafts.**'))]| order(endYear desc){  _id, title, 'slug': slug.current, projectLink,  "categories": categories[]->{title, "slug": slug.current },  "techStack": techStack[]->{title, icon, "slug": slug.current }}
export type PROJECTS_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: string;
  projectLink: string;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }>;
}>;
// Variable: LAST_PROJECT_QUERY
// Query: *[_type == "techProject" && defined(slug.current) && !(_id in path('drafts.**'))]| order(endYear desc) [0]{  _id, title, 'slug': slug.current, projectLink,  "categories": categories[]->{title, "slug": slug.current },  "techStack": techStack[]->{title, icon, "slug": slug.current }}
export type LAST_PROJECT_QUERYResult = {
  _id: string;
  title: string;
  slug: string;
  projectLink: string;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }>;
} | null;
// Variable: PROJECT_SLUG_QUERY
// Query: *[_type == "techProject" && slug.current == $slug && !(_id in path('drafts.**'))][0]{  _id,   title,   'slug': slug.current,   projectLink,  startYear,  endYear,  description,  "categories": categories[]->{title, "slug": slug.current },  "techStack": techStack[]->{title, icon, "slug": slug.current }}
export type PROJECT_SLUG_QUERYResult = {
  _id: string;
  title: string;
  slug: string;
  projectLink: string;
  startYear: string;
  endYear: string | null;
  description: null;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }>;
} | null;
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]{    _id, title, 'slug': slug.current,    "categories": categories[]->{title, "slug": slug.current },    "techStack": techStack[]->{title, icon, "slug": slug.current }  }
export type POSTS_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: string;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }> | null;
}>;
// Variable: LAST_POST_QUERY
// Query: *[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]| order(_createdAt desc) [0]{  _id, title, 'slug': slug.current,  "categories": categories[]->{title, "slug": slug.current },  "techStack": techStack[]->{title, icon, "slug": slug.current }}
export type LAST_POST_QUERYResult = {
  _id: string;
  title: string;
  slug: string;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }> | null;
} | null;
// Variable: POST_SLUG_QUERY
// Query: *[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{    title,    mainImage {      _type,      asset,      "alt": asset->altText,    },    _createdAt,    _updatedAt,    body,    "categories": categories[]->{title, "slug": slug.current },   "techStack": techStack[]->{title, icon, "slug": slug.current }  }
export type POST_SLUG_QUERYResult = {
  title: string;
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    } | null;
    alt: string | null;
  } | null;
  _createdAt: string;
  _updatedAt: string;
  body: BlockContent | null;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }> | null;
} | null;
// Variable: POST_CATEGORY_QUERY
// Query: *[_type == "post" && $slug in categories[]->slug.current && !(_id in path('drafts.**'))]{  _id,  title,  'slug': slug.current,  "categories": categories[]->{title, "slug": slug.current },  "techStack": techStack[]->{title, icon, "slug": slug.current },  "author": {      "name": author->name,  }}
export type POST_CATEGORY_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: string;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }> | null;
  author: {
    name: string;
  };
}>;
// Variable: POST_TAG_QUERY
// Query: *[_type == "post" && $slug in techStack[]->slug.current && !(_id in path('drafts.**'))]{  _id,  title,  'slug': slug.current,  "categories": categories[]->{title, "slug": slug.current },  "techStack": techStack[]->{title, icon, "slug": slug.current },  "author": {      "name": author->name  }}
export type POST_TAG_QUERYResult = Array<{
  _id: string;
  title: string;
  slug: string;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  techStack: Array<{
    title: string;
    icon: IconPicker | null;
    slug: string;
  }> | null;
  author: {
    name: string;
  };
}>;
// Variable: OTHER_STUFF_QUERY
// Query: *[_type == "otherProject" && !(_id in path('drafts.**'))]{  _id,  title,  link,  description,  startYear,  endYear,  logo {    _type,    asset,    "alt": asset->altText,  },  "socials": {      linkedin,      discord,      instagram  }}
export type OTHER_STUFF_QUERYResult = Array<{
  _id: string;
  title: string;
  link: string | null;
  description: BlockContent | null;
  startYear: string;
  endYear: string | null;
  logo: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    } | null;
    alt: string | null;
  } | null;
  socials: {
    linkedin: string | null;
    discord: string | null;
    instagram: string | null;
  };
}>;
// Variable: LAST_OTHER_STUFF_QUERY
// Query: *[_type == "otherProject" && !(_id in path('drafts.**'))]| order(endYear desc)[0]{  _id, title,  link,  description,  logo {    _type,    asset,    "alt": asset->altText,  },  "socials": {      linkedin,      discord,      instagram  }}
export type LAST_OTHER_STUFF_QUERYResult = {
  _id: string;
  title: string;
  link: string | null;
  description: BlockContent | null;
  logo: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    } | null;
    alt: string | null;
  } | null;
  socials: {
    linkedin: string | null;
    discord: string | null;
    instagram: string | null;
  };
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"author\" && !(_id in path('drafts.**'))][0]{\n    name, \n    pronouns, \n    title, \n    location,\n    \"socials\": {\n      linkedin,\n      codepen,\n      github\n    }\n  }": AUTHOR_QUERYResult;
    "*[_type == \"author\" && !(_id in path('drafts.**'))][0]{\n   name, \n    pronouns,\n    shortBio,\n    hideResume, \n    resumePdfUrl,\n    \"socials\": {\n      linkedin,\n      codepen,\n      github\n    }\n}": AUTHOR_INTRO_QUERYResult;
    "*[_type == \"author\" && slug.current == 'danielle-bastien' && !(_id in path('drafts.**'))][0]{\n  name, \n  pronouns, \n  title,\n  shortBio, \n  image {\n    _type,\n    asset,\n    \"alt\": asset->altText,\n  },\n}": AUTHOR_CARD_QUERYResult;
    "*[_type == \"author\" && slug.current == 'danielle-bastien' && !(_id in path('drafts.**'))][0]{\n  name, \n  pronouns, \n  title,\n  location,\n  bio, \n  currently,\n  image {\n    _type,\n    asset,\n    \"alt\": asset->altText,\n  },\n  coreValues,\n  hideResume,\n  resumePdfUrl,\n  \"socials\": {\n      linkedin,\n      codepen,\n      github\n  }\n}": ABOUT_QUERYResult;
    "*[_type == \"techWork\" && !(_id in path('drafts.**'))] | order(startYear desc) {\n  methodology,\n    startYear,\n    companyUrl,\n    company,\n    location,\n    endYear,\n    position,\n    \"techStack\": techStack[]->{title, icon, \"slug\": slug.current },\n}": TECH_WORK_QUERYResult;
    "*[_type == \"professionalDevelopment\" && !(_id in path('drafts.**'))] |order(year desc) {\n  course,\n    year,\n    \"techStack\": techStack[]->{title, icon, \"slug\": slug.current }\n}": PROF_DEV_QUERYResult;
    "*[_type == \"jobs\" && !(_id in path('drafts.**'))] |order(endYear desc) {\n  startYear,\n    companyUrl,\n    company,\n    endYear,\n    position,\n}": JOBS_QUERYResult;
    "*[_type == \"education\" && !(_id in path('drafts.**'))]|order(year desc) {\n  program,\n    year,\n    institution,\n    degree,\n    major,\n    honours\n}": EDUCATION_QUERYResult;
    "*[_type == \"filmCredits\" && !(_id in path('drafts.**'))]|order(year desc) {\n  title,\n    year,\n    role,\n    director,\n    duration,\n    format,\n    genre,\n    tagline,\n    synopsis,\n    festival,\n    link,\n    trailer\n}": FILM_CREDITS_QUERYResult;
    "*[_type == \"endorsement\" && !(_id in path('drafts.**'))]|order(year desc) {\n  quote,\n    person,\n    position,\n    company\n}": ENDORSEMENT_QUERYResult;
    "*[_type == \"category\" && defined(slug.current) && projects == true  && !(_id in path('drafts.**'))]{\n  _id, title, 'slug': slug.current\n}": PROJECT_TYPE_QUERYResult;
    "*[_type == \"category\" && defined(slug.current) && !(_id in path('drafts.**'))]|order(projects asc){\n  _id, title, 'slug': slug.current\n}": CATEGORIES_QUERYResult;
    "*[_type == \"category\" && slug.current == $slug && !(_id in path('drafts.**'))][0]{\n  _id, title\n}": CATEGORIES_SLUG_QUERYResult;
    "*[_type == \"techStack\" && defined(slug.current) && !(_id in path('drafts.**'))]{\n  _id, title, 'slug': slug.current, icon\n}": TAGS_QUERYResult;
    "*[_type == \"techStack\" && slug.current == $slug && !(_id in path('drafts.**'))][0]{\n  _id, title\n}": TAGS_SLUG_QUERYResult;
    "*[_type == \"techProject\" && defined(slug.current) && !(_id in path('drafts.**'))]| order(endYear desc){\n  _id, title, 'slug': slug.current, projectLink,\n  \"categories\": categories[]->{title, \"slug\": slug.current },\n  \"techStack\": techStack[]->{title, icon, \"slug\": slug.current }\n}": PROJECTS_QUERYResult;
    "*[_type == \"techProject\" && defined(slug.current) && !(_id in path('drafts.**'))]| order(endYear desc) [0]{\n  _id, title, 'slug': slug.current, projectLink,\n  \"categories\": categories[]->{title, \"slug\": slug.current },\n  \"techStack\": techStack[]->{title, icon, \"slug\": slug.current }\n}": LAST_PROJECT_QUERYResult;
    "*[_type == \"techProject\" && slug.current == $slug && !(_id in path('drafts.**'))][0]{\n  _id, \n  title, \n  'slug': slug.current, \n  projectLink,\n  startYear,\n  endYear,\n  description,\n  \"categories\": categories[]->{title, \"slug\": slug.current },\n  \"techStack\": techStack[]->{title, icon, \"slug\": slug.current }\n}": PROJECT_SLUG_QUERYResult;
    "*[_type == \"post\" && defined(slug.current) && !(_id in path('drafts.**'))]{\n    _id, title, 'slug': slug.current,\n    \"categories\": categories[]->{title, \"slug\": slug.current },\n    \"techStack\": techStack[]->{title, icon, \"slug\": slug.current }\n  }": POSTS_QUERYResult;
    "*[_type == \"post\" && defined(slug.current) && !(_id in path('drafts.**'))]| order(_createdAt desc) [0]{\n  _id, title, 'slug': slug.current,\n  \"categories\": categories[]->{title, \"slug\": slug.current },\n  \"techStack\": techStack[]->{title, icon, \"slug\": slug.current }\n}": LAST_POST_QUERYResult;
    "*[_type == \"post\" && slug.current == $slug && !(_id in path('drafts.**'))][0]{\n    title,\n    mainImage {\n      _type,\n      asset,\n      \"alt\": asset->altText,\n    },\n    _createdAt,\n    _updatedAt,\n    body,\n    \"categories\": categories[]->{title, \"slug\": slug.current },\n   \"techStack\": techStack[]->{title, icon, \"slug\": slug.current }\n  }": POST_SLUG_QUERYResult;
    "*[_type == \"post\" && $slug in categories[]->slug.current && !(_id in path('drafts.**'))]{\n  _id,\n  title,\n  'slug': slug.current,\n  \"categories\": categories[]->{title, \"slug\": slug.current },\n  \"techStack\": techStack[]->{title, icon, \"slug\": slug.current },\n  \"author\": {\n      \"name\": author->name,\n  }\n}": POST_CATEGORY_QUERYResult;
    "*[_type == \"post\" && $slug in techStack[]->slug.current && !(_id in path('drafts.**'))]{\n  _id,\n  title,\n  'slug': slug.current,\n  \"categories\": categories[]->{title, \"slug\": slug.current },\n  \"techStack\": techStack[]->{title, icon, \"slug\": slug.current },\n  \"author\": {\n      \"name\": author->name\n  }\n}": POST_TAG_QUERYResult;
    "*[_type == \"otherProject\" && !(_id in path('drafts.**'))]{\n  _id,\n  title,\n  link,\n  description,\n  startYear,\n  endYear,\n  logo {\n    _type,\n    asset,\n    \"alt\": asset->altText,\n  },\n  \"socials\": {\n      linkedin,\n      discord,\n      instagram\n  }\n}": OTHER_STUFF_QUERYResult;
    "*[_type == \"otherProject\" && !(_id in path('drafts.**'))]| order(endYear desc)[0]{\n  _id,\n title,\n  link,\n  description,\n  logo {\n    _type,\n    asset,\n    \"alt\": asset->altText,\n  },\n  \"socials\": {\n      linkedin,\n      discord,\n      instagram\n  }\n}": LAST_OTHER_STUFF_QUERYResult;
  }
}
