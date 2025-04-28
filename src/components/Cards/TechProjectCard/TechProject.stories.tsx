import type { Meta, StoryObj } from '@storybook/react';

import TechProjectCard from './TechProjectCard';
import { mockProjects } from '../../../../tests/___mocks___/project.mock';

const meta = {
  title: 'Tech Project Card',
  component: TechProjectCard,
  args: {
    project: mockProjects[0],
    cardVariantClasses: 'card--translucent card--bordered'
  }
} satisfies Meta<typeof TechProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalTechProjectCard: Story = {};

