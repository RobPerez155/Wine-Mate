import React, { useState, useEffect } from "react";
import VineyardTile from "./VineyardTile";
import { Map, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapTile from "./MapTile";

const RegionShowContainer = (props) => {
  const [getVineyards, setVineyards] = useState([]);
  const [getRegionName, setRegionName] = useState(null);
  const [getRegionPosition, setRegionPosition] = useState(null);

  useEffect(() => {
    let regionId = props.match.params.id;
    fetch(`/api/v1/regions/${regionId}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        let vineyardList = body;
        setVineyards(vineyardList.vineyards);
        setRegionName(vineyardList.name);
        setRegionPosition(vineyardList.position);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const listVineyards = getVineyards.map((vineyard) => {
    return (
      (
        <VineyardTile
          key={vineyard.id}
          name={vineyard.name}
          vineyardId={vineyard.id}
          address={vineyard.address}
          wines_available={vineyard.wines_available}
        />
      )
    );
  });

console.log(getRegionPosition)
  return (
    <>
      <h3 className="home-p">{getRegionName}</h3>
      <div>
        <MapContainer
          className="leaflet-container"
          center={[42.704389, -72.171976]}
          zoom={6}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapTile />
        </MapContainer>
      </div>
      <div className="home-p">
        <div className="grid-container">{listVineyards}</div>
      </div>
    </>
  );
};

export default RegionShowContainer;
