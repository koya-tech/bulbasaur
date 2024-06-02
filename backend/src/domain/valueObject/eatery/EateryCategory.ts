import ValueObject from '../AbstractValueObject';

export default class EateryCategory extends ValueObject<string, 'EateryCategory'> {
    constructor(value: string) {
        super(value);
    }

    // eslint-disable-next-line class-methods-use-this
    protected validate(value: string): void {
        const validCategory = ['Western', 'Chinese', 'Japanese', 'Italian', 'Others'];
        if (!validCategory.includes(value)) { throw new Error('Not match Category'); }
    }
}
