import { useEffect, useState } from 'react';

import { SITE_SETTINGS_ATTRIBUTES } from '@/constants/site-settings';
import { SiteAnimation } from '@/types/site-settings';
import styles from './SiteSettings.module.css';

export default function AnimationModeFieldset() {
    const modeOptions: SiteAnimation[] = ['system', 'on', 'off'];
    const [currentAnimation, setCurrentAnimation] = useState<SiteAnimation>('system');

    const handleClick = (font: SiteAnimation) => {
        setCurrentAnimation(font);
    }

    useEffect(() => {
        document.documentElement.setAttribute(SITE_SETTINGS_ATTRIBUTES.animation, currentAnimation);
    }, [currentAnimation]);

    return (
        <fieldset className={styles.buttonGroup}>
            <legend className={styles.optionHeading}>Animation Mode</legend>

            {modeOptions.map((mode) => (
                <div key={mode} className={`form__radio-wrapper ${styles.buttonGroupButton}`}>
                    <input
                        className="form__radio"
                        type="radio"
                        name="animation"
                        id={`animation-${mode}`}
                        value={mode}
                        onClick={() => handleClick(mode)} />
                    <label htmlFor={`animation-${mode}`} className="form__label">
                        {mode}
                    </label>
                </div>
            ))}

        </fieldset>
    )
}