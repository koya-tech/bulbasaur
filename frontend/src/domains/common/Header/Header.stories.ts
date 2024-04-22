import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, expect } from '@storybook/test';
import Header from './Header';
// eslint-disable-next-line import/extensions

const meta = {
    title: 'Bulbasaur/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
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
