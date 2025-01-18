import styles from './Accordion.module.css';

type Props = {
    title: string;
    isOpen: boolean;
    children: React.ReactNode
}

export default function Accordion({ title, isOpen, children }: Props) {
    return (
        <details className={styles.details} data-testid="ncmp-accordion" open={isOpen}>
            <summary className={styles.summary} >{title}</summary>

            <div className={styles.detailsContent} >
                {children}
            </div>
        </details>
    );
}