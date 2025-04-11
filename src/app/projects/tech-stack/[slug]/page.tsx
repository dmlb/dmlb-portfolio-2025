import { notFound } from "next/navigation";

import sanityClient from "@/lib/sanity-utils/sanityClient";
import { PROJECT_TECH_STACK_SLUG_QUERYResult, Slug, TAGS_SLUG_QUERYResult } from "@/types/sanity";
import { PROJECT_TECH_STACK_SLUG_QUERY, TAGS_SLUG_QUERY } from "@/lib/sanity-utils/sanityQueries";
import ProjectList from "@/components/ProjectList/ProjectList";

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
  const projects: PROJECT_TECH_STACK_SLUG_QUERYResult = await sanityClient.fetch(PROJECT_TECH_STACK_SLUG_QUERY, { slug });

  if (!techStack || !projects) {
    notFound()
  }

  return (<>
    <h1>Projects using {techStack?.title}</h1>
    {projects && projects.length === 0 && <p>No projects found using {techStack?.title}</p>}
    {projects && (
      <ProjectList projects={projects}></ProjectList>)}
  </>)
}