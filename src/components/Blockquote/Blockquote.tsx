import styles from './Blockquote.module.css';

type Props = {
    quote: string;
    person: string;
    position: string;
    company: string;
}

export default function Blockquote({ quote, person, position, company }: Props) {
    return (
        <blockquote className={styles.blockquote} data-testid="ncmp-blockquote">
            {quote}
            <cite>
                <span className={styles.name}>{person}</span>
                <span className={styles.details}>
                    <span className={styles.position}>{position}</span>
                    <span className={styles.company}>{company}</span>
                </span>
            </cite>
        </blockquote>
    );
}
