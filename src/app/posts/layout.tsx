import sanityClient from "@/lib/sanity-utils/sanityClient";
import { CATEGORIES_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { CATEGORIES_QUERYResult } from "@/types/sanity";
import PostCategoryList from "@/components/PostCategoryList/PostCategoryList";

export default async function PostLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const categories: CATEGORIES_QUERYResult = await sanityClient.fetch(CATEGORIES_QUERY);

    return (<>
        <div className="my-8 max-w-3xl mx-auto">
        {children}
        </div>
        <nav className="mt-16 flex flex-col items-center gap-4" aria-labelledby="allPostCatNavHeader">
            <h2 id="allPostCatNavHeader" className="text-xl font-bold">All Post Categories</h2>
            <PostCategoryList classNames="flex gap-4 mb-8" categories={categories} />
        </nav>
        </>
    )
  }