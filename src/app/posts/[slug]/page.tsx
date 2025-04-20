import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import sanityClient from "@/lib/sanity-utils/sanityClient";
import { AUTHOR_CARD_QUERY, POST_SLUG_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { AUTHOR_CARD_QUERYResult, POST_SLUG_QUERYResult, Slug } from "@/types/sanity";
import SanityImage from '@/components/SanityImage/SanityImage';
import Date from "@/components/Date/Date";
import PostCategoryList from "@/components/Lists/PostCategoryList/PostCategoryList";
import AuthorCard from "@/components/Cards/AuthorCard/AuthorCard";

import styles from './post.module.css';

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
  // one author exists currently
  const author: AUTHOR_CARD_QUERYResult = await sanityClient.fetch(AUTHOR_CARD_QUERY);


  if (!post) {
    notFound()
  }

  return (
    <article className={styles.postContent}>
      <header>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postMetaDates}>
          <strong>Created</strong> <Date dateString={post._createdAt} />  • <strong>Updated</strong> <Date dateString={post._updatedAt} />
        </p>
        <div className={styles.postMetaCategories}>
          <strong>Categorized under{' '}</strong>
          <PostCategoryList categories={post.categories}></PostCategoryList>
        </div>
        

        {post.mainImage && <SanityImage className={styles.postImage} width={600} height={400} src={post.mainImage} alt={post.mainImage?.alt ?? post.title} />}
      </header>

      <div className={`portable-text-elements`}>
        {post.body && <PortableText
          value={post.body} />}
      </div> 

      <footer>
        <AuthorCard author={author} />
      </footer>
    </article>
  )
}