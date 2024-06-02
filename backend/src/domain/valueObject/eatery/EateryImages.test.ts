import EateryImages from './EateryImages';

describe('EateryImages', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryImages(['sample.jpg']).value).toStrictEqual(['sample.jpg']);
        expect(new EateryImages(['sample.jpg', 'sample2.jpg']).value)
            .toStrictEqual(['sample.jpg', 'sample2.jpg']);
    });

    test('Equals test of username', () => {
        const EateryImages1 = new EateryImages(['sample.jpg', 'sample2.jpg']);
        const EateryImages2 = new EateryImages(['sample.jpg', 'sample2.jpg']);
        const EateryImages3 = new EateryImages(['sample.jpg']);
        expect(EateryImages1.equals(EateryImages2)).toBeTruthy();
        expect(EateryImages1.equals(EateryImages3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal username.', () => {
        expect(() => new EateryImages(['x'.repeat(2000), 'y'.repeat(50)])).toThrow('The length of your imgUrl is too long.');
        expect(() => new EateryImages(['.jpg'])).toThrow('The length of your imgUrl is too short.');
    });
});
