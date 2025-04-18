import type { Meta, StoryObj } from '@storybook/react';

import AuthorCard from './AuthorCard';

const meta = {
  title: 'Author Card',
  component: AuthorCard,
  args: {
    author: {
      name: "Author Name",
      pronouns: "they / them",
      title: "Author Title",
      shortBio: "Author short bio",
      image: {
        _type: "image",
        asset: null,
        alt: "Author Image",
      },
    }
  }
} satisfies Meta<typeof AuthorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalAuthorCard: Story = {};

