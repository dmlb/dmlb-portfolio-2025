import sanityClient from "@/lib/sanity-utils/sanityClient";
import { PROJECTS_QUERY, PROJECT_TYPE_QUERY } from "@/lib/sanity-utils/sanityQueries";
import { PROJECT_TYPE_QUERYResult, PROJECTS_QUERYResult } from "@/types/sanity";
import ProjectFilter from "@/components/ProjectFilter/ProjectFilter";

export default async function Projects() {
    const projects: PROJECTS_QUERYResult = await sanityClient.fetch(PROJECTS_QUERY);
    const projectTypeList: PROJECT_TYPE_QUERYResult = await sanityClient.fetch(PROJECT_TYPE_QUERY);

    if (!projects && !projectTypeList) {
        return null;
    }

    return (<ProjectFilter projects={projects} projectTypeList={projectTypeList} />);
}