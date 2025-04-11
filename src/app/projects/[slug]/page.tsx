import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import sanityClient from "@/lib/sanity-utils/sanityClient";
import { PROJECT_SLUG_QUERYResult, Slug } from "@/types/sanity";
import { PROJECT_SLUG_QUERY } from "@/lib/sanity-utils/sanityQueries";
import AuthorCard from "@/components/Cards/AuthorCard/AuthorCard";
import TechStack from "@/components/TechStack/TechStack";


export async function generateStaticParams() {
  const pages = await sanityClient.fetch(`*[_type == "projects"]{slug}`)

  return pages.map((page: { slug: Slug }) => ({
    slug: page.slug.current,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const project: PROJECT_SLUG_QUERYResult = await sanityClient.fetch(PROJECT_SLUG_QUERY, { slug });

  if (!project) {
    notFound()
  }

  return (
    <article>
      <header>
        <h1>{project.title}</h1>
        <div>
          <strong>Project Type:</strong>{' '}
          {project.categories && project.categories.map((category) => (
            <span key={category.slug}>
              {category.title}
            </span>
          ))}
        </div>
        <strong>Tech Stack:</strong>{' '}
        <TechStack techStack={project.techStack} iconSize={24} />
      </header>

      <div>
        {project.description && <PortableText
          value={project.description} />}
      </div>       

      <footer>
        <AuthorCard />
      </footer>
    </article>
  )
}