import type { Meta, StoryObj } from '@storybook/react';

import GenericProjectCard from './GenericProjectCard';

const meta = {
  title: 'Generic Project Card',
  component: GenericProjectCard,
  args: {
    project: {
      title: "Project Title",
        link: "https://example.com",
        description: null,
        startYear: "2023",
        endYear: null,
        logo: {
          _type: "image",
          asset: null,
          alt: "logo alt text",
        },
        socials: {
          linkedin: "https://linkedin.com",
          discord: "https://discord.com",
          instagram: "https://isntagram.com",
        }
    }
  }
} satisfies Meta<typeof GenericProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalGenericProjectCard: Story = {};

