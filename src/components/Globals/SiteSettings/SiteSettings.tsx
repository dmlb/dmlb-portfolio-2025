import { SiteFont, SiteMode } from '@/types/site-settings';
import styles from './SiteSettings.module.css';

type Props = {
    currentMode: SiteMode;
    rangeValue: number;
    size: number;
    loading: 'lazy' | 'eager';
}

export default function SiteSettings({ currentMode, rangeValue = 75 }: Props) {

    const handleRangeChange = (event: Event) => {
        const el = event.target as HTMLInputElement;
        rangeValue = +el.value;
        document?.body?.style.setProperty('--user-reading-w', `${rangeValue}ch`)
    }

    let dialogEl: HTMLDialogElement | null = document.querySelector<HTMLDialogElement>('dialog');

    /**
     * setting options groups
     */
    const modeOptions: SiteMode[] = ['system', 'light', 'dark'];
    const fontOptions: SiteFont[] = ['system', 'dyslexic'];

    return (<>
        <button type="button" data-testid="global-settings-trigger" className="button button--secondary" onClick={() => dialogEl?.showModal()}>Settings</button>

        <dialog data-testid="global-settings-dialog" aria-labelledby="settingsTitle">
            <h2 className="dialog__title" id="settingsTitle">Site Settings</h2>

            <button className="button dialog__close" onClick={() => dialogEl?.close()} type="button">X<span className="sr-only">Close</span></button>

            <form aria-labelledby="settingsTitle">
                <fieldset className="button-group">
                    <legend className="option-heading">Theme Mode</legend>

                    {modeOptions.map((mode) => (
                        <div key={mode} className="form__radio-wrapper button-group__button">
                            <input
                                className="form__radio"
                                type="radio"
                                name="mode"
                                id={`mode-${mode}`}
                                value={mode}
                                onClick={() => { }} />
                            <label htmlFor={`mode-${mode}`} className="form__label font-label">{mode}</label>
                        </div>
                    ))}

                </fieldset>

                <fieldset className="button-group">
                    <legend className="option-heading">Theme Font</legend>

                    {fontOptions.map((font) => (
                        <div key={font} className="form__radio-wrapper button-group__button">
                            <input
                                className="form__radio"
                                type="radio"
                                name="font"
                                id={`font-${font}`}
                                value={font}
                                onClick={() => { }} />
                            <label htmlFor={`font-${font}`} className={`form__label font-label ${font}`}>{font}</label>
                        </div>
                    ))}
                </fieldset>

                <div className="form__range-wrapper">
                    <label className="form__label option-heading" htmlFor="readingWidth">Reading Width</label>

                    <input className="form__range" type="range" id="readingWidth" name="readingWidth" min="25" max="95" step="10" value={rangeValue} list="readingWidthMarkers" onChange={(evt) => handleRangeChange(evt)} />

                    <datalist id="readingWidthMarkers">
                        <option value="35"></option>
                        <option value="45"></option>
                        <option value="65"></option>
                        <option value="75"></option>
                    </datalist>
                    <span className="form__range-output">
                        <output htmlFor="readingWidth" id="readingWidth-value">{rangeValue}</output> Characters
                    </span>
                </div>
            </form>
        </dialog>
    </>)
}