import UserImg from './userImg';

describe('UserImg', () => {
    // * Normal
    test('Normal test', () => {
        expect(new UserImg('sample.jpg').value).toBe('sample.jpg');
        expect(new UserImg('sample2.jpg').value).toBe('sample2.jpg');
    });

    test('Equals test of username', () => {
        const UserImg1 = new UserImg('sample.jpg');
        const UserImg2 = new UserImg('sample.jpg');
        const UserImg3 = new UserImg('sample2.jpg');
        expect(UserImg1.equals(UserImg2)).toBeTruthy();
        expect(UserImg1.equals(UserImg3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal username.', () => {
        expect(() => new UserImg('x'.repeat(2000))).toThrow('The length of your imgUrl is too long.');
        expect(() => new UserImg('.jpg')).toThrow('The length of your imgUrl is too short.');
    });
});
