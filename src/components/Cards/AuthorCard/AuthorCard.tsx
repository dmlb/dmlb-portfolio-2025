import { AUTHOR_CARD_QUERYResult } from "@/types/sanity";

import Link from "next/link";
import SanityImage from "../../SanityImage/SanityImage";

type Props = {
    author: AUTHOR_CARD_QUERYResult
}

export default async function AuthorCard({author}: Props) {
    if (!author) {
        return null;
    }

    return (
        <div data-testid="ncmp-author-card">
            {author.image && <SanityImage width={100} height={100} src={author.image} alt={author.image?.alt ?? author.name} />}
            <div>
                <h2>
                    {/* one author exists currently */}
                    <Link href="/about">{author.name} ({author.pronouns})</Link>
                </h2>
                {author.shortBio && <p>{author.shortBio}</p>}
            </div>
        </div>
    )
}