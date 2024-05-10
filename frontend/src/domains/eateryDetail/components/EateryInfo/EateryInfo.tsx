import EateryInfoProps from './type';

function EateryInfo(eatryInfoProps: EateryInfoProps) {
    const {
        storeDescription,
        storeAdress,
        storeScore,
        businessHours,
        RegularHoliday,
        updatedAt,
    } = eatryInfoProps;
    return (
        <div className="p-3">
            <div>
                <p className="text-xl">
                    Adress
                </p>
                <p>
                    {storeAdress}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    Description
                </p>
                <p>
                    {storeDescription}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    businessHours
                </p>
                <p>
                    {businessHours.start}
                    {businessHours.end}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    RegularHoliday
                </p>
                <p>
                    {RegularHoliday}
                </p>
            </div>
            <div>
                <p className="text-xl">
                    Score
                </p>
                <p>
                    {storeScore}
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
