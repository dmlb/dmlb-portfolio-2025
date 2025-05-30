import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';

import Header from './Header';

const meta = {
  title: 'Header',
  component: Header,
  args: {
    author: {
      name: 'Danielle',
      title: 'Software Engineer',
    }
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    const logo = canvas.getByAltText('curly braces inside a lens');
    expect(logo).toBeInTheDocument();

    const name = canvas.getByText(`${args?.author?.name}`);
    expect(name).toBeInTheDocument();

    const title = canvas.getByText(`${args?.author?.title}`);
    expect(title).toBeInTheDocument();
  }
};

