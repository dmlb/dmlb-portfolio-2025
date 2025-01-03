import sanityClient from "@/lib/sanity-utils/sanityClient";
import { CATEGORIES_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { CATEGORIES_QUERYResult } from "@/types/sanity";


export default async function PostLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const categories: CATEGORIES_QUERYResult = await sanityClient.fetch(CATEGORIES_QUERY);

    return (<>
        {children}
        <nav aria-label="All Posts Categories">
            <h2>Categories</h2>
            <ul>
                {categories && categories.map(({title, slug}) => (
                    <li key={slug.current}>
                        <a href={`/posts/category/${slug.current}`}>{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
  }