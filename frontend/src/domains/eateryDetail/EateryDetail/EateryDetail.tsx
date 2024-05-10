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
                storeName={data.storeName}
                genre={data.genre}
            />
            <ImgDisplay storeImages={data.storeImages} />
            <EateryInfo
                storeDescription={data.storeDescription}
                storeScore={data.storeScore}
                conuntry={data.conuntry}
                storeAdress={data.storeAdress}
                businessHours={data.businessHours}
                RegularHoliday={data.RegularHoliday}
                createdAt={data.createdAt}
                updatedAt={data.updatedAt}
            />
            <EateryReviews />
            <EasteryLocation location={data.location} />
        </div>
    );
}

export default EateryDetail;
