import type { Meta, StoryObj } from '@storybook/react';

import ProjectList from './ProjectList';
import { mockProjects } from '../../../../tests/___mocks___/project.mock';

const meta = {
  title: 'Project List',
  component: ProjectList,
  args: {
    projects: mockProjects
  }
} satisfies Meta<typeof ProjectList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalProjectList: Story = {};

