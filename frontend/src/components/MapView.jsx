import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function MapView({ results }) {
  const center =
    results.length > 0 ? [results[0].lat, results[0].lng] : [37.3022, -120.4820];

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-semibold">Map View</h2>

      <div className="h-[500px] overflow-hidden rounded-xl border">
        <MapContainer center={center} zoom={13} scrollWheelZoom={true} className="h-full w-full">
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {results.map((item) => (
            <Marker key={item.id} position={[item.lat, item.lng]} icon={markerIcon}>
              <Popup>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{item.category}</p>
                  <p className="text-sm text-slate-600">{item.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}