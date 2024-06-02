import EateryAdress from './EateryAdress';

describe('EateryAdress', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryAdress('777 Dunsmuir Street 17th Floor Vancouver, BC V7Y 1K4').value).toBe('777 Dunsmuir Street 17th Floor Vancouver, BC V7Y 1K4');
    });

    test('Equals test of EateryAdress', () => {
        const EateryAdress1 = new EateryAdress('dummy dummy');
        const EateryAdress2 = new EateryAdress('dummy dummy');
        const EateryAdress3 = new EateryAdress('dummy2 dummy2');
        expect(EateryAdress1.equals(EateryAdress2)).toBeTruthy();
        expect(EateryAdress1.equals(EateryAdress3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryAdress.', () => {
        expect(() => new EateryAdress('x'.repeat(2000))).toThrow('The length of adress is too long.');
    });
});
