import type { Meta, StoryObj } from '@storybook/react';

import ProjectTypeRadioFieldset from './ProjectTypeRadioFieldset';
import { mockProjectType } from '../../../tests/___mocks___/project-type.mock';

const meta = {
  title: 'Project Type Radio Fieldset',
  component: ProjectTypeRadioFieldset,
  args: {
    projectTypeList: mockProjectType,
    fieldInfo: {
      legend: 'Project Type',
      name: 'project-type',
    },
    selectedValue: null,
    setSelectedValue: (value: string | null) => {
      console.log('Selected value:', value);
    }
  }
} satisfies Meta<typeof ProjectTypeRadioFieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectTypeRadioFieldsetStory: Story = {};

