import type { Meta, StoryObj } from '@storybook/react';
import ImgDisplay from './ImgDisplay';

const meta: Meta<typeof ImgDisplay> = {
    component: ImgDisplay,
};

export default meta;
type Story = StoryObj<typeof ImgDisplay>;

export const Primary: Story = {
    args: {
        eateryImages: [
            {
                index: 0,
                imgUrl: '/discover.jpg',
            },
            {
                index: 1,
                imgUrl: '/share.jpg',
            },
        ],
    },
};
