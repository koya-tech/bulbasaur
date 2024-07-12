import mongoose from 'mongoose';
import UserId from './UserId';

describe('UserId', () => {
    const objectId1 = new mongoose.Types.ObjectId();
    const objectId2 = new mongoose.Types.ObjectId();

    // * Normal
    test('Normal test', () => {
        expect(new UserId(objectId1).value).toBe(objectId1);
        expect(new UserId(objectId2).value).toBe(objectId2);
    });

    test('Equals test of userid', () => {
        const UserId1 = new UserId(objectId1);
        const UserId2 = new UserId(objectId1);
        const UserId3 = new UserId(objectId2);
        expect(UserId1.equals(UserId2)).toBeTruthy();
        expect(UserId1.equals(UserId3)).toBeFalsy();
    });
});
