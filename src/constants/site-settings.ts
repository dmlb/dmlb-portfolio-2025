import { SiteSettings } from "@/types/site-settings"

export const SITE_SETTINGS_ATTRIBUTES: Record<SiteSettings, string> = {
    readingWidth: '--user-reading-w',
    animation: 'data-motion',
    mode: 'data-mode',
    font: 'data-font'
}

export const SITE_SETTINGS_STORE: Record<SiteSettings, string> = {
    readingWidth: 'readingWidth',
    animation: 'animation',
    mode: 'themeMode',
    font: 'themeFont'
}