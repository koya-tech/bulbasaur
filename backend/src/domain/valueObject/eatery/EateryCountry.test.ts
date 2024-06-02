import EateryCountry from './EateryCountry';

describe('EateryCountry', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryCountry('JPN').value).toStrictEqual('JPN');
        expect(new EateryCountry('USA').value).toStrictEqual('USA');
    });

    test('Equals test of EateryCountry', () => {
        const EateryCountry1 = new EateryCountry('JPN');
        const EateryCountry2 = new EateryCountry('JPN');
        const EateryCountry3 = new EateryCountry('USA');
        expect(EateryCountry1.equals(EateryCountry2)).toBeTruthy();
        expect(EateryCountry1.equals(EateryCountry3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryCountry.', () => {
        expect(() => new EateryCountry('XYZ')).toThrow('Not match country code');
        expect(() => new EateryCountry('JPM')).toThrow('Not match country code');
    });
});
