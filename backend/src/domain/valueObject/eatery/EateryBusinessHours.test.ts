import EateryBusinessHours from './EateryBusinessHours';

describe('EateryBusinessHours', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryBusinessHours(['08:30', '19:00']).value).toStrictEqual(['08:30', '19:00']);
        expect(new EateryBusinessHours(['00:00', '23:59']).value).toStrictEqual(['00:00', '23:59']);
    });

    test('Equals test of EateryBusinessHours', () => {
        const EateryBusinessHours1 = new EateryBusinessHours(['08:30', '19:00']);
        const EateryBusinessHours2 = new EateryBusinessHours(['08:30', '19:00']);
        const EateryBusinessHours3 = new EateryBusinessHours(['00:00', '23:59']);
        expect(EateryBusinessHours1.equals(EateryBusinessHours2)).toBeTruthy();
        expect(EateryBusinessHours1.equals(EateryBusinessHours3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryBusinessHours.', () => {
        expect(() => new EateryBusinessHours(['009:00', '3:59'])).toThrow('Setted Times is not correct.');
        expect(() => new EateryBusinessHours(['17:00', '05:59'])).toThrow('Setted Hours is not correct.');
    });
});
