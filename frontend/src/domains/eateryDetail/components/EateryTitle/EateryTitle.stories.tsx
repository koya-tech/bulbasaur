import type { Meta, StoryObj } from '@storybook/react';
import EateryTitle from './EateryTitle';

const meta: Meta<typeof EateryTitle> = {
    component: EateryTitle,
};

export default meta;
type Story = StoryObj<typeof EateryTitle>;

export const Primary: Story = {
    args: {
        eateryName: 'eateryName',
        eateryCategory: 'eateryCategory',
    },
};
