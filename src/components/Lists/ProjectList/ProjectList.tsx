import { PROJECTS_QUERYResult } from "@/types/sanity";
import TechProjectCard from "../../Cards/TechProjectCard/TechProjectCard";

type Props = {
    projects: PROJECTS_QUERYResult | null
};

export default function ProjectList({projects}: Props) {
    if (!projects) {
        return null;
    }
    
    return (
        <ul data-testid="ncmp-project-list" className={`list-unstyled card-grid`}>
            {projects.map((project) => (
                // todo: in:fade animate:flip={{ duration: 200 }}
                <li key={project._id}>
                    <TechProjectCard project={project} cardVariantClasses="card--translucent card--bordered" />
                </li>
            ))}
        </ul>
    )
}