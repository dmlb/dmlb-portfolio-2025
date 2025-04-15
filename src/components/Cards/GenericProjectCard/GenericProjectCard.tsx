import { PortableText } from "@portabletext/react";
import { MORE_STUFF_QUERYResult } from "@/types/sanity";
import SanityImage from "@/components/SanityImage/SanityImage";
import SocialSVG from "@/components/SocialSVG/SocialSVG";

import styles from './GenericProjectCard.module.css'

type Props = {
    project: Partial<MORE_STUFF_QUERYResult[0]>
    cardVariantClasses?: string
}

export default function GenericProjectCard({project, cardVariantClasses}: Props) {
    const {_id, title, description, logo, link, socials} = project;
    return (
        <article aria-labelledby={_id} className={`card ${cardVariantClasses}`}>
                <h3 id={_id} className="card__header">{title}</h3>
                <div className="card__content">
                    {logo && ( <SanityImage className={styles.cardFloatImg} src={logo} width={150} height={150} alt={logo.alt ?? ''} /> )}
                    {description && <PortableText value={description} />}
                </div>
                <div className={`card__actions card__actions--wrap ${styles.genericCardActions}`}>
                    {link && (
                        <a className="button" href={link}>
                            <SocialSVG iconSize={16} socialName="link" />
                            Visit Website
                        </a>
                    )}
                    {socials?.discord && (
                        <a className="button" href={socials.discord}>
                            <SocialSVG iconSize={16} socialName="discord" />
                            Join on Discord
                        </a>
                    )}

                    {socials?.instagram && (
                        <a className="button" href={socials.instagram}>
                            <SocialSVG iconSize={16} socialName="instagram" />
                            Follow on Instagram
                        </a>
                    )}

                    {socials?.linkedin && (
                        <a className="button" href={socials.linkedin}>
                            <SocialSVG iconSize={16} socialName="linkedin" />
                            Follow on LinkedIn
                        </a>
                    )}
                </div>
            </article>
    )
}