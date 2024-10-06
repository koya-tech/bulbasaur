type EateryInfoProps = {
    eateryDescription: string,
    eateryRating: number,
    eateryCountry: string,
    eateryAddress: string,
    eateryBusinessHours: {
        start: string,
        end: string,
    },
    eateryRegularHolidays: string,
    createdAt: string,
    updatedAt: string,
};

export default EateryInfoProps;
