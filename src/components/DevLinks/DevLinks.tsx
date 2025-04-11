import styles from './DevLinks.module.css';
import SocialSVG from '../SocialSVG/SocialSVG';

type Props = {
    socialsOnly: boolean;
    hideResume?: boolean;
    resumePdfUrl?: string | null;
    socials?: {
        linkedin: string | null;
        codepen: string | null;
        github: string | null;
    } | null;
}

export default function DevLinks({ socialsOnly, hideResume, resumePdfUrl, socials }: Props) {

    if (!socials && hideResume) {
        return null
    }

    return (
        <ul data-testid="ncmp-dev-links" className={`list-unstyled ${styles.devLinks}`}>
            {!hideResume && !socialsOnly && resumePdfUrl && (
                <li className="resume-link">
                    <a className="button button--large button--accent" href={resumePdfUrl}>Download Résumé</a>
                </li>
            )}

            {socials?.linkedin && (
                <li>
                    <a className="button button--icon button--accent" href={socials.linkedin}>
                        <SocialSVG socialName='linkedin' iconSize={32} />
                    </a>
                </li>
            )}

            {socials?.github && (
                <li>
                    <a className="button button--icon button--accent" href={socials.github}>
                        <SocialSVG socialName='github' iconSize={32} />
                    </a>
                </li>
            )}

            {socials?.codepen && (
                <li>
                    <a className="button button--icon button--accent" href={socials.codepen}>
                        <SocialSVG socialName='codepen' iconSize={32} />
                    </a>
                </li>
            )}
        </ul>
    )
}