import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const myIcon = L.icon({
  iconUrl:
    "https://previews.123rf.com/images/rukach/rukach1807/rukach180700223/105441971-glass-of-red-wine-with-splash-hand-drawing-wineglass-logo-icon-stock-vector-logo-illustration.jpg",
  iconSize: [25, 25],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const MapTile = ({ name, vineyardId, address, wines_available }) => {
  console.log(name)
  const position = [42.704389, -72.171976];
  return (
    <div>
      <MapContainer
        className="leaflet-container"
        center={position}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={myIcon}>
          <Popup>
            {name} <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapTile;
