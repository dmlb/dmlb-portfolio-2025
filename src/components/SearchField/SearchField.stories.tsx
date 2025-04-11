import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, userEvent, fn } from '@storybook/test';

import SearchField from './SearchField';

const meta = {
  title: 'Search Field',
  component: SearchField,
  args: {
    fieldInfo: {
        label: 'Search',
        name: 'search',
        id: 'mySearch'
    },
    searchValue: '',
    setSearchValue: fn()
  }
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchFieldStory: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const search = canvas.getByRole<HTMLInputElement>('searchbox');
    expect(search).toBeInTheDocument();

    const clearButton = canvas.getByRole('button', { name: 'clear search' });
    expect(clearButton).toBeInTheDocument();


    expect(search).toHaveValue('');
    await userEvent.click(clearButton);

    await userEvent.type(search, 'searching for..')
    expect(args.setSearchValue).toHaveBeenCalled();

    await userEvent.click(clearButton);
    expect(args.setSearchValue).toHaveBeenCalledWith(null);
  }
};

