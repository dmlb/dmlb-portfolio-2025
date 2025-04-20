import type { Meta, StoryObj } from '@storybook/react';

import AuthorCard from './AuthorCard';
import { mockAuthor } from '../../../../tests/___mocks___/author.mock';

const meta = {
  title: 'Author Card',
  component: AuthorCard,
  args: {
    author: mockAuthor,
  }
} satisfies Meta<typeof AuthorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalAuthorCard: Story = {};

