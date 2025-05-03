import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, userEvent } from '@storybook/test';

import DevLinks from './DevLinks';

const meta = {
  title: 'Dev Links',
  component: DevLinks,
  args: {
    resumePdfUrl: 'https://daniellemlbastien.com/',
    socials: {
      linkedin: 'https://linkedin.com/',
      codepen: 'https://codepen.com/',
      github: 'https://github.com/',
    }
  }
} satisfies Meta<typeof DevLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SocialOnlyDevLinks: Story = {

  args: {
    socialsOnly: true,
    hideResume: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const socialLinks = canvas.getAllByRole('link');
    expect(socialLinks).toHaveLength(3);

    expect(canvas.getByRole('link', { name: 'Linked In' })).toHaveAttribute('href', 'https://linkedin.com/');
    expect(canvas.getByRole('link', { name: 'Git Hub' })).toHaveAttribute('href', 'https://github.com/');
    expect(canvas.getByRole('link', { name: 'Code Pen' })).toHaveAttribute('href', 'https://codepen.com/');
  }
};


export const ResumeAndSocialsDevLinks: Story = {
  args: {
    socialsOnly: false,
    hideResume: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const socialLinks = canvas.getAllByRole('link');
    expect(socialLinks).toHaveLength(4);

    const resume = canvas.getByRole('link', { name: 'Download Résumé' })

    expect(resume).toHaveAttribute('href', 'https://daniellemlbastien.com/');


    expect(canvas.getByRole('link', { name: 'Git Hub' })).toBeInTheDocument()
    expect(canvas.getByRole('link', { name: 'Code Pen' })).toBeInTheDocument()
    expect(canvas.getByRole('link', { name: 'Linked In' })).toBeInTheDocument()
  }
};

