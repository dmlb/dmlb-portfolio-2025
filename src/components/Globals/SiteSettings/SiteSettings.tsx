"use client";

import { useRef } from 'react';
import { SiteAnimation, SiteFont, SiteMode } from '@/types/site-settings';
import SiteSettingFieldset from './SiteSettingFieldset';
import ReadingWidthRange from './ReadingWidthRange';

import styles from './SiteSettings.module.css';

export default function SiteSettings() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (<>
    <div className={styles.settingsTriggerPosition}>
        <button type="button" data-testid="global-settings-trigger" className="button button--secondary" onClick={() => dialogRef?.current?.showModal()}>Settings</button>
    </div>

        <dialog ref={dialogRef} data-testid="global-settings-dialog" aria-labelledby="settingsTitle">
            <h2 className="dialog__title" id="settingsTitle">Site Settings</h2>

            <button className="button dialog__close" onClick={() => dialogRef?.current?.close()} type="button">X<span className="sr-only">Close</span></button>

            <form aria-labelledby="settingsTitle">
                <SiteSettingFieldset<SiteMode> title="Theme Mode" options={['system', 'light', 'dark']} settingsKey="mode" />

                <SiteSettingFieldset<SiteFont> title="Theme Font" options={['system', 'dyslexic']} settingsKey="font" />

                <ReadingWidthRange />

                <SiteSettingFieldset<SiteAnimation> title="Animation Mode" options={['system', 'on', 'off']} settingsKey="animation" />
            </form>
        </dialog>
    </>)
}