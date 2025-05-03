import type { Meta, StoryObj } from '@storybook/react';

import PostsList from './PostsList';
import { mockPosts } from '../../../../tests/___mocks___/post.mock';

const meta = {
  title: 'Posts List',
  component: PostsList,
  args: {
    posts: mockPosts
  }
} satisfies Meta<typeof PostsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PostsListStory: Story = {};

