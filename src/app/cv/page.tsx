import sanityClient from "@/lib/sanity-utils/sanityClient";
import { EDUCATION_QUERY, FILM_CREDITS_QUERY, JOBS_QUERY, PROF_DEV_QUERY, TECH_WORK_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { EDUCATION_QUERYResult, FILM_CREDITS_QUERYResult, JOBS_QUERYResult, PROF_DEV_QUERYResult, TECH_WORK_QUERYResult } from "@/types/sanity";
import styles from "./cv.module.css";
import Accordion from "@/components/Accordion/Accordion"
import TechStack from "@/components/TechStack/TechStack";

export default async function CV() {
    const techWork: TECH_WORK_QUERYResult = await sanityClient.fetch(TECH_WORK_QUERY);
    const profDevelopment: PROF_DEV_QUERYResult = await sanityClient.fetch(PROF_DEV_QUERY);
    const education: EDUCATION_QUERYResult = await sanityClient.fetch(EDUCATION_QUERY);
    const otherWork: JOBS_QUERYResult = await sanityClient.fetch(JOBS_QUERY);
    const filmCredits: FILM_CREDITS_QUERYResult = await sanityClient.fetch(FILM_CREDITS_QUERY);

    return (<>
        <Accordion isOpen={true} title="Development and Engineering Experience">
            <ul className={`list-unstyled ${styles.experienceList}`}>
                {techWork.map(({ position, company, startYear, endYear, location, methodology, techStack }) => {
                    const isCurrent = !endYear;
                    const itemTypeUrl = isCurrent
                        ? `http://schema.org/Occupation`
                        : `http://schema.org/Role`;
                    return (
                        <li key={company} itemProp="hasOccupation" itemScope itemType={itemTypeUrl}>
                            <h3 className={styles.experienceListHeading}>{company} ({startYear}&ndash;{endYear ? endYear : 'Current'})</h3>
                            {isCurrent && (
                                // http://schema.org/Occupation 
                                <>
                                    <meta itemProp="name" content={position} />
                                    <meta itemProp="occupationLocation" content={location} />
                                    <meta itemProp="skills" content={techStack.map(item => item.title).join(', ')} />
                                </>
                            )}
                            {!isCurrent && (
                                //http://schema.org/Role
                                <>
                                    <meta itemProp="roleName" content={position} />
                                    <meta itemProp="startDate" content={`${startYear}`} />
                                    <meta itemProp="endDate" content={`${endYear}`} />
                                </>
                            )}
                            <div className={styles.experienceListDetails}>
                                <p className={styles.experienceListPosition}>{position}</p>
                                <p className={styles.experienceListExtras}>{location} • {methodology}</p>

                                {techStack && (
                                    <div>
                                        <TechStack techStack={techStack} iconSize={32} />
                                    </div>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Accordion>

        {profDevelopment && (
            <Accordion isOpen={true} title="Professional Development Courses and Workshops">
                <ul className={`list-unstyled ${styles.experienceList} ${styles.experienceListColumns}`}>
                    {profDevelopment.map(({ course, year, techStack }) => (
                    <li key={`${course}-${year}`}>
                        <span itemProp="knowsAbout">{course}</span> ({year})
                        {techStack && (
                            <div className={styles.techStackInline}>
                                <TechStack iconSize={20} techStack={techStack} /></div>
                        )}
                    </li>
                ))}
                </ul>
            </Accordion>
        )}


        {education && (
            <Accordion isOpen={true} title="Education">
                <ul className={`list-unstyled ${styles.experienceList}`}>
                    {education.map(({ program, degree, year, institution }) => (
                    <li key={program}>
                        <h3 className={styles.experienceListHeading}>{program}</h3>
                        <div className={styles.experienceListDetails}>
                            <p
                                itemProp="hasCredential"
                                itemScope
                                itemType="https://schema.org/EducationalOccupationalCredential"
                                className={styles.experienceListPosition}
                            >
                                <meta itemProp="credentialCategory" content={program} />
                                <span itemProp="educationalLevel">{degree}</span>&nbsp;
                                <span itemProp="datePublished">{year}</span>
                            </p>
                            <p
                                itemProp="alumniOf"
                                itemScope
                                itemType="https://schema.org/EducationalOrganization"
                                className={styles.experienceListExtras}
                            >
                                <span itemProp="legalName">{institution}</span>
                            </p>
                        </div>
                    </li>
                ))}
                </ul>
            </Accordion>
        )}

        {otherWork && (
            <Accordion isOpen={true} title="Other Experience">
                <ul className={`list-unstyled ${styles.experienceList}`}>
                    {otherWork.map(({ position, company, startYear, endYear }) => (
                    <li key={company}>
                        <h3
                            itemProp="hasOccupation"
                            itemScope
                            itemType="http://schema.org/Role"
                            className={styles.experienceListHeading}
                        >
                            {company} ({startYear}&ndash;{endYear})
                            <meta itemProp="roleName" content={position} />
                            <meta itemProp="startDate" content={`${startYear}`} />
                            <meta itemProp="endDate" content={`${endYear}`} />
                        </h3>
                        <div className={styles.experienceListDetails}>
                            <p className={styles.experienceListPosition}>{position}</p>
                        </div>
                    </li>
                ))}
                </ul>
            </Accordion>
        )}

        {filmCredits && (
            <Accordion isOpen={true} title="Film and Television Credits">
                <ul className={`list-unstyled ${styles.experienceList}`}>
                    { filmCredits.map(({ year, role, title, duration, format, genre, director, festival, synopsis }) => (
                    <li key={title}>
                        <h3 className={styles.experienceListHeading}>
                            {title} ({year})
                        </h3>
                        <div
                            itemScope
                            itemType="https://schema.org/CreativeWork"
                            className={styles.experienceListDetails}
                        >
                            <meta itemProp="dateCreated" content={`${year}`} />
                            <p className={styles.experienceListPosition}>{role}</p>

                            <div
                                itemProp="video"
                                itemScope
                                itemType="https://schema.org/VideoObject"
                                className={styles.experienceListExtras}
                            >
                                <p>
                                    <span itemProp="genre">{genre}</span> |
                                    <span itemProp="duration"> {duration} </span>
                                    | <span itemProp="encodingFormat">{format}</span> | <strong>Director: </strong>
                                    <span itemProp="director">{director}</span>
                                    {festival && (
                                        <>| <span itemProp="award">{festival}</span></>
                                    )}
                                </p>

                                {synopsis && (
                                    <p itemProp="abstract"><strong>Synopsis:</strong> {synopsis}</p>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </Accordion>
        )}
    </>)
}