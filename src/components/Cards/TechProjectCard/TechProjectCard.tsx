import { PROJECTS_QUERYResult } from '@/types/sanity';
import TechStack from '../../TechStack/TechStack';

type Props = {
    project: PROJECTS_QUERYResult[0];
}

export default function TechProjectCard({ project }: Props) {
    const {title, slug, projectLink, categories, techStack} = project;
    const [mainCategory] = categories;
    return (
        <article aria-label={title} data-testid="ncmp-project-card" className="card card--translucent card--bordered">
            <a className="card__link card__link--overlay" href={projectLink}>
                <span className="sr-only">{title} {mainCategory?.title}</span>
            </a>
            <div className={`card__category ${mainCategory?.slug}`}>
                <span>{mainCategory?.title}</span>
            </div>
            <h3 className="card__header">{title}</h3>
            {/* {project.description && (
                <p className="card__content">{project.description}</p>
            )} */}
            <TechStack techStack={techStack} iconSize={24} />
        </article>
    );
}

