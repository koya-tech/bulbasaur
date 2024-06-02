import UserImage from './UserImage';

describe('UserImage', () => {
    // * Normal
    test('Normal test', () => {
        expect(new UserImage('sample.jpg').value).toBe('sample.jpg');
        expect(new UserImage('sample2.jpg').value).toBe('sample2.jpg');
    });

    test('Equals test of username', () => {
        const UserImage1 = new UserImage('sample.jpg');
        const UserImage2 = new UserImage('sample.jpg');
        const UserImage3 = new UserImage('sample2.jpg');
        expect(UserImage1.equals(UserImage2)).toBeTruthy();
        expect(UserImage1.equals(UserImage3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal username.', () => {
        expect(() => new UserImage('x'.repeat(2000))).toThrow('The length of your imgUrl is too long.');
        expect(() => new UserImage('.jpg')).toThrow('The length of your imgUrl is too short.');
    });
});
