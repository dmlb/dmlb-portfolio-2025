import sanityClient from "@/lib/sanity-utils/sanityClient";
import Link from "next/link";

export default async function Home() {
  const posts = await sanityClient.fetch(`*[_type == "post"]{title,slug,_id}`);

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
