import InMemoryEateryRepository from '../../infrastructure/shared/InMemoryEateryRepository';
import Eatery from '../entities/Eatery';
import EateryAdress from '../valueObject/eatery/EateryAdress';
import EateryBusinessHours from '../valueObject/eatery/EateryBusinessHours';
import EateryCategory from '../valueObject/eatery/EateryCategory';
import EateryCountry from '../valueObject/eatery/EateryCountry';
import EateryDescription from '../valueObject/eatery/EateryDescription';
import EateryImages from '../valueObject/eatery/EateryImages';
import EateryLocation from '../valueObject/eatery/EateryLocation';
import EateryName from '../valueObject/eatery/EateryName';
import EateryRating from '../valueObject/eatery/EateryRating';
import EateryRegularHolidays from '../valueObject/eatery/EateryRegularHolidays';
import EateryDomainService from './EateryDomainService';

describe('EateryDomainService', () => {
    let eateryDomainService: EateryDomainService;
    let inMemoryEateryRepository: InMemoryEateryRepository;
    let beforeEachEatery: Eatery;

    const sampleEateryName = new EateryName('subTest Eatery');
    const sampleEateryCategory = new EateryCategory('Western');
    const sampleEateryDescription = new EateryDescription('Description');
    const sampleEateryRating = new EateryRating(4.5);
    const sampleEateryAddress = new EateryAdress('123 Test St');
    const sampleEateryLocation = new EateryLocation([56, 78]);
    const sampleEateryCountry = new EateryCountry('JPN');
    const sampleEateryBusinessHours = new EateryBusinessHours(['08:00', '17:00']);
    const sampleEateryRegularHolidays = new EateryRegularHolidays(['sunday']);
    const sampleEateryImages = new EateryImages(['image1.jpg', 'image2.jpg']);
    const sampleEatery = Eatery.create(
        sampleEateryName,
        sampleEateryCategory,
        sampleEateryDescription,
        sampleEateryRating,
        sampleEateryAddress,
        sampleEateryLocation,
        sampleEateryCountry,
        sampleEateryBusinessHours,
        sampleEateryRegularHolidays,
        sampleEateryImages,
    );

    beforeEach(async () => {
        inMemoryEateryRepository = new InMemoryEateryRepository();
        eateryDomainService = new EateryDomainService(inMemoryEateryRepository);
        const beforeEachEateryName = new EateryName('Test Eatery');
        const beforeEachEateryCategory = new EateryCategory('Western');
        const beforeEachEateryDescription = new EateryDescription('Description');
        const beforeEachEateryRating = new EateryRating(4.5);
        const beforeEachEateryAddress = new EateryAdress('123 Test St');
        const beforeEachEateryLocation = new EateryLocation([56, 78]);
        const beforeEachEateryCountry = new EateryCountry('JPN');
        const beforeEachEateryBusinessHours = new EateryBusinessHours(['08:00', '17:00']);
        const beforeEachEateryRegularHolidays = new EateryRegularHolidays(['sunday']);
        const beforeEachEateryImages = new EateryImages(['image1.jpg', 'image2.jpg']);
        beforeEachEatery = Eatery.create(
            beforeEachEateryName,
            beforeEachEateryCategory,
            beforeEachEateryDescription,
            beforeEachEateryRating,
            beforeEachEateryAddress,
            beforeEachEateryLocation,
            beforeEachEateryCountry,
            beforeEachEateryBusinessHours,
            beforeEachEateryRegularHolidays,
            beforeEachEateryImages,
        );
        await inMemoryEateryRepository.save(beforeEachEatery);
    });

    test('return true when same eateryname TEST exist in DB', async () => {
        const result = await eateryDomainService.IsEateryNameDuplicateCheck(beforeEachEatery);
        expect(result).toBeTruthy();
    });

    test('return true when same eateryname TEST does not exist in DB', async () => {
        const result = await eateryDomainService.IsEateryNameDuplicateCheck(sampleEatery);
        expect(result).toBeFalsy();
    });

    test('deleteEatery function test', async () => {
        await eateryDomainService.deleteEatery(beforeEachEatery);
        const target = await inMemoryEateryRepository.find(beforeEachEatery);
        expect(target).toBeNull();
    });

    test('registerEatery function  test', async () => {
        await eateryDomainService.registerEatery(sampleEatery);
        const target = await inMemoryEateryRepository.find(sampleEatery);
        expect(target).toBe(sampleEatery);
    });

    test('updateEatery function test', async () => {
        const willUpdateEatery = await inMemoryEateryRepository.find(beforeEachEatery);
        if (willUpdateEatery == null) {
            throw new Error('Eatery not found.');
        }
        const updatedEatery = Eatery.reconstuct(
            willUpdateEatery.eateryId,
            new EateryName('updatedEatery'),
            willUpdateEatery.eateryCategory,
            willUpdateEatery.eateryDescription,
            willUpdateEatery.eateryRating,
            willUpdateEatery.eateryAddress,
            willUpdateEatery.eateryLocation,
            willUpdateEatery.eateryContry,
            willUpdateEatery.eateryBusinessHours,
            willUpdateEatery.eateryRegularHolidays,
            willUpdateEatery.eateryImages,
        );
        await eateryDomainService.updateEatery(updatedEatery);
        const updatedEateryInDB = await inMemoryEateryRepository.find(updatedEatery);
        expect(updatedEateryInDB).toBe(updatedEatery);
    });
});
