/** theme mode options */
export type SiteMode = 'dark' | 'light' | 'system'
/** theme font options */
export type SiteFont = 'system' | 'dyslexic'

/** website settings */
export interface ISiteSettings {
    mode: SiteMode;
    font: SiteFont;
}