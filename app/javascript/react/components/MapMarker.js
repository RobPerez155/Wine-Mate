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

const MapMarker = ({ name, position }) => {

  console.log({name})
  console.log({position})
  return (
    <>
      <Marker position={[1,1]} icon={myIcon}>
        <Popup>
        {"name"}<br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};

export default MapMarker;
