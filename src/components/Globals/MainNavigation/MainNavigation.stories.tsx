import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

import MainNavigation from './MainNavigation';


const meta = {
  title: 'Main Navigation',
  component: MainNavigation,
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalMainNavigation: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const navLinks = canvas.getAllByRole('link');
        navLinks.forEach(async (link) => {
            await userEvent.click(link);
        })
    }
};

