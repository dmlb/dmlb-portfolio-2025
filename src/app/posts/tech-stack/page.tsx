import sanityClient from "@/lib/sanity-utils/sanityClient";
import { TAGS_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { TAGS_QUERYResult } from "@/types/sanity";
import TechStackList from "@/components/Lists/TechStackList/TechStackList";

export default async function TechStackListPage() {
    const tags: TAGS_QUERYResult = await sanityClient.fetch(TAGS_QUERY);
    const iconSize = 32;

    return (<>
        <h1>Tech Stack Tags</h1>
        {tags.length === 0 && <p>No tech stack tags yet</p>}
        <TechStackList iconOnly={false} techStack={tags} linkToPath={'/posts/tech-stack'} iconSize={iconSize} />
    </>)
}