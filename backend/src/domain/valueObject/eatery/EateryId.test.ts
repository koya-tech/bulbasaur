import mongoose from 'mongoose';
import EateryId from './EateryId';

describe('EateryId', () => {
    const objectId1 = new mongoose.Types.ObjectId();
    const objectId2 = new mongoose.Types.ObjectId();

    // * Normal
    test('Normal test', () => {
        expect(new EateryId(objectId1).value).toBe(objectId1);
        expect(new EateryId(objectId2).value).toBe(objectId2);
    });

    test('Equals test of EateryId', () => {
        const EateryId1 = new EateryId(objectId1);
        const EateryId2 = new EateryId(objectId1);
        const EateryId3 = new EateryId(objectId2);
        expect(EateryId1.equals(EateryId2)).toBeTruthy();
        expect(EateryId1.equals(EateryId3)).toBeFalsy();
    });
});
