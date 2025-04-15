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
        {latestPosts}
        {categories}
        {tags}
        </>
    )
  }