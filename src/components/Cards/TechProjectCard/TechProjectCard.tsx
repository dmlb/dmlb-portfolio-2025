import { PROJECTS_QUERYResult } from '@/types/sanity';
import TechStackList from '../../Lists/TechStackList/TechStackList';

type Props = {
    project: PROJECTS_QUERYResult[0];
    cardVariantClasses?: string;
}

export default function TechProjectCard({ project, cardVariantClasses }: Props) {
    const {title, slug, projectLink, categories, techStack} = project;
    const [mainCategory] = categories;
    return (
        <article aria-label={title} data-testid="ncmp-project-card" className={`card ${cardVariantClasses}`}>
            <a className="card__link card__link--overlay" href={projectLink}>
                <span className="sr-only">{title} {mainCategory?.title}</span>
            </a>
            <div className={`card__category ${mainCategory?.slug}`}>
                <span>{mainCategory?.title}</span>
            </div>
            <h3 className="card__header">{title}</h3>
            <TechStackList techStack={techStack} iconSize={24} />
        </article>
    );
}

