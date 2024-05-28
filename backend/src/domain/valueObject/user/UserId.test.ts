import { createId } from '@paralleldrive/cuid2';
import UserId from './UserId';

describe('UserId', () => {
    const cuid1 = createId();
    const cuid2 = createId();

    // * Normal
    test('Normal test', () => {
        expect(new UserId(cuid1).value).toBe(cuid1);
        expect(new UserId(cuid2).value).toBe(cuid2);
    });

    test('Equals test of userid', () => {
        const UserId1 = new UserId(cuid1);
        const UserId2 = new UserId(cuid1);
        const UserId3 = new UserId(cuid2);
        expect(UserId1.equals(UserId2)).toBeTruthy();
        expect(UserId1.equals(UserId3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal userid.', () => {
        expect(() => new UserId('not a cuid')).toThrow('This userId is not cuid.');
    });
});
