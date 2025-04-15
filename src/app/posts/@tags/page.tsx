import TechStackList from "@/components/Lists/TechStackList/TechStackList";
import sanityClient from "@/lib/sanity-utils/sanityClient";
import { TAGS_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { TAGS_QUERYResult } from "@/types/sanity";

export default async function AllPostCategories() {
    const tags: TAGS_QUERYResult = await sanityClient.fetch(TAGS_QUERY);
    const iconSize = 30;

    if (!tags) {
        return null;
    }

    return (<nav aria-labelledby="allPostCatNavHeader">
        <h2 id="allPostCatNavHeader">All Post Tags</h2>
        <TechStackList techStack={tags} linkToPath={'/posts/tag'} iconSize={iconSize} />
    </nav>)
}