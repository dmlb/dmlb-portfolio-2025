import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={`${styles.footer} flex flex-wrap items-end justify-between gap-4 mt-8 mx-auto mb-4 pt-2 px-4 pb-8`} data-testid="global-footer">
            <nav aria-labelledby="a11y-webring-club">
                <h2 className="my-1 text-lg font-bold" id="a11y-webring-club">a11y-webring.club</h2>
                <p className="my-2">
                    This site is a member of the <a rel="external" href="https://a11y-webring.club/"
                    >a11y-webring.club</a>.
                </p>
                <ul className="flex gap-1.5">
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

            <nav className="flex gap-1.5" aria-label="additional information">
                <a href="https://github.com/dmlb/dmlb-portfolio-2024/blob/main/ACCESSIBILITY_STATEMENT.md">Accessibility Statement</a>
                <a href="https://github.com/dmlb/dmlb-portfolio-2024/issues/new">Report an Issue</a>
                <a href="#top_site">Back to Start</a>
            </nav>
        </footer>
    );
}

