import { POSTS_QUERYResult } from '@/types/sanity';
import Link from 'next/link';

type Props = {
    post: POSTS_QUERYResult[0];
    cardVariantClasses?: string;
}

export default function PostCard({ post, cardVariantClasses }: Props) {
    const {title, slug, categories, excerpt} = post;
    const [mainCategory] = categories;
    return (
        <article aria-label={title} data-testid="ncmp-post-card" className={`card ${cardVariantClasses}`}>
            <Link className="card__link" href={`/posts/${slug}`}>            
            <div className={`card__category ${mainCategory?.slug}`}>
                <span>{mainCategory?.title}</span>
            </div>
            <h3 className="card__header">{title}</h3>
            {excerpt && (<p className="card__content">{excerpt}</p>)}
            </Link>
        </article>
    );
}

