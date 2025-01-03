import sanityClient from "@/lib/sanity-utils/sanityClient";
import { POST_SLUG_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { POST_SLUG_QUERYResult, Slug } from "@/types/sanity";

export async function generateStaticParams() {
  const pages = await sanityClient.fetch(`*[_type == "posts"]{slug}`)
 
  return pages.map((page: {slug: Slug}) => ({
    slug: page.slug.current,
  }))
}

export default async function PostPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const post: POST_SLUG_QUERYResult = await sanityClient.fetch(POST_SLUG_QUERY, { slug });

    console.log(slug, post)
    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <>
            <h1>{post.title}</h1>
            {/* {post.mainImage && <img src={post.mainImage} alt={post.title} />} */}
            <p>{post._createdAt}</p>
<p>{post._updatedAt}</p>
{/* <p>{post.categories}</p> */}
            <p>{post.author.name}</p>
            {/* <p>{post.body}</p> */}
        </>
    )
}