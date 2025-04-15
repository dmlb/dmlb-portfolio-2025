import { notFound } from "next/navigation";

import sanityClient from "@/lib/sanity-utils/sanityClient";
import { POSTS_QUERY } from "@/lib/sanity-utils/sanityQueries";
import PostCard from "@/components/Cards/PostCard/PostCard";
import { POSTS_QUERYResult, Slug } from "@/types/sanity";
import PostsList from "@/components/Lists/PostsList/PostsList";

export async function generateStaticParams() {
  const pages = await sanityClient.fetch(`*[_type == "post"]{slug}`)
 
  return pages.map((page: {slug: Slug}) => ({
    slug: page.slug.current,
  }))
}

export default async function PostsHome() {
  const posts: POSTS_QUERYResult = await sanityClient.fetch(POSTS_QUERY);
    if (!posts) {
      notFound()
    }

  return (
    <>
      <h1>All Posts</h1>
      <PostsList posts={posts} />
    </>
  );
}
