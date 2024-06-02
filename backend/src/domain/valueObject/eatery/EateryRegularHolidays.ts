import ValueObject from '../AbstractValueObject';

export default class EateryRegularHolidays extends ValueObject<string[], 'EateryRegularHolidays'> {
    constructor(value: string[]) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string[]): void {
        const validDayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        value.forEach((v) => {
            if (!validDayOfWeek.includes(v)) { throw new Error('Not match Day of week'); }
        });
    }
}
