import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';

import MainNavigation from './MainNavigation';
import { MAIN_NAV } from '@/constants/navigation';

const meta = {
  title: 'Main Navigation',
  component: MainNavigation,
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalMainNavigation: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        MAIN_NAV.forEach((navItem) => {
            const navLink = canvas.getByRole('link', {
                name: navItem.name
            });
            expect(navLink).toBeInTheDocument();
            expect(navLink).toHaveAttribute('href', navItem.path);
        })
    }
};

