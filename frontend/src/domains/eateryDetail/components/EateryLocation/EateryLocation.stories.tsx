import type { Meta, StoryObj } from '@storybook/react';
import EateryLocation from './EateryLocation';

const meta: Meta<typeof EateryLocation> = {
    component: EateryLocation,
};

export default meta;
type Story = StoryObj<typeof EateryLocation>;

export const Primary: Story = {
    args: {
        eateryAddress: {
            latitude: 37.7749,
            longitude: -122.4194,
        },
    },
};
