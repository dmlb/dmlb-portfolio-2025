"use client"

import { useCallback, useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import Accordion from "@/components/Accordion/Accordion";
import { PROJECT_TYPE_QUERYResult, PROJECTS_QUERYResult } from "@/types/sanity";
import ProjectList from "../Lists/ProjectList/ProjectList";
import SearchField from "../SearchField/SearchField";
import ProjectTypeRadioFieldset from "../ProjectTypeRadioFieldset/ProjectTypeRadioFieldset";

import styles from './ProjectFilter.module.css';


type Props = {
    projects: PROJECTS_QUERYResult | null;
    projectTypeList: PROJECT_TYPE_QUERYResult | null;
};


export default function ProjectFilter({ projects, projectTypeList }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()
    // params for filter state
    const projectType = searchParams.get('type');
    const searchQuery = searchParams.get('q');

    // set initial state
    const [projectSearch, setProjectSearch] = useState<string | null>(searchQuery);
    const [selectedProjectType, setSelectedProjectType] = useState<string | null>(projectType);

    useEffect(() => {
        // update the URL with the search query and selected project type
        const params = new URLSearchParams();
        if (projectSearch) params.set('q', projectSearch);
        if (selectedProjectType) params.set('type', selectedProjectType);
        const paramsString = params.toString();

        if (paramsString === searchParams.toString()) return;

        if (paramsString) {
            router.push(`${pathname}?${paramsString}`);
        } else {
            router.push(pathname);
        }
    }, [projectSearch, selectedProjectType, projects]);

    const filteredProjects = useMemo(() => {
        return projects?.filter((project) => {
            const searchMatch = project.title.toLowerCase().includes(projectSearch?.toLowerCase() || '') || project.techStack.some((tech) => tech.title.toLowerCase().includes(projectSearch?.toLowerCase() || ''));

            const typeMatch = selectedProjectType ? project.categories.some((type) => type.slug === selectedProjectType) : true;

            return searchMatch && typeMatch;
        }) ?? null;
    }, [projectSearch, selectedProjectType, projects]);

    return (<>
        <form data-testid="ncmp-project-filter-form" className={styles.projectsForm} aria-label="Filter Projects">
            <Accordion isOpen={true} title="Filter Projects">
                <SearchField
                    fieldInfo={{
                        label: "Search Projects",
                        name: "project-search",
                        id: "project-search"
                    }}
                    searchValue={projectSearch}
                    setSearchValue={setProjectSearch}
                />
                <ProjectTypeRadioFieldset
                    fieldInfo={{
                        legend: "Filter by Project Type",
                        name: "type-filter"
                    }}
                    projectTypeList={projectTypeList}
                    selectedValue={selectedProjectType}
                    setSelectedValue={setSelectedProjectType}
                />
            </Accordion>

            <span data-testid="ncmp-project-filter-form-status" className={styles.formStatus} role="status">
                {filteredProjects?.length || 0} projects{' '}
                {(projectSearch || selectedProjectType) && (<>for{' '}</>)}
                {projectSearch && (<>search <output>{projectSearch}</output>{' '}</>)}
                {projectSearch && selectedProjectType && (<>and{' '}</>)}
                {selectedProjectType && (<>project type <output className={styles.capitalize}>{selectedProjectType.replaceAll('-', ' ')}</output></>)}
            </span>
        </form>

        <ProjectList projects={filteredProjects}></ProjectList>
    </>)
}