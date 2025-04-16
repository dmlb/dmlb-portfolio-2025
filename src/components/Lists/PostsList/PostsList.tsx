import PostCard from "@/components/Cards/PostCard/PostCard";
import { POSTS_QUERYResult } from "@/types/sanity";

type Props = {
    posts: POSTS_QUERYResult | null;
};

export default function PostsList({posts}: Props) {
    if (!posts || posts.length < 1) return null;
    return (
        <ul data-testid="ncmp-posts-list" className="list-unstyled card-grid">
          {posts.map((post) => (
            <li key={post._id}>
              <PostCard post={post} cardVariantClasses="card--translucent card--bordered" />
            </li>
          ))}
        </ul>
    );
  }