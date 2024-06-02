import EateryName from './EateryName';

describe('EateryName', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryName('MAGNAFONE').value).toBe('MAGNAFONE');
        expect(new EateryName('PETICULAR').value).toBe('PETICULAR');
    });

    test('Equals test of EateryName', () => {
        const EateryName1 = new EateryName('dummy dummy');
        const EateryName2 = new EateryName('dummy dummy');
        const EateryName3 = new EateryName('dummy2 dummy2');
        expect(EateryName1.equals(EateryName2)).toBeTruthy();
        expect(EateryName1.equals(EateryName3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryName.', () => {
        expect(() => new EateryName('x'.repeat(2000))).toThrow('The length of eatery name is too long.');
        expect(() => new EateryName('')).toThrow('The length of eatery name is too short.');
    });
});
