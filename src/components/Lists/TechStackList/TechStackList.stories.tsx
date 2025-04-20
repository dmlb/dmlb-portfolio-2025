import type { Meta, StoryObj } from '@storybook/react';

import TechStackList from './TechStackList';
import { mockTechStack } from '../../../../tests/___mocks___/techStack.mock';

const meta = {
  title: 'Tech Stack List',
  component: TechStackList,
  args: {
    iconOnly: true,
    iconSize: 24,
    knowsAboutMeta: false,
    techStack: mockTechStack
  }
} satisfies Meta<typeof TechStackList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalTechStackList: Story = {};

