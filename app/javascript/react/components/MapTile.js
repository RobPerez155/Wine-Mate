import React, { Component } from "react";
import "/Users/robp/challenges/wine_mate/app/assets/stylesheets/application.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

var myIcon = L.icon({
  iconUrl: 'https://logopond.com/logos/27b2b54c837411e9d3056bdf369df840.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

class MapTile extends Component {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>

  <MapContainer className="map" center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Marker position={position} icon={myIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
      </div>
    );
  }
}

// const CellarTile = ({ cellarData }) => {
//   return (
//     <div>
//       <ul>
//         {cellarData.name}
//       </ul>
//     </div>
//   );
// };

export default MapTile;
