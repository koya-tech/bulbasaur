import mongoose from 'mongoose';
import InMemoryEateryReviewRepository from '../../infrastructure/shared/InMemoryEateryReviewRepository';
import EateryReview from '../entities/EateryReview';
import EateryId from '../valueObject/eatery/EateryId';
import EateryReviewComment from '../valueObject/eateryReview/EateryReviewComment';
import EateryReviewRating from '../valueObject/eateryReview/EateryReviewRating';
import UserId from '../valueObject/user/UserId';
import EateryReviewDomainService from './EateryReviewDomainService';
import EateryReviewId from '../valueObject/eateryReview/EateryReviewId';

describe('EateryReviewDomainService', () => {
    let inMemoryEateryReviewRepository: InMemoryEateryReviewRepository;
    let eateryReviewDomainService: EateryReviewDomainService;
    let beforeEachEateryReview: EateryReview;

    const sampleEateryReview = EateryReview.create(
        new EateryReviewId(new mongoose.Types.ObjectId()),
        new EateryReviewComment('sampleComment'),
        new EateryReviewRating(3),
        new EateryId(new mongoose.Types.ObjectId()),
        new UserId(new mongoose.Types.ObjectId()),
    );

    beforeEach(async () => {
        inMemoryEateryReviewRepository = new InMemoryEateryReviewRepository();
        eateryReviewDomainService = new EateryReviewDomainService(inMemoryEateryReviewRepository);
        beforeEachEateryReview = EateryReview.create(
            new EateryReviewId(new mongoose.Types.ObjectId()),
            new EateryReviewComment('EateryReviewComment'),
            new EateryReviewRating(3),
            new EateryId(new mongoose.Types.ObjectId()),
            new UserId(new mongoose.Types.ObjectId()),
        );
        await inMemoryEateryReviewRepository.save(beforeEachEateryReview);
    });

    test('deleteEateryReview function test', async () => {
        await eateryReviewDomainService.deleteEatery(beforeEachEateryReview);
        const target = await inMemoryEateryReviewRepository.find(beforeEachEateryReview);
        expect(target).toBeNull();
    });

    test('registerEateryReview function  test', async () => {
        await eateryReviewDomainService.registerEatery(sampleEateryReview);
        const target = await inMemoryEateryReviewRepository.find(sampleEateryReview);
        expect(target).toBe(sampleEateryReview);
    });

    test('updateEateryReview function test', async () => {
        const willEateryReview = await inMemoryEateryReviewRepository.find(beforeEachEateryReview);
        if (willEateryReview == null) {
            throw new Error('EateryReview not found.');
        }
        const updatedEateryReview = EateryReview.reconstruct(
            willEateryReview.eateryReviewId,
            new EateryReviewComment('updatedCommnet'),
            willEateryReview.eateryReviewRating,
            willEateryReview.eateryId,
            willEateryReview.userId,
        );
        await eateryReviewDomainService.updateEatery(updatedEateryReview);
        const updatedEateryReviewInDB = await inMemoryEateryReviewRepository
            .find(updatedEateryReview);
        expect(updatedEateryReview).toBe(updatedEateryReviewInDB);
    });
});
