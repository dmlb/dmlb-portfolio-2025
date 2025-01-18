import { IconPicker } from '@/types/sanity';
import SkillIcon from '../SkillIcon/SkillIcon';
import styles from './TechStack.module.css';

export type TechStackProps = {
    icon: IconPicker | null, 
    title: string, 
    slug: string
}

type Props = {
    techStack: TechStackProps[];
    iconSize: number;
}

export default function TechStack({ techStack, iconSize }: Props) {
    if(!techStack) return null;
    return (
        <ul data-testid="ncmp-tech-stack" className={`list-unstyled ${styles.techStackList}`}>
            {techStack.map(({ icon, title, slug }, i) => (
                <li key={`${slug}-${i}`}><SkillIcon icon={icon} title={title} size={iconSize} slug={slug} /></li>
            ))}
        </ul>
    );
}

