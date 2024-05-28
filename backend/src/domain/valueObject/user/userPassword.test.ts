import bcrypt from 'bcrypt';
import UserPassword from './userPassword';

describe('UserPassword', () => {
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\\/\\P4$$w0rD';
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(myPlaintextPassword, salt);

    test('should hash the password correctly', () => {
        const userPassword = new UserPassword(hashedPassword);
        expect(bcrypt.compareSync(myPlaintextPassword, userPassword.value)).toBe(true);
    });

    test('Equals test of username', () => {
        const userPassword1 = new UserPassword(hashedPassword);
        const userPassword2 = new UserPassword(hashedPassword);
        expect(userPassword1.equals(userPassword2)).toBeTruthy();
    });

    test('should not validate an incorrect password', () => {
        const userPassword = new UserPassword(hashedPassword);
        expect(bcrypt.compareSync('wrongpassword', userPassword.value)).toBe(false);
    });
});
