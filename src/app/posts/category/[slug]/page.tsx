import PostCard from "@/components/Cards/PostCard/PostCard";
import sanityClient from "@/lib/sanity-utils/sanityClient";
import { CATEGORIES_SLUG_QUERY, POST_CATEGORY_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { CATEGORIES_SLUG_QUERYResult, POST_CATEGORY_QUERYResult, Slug } from "@/types/sanity";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const pages = await sanityClient.fetch(`*[_type == "category"]{slug}`)
   
    return pages.map((page: {slug: Slug}) => ({
      slug: page.slug.current,
    }))
  }

export default async function CategoryPostsPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const category: CATEGORIES_SLUG_QUERYResult = await sanityClient.fetch(CATEGORIES_SLUG_QUERY, { slug });
    const posts: POST_CATEGORY_QUERYResult = await sanityClient.fetch(POST_CATEGORY_QUERY, { slug });

    if (!category) {
        notFound()
    }

    return (
        <>
            <h1>{category.title} Posts</h1>
            {posts.length === 0 && <p>No posts yet for this category</p>}
            <ul className="list-unstyled card-grid">
              {posts.map((post) => (
                    <li key={post._id}>
                      <PostCard post={post} cardVariantClasses="card--translucent card--bordered" />
                    </li>
              ))}
            </ul>
        </>
    )
}