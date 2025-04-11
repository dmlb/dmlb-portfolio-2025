import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, userEvent } from '@storybook/test';

import Blockquote from './Blockquote';

const meta = {
  title: 'Blockquote',
  component: Blockquote,
  args: {
    quote: 'Quote info',
    person: 'Name',
    position: 'Position Title',
    company: 'Company Name',
  }
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalBlockquote: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('Blockquote Title');
    summary.click();
    const content = canvas.getByText('Blockquote Content');
    expect(content).toBeVisible();
    summary.click();
    expect(content).not.toBeVisible();

    await userEvent.type(summary, '{space}')
    expect(content).toBeVisible();
    await userEvent.type(summary, '{space}')
    expect(content).not.toBeVisible();
  }
};

