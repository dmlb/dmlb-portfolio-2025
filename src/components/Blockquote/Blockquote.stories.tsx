import type { Meta, StoryObj } from '@storybook/react';

import Blockquote from './Blockquote';

const meta = {
  title: 'Blockquote',
  component: Blockquote,
  args: {
    quote: 'Quote info',
    person: 'Name',
    position: 'Position Title',
    company: 'Company Name',
  },
  parameters: {
    actions: { disable: true },
  }
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlockquoteStory: Story = {};

