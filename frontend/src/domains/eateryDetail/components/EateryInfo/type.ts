type EateryInfoProps = {
    storeDescription: string,
    storeScore: number,
    conuntry: string,
    storeAdress: string,
    businessHours: {
        start: string,
        end: string,
    },
    RegularHoliday: string,
    createdAt: string,
    updatedAt: string,
};

export default EateryInfoProps;
