import { AUTHOR_CARD_QUERYResult } from "@/types/sanity";

import Link from "next/link";
import SanityImage from "../../SanityImage/SanityImage";

import styles from './AuthorCard.module.css';

type Props = {
    author: AUTHOR_CARD_QUERYResult
}

export default async function AuthorCard({ author }: Props) {
    if (!author) {
        return null;
    }

    return (
        <div data-testid="ncmp-author-card" className={`card card--translucent ${styles.authorCard}`}>
            {author.image && <SanityImage className={styles.cardFloatImg} width={100} height={100} src={author.image} alt={author.image?.alt ?? author.name} />}
            <h2 className={styles.authorCardTitle}>
                {/* one author exists currently */}
                <Link href="/about">{author.name} ({author.pronouns})</Link>
            </h2>
            {author.shortBio && <p>{author.shortBio}</p>}
        </div>
    )
}