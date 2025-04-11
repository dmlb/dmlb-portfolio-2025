import sanityClient from "@/lib/sanity-utils/sanityClient";
import { TAGS_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { TAGS_QUERYResult } from "@/types/sanity";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TechStackListPage() {
    const projectTags: TAGS_QUERYResult = await sanityClient.fetch(TAGS_QUERY);

    if (!projectTags) {
        notFound()
    }

    return (<>
        <h1>Projects Tech Stack</h1>
        {projectTags && (
            <ul>
                {projectTags.map(tag => (

                    <li key={tag.slug}>
                        <Link href={`/projects/tech-stack/${tag.slug}`}>{tag.title}</Link>
                    </li>
                ))}
            </ul>

        )}
    </>)
}