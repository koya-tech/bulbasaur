import eatrySample from '../../sampleData';
import EateryCard from '../components/EateryCard/EateryCard';
import LeafletMap from '../components/LeafletMap/LeafletMap';

const sampleData = eatrySample;

function Discover() {
    return (
        <div className="flex">
            <div className="basis-1/2 h-screen overflow-y-scroll">
                {sampleData.map((data) => (
                    <EateryCard
                        storeName={data.storeName}
                        storeDescription={data.storeDescription}
                        storeAdress={data.storeAdress}
                        storeImage={data.storeImages[0].imgUrl}
                        storeScore={data.storeScore}
                    />
                ))}
            </div>
            <div className="basis-1/2">
                <LeafletMap />
            </div>
        </div>
    );
}

export default Discover;
