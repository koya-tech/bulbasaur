import EateryReviewComment from './EateryReviewComment';

describe('EateryReviewComment', () => {
    // * Normal
    test('Normal test', () => {
        expect(new EateryReviewComment('Excepteur dolore id ad dolore est dolore sint veniam ullamco dolor consequat. Tempor ut').value)
            .toBe('Excepteur dolore id ad dolore est dolore sint veniam ullamco dolor consequat. Tempor ut');
    });

    test('Equals test of EateryReviewComment', () => {
        const EateryReviewComment1 = new EateryReviewComment('dummy dummy');
        const EateryReviewComment2 = new EateryReviewComment('dummy dummy');
        const EateryReviewComment3 = new EateryReviewComment('dummy2 dummy2');
        expect(EateryReviewComment1.equals(EateryReviewComment2)).toBeTruthy();
        expect(EateryReviewComment1.equals(EateryReviewComment3)).toBeFalsy();
    });

    // * Abnormal
    test('Abnormal test. Throw Error when abnormal EateryReviewComment.', () => {
        expect(() => new EateryReviewComment('x'.repeat(20000))).toThrow('The length of comment is too long.');
        expect(() => new EateryReviewComment('')).toThrow('The length of comment is too small.');
    });
});
