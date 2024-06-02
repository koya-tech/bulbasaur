import EateryDescription from './EateryDescription';

describe('EateryDescription', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryDescription('Excepteur dolore id ad dolore est dolore sint veniam ullamco dolor consequat. Tempor ut irure veniam ipsum adipisicing pariatur velit commodo occaecat occaecat. Veniam enim commodo mollit eiusmod deserunt do. Velit consequat officia voluptate laborum sunt. Ut do qui nisi magna mollit ipsum commodo cupidatat Lorem Lorem voluptate. Adipisicing est esse consequat do proident adipisicing ea labore tempor ut occaecat.').value)
            .toBe('Excepteur dolore id ad dolore est dolore sint veniam ullamco dolor consequat. Tempor ut irure veniam ipsum adipisicing pariatur velit commodo occaecat occaecat. Veniam enim commodo mollit eiusmod deserunt do. Velit consequat officia voluptate laborum sunt. Ut do qui nisi magna mollit ipsum commodo cupidatat Lorem Lorem voluptate. Adipisicing est esse consequat do proident adipisicing ea labore tempor ut occaecat.');
    });

    test('Equals test of EateryDescription', () => {
        const EateryDescription1 = new EateryDescription('dummy dummy');
        const EateryDescription2 = new EateryDescription('dummy dummy');
        const EateryDescription3 = new EateryDescription('dummy2 dummy2');
        expect(EateryDescription1.equals(EateryDescription2)).toBeTruthy();
        expect(EateryDescription1.equals(EateryDescription3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryDescription.', () => {
        expect(() => new EateryDescription('x'.repeat(20000))).toThrow('The length of description is too long.');
    });
});
