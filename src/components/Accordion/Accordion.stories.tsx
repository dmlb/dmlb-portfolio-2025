import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, userEvent } from '@storybook/test';
import Accordion from './Accordion';

const meta = {
  title: 'Accordion',
  component: Accordion,
  args: {
    title: 'Accordion Title',
    children: 'Accordion Content',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClosedAccordion: Story = {
  args: {
    isOpen: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText('Accordion Title');
    summary.click();
    const content = canvas.getByText('Accordion Content');
    expect(content).toBeVisible();
    summary.click();
    expect(content).not.toBeVisible();

    await userEvent.type(summary, '{space}')
    expect(content).toBeVisible();
    await userEvent.type(summary, '{space}')
    expect(content).not.toBeVisible();
  }
};


export const OpenAccordion: Story = {
  args: {
    isOpen: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const summary = canvas.getByText('Accordion Title');
    const content = canvas.getByText('Accordion Content');
    expect(content).toBeVisible();
    summary.click();
    expect(content).not.toBeVisible();
    await userEvent.type(summary, '{space}')
  }
};

