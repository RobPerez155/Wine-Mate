import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

const myIcon = L.icon({
  iconUrl:
    "https://previews.123rf.com/images/rukach/rukach1807/rukach180700223/105441971-glass-of-red-wine-with-splash-hand-drawing-wineglass-logo-icon-stock-vector-logo-illustration.jpg",
  iconSize: [25, 25],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const MapMarker = ({ name, vineyardId, address, wines_available }) => {

  const position = [42.704389, -72.171976];
  const position0 = [42.704389, -71.171976];
  const position1 = [41.704389, -72.171976];
  return (
    <div>
      <Marker position={position} icon={myIcon}>
        <Popup>
        {name}<br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={position0} icon={myIcon}>
        <Popup>
        {name}<br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={position1} icon={myIcon}>
        <Popup>
        {name}<br /> Easily customizable.
        </Popup>
      </Marker>
    </div>
  );
};

export default MapMarker;