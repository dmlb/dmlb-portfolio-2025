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
    iconOnly?: boolean;
    techStack: TechStackProps[];
    iconSize: number;
    linkToPath?: string;
    knowsAboutMeta?: boolean;
}


const SVGItem = ({ iconOnly, knowsAboutMeta, icon, title, iconSize }: {
    iconOnly: boolean;
    knowsAboutMeta?: boolean;
    icon: IconPicker | null;
    title: string;
    iconSize: number;
}) => {
    return (<>
        <SkillIcon iconOnly={iconOnly} knowsAboutMeta={knowsAboutMeta ?? false} icon={icon} title={title} size={iconSize} />
        {!iconOnly && <span>{title}</span>}
    </>)
}

const LinkItem = ({ iconOnly, linkToPath, knowsAboutMeta, icon, title, slug, iconSize }: {
    iconOnly: boolean;
    linkToPath: string;
    knowsAboutMeta?: boolean;
    icon: IconPicker | null;
    title: string;
    slug: string;
    iconSize: number;
}) => {
    return (

        <Link href={`${linkToPath}/${slug}`} className={`${styles.techStackListLink} ${iconOnly ? '' : styles.techStackListItemText}`}>
            <SVGItem iconOnly={iconOnly} knowsAboutMeta={knowsAboutMeta} icon={icon} title={title} iconSize={iconSize} />
        </Link>
    );
}

export default function TechStackList({ iconOnly = true, techStack, iconSize, linkToPath, knowsAboutMeta }: Props) {
    if (!techStack) return null;

    return (
        <ul data-testid="ncmp-tech-stack" className={`list-unstyled ${styles.techStackList} ${iconOnly ? '' : styles.techStackListText}`}>
            {techStack.map(({ icon, title, slug }, i) => (
                <li key={`${slug}-${i}`} className={`${iconOnly ? '' : styles.techStackListItemText}`}>
                    {linkToPath ? (
                        <LinkItem iconOnly={iconOnly} linkToPath={linkToPath} knowsAboutMeta={knowsAboutMeta} icon={icon} title={title} slug={slug} iconSize={iconSize} />
                    ) : (
                        <SVGItem iconOnly={iconOnly} knowsAboutMeta={knowsAboutMeta} icon={icon} title={title} iconSize={iconSize} />
                    )}
                </li>
            ))}
        </ul>
    );
}

