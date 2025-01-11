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
        <div className="flex gap-8 items-center mb-8 mt-8">
            {author.image && <SanityImage width={100} height={100} src={author.image} alt={author.name} />}

            <div className="author-card-info flex flex-col gap-4">
                <h2 className="text-xl font-bold"><Link href="/about">{author.name} ({author.pronouns})</Link></h2>
                <div className="text-base">
                {author?.bio && <PortableText
                    value={author?.bio} />}
                </div>
            </div>
        </div>
    )
}