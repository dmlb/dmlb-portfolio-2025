import sanityClient from "@/lib/sanity-utils/sanityClient";
import { AUTHOR_CARD_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { AUTHOR_CARD_QUERYResult } from "@/types/sanity";

import Link from "next/link";
import SanityImage from "../../SanityImage/SanityImage";


export default async function AuthorCard() {
    const author: AUTHOR_CARD_QUERYResult = await sanityClient.fetch(AUTHOR_CARD_QUERY);

    if (!author) {
        return null;
    }

    return (
        <div data-testid="ncmp-author-card">
            {author.image && <SanityImage width={100} height={100} src={author.image} alt={author.image?.alt ?? author.name} />}
            <div>
                <h2>
                    <Link href="/about">{author.name} ({author.pronouns})</Link>
                </h2>
                {author.shortBio && <p>{author.shortBio}</p>}
            </div>
        </div>
    )
}