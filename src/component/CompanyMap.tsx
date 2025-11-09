import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const position: [number, number] = [55.791597, 37.577993]; // coordinates

// Icône rouge personnalisée
const redMarker = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function CompanyMap() {
  return (
    <div className="w-full space-y-2 h-inherit sm:h-auto lg:h-auto">
      <MapContainer
        center={position}
        zoom={90}
        scrollWheelZoom={false}
        className="w-full h-full rounded-3xl border border-gray-300 shadow-xl"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        <Marker position={position} icon={redMarker}>
          <Popup>
            Мы здесь 🏢
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
