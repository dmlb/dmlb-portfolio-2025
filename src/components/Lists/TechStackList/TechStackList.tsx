import { IconPicker } from '@/types/sanity';
import SkillIcon from '../../SkillIcon/SkillIcon';
import styles from './TechStackList.module.css';
import Link from 'next/link';

export type TechStackProps = {
    icon: IconPicker | null,
    title: string,
    slug: string
}

type Props = {
    techStack: TechStackProps[];
    iconSize: number;
    linkToPath?: string;
    knowsAboutMeta?: boolean;
}

export default function TechStackList({ techStack, iconSize, linkToPath, knowsAboutMeta }: Props) {
    if (!techStack) return null;

    if (linkToPath) {
        return (
            <ul data-testid="ncmp-tech-stack-links" className={`list-unstyled ${styles.techStackList}`}>
                {techStack.map(({ icon, title, slug }, i) => (
                    <li key={`${slug}-${i}`}>
                        <Link href={`${linkToPath}/${slug}`} className={styles.techStackListLink}>
                            <SkillIcon knowsAboutMeta={knowsAboutMeta ?? false} icon={icon} title={title} size={iconSize} />
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul data-testid="ncmp-tech-stack" className={`list-unstyled ${styles.techStackList}`}>
            {techStack.map(({ icon, title, slug }, i) => (
                <li key={`${slug}-${i}`}>
                    <SkillIcon knowsAboutMeta={knowsAboutMeta ?? false} icon={icon} title={title} size={iconSize} />
                </li>
            ))}
        </ul>
    );
}

