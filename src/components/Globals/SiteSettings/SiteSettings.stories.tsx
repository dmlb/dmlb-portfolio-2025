import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, fireEvent } from '@storybook/test';

import SiteSettings from './SiteSettings';

const meta = {
  title: 'Site Settings',
  component: SiteSettings,
} satisfies Meta<typeof SiteSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalSiteSettings: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const dialogBtn = canvas.getByRole('button', { name: 'Settings' });
        expect(dialogBtn).toBeInTheDocument();
        await dialogBtn.click();

        const dialog = canvas.getByRole('dialog', { name: 'Site Settings' });
        expect(dialog).toBeInTheDocument();
        expect(dialog).toBeVisible();

        const closeBtn = canvas.getByRole('button', { name: 'Close' });
        expect(closeBtn).toBeInTheDocument();
        await closeBtn.click();

        expect(dialog).not.toBeVisible();
        await dialogBtn.click();

        /* theme mode */
        const themeMode = canvas.getByRole('group', { name: 'Theme Mode' });
        expect(themeMode).toBeInTheDocument();
        const themeModeOptions = within(themeMode).getAllByRole('radio');
        expect(themeModeOptions).toHaveLength(3);
        expect(themeModeOptions[0]).toHaveAttribute('value', 'system');
        expect(themeModeOptions[1]).toHaveAttribute('value', 'light');
        expect(themeModeOptions[2]).toHaveAttribute('value', 'dark');
        await themeModeOptions[1].click();
        expect(themeModeOptions[0]).not.toBeChecked();
        expect(themeModeOptions[1]).toBeChecked();
        expect(themeModeOptions[2]).not.toBeChecked();

        /* theme font */
        const themeFont = canvas.getByRole('group', { name: 'Theme Font' });
        expect(themeFont).toBeInTheDocument();
        const themeFontOptions = within(themeFont).getAllByRole('radio');
        expect(themeFontOptions).toHaveLength(2);
        expect(themeFontOptions[0]).toHaveAttribute('value', 'system');
        expect(themeFontOptions[1]).toHaveAttribute('value', 'dyslexic');
        await themeFontOptions[1].click();
        expect(themeFontOptions[0]).not.toBeChecked();
        expect(themeFontOptions[1]).toBeChecked();

        /* animation mode */
        const animationMode = canvas.getByRole('group', { name: 'Animation Mode' });
        expect(animationMode).toBeInTheDocument();
        const animationModeOptions = within(animationMode).getAllByRole('radio');
        expect(animationModeOptions).toHaveLength(3);
        expect(animationModeOptions[0]).toHaveAttribute('value', 'system');
        expect(animationModeOptions[1]).toHaveAttribute('value', 'on');
        expect(animationModeOptions[2]).toHaveAttribute('value', 'off');
        await animationModeOptions[1].click();
        expect(animationModeOptions[0]).not.toBeChecked();
        expect(animationModeOptions[1]).toBeChecked();
        expect(animationModeOptions[2]).not.toBeChecked();

        /* reading width */
        const readingWidthInput = canvas.getByRole('slider', { name: 'Reading Width' });
        expect(readingWidthInput).toBeInTheDocument();
        expect(readingWidthInput).toHaveAttribute('value', '75');
        fireEvent.change(readingWidthInput, { target: { value: 45 } });
        expect(readingWidthInput).toHaveAttribute('value', '45');
        fireEvent.change(readingWidthInput, { target: { value: 75 } });
        expect(readingWidthInput).toHaveAttribute('value', '75');

        await closeBtn.click();
    }
};

