/** theme mode options */
export type SiteMode = 'dark' | 'light' | 'system'
/** theme font options */
export type SiteFont = 'system' | 'dyslexic'
/** theme animation options */
export type SiteAnimation = 'system' | 'on' | 'off'

/** website settings */
export interface ISiteSettings {
    mode: SiteMode;
    font: SiteFont;
    animation: SiteAnimation;
}