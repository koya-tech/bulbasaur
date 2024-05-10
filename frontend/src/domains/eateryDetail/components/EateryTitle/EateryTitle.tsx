import EateryInfoProps from './type';

function EateryTitle(eateryInfoProps: EateryInfoProps) {
    const { storeName, genre } = eateryInfoProps;
    return (
        <div>
            <p className="text-2xl text-white mix-blend-difference">{storeName}</p>
            <p className="text-lg text-white mix-blend-difference">{genre}</p>
        </div>
    );
}

export default EateryTitle;
