import { defineQuery } from 'next-sanity'


export const AUTHOR_QUERY = defineQuery(`*[_type == "author" && !(_id in path('drafts.**'))][0]{
    name, 
    pronouns, 
    title, 
    location,
    "socials": {
      linkedin,
      codepen,
      github
    }
  }`)

export const AUTHOR_INTRO_QUERY = defineQuery(`*[_type == "author" && !(_id in path('drafts.**'))][0]{
   name, 
    pronouns,
    shortBio,
    hideResume, 
    resumePdfUrl,
    "socials": {
      linkedin,
      codepen,
      github
    }
}`)

export const AUTHOR_CARD_QUERY = defineQuery(`*[_type == "author" && slug.current == 'danielle-bastien' && !(_id in path('drafts.**'))][0]{
  name, 
  pronouns, 
  title,
  shortBio, 
  image {
    _type,
    asset,
    "alt": asset->altText,
  },
}`)

export const ABOUT_QUERY = defineQuery(`*[_type == "author" && slug.current == 'danielle-bastien' && !(_id in path('drafts.**'))][0]{
  name, 
  pronouns, 
  title,
  location,
  bio, 
  currently,
  image {
    _type,
    asset,
    "alt": asset->altText,
  },
  coreValues,
  hideResume,
  resumePdfUrl,
  "socials": {
      linkedin,
      codepen,
      github
  }
}`)

export const TECH_WORK_QUERY = defineQuery(`*[_type == "techWork" && !(_id in path('drafts.**'))] | order(startYear desc) {
  methodology,
    startYear,
    companyUrl,
    company,
    location,
    endYear,
    position,
    "techStack": techStack[]->{title, icon, "slug": slug.current },
}`)

export const PROF_DEV_QUERY = defineQuery(`*[_type == "professionalDevelopment" && !(_id in path('drafts.**'))] |order(year desc) {
  course,
    year,
    "techStack": techStack[]->{title, icon, "slug": slug.current }
}`)

export const JOBS_QUERY = defineQuery(`*[_type == "jobs" && !(_id in path('drafts.**'))] |order(endYear desc) {
  startYear,
    companyUrl,
    company,
    endYear,
    position,
}`)

export const EDUCATION_QUERY = defineQuery(`*[_type == "education" && !(_id in path('drafts.**'))]|order(year desc) {
  program,
    year,
    institution,
    degree,
    major,
    honours
}`)

export const FILM_CREDITS_QUERY = defineQuery(`*[_type == "filmCredits" && !(_id in path('drafts.**'))]|order(year desc) {
  title,
    year,
    role,
    director,
    duration,
    format,
    genre,
    tagline,
    synopsis,
    festival,
    link,
    trailer
}`)

export const ENDORSEMENT_QUERY = defineQuery(`*[_type == "endorsement" && !(_id in path('drafts.**'))]|order(year desc) {
  quote,
    person,
    position,
    company
}`)

export const PROJECT_TYPE_QUERY = defineQuery(`*[_type == "category" && defined(slug.current) && projects == true  && !(_id in path('drafts.**'))]{
  _id, title, 'slug': slug.current
}`)
export const CATEGORIES_QUERY = defineQuery(`*[_type == "category" && defined(slug.current) && !(_id in path('drafts.**'))]|order(projects asc){
  _id, title, 'slug': slug.current
}`)
export const CATEGORIES_SLUG_QUERY = defineQuery(`*[_type == "category" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
  _id, title
}`)

export const TAGS_QUERY = defineQuery(`*[_type == "techStack" && defined(slug.current) && !(_id in path('drafts.**'))]| order(lower(title) asc){
  _id, title, 'slug': slug.current, icon
}`)

export const TAGS_SLUG_QUERY = defineQuery(`*[_type == "techStack" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
  _id, title
}`)

export const PROJECTS_QUERY = defineQuery(`*[_type == "techProject" && defined(slug.current) && !(_id in path('drafts.**'))]| order(endYear desc){
  _id, title, 'slug': slug.current, projectLink,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, icon, "slug": slug.current }
}`)

export const LAST_PROJECT_QUERY = defineQuery(`*[_type == "techProject" && defined(slug.current) && !(_id in path('drafts.**'))]| order(endYear desc) [0]{
  _id, title, 'slug': slug.current, projectLink,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, icon, "slug": slug.current }
}`)

export const PROJECT_SLUG_QUERY = defineQuery(`*[_type == "techProject" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
  _id, 
  title, 
  'slug': slug.current, 
  projectLink,
  startYear,
  endYear,
  description,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, icon, "slug": slug.current }
}`)

export const PROJECT_TECH_STACK_SLUG_QUERY = defineQuery(`*[_type == "techProject" && $slug in techStack[]->slug.current && !(_id in path('drafts.**'))]| order(endYear desc){
  _id, title, 'slug': slug.current, projectLink,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, icon, "slug": slug.current }
}`)

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]{
    _id, title, 'slug': slug.current,
    "categories": categories[]->{title, "slug": slug.current },
    "techStack": techStack[]->{title, icon, "slug": slug.current }
  }`)

export const LAST_POST_QUERY = defineQuery(`*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]| order(_createdAt desc) [0]{
  _id, title, 'slug': slug.current,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, icon, "slug": slug.current }
}`)
export const POST_SLUG_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
    title,
    mainImage {
      _type,
      asset,
      "alt": asset->altText,
    },
    _createdAt,
    _updatedAt,
    body,
    "categories": categories[]->{title, "slug": slug.current },
   "techStack": techStack[]->{title, icon, "slug": slug.current }
  }`)


export const POST_CATEGORY_QUERY = defineQuery(`*[_type == "post" && $slug in categories[]->slug.current && !(_id in path('drafts.**'))]{
  _id,
  title,
  'slug': slug.current,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, icon, "slug": slug.current },
  "author": {
      "name": author->name,
  }
}`)
export const POST_TAG_QUERY = defineQuery(`*[_type == "post" && $slug in techStack[]->slug.current && !(_id in path('drafts.**'))]{
  _id,
  title,
  'slug': slug.current,
  "categories": categories[]->{title, "slug": slug.current },
  "techStack": techStack[]->{title, icon, "slug": slug.current },
  "author": {
      "name": author->name
  }
}`) 

export const MORE_STUFF_QUERY = defineQuery(`*[_type == "otherProject" && !(_id in path('drafts.**'))]{
  _id,
  title,
  link,
  description,
  startYear,
  endYear,
  logo {
    _type,
    asset,
    "alt": asset->altText,
  },
  "socials": {
      linkedin,
      discord,
      instagram
  }
}`)

export const LAST_MORE_STUFF_QUERY = defineQuery(`*[_type == "otherProject" && !(_id in path('drafts.**'))]| order(endYear desc)[0]{
  _id,
 title,
  link,
  description,
  logo {
    _type,
    asset,
    "alt": asset->altText,
  },
  "socials": {
      linkedin,
      discord,
      instagram
  }
}`)