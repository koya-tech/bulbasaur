import { MapContainer, Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer';
import './leaflet/leaflet.css';
import { icon, latLng } from 'leaflet';
import EateryeateryAdressProps from './type';

function EasteryeateryAdress(eateryeateryAdressProps: EateryeateryAdressProps) {
    const { eateryAdress } = eateryeateryAdressProps;
    const position = latLng([eateryAdress.latitude, eateryAdress.longitude]);
    const zoom = 12;
    const markerIcon = icon({
        iconUrl: 'pin.png',
        iconSize: [32, 32],
        iconAnchor: [20 / 2, 32],
    });
    return (
        <div className="flex justify-center">
            <MapContainer center={position} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    maxZoom={20}
                    minZoom={2}
                />
                <Marker position={position} icon={markerIcon}>
                    <Popup>
                        A pretty CSS3 popup.
                        <br />
                        Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default EasteryeateryAdress;
