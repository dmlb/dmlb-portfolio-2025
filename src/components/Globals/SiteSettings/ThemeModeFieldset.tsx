import { useEffect, useState } from 'react';

import { SITE_SETTINGS_ATTRIBUTES } from '@/constants/site-settings';
import { SiteMode } from '@/types/site-settings';
import styles from './SiteSettings.module.css';

export default function ThemeModeFieldset() {
    const modeOptions: SiteMode[] = ['system', 'light', 'dark'];
    const [currentMode, setCurrentMode] = useState<SiteMode>('system');

    const handleClick = (font: SiteMode) => {
        setCurrentMode(font);
    }

    useEffect(() => {
        document.documentElement.setAttribute(SITE_SETTINGS_ATTRIBUTES.themeMode, currentMode);
    }, [currentMode]);

    return (
        <fieldset className={styles.buttonGroup}>
            <legend className={styles.optionHeading}>Theme Mode</legend>

            {modeOptions.map((mode) => (
                <div key={mode} className={`form__radio-wrapper ${styles.buttonGroupButton}`}>
                    <input
                        className="form__radio"
                        type="radio"
                        name="mode"
                        id={`mode-${mode}`}
                        value={mode}
                        onClick={() => handleClick(mode)} />
                    <label htmlFor={`mode-${mode}`} className="form__label">
                        {mode}
                    </label>
                </div>
            ))}

        </fieldset>
    )
}