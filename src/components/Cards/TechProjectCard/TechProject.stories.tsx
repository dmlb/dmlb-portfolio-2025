import type { Meta, StoryObj } from '@storybook/react';

import TechProjectCard from './TechProjectCard';

const meta = {
  title: 'Tech Project Card',
  component: TechProjectCard,
  args: {
    project: {
      _id: "1",
      title: "Project Title",
      slug: "project-title",
      projectLink: "https://example.com",
      categories: [{
        title: "category title",
        slug: "category-title",
      }],
      techStack: [{
        icon: null,
        title: "stack title",
        slug: "stack-title",
      }],
    }
  }
} satisfies Meta<typeof TechProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalTechProjectCard: Story = {};

