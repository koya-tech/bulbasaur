import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import Header from './Header';
// eslint-disable-next-line import/extensions

const meta = {
    component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Header',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await expect(canvas.getByText('Home')).toBeInTheDocument();
        await expect(canvas.getByText('Search')).toBeInTheDocument();
        await expect(canvas.getByText('About')).toBeInTheDocument();
        await expect(canvas.getByText('Profile')).toBeInTheDocument();
    },
};
