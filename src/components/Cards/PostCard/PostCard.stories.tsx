import type { Meta, StoryObj } from '@storybook/react';

import PostCard from './PostCard';

const meta = {
  title: 'Post Card',
  component: PostCard,
  args: {
    post: {
      _id: "1",
      title: "Project Title",
      slug: "project-title",
      excerpt: "Project excerpt",
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
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalPostCard: Story = {};

