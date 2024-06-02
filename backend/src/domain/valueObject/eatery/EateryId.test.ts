import { createId } from '@paralleldrive/cuid2';
import EateryId from './EateryId';

describe('EateryId', () => {
    const cuid1 = createId();
    const cuid2 = createId();

    // * Normal
    test('Normal test', () => {
        expect(new EateryId(cuid1).value).toBe(cuid1);
        expect(new EateryId(cuid2).value).toBe(cuid2);
    });

    test('Equals test of EateryId', () => {
        const EateryId1 = new EateryId(cuid1);
        const EateryId2 = new EateryId(cuid1);
        const EateryId3 = new EateryId(cuid2);
        expect(EateryId1.equals(EateryId2)).toBeTruthy();
        expect(EateryId1.equals(EateryId3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryId.', () => {
        expect(() => new EateryId('not a cuid')).toThrow('This EateryId is not cuid.');
    });
});
