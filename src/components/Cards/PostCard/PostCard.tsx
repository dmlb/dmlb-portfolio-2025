import { POSTS_QUERYResult } from '@/types/sanity';
import Link from 'next/link';

type Props = {
    post: POSTS_QUERYResult[0];
}

export default function PostCard({ post }: Props) {
    const {title, slug, categories} = post;
    const [mainCategory] = categories;
    return (
        <article aria-label={title} data-testid="ncmp-post-card" className="card card--translucent card--bordered">
            <Link className="card__link" href={`/posts/${slug}`}>            
            <div className={`card__category ${mainCategory?.slug}`}>
                <span>{mainCategory?.title}</span>
            </div>
            <h3 className="card__header">{title}</h3>
            </Link>
        </article>
    );
}

