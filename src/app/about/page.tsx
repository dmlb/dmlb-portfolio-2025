import Link from "next/link";
import { PortableText } from "@portabletext/react";

import sanityClient from "@/lib/sanity-utils/sanityClient";
import { ABOUT_QUERY, TAGS_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { ABOUT_QUERYResult, TAGS_QUERYResult } from "@/types/sanity";
import DevLinks from "@/components/DevLinks/DevLinks";
import SkillIcon from "@/components/SkillIcon/SkillIcon";

import styles from "./about.module.css";

export default async function About() {
    const skills: TAGS_QUERYResult = await sanityClient.fetch(TAGS_QUERY);
    const about: ABOUT_QUERYResult = await sanityClient.fetch(ABOUT_QUERY);

    if (!about) {
        return null;
    }
  
    return (
<div className={styles.wrapper}>
	<aside className={styles.sidebar}>
		<div className={styles.sidebarInner}>
			<article aria-labelledby="dQuick" className="card card--translucent">
				<h3 id="dQuick" className="card__header">Quick Info</h3>
				<dl className={styles.quickList}>
					<dt>Pronouns</dt>
					<dd>{about.pronouns}</dd>

					<dt>Location</dt>
					<dd>{about.location}</dd>

					<dt>Currently</dt>
					<dd>{about.currently}</dd>

					<dt>Contact</dt>
					<dd><DevLinks socialsOnly={false} socials={about?.socials} hideResume={about.hideResume} resumePdfUrl={about?.resumePdfUrl} /></dd>
				</dl>
			</article>
            {about.coreValues && (
				<article aria-labelledby="dValues" className="card card--translucent">
					<h3 id="dValues" className="card__header">Values</h3>
					<ul className="values-list">
						{about.coreValues.map((value: string) => (<li key={value}>{value}</li>))}
					</ul>
				</article>
			)}
		</div>
	</aside>
	<div className={styles.aboutContent}>
		<div className={styles.bio}>
            {about.bio && <PortableText
                      value={about.bio} />}
        </div>

		<p><Link className="button" href="/cv">Read Danielle&apos;s Curriculum Vitae</Link></p>

		{ skills && (
			<section aria-labelledby="dSkillTool">
				<h3 id="dSkillTool" className="subtitle">Danielle&apos;s Skills & Tools</h3>
				<ul className={`list-unstyled ${styles.skillList}`}>
                    {skills.map((skill) => {
                        return (
                            <li key={skill._id}>
								{/* TODO */}
								<Link href={`/projects/tech-stack/${skill.slug}`} className={styles.skillLink}>
                                	<SkillIcon {...skill} size={48}  />
								</Link>
                            </li>
                        );
                    })}
				</ul>
			</section>
		)}
	</div>
</div>)}
