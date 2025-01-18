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
                <span className="name">{person}</span>
                <span className="details">
                    <span className="position">{position}</span>
                    <span className="company">{company}</span>
                </span>
            </cite>
        </blockquote>
    );
}
