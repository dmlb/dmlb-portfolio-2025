import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';

import { MAIN_NAV } from '@/constants/navigation';
import Header from './Header';


const meta = {
  title: 'Header',
  component: Header,
  args: {
    author: {
        name: 'Danielle',
        title: 'Software Engineer',
    },
    navigation: MAIN_NAV
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalHeader: Story = {
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement)
        
        const logo = canvas.getByAltText('curly braces inside a lens');
        expect(logo).toBeInTheDocument();

        const name = canvas.getByText(`${args?.author?.name}`);
        expect(name).toBeInTheDocument();

        const title = canvas.getByText(`${args?.author?.title}`);
        expect(title).toBeInTheDocument();


        const navLinks = canvas.getAllByRole('link');
        navLinks.forEach(async (link) => {
            await userEvent.click(link);
        })
    }
};

