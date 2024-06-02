import EateryRegularHolidays from './EateryRegularHolidays';

describe('EateryRegularHolidays', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryRegularHolidays(['sunday']).value).toStrictEqual(['sunday']);
        expect(new EateryRegularHolidays(['monday']).value).toStrictEqual(['monday']);
        expect(new EateryRegularHolidays(['wednesday']).value).toStrictEqual(['wednesday']);
    });

    test('Equals test of EateryRegularHolidays', () => {
        const EateryRegularHolidays1 = new EateryRegularHolidays(['sunday']);
        const EateryRegularHolidays2 = new EateryRegularHolidays(['sunday']);
        const EateryRegularHolidays3 = new EateryRegularHolidays(['thursday']);
        expect(EateryRegularHolidays1.equals(EateryRegularHolidays2)).toBeTruthy();
        expect(EateryRegularHolidays1.equals(EateryRegularHolidays3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryRegularHolidays.', () => {
        expect(() => new EateryRegularHolidays(['manday'])).toThrow('Not match Day of week');
    });
});
