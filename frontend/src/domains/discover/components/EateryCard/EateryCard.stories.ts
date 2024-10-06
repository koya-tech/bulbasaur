import type { Meta, StoryObj } from '@storybook/react';
import EateryCard from './EateryCard';

const meta: Meta<typeof EateryCard> = {
    component: EateryCard,
};

export default meta;
type Story = StoryObj<typeof EateryCard>;

export const Primary: Story = {
    args: {
        eateryName: 'eateryName',
        eateryRating: 4.5,
        eateryDescription: 'eateryDescription',
        eateryImage: '/discover.jpg',
        eateryAddress: 'eateryAddress',
    },
};
