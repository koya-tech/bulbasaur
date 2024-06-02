import eatrySample from '../../sampleData';
import EateryInfo from '../components/EateryInfo/EateryInfo';
import EasteryLocation from '../components/EateryLocation/EasteryLocation';
import EateryTitle from '../components/EateryTitle/EateryTitle';
import EateryReviews from '../components/EatryReviews/EateryReviews';
import ImgDisplay from '../components/ImgDisplay/ImgDisplay';

function EateryDetail() {
    const sampleData = eatrySample;
    const data = sampleData[0];
    return (
        <div>
            <EateryTitle
                eateryName={data.eateryName}
                eateryCategory={data.eateryCategory}
            />
            <ImgDisplay eateryImages={data.eateryImages} />
            <EateryInfo
                eateryDescription={data.eateryDescription}
                eateryRating={data.eateryRating}
                eateryCountry={data.eateryCountry}
                eateryAdress={data.eateryAdress}
                eateryBusinessHours={data.eateryBusinessHours}
                eateryRegularHolidays={data.eateryRegularHolidays}
                createdAt={data.createdAt}
                updatedAt={data.updatedAt}
            />
            <EateryReviews />
            <EasteryLocation eateryAdress={data.location} />
        </div>
    );
}

export default EateryDetail;
