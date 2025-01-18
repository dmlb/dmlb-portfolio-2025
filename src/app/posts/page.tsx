import { notFound } from "next/navigation";

import sanityClient from "@/lib/sanity-utils/sanityClient";
import { POSTS_QUERY } from "@/lib/sanity-utils/sanityQueries";
import PostCard from "@/components/Cards/PostCard/PostCard";
import { Slug } from "@/types/sanity";

export async function generateStaticParams() {
  const pages = await sanityClient.fetch(`*[_type == "post"]{slug}`)
 
  return pages.map((page: {slug: Slug}) => ({
    slug: page.slug.current,
  }))
}

export default async function PostsHome() {
  const posts = await sanityClient.fetch(POSTS_QUERY);
    if (!posts) {
      notFound()
    }

  return (
    <>
      <h1>Posts</h1>
      <ul className="list-unstyled">
        {posts.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}
