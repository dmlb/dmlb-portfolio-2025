"use client";

import { useRef } from 'react';
import ThemeModeFieldset from './ThemeModeFieldset';
import ThemeFontFieldset from './ThemeFontFieldset';
import ReadingWidthRange from './ReadingWidthRange';
import AnimationModeFieldset from './AnimationModeFieldset';

export default function SiteSettings() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (<>
        <button type="button" data-testid="global-settings-trigger" className="button button--secondary" onClick={() => dialogRef?.current?.showModal()}>Settings</button>

        <dialog ref={dialogRef} data-testid="global-settings-dialog" aria-labelledby="settingsTitle">
            <h2 className="dialog__title" id="settingsTitle">Site Settings</h2>

            <button className="button dialog__close" onClick={() => dialogRef?.current?.close()} type="button">X<span className="sr-only">Close</span></button>

            <form aria-labelledby="settingsTitle">
                <ThemeModeFieldset />
                <ThemeFontFieldset />
                <ReadingWidthRange />
                <AnimationModeFieldset />
            </form>
        </dialog>
    </>)
}