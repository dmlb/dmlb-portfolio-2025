import GenericProjectCard from "@/components/Cards/GenericProjectCard/GenericProjectCard";
import PostCard from "@/components/Cards/PostCard/PostCard";
import TechProjectCard from "@/components/Cards/TechProjectCard/TechProjectCard";
import DevLinks from "@/components/DevLinks/DevLinks";
import sanityClient from "@/lib/sanity-utils/sanityClient";
import { AUTHOR_INTRO_QUERY, LAST_OTHER_STUFF_QUERY, LAST_POST_QUERY, LAST_PROJECT_QUERY } from "@/lib/sanity-utils/sanityQueries";
import Link from "next/link";

export default async function Home() {
  const authorIntro = await sanityClient.fetch(AUTHOR_INTRO_QUERY);
  const lastTechProject = await sanityClient.fetch(LAST_PROJECT_QUERY);
  const lastGenericProject = await sanityClient.fetch(LAST_OTHER_STUFF_QUERY);
  const lastPost = await sanityClient.fetch(LAST_POST_QUERY);

  return (
    <div>
      <h1>Welcome</h1>
      {authorIntro && (
        <div>
          <h2>{authorIntro.name}</h2>
          <p>{authorIntro.shortBio}</p>
          <Link className="button" href="/about">More about Danielle</Link>
          <DevLinks socialsOnly={false} hideResume={authorIntro.hideResume} resumePdfUrl={authorIntro.resumePdfUrl} socials={authorIntro.socials} />
        </div>
         
      )}
     
     {lastTechProject && <TechProjectCard project={lastTechProject} />}
     {lastGenericProject && <GenericProjectCard project={lastGenericProject} />}
     {lastPost && <PostCard post={lastPost} />}
      </div>
  );
}
