"use client"

import { useEffect, useState, ChangeEvent } from 'react';
import styles from './SiteSettings.module.css';
import { SITE_SETTINGS_ATTRIBUTES, SITE_SETTINGS_STORE } from "@/constants/site-settings";
    
export default function ReadingWidthRange() {
    const storeName = SITE_SETTINGS_STORE.readingWidth
     // getting browser stored value
     const [storeValue, setStoreValue] = useState<number>(() => {
        const saved = localStorage.getItem(storeName)
        const initialValue = saved ? JSON.parse(saved) : null;
        return +initialValue
    })
    // component local store for current option
    const [currentRange, setCurrentRange] = useState<number>(storeValue || 75);
    const optionMarkers = [35, 45, 65, 75];

    // handle changes to the current option
    useEffect(() => {
        document.documentElement.style.setProperty(SITE_SETTINGS_ATTRIBUTES.readingWidth, `${currentRange}ch`)
    }, [currentRange]);

    // handle changes on browser stored value
    useEffect(() => {
        window.localStorage.setItem(storeName, JSON.stringify(storeValue));
    }, [storeValue]);

    // handle change event on range element
    const handleRangeChange = (event: ChangeEvent) => {
        const el = event.target as HTMLInputElement;
        const value: number = +el.value;
        setCurrentRange(value);
        setStoreValue(value);
    }

    return (
        <div className={styles.formRangeWrapper}>
            <label className={`form__label ${styles.optionHeading}`} htmlFor="readingWidth">Reading Width</label>

            <input className="form__range" type="range" id="readingWidth" name="readingWidth" min="25" max="95" step="10" value={currentRange} list="readingWidthMarkers" onChange={(evt) => handleRangeChange(evt)} />

            <datalist id="readingWidthMarkers">
                {optionMarkers.map((marker) => <option key={marker} value={marker}></option>)}
            </datalist>
            <span className="form__range-output">
                <output htmlFor="readingWidth" id="readingWidth-value">{currentRange}</output> Characters
            </span>
        </div>
    )
}