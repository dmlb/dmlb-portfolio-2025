import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';

import Footer from './Footer';

const meta = {
  title: 'Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalFooter: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const webRingHeader = canvas.getByRole('heading', { name: 'a11y-webring.club' });
        expect(webRingHeader).toBeInTheDocument();
        
        const webRingLinksList = canvas.getByTestId('webring-links')
        const links = within(webRingLinksList).getAllByRole('link');
        expect(links).toHaveLength(3);
        expect(links[0]).toHaveAttribute('href', 'https://a11y-webring.club/prev');
        expect(links[1]).toHaveAttribute('href', 'https://a11y-webring.club/random');
        expect(links[2]).toHaveAttribute('href', 'https://a11y-webring.club/next');

        const accessibilityStatement = canvas.getByRole('link', { name: 'Accessibility Statement' }); 
        expect(accessibilityStatement).toBeInTheDocument()

        const reportAnIssue = canvas.getByRole('link', { name: 'Report an Issue' });
        expect(reportAnIssue).toBeInTheDocument()

        const backToTop = canvas.getByRole('link', { name: 'Back to Start' });
        expect(backToTop).toBeInTheDocument()
    }
};

