import sanityClient from "@/lib/sanity-utils/sanityClient";
import { AUTHOR_CARD_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { AUTHOR_CARD_QUERYResult } from "@/types/sanity";

import Link from "next/link";
import SanityImage from "../SanityImage/SanityImage";
import { PortableText } from "@portabletext/react";



export default async function AuthorCard() {
    const author: AUTHOR_CARD_QUERYResult = await sanityClient.fetch(AUTHOR_CARD_QUERY, { slug: 'danielle-bastien' });

    if (!author) {
        return null;
    }

    return (
        <div>
            {author.image && <SanityImage width={100} height={100} src={author.image} alt={author.name} />}
            <div>
                <h2>
                    <Link href="/about">{author.name} ({author.pronouns})</Link>
                </h2>
                {author?.bio && (
                    <div>
                        <PortableText
                            value={author?.bio} />
                    </div>
                )}
            </div>
        </div>
    )
}