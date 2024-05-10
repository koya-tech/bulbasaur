import { latLng } from 'leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import './leaflet/leaflet.css';

function LeafletMap() {
    const position = latLng([35.6809591, 139.7673068]);
    const zoom = 12;
    return (
        <div>
            <MapContainer center={position} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    maxZoom={20}
                    minZoom={2}
                />
            </MapContainer>
        </div>
    );
}

export default LeafletMap;
