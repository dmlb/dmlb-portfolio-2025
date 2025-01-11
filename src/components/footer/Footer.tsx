import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} data-testid="global-footer">
            <nav className={styles.a11yWebringClub} aria-labelledby="a11y-webring-club">
                <h2 id="a11y-webring-club">a11y-webring.club</h2>
                <p>
                    This site is a member of the <a rel="external" href="https://a11y-webring.club/"
                    >a11y-webring.club</a>.
                </p>
                <ul className={styles.a11yWebringList}>
                    <li>
                        <a rel="external" referrerPolicy="strict-origin" href="https://a11y-webring.club/prev"
                        >Previous website</a>
                    </li>
                    <li>
                        <a rel="external" referrerPolicy="strict-origin" href="https://a11y-webring.club/random"
                        >Random website</a>
                    </li>
                    <li>
                        <a rel="external" referrerPolicy="strict-origin" href="https://a11y-webring.club/next"
                        >Next website</a>
                    </li>
                </ul>
            </nav>

            <nav aria-label="additional information">
                <a href="https://github.com/dmlb/dmlb-portfolio-2024/blob/main/ACCESSIBILITY_STATEMENT.md">Accessibility Statement</a>
                <a href="https://github.com/dmlb/dmlb-portfolio-2024/issues/new">Report an Issue</a>
                <a href="#top_site">Back to Start</a>
            </nav>
        </footer>
    );
}

