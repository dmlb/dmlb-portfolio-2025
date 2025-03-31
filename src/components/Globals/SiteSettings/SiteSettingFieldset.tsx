"use client"

import { useEffect, useState } from 'react';

import { SiteSettings } from '@/types/site-settings';
import { SITE_SETTINGS_ATTRIBUTES, SITE_SETTINGS_STORE } from '@/constants/site-settings';
import styles from './SiteSettings.module.css';

export default function SiteSettingFieldset<T>({ title, options, settingsKey}: {
    title: string;
    options: Array<T>;
    settingsKey: SiteSettings
}) {
    const storeName = SITE_SETTINGS_STORE[settingsKey]
    // getting browser stored value
    const [storeValue, setStoreValue] = useState(() => {
        const saved = localStorage.getItem(storeName)
        const initialValue = saved ? JSON.parse(saved) : null;
        return initialValue
    })
    // component local store for current option
    const [currentOption, setCurrentOption] = useState(storeValue || options[0]);

    // handle changes to the current option
    useEffect(() => {
        document.documentElement.setAttribute(SITE_SETTINGS_ATTRIBUTES[settingsKey], `${currentOption}`);
    }, [currentOption]);

    // handle changes on browser stored value
    useEffect(() => {
        window.localStorage.setItem(storeName, JSON.stringify(storeValue));
    }, [storeValue]);

    // handle click event on radio buttons
    const handleClick = (selection: T) => {
        setCurrentOption(selection);
        setStoreValue(selection);
    }

    return (
        <fieldset className={styles.buttonGroup}>
            <legend className={styles.optionHeading}>{title}</legend>

            {options.map((option) => (
                <div key={`${option}`} className={`form__radio-wrapper ${styles.buttonGroupButton} ${currentOption === option ? styles.buttonGroupButtonActive : ''}`}>
                    <input
                        className="form__radio"
                        type="radio"
                        name={storeName}
                        id={`${storeName}-${option}`}
                        value={`${option}`}
                        onClick={() => handleClick(option)} />
                    <label htmlFor={`${storeName}-${option}`} className="form__label">
                        {option as string}
                    </label>
                </div>
            ))}
        </fieldset>
    )
}