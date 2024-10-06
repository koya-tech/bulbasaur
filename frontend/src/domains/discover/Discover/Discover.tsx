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
                        eateryName={data.eateryName}
                        eateryDescription={data.eateryDescription}
                        eateryAddress={data.eateryAddress}
                        eateryImage={data.eateryImages[0].imgUrl}
                        eateryRating={data.eateryRating}
                    />
                ))}
            </div>
            <div className="basis-1/2 z-40">
                <LeafletMap />
            </div>
        </div>
    );
}

export default Discover;
