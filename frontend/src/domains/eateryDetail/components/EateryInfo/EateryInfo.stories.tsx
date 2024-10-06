import type { Meta, StoryObj } from '@storybook/react';
import EateryInfo from './EateryInfo';

const meta: Meta<typeof EateryInfo> = {
    component: EateryInfo,
};

export default meta;
type Story = StoryObj<typeof EateryInfo>;

export const Primary: Story = {
    args: {
        eateryAddress: 'address',
        eateryDescription: 'Description',
        eateryBusinessHours: {
            start: '9:00',
            end: '21:00',
        },
        eateryRegularHolidays: 'eateryRegularHolidays',
        eateryRating: 4.5,
        updatedAt: 'Updated Time',
    },
};
