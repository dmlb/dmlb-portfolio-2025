import { useEffect, useState } from 'react';

import { SITE_SETTINGS_ATTRIBUTES } from '@/constants/site-settings';
import { SiteFont } from '@/types/site-settings';
import styles from './SiteSettings.module.css';

export default function ThemeFontFieldset() {
    const fontOptions: SiteFont[] = ['system', 'dyslexic'];
    const [currentFont, setCurrentFont] = useState<SiteFont>('system');

    const handleClick = (font: SiteFont) => {
        setCurrentFont(font);
    }

    useEffect(() => {
        document.documentElement.setAttribute(SITE_SETTINGS_ATTRIBUTES.themeFont, currentFont);
    }, [currentFont]);

    return (
        <fieldset className={styles.buttonGroup}>
            <legend className={styles.optionHeading}>Theme Font</legend>

            {fontOptions.map((font) => (
                <div key={font} className={`form__radio-wrapper ${styles.buttonGroupButton}`}>
                    <input
                        className="form__radio"
                        type="radio"
                        name="font"
                        id={`font-${font}`}
                        value={font}
                        onClick={() => handleClick(font)} />
                    <label htmlFor={`font-${font}`} className="form__label">
                        {font}
                    </label>
                </div>
            ))}
        </fieldset>
    )
}