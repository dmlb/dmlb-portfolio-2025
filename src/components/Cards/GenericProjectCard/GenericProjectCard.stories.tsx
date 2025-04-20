import type { Meta, StoryObj } from '@storybook/react';

import GenericProjectCard from './GenericProjectCard';
import { mockMoreStuffProjects } from '../../../../tests/___mocks___/more-stuff.mock';

const meta = {
  title: 'Generic Project Card',
  component: GenericProjectCard,
  args: {
    project: mockMoreStuffProjects[0]
  }
} satisfies Meta<typeof GenericProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalGenericProjectCard: Story = {};

