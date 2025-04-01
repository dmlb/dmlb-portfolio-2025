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
    // state for local storage
    const [storeValue, setStoreValue] = useState<T | null>(null)
    // component local store for current option
    const [currentOption, setCurrentOption] = useState(options[0]);
    const activeClasses = styles.buttonGroupButtonActive;

    // handle changes to the current option affecting the styles
    useEffect(() => {
        document.documentElement.setAttribute(SITE_SETTINGS_ATTRIBUTES[settingsKey], `${currentOption}`);
    }, [currentOption]);

    // getting browser stored value
    useEffect(() => {
        const saved = localStorage.getItem(storeName)
        const initialValue = saved ? JSON.parse(saved) : null;
        setStoreValue(initialValue);
        setCurrentOption(initialValue ?? options[0]);
    }, [setStoreValue]);

    // handle changes on browser stored value
    useEffect(() => {
        localStorage.setItem(storeName, JSON.stringify(storeValue));
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
                <div key={`${option}`} className={`form__radio-wrapper ${styles.buttonGroupButton} ${currentOption === option ? activeClasses : ''}`}>
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