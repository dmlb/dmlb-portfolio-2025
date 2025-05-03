import type { Meta, StoryObj } from '@storybook/react';

import PostCard from './PostCard';
import { mockPosts } from '../../../../tests/___mocks___/post.mock';

const meta = {
  title: 'Post Card',
  component: PostCard,
  args: {
    post: mockPosts[0],
    cardVariantClasses: 'card--translucent card--bordered'
  }
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PostCardStory: Story = {};

