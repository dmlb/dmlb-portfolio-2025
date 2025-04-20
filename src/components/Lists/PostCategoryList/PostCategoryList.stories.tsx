import type { Meta, StoryObj } from '@storybook/react';

import PostCategoryList from './PostCategoryList';

const meta = {
  title: 'Post Category List',
  component: PostCategoryList,
  args: {
    categories: [
      {
        title: "Category 1",
        slug: "category-1",
      },
      {
        title: "Category 2",
        slug: "category-2",
      },
      {
        title: "Category 3",
        slug: "category-3",
      },
    ]
  }
} satisfies Meta<typeof PostCategoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalPostCategoryList: Story = {};

