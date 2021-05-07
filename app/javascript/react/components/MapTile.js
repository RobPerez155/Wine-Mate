import React, { Component } from "react";
import "../../../assets/stylesheets/application.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

var myIcon = L.icon({
  iconUrl: "https://previews.123rf.com/images/rukach/rukach1807/rukach180700223/105441971-glass-of-red-wine-with-splash-hand-drawing-wineglass-logo-icon-stock-vector-logo-illustration.jpg",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

class MapTile extends Component {
  state = {
    lat: 42.704389,
    lng: -72.171976,
    zoom: 6,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <MapContainer
          className="leaflet-container"
          center={position}
          zoom={this.state.zoom}
          scrollWheelZoom={false}
        >
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
