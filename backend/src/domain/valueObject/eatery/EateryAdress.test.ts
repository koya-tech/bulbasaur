import EateryAddress from './EateryAddress';

describe('EateryAddress', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryAddress('777 Dunsmuir Street 17th Floor Vancouver, BC V7Y 1K4').value).toBe('777 Dunsmuir Street 17th Floor Vancouver, BC V7Y 1K4');
    });

    test('Equals test of EateryAddress', () => {
        const EateryAddress1 = new EateryAddress('dummy dummy');
        const EateryAddress2 = new EateryAddress('dummy dummy');
        const EateryAddress3 = new EateryAddress('dummy2 dummy2');
        expect(EateryAddress1.equals(EateryAddress2)).toBeTruthy();
        expect(EateryAddress1.equals(EateryAddress3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryAddress.', () => {
        expect(() => new EateryAddress('x'.repeat(2000))).toThrow('The length of adress is too long.');
    });
});
