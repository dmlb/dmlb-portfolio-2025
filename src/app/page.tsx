import GenericProjectCard from "@/components/Cards/GenericProjectCard/GenericProjectCard";
import PostCard from "@/components/Cards/PostCard/PostCard";
import TechProjectCard from "@/components/Cards/TechProjectCard/TechProjectCard";
import DevLinks from "@/components/DevLinks/DevLinks";
import sanityClient from "@/lib/sanity-utils/sanityClient";
import { AUTHOR_INTRO_QUERY, LAST_OTHER_STUFF_QUERY, LAST_POST_QUERY, LAST_PROJECT_QUERY } from "@/lib/sanity-utils/sanityQueries";
import Link from "next/link";
import styles from "./home.module.css";

export default async function Home() {
  const authorIntro = await sanityClient.fetch(AUTHOR_INTRO_QUERY);
  const lastTechProject = await sanityClient.fetch(LAST_PROJECT_QUERY);
  const lastGenericProject = await sanityClient.fetch(LAST_OTHER_STUFF_QUERY);
  const lastPost = await sanityClient.fetch(LAST_POST_QUERY);

  return (<>
    <div className={styles.cardWrapper}>
      <h1 className="page__title">Welcome</h1>
      {authorIntro && (
        <article className="card card--bordered">
          <h2 className="card__header">{authorIntro.name}</h2>
          <p className="card__content">{authorIntro.shortBio}</p>
          <div className="card__actions card__actions--center">
            <Link className="button" href="/about">More about Danielle</Link>
          </div>
          <div className="card__actions card__actions--center">
            <DevLinks socialsOnly={false} hideResume={authorIntro.hideResume} resumePdfUrl={authorIntro.resumePdfUrl} socials={authorIntro.socials} />
          </div>
        </article>
      )}

      <h2 className="page__title">Latest Projects</h2>
      {lastTechProject && <TechProjectCard project={lastTechProject} cardVariantClasses="card--bordered" /> }
      {lastGenericProject && <GenericProjectCard project={lastGenericProject} cardVariantClasses="card--bordered" />}
      {lastPost && (<>
        <h2 className="page__title">Latest Post</h2>
        <PostCard post={lastPost} cardVariantClasses="card--bordered" />
      </>)}
    </div>
    </>
  );
}
