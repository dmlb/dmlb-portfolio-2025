import type { Meta, StoryObj } from '@storybook/react';

import GenericProjectCard from './GenericProjectCard';
import { mockMoreStuffProjects } from '../../../../tests/___mocks___/more-stuff.mock';

const meta = {
  title: 'Generic Project Card',
  component: GenericProjectCard,
  args: {
    project: mockMoreStuffProjects[0],
    cardVariantClasses: 'card--translucent card--bordered'
  }
} satisfies Meta<typeof GenericProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenericProjectCardStory: Story = {};

