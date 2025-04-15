import SVG from 'react-inlinesvg';
import styles from './SkillIcon.module.css';
import { IconPicker } from '@/types/sanity';

type Props = {
    icon: IconPicker | null;
    title: string;
    size: number;
    knowsAboutMeta?: boolean;
}

export default function SkillIcon({ icon, title, size, knowsAboutMeta }: Props) {
    if (!icon?.name) {
        return null;
    }

    // custom icon for accessibility
    const iconSVG = icon.name !== 'accessibility' && icon.svg ? (
        <SVG style={{height: size, width: size}} src={icon?.svg} width={size} height={size} title={title} />
    ): (
        <svg role="img" fill="currentColor" width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <title>Accessibility</title>
            <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Zm0,40A18,18,0,1,1,42,24,18.1,18.1,0,0,1,24,42Z" />
            <circle cx="24" cy="13" r="3" />
            <path d="M35,17H13a2,2,0,0,0,0,4h7v4.8l-2,9.8A2.1,2.1,0,0,0,19.6,38H20a2.1,2.1,0,0,0,2-1.6L23.8,27h.4L26,36.4A2.1,2.1,0,0,0,28,38h.4A2.1,2.1,0,0,0,30,35.6l-2-9.8V21h7a2,2,0,0,0,0-4Z" />
        </svg>
    )

    
    return (
        <div data-testid="ncmp-skill-icon" className={styles.skillIcon} data-tooltip={title}>
            {knowsAboutMeta && <meta itemProp="knowsAbout" content={title} />}
            {iconSVG}
        </div>
    );
}

