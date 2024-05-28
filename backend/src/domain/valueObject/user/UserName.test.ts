import UserName from './UserName';

describe('UserName', () => {
    // * Normal
    test('Normal test', () => {
        expect(new UserName('Elon Mask').value).toBe('Elon Mask');
        expect(new UserName('Hayao Miyazaki').value).toBe('Hayao Miyazaki');
    });

    test('Equals test of username', () => {
        const UserName1 = new UserName('dummy dummy');
        const UserName2 = new UserName('dummy dummy');
        const UserName3 = new UserName('dummy2 dummy2');
        expect(UserName1.equals(UserName2)).toBeTruthy();
        expect(UserName1.equals(UserName3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal username.', () => {
        expect(() => new UserName('x'.repeat(2000))).toThrow('The length of your name is too long.');
        expect(() => new UserName('')).toThrow('The length of your name is too short.');
    });
});
