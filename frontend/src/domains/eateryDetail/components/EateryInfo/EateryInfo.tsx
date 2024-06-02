import EateryInfoProps from './type';

function EateryInfo(eatryInfoProps: EateryInfoProps) {
    const {
        eateryDescription,
        eateryAdress,
        eateryRating,
        eateryBusinessHours,
        eateryRegularHolidays,
        updatedAt,
    } = eatryInfoProps;
    return (
        <div className="p-3">
            <div>
                <p className="text-xl">
                    Adress
                </p>
                <p>
                    {eateryAdress}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    Description
                </p>
                <p>
                    {eateryDescription}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    eateryBusinessHours
                </p>
                <p>
                    {eateryBusinessHours.start}
                    {eateryBusinessHours.end}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    eateryRegularHolidays
                </p>
                <p>
                    {eateryRegularHolidays}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    Score
                </p>
                <p>
                    {eateryRating}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    Updated Time
                </p>
                <p>
                    {updatedAt}
                </p>
            </div>
        </div>
    );
}

export default EateryInfo;
