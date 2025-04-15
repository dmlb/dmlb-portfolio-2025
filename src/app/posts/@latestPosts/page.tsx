import sanityClient from "@/lib/sanity-utils/sanityClient";
import { LAST_3_POSTS_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { LAST_3_POSTS_QUERYResult } from "@/types/sanity";
import PostsList from "@/components/Lists/PostsList/PostsList";

export default async function LatestPosts() {
    const posts: LAST_3_POSTS_QUERYResult = await sanityClient.fetch(LAST_3_POSTS_QUERY);

    if (!posts) {
        return null;
    }

    return (
        <nav aria-labelledby="latestPostsNavHeader">
            <h2 id="latestPostsNavHeader">Latest Posts</h2>
            <PostsList posts={posts} />
        </nav>
    )
}
