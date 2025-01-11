import sanityClient from "@/lib/sanity-utils/sanityClient";
import { POSTS_QUERY } from "@/lib/sanity-utils/sanityQueries";
import Link from "next/link";

export default async function Home() {
  const posts = await sanityClient.fetch(POSTS_QUERY);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/posts/${post.slug.current}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
