import sanityClient from "@/lib/sanity-utils/sanityClient";
import { CATEGORIES_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { CATEGORIES_QUERYResult } from "@/types/sanity";
import PostCategoryList from "@/components/Lists/PostCategoryList/PostCategoryList";

export default async function AllPostCategories() {
    const categories: CATEGORIES_QUERYResult = await sanityClient.fetch(CATEGORIES_QUERY);

    if (!categories) {
        return null;
    }

    return (
        <nav aria-labelledby="allPostCatNavHeader">
            <h2 id="allPostCatNavHeader">All Post Categories</h2>
            <PostCategoryList categories={categories} />
        </nav>
    )
  }