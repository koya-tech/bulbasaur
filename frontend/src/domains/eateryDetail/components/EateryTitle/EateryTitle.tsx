import EateryInfoProps from './type';

function EateryTitle(eateryInfoProps: EateryInfoProps) {
    const { eateryName, eateryCategory } = eateryInfoProps;
    return (
        <div>
            <p className="text-2xl text-white mix-blend-difference">{eateryName}</p>
            <p className="text-lg text-white mix-blend-difference">{eateryCategory}</p>
        </div>
    );
}

export default EateryTitle;
