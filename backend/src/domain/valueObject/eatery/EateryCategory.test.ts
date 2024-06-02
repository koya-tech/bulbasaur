import EateryCategory from './EateryCategory';

describe('EateryCategory', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryCategory('Western').value).toStrictEqual('Western');
        expect(new EateryCategory('Chinese').value).toStrictEqual('Chinese');
        expect(new EateryCategory('Japanese').value).toStrictEqual('Japanese');
        expect(new EateryCategory('Italian').value).toStrictEqual('Italian');
        expect(new EateryCategory('Others').value).toStrictEqual('Others');
    });

    test('Equals test of EateryCategory', () => {
        const EateryCategory1 = new EateryCategory('Others');
        const EateryCategory2 = new EateryCategory('Others');
        const EateryCategory3 = new EateryCategory('Italian');
        expect(EateryCategory1.equals(EateryCategory2)).toBeTruthy();
        expect(EateryCategory1.equals(EateryCategory3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryCategory.', () => {
        expect(() => new EateryCategory('Canadian food')).toThrow('Not match Category');
    });
});
