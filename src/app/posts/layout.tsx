import styles from './posts.module.css'

export default async function PostsLayout({
    children,
    categories,
    tags,
    latestPosts
  }: {
    children: React.ReactNode,
    categories: React.ReactNode,
    tags: React.ReactNode,
    latestPosts: React.ReactNode,
  }) {

    return (<>
        <div>
          {children}
        </div>
        <aside className={styles.postsSupplementGroup}>
          {latestPosts}
          {categories}
          {tags}
        </aside>
        </>
    )
  }