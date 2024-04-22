import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, expect } from '@storybook/test';
import Footer from './Footer';
// eslint-disable-next-line import/extensions
import { webList, aboutList } from '@/mappingItem/footer';

const meta = {
    title: 'Bulbasaur/Footer',
    component: Footer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Footer',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await Promise.all(webList.map(async (item) => {
            await expect(canvas.getByText(`${item.label}`)).toBeInTheDocument();
        }));

        await Promise.all(aboutList.map(async (item) => {
            await expect(canvas.getByText(`${item.label}`)).toBeInTheDocument();
        }));

        await expect(canvas.getByText('Copyright © 2024 Koya-tech')).toBeInTheDocument();
        await expect(canvas.getByTestId('twitter-icon')).toBeInTheDocument();
        await expect(canvas.getByTestId('github-icon')).toBeInTheDocument();
        await expect(canvas.getByTestId('portfolio-icon')).toBeInTheDocument();
    },
};
