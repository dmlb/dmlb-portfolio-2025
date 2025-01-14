import sanityClient from "@/lib/sanity-utils/sanityClient";
import { CATEGORIES_SLUG_QUERY, POST_CATEGORY_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { POST_CATEGORY_QUERYResult, Slug } from "@/types/sanity";
import Link from "next/link";
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
    const category = await sanityClient.fetch(CATEGORIES_SLUG_QUERY, { slug });
    const posts: POST_CATEGORY_QUERYResult = await sanityClient.fetch(POST_CATEGORY_QUERY, { slug });

    if (!category) {
        notFound()
    }

    return (
        <>
            <h1 className="font-bold text-4xl mb-8">{category.title} Posts</h1>
            {posts.length === 0 && <p>No posts yet for this category</p>}
            <ul>
              {posts.map((post) => (
                <li key={post._id}>
                  <Link href={`/posts/${post.slug.current}`}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
        </>
    )
}