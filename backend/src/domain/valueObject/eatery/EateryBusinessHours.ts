import ValueObject from '../AbstractValueObject';

export default class EateryBusinessHours extends ValueObject<[string, string], 'EateryBusinessHours'> {
    constructor(value: [string, string]) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: [string, string]): void {
        const timePattern = /^[0-2]\d:[0-5]\d$/;
        value.forEach((v) => {
            if (!timePattern.test(v)) {
                throw new Error('Setted Times is not correct.');
            }
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [startHours, startMinutes] = value[0].split(':').map(Number);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [endHours, endMinutes] = value[1].split(':').map(Number);

        if (endHours < startHours) { throw new Error('Setted Hours is not correct.'); }
    }
}
