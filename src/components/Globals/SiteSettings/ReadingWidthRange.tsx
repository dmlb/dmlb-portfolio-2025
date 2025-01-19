"use client"

import { useEffect, useState, ChangeEvent } from 'react';
import styles from './SiteSettings.module.css';
import { SITE_SETTINGS_ATTRIBUTES } from "@/constants/site-settings";

export default function ReadingWidthRange() {
    const [currentRange, setCurrentRange] = useState<number>(75);
    const optionMarkers = [35, 45, 65, 75];

    const handleRangeChange = (event: ChangeEvent) => {
        const el = event.target as HTMLInputElement;
        setCurrentRange(+el.value);
    }

    useEffect(() => {
        document.documentElement.style.setProperty(SITE_SETTINGS_ATTRIBUTES.readingWidth, `${currentRange}ch`)
    }, [currentRange]);

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