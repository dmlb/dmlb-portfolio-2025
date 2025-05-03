import type { Meta, StoryObj } from '@storybook/react';

import ProjectFilter from './ProjectFilter';
import { mockProjects } from '../../../tests/___mocks___/project.mock';
import { mockProjectType } from '../../../tests/___mocks___/project-type.mock';

const meta = {
  title: 'Project Filter',
  component: ProjectFilter,
  args: {
    projects: mockProjects,
    projectTypeList: mockProjectType
  }
} satisfies Meta<typeof ProjectFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectFilterStory: Story = {};

