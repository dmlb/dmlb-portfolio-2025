import sanityClient from "@/lib/sanity-utils/sanityClient";
import { PROJECTS_QUERY, PROJECT_TYPE_QUERY } from "@/lib/sanity-utils/sanityQueries";
import ProjectFilter from "@/components/ProjectFilter/ProjectFilter";

export default async function Projects() {
    const projects = await sanityClient.fetch(PROJECTS_QUERY);
    const projectTypeList = await sanityClient.fetch(PROJECT_TYPE_QUERY);

    if (!projects && !projectTypeList) {
        return null;
    }

    return (<ProjectFilter projects={projects} projectTypeList={projectTypeList} />);
}