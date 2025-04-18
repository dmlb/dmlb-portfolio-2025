import { notFound } from "next/navigation";

import sanityClient from "@/lib/sanity-utils/sanityClient";
import { POST_TAG_SLUG_QUERYResult, PROJECT_TAG_SLUG_QUERYResult, Slug, TAGS_SLUG_QUERYResult } from "@/types/sanity";
import { POST_TAG_SLUG_QUERY, PROJECT_TAG_SLUG_QUERY, TAGS_SLUG_QUERY } from "@/lib/sanity-utils/sanityQueries";
import PostsList from "@/components/Lists/PostsList/PostsList";
import ProjectList from "@/components/Lists/ProjectList/ProjectList";

export async function generateStaticParams() {
  const pages = await sanityClient.fetch(`*[_type == "techStack"]{slug}`)

  return pages.map((page: { slug: Slug }) => ({
    slug: page.slug.current,
  }))
}

export default async function ProjectTechStackPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const techStack: TAGS_SLUG_QUERYResult = await sanityClient.fetch(TAGS_SLUG_QUERY, { slug });
  const posts: POST_TAG_SLUG_QUERYResult = await sanityClient.fetch(POST_TAG_SLUG_QUERY, { slug });
  const projects: PROJECT_TAG_SLUG_QUERYResult = await sanityClient.fetch(PROJECT_TAG_SLUG_QUERY, { slug });

  if (!techStack || !posts) {
    notFound()
  }

  return (<>
    <h1>Posts tagged {techStack?.title}</h1>
    {posts && posts.length === 0 && <p>No posts found using {techStack?.title}</p>}
    {posts && (<PostsList posts={posts} />)}

    {projects && posts.length > 0 && (<>
      <h2>Checkout projects tagged {techStack?.title}</h2>
      <ProjectList projects={projects} />
    </>)}
    
  </>)
}