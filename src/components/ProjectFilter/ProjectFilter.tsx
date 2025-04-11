"use client"

import { useEffect, useState } from "react";

import styles from './ProjectFilter.module.css';

import Accordion from "@/components/Accordion/Accordion";
import { PROJECT_TYPE_QUERYResult, PROJECTS_QUERYResult } from "@/types/sanity";
import ProjectList from "../ProjectList/ProjectList";
import SearchField from "../SearchField/SearchField";
import ProjectTypeRadioFieldset from "../ProjectTypeRadioFieldset/ProjectTypeRadioFieldset";

type Props = {
    projects: PROJECTS_QUERYResult | null;
    projectTypeList: PROJECT_TYPE_QUERYResult | null;
};

export default function ProjectFilter({ projects, projectTypeList }: Props) {
    const [filteredProjects, setFilteredProjects] = useState<PROJECTS_QUERYResult | null>(projects);
    const [projectSearch, setProjectSearch] = useState<string | null>(null);
    const [selectedProjectType, setSelectedProjectType] = useState<string | null>(null);


    useEffect(() => {
        const newFilteredProjects = projects?.filter((project) => {
            const searchMatch = project.title.toLowerCase().includes(projectSearch?.toLowerCase() || '') || project.techStack.some((tech) => tech.title.toLowerCase().includes(projectSearch?.toLowerCase() || ''));
            
            const typeMatch = selectedProjectType ? project.categories.some((type) => type.slug === selectedProjectType) : true;

            return searchMatch && typeMatch;
        });
        setFilteredProjects(newFilteredProjects ?? null)
    }, [projectSearch, selectedProjectType, projects]);

    return (<>

        <form data-testid="ncmp-project-filter-form" className={styles.projectsForm} aria-label="Filter Projects">
            <Accordion isOpen={true} title="Filter Projects">

                <SearchField fieldInfo={
                    {
                        label: "Search Projects",
                        name: "project-search",
                        id: "project-search"
                    }
                }
                    searchValue={projectSearch}
                    setSearchValue={setProjectSearch} />
                <ProjectTypeRadioFieldset fieldInfo={
                    {
                        legend: "Filter by Project Type",
                        name: "type-filter"
                    }
                }
                    projectTypeList={projectTypeList}
                    selectedValue={selectedProjectType}
                    setSelectedValue={setSelectedProjectType} />
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