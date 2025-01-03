import {defineQuery} from 'next-sanity'


export const AUTHOR_QUERY = defineQuery(`*[_type == "author"][0]{
    name, 
    pronouns, 
    location, 
    title, 
    slug, 
    linkedin, 
    codepen, 
    github
  }`)
export const AUTHOR_PAGE_QUERY = defineQuery(`*[_type == "author" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
  name, 
  pronouns, 
  location, 
  bio, 
  image,
  title, 
  slug, 
  linkedin, 
  codepen, 
  github
}`)


export const CATEGORIES_QUERY = defineQuery(`*[_type == "category" && defined(slug.current)]{
  _id, title, slug
}`)
export const CATEGORIES_SLUG_QUERY = defineQuery(`*[_type == "category" && slug.current == $slug][0]{
  _id, title
}`)

export const TAGS_QUERY = defineQuery(`*[_type == "techStack" && defined(slug.current)]{
  _id, title, slug
}`)

export const TAGS_SLUG_QUERY = defineQuery(`*[_type == "techStack" && slug.current == $slug][0]{
  _id, title
}`)

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }`)

export const POST_SLUG_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
    title,
    mainImage,
    _createdAt,
    _updatedAt,
    body,
    "categories": categories[]->{title, "slug": slug.current },
    "techStack": techStack[]->{title, "slug": slug.current },
    "author": {
        "name": author->name,
        "image": author->image,
        "bio": author->bio
    }
  }`)


export const POST_CATEGORY_QUERY = defineQuery(`*[_type == "post" && $slug in categories[]->slug.current && !(_id in path('drafts.**'))]{
  _id,
  title,
  slug,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, "slug": slug.current },
  "author": {
      "name": author->name,
  }
}`) 
export const POST_TAG_QUERY = defineQuery(`*[_type == "post" && $slug in techStack[]->slug.current && !(_id in path('drafts.**'))]{
  _id,
  title,
  slug,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, "slug": slug.current },
  "author": {
      "name": author->name
  }
}`) 