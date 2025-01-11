import sanityClient from "@/lib/sanity-utils/sanityClient";
import { POST_SLUG_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { POST_SLUG_QUERYResult, Slug } from "@/types/sanity";
import SanityImage from '@/components/SanityImage/SanityImage';
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Date from "@/components/Date/Date";
import PostCategoryList from "@/components/PostCategoryList/PostCategoryList";
import AuthorCard from "@/components/AuthorCard/AuthorCard";

export async function generateStaticParams() {
  const pages = await sanityClient.fetch(`*[_type == "posts"]{slug}`)

  return pages.map((page: { slug: Slug }) => ({
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

  if (!post) {
    notFound()
  }

  return (
    <article>
      <header>
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <p className="mb-0">
          <strong>Created</strong> <Date dateString={post._createdAt} />  • <strong>Updated</strong> <Date dateString={post._updatedAt} />
        </p>
        <div className="flex gap-4 mb-8">
          <strong>Categorized under</strong>
          <PostCategoryList categories={post.categories}></PostCategoryList>
        </div>
        

        {post.mainImage && <SanityImage width={600} height={400} src={post.mainImage} alt={post.title} />}
      </header>

      <div className="portable-text-elements flex flex-col">
        {post.body && <PortableText
          value={post.body} />}

      </div> 

      <footer className="my-8 max-w-2xl mx-auto">
        <AuthorCard />
      </footer>
    </article>
  )
}