import type { Meta, StoryObj } from '@storybook/react';
import { within, expect, userEvent, fn } from '@storybook/test';

import Slider from './Slider';
import Blockquote from '../Blockquote/Blockquote';
import AuthorCard from '../Cards/AuthorCard/AuthorCard';
import { mockAuthor } from '../../../tests/___mocks___/author.mock';

const meta = {
    title: 'Slider',
    component: Slider,
    args: {
        type: 'slide',
        slides: [],
        showPrevNextButtons: true,
        showPageNumber: true,
        paginationNavigationType: 'dots',
    }
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderStory: Story = {
    args: {
        slides: [
            <Blockquote quote='my quote' person='me' company='cake' position='disrupter' />,
            <Blockquote quote='my quote' person='me' company='cake' position='disrupter' />,
            <Blockquote quote='my quote' person='me' company='cake' position='disrupter' />,
            <AuthorCard author={mockAuthor} />
        ]
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
    }
};

