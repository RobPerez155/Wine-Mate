import React, { useState, useEffect } from "react";
import VineyardTile from "./VineyardTile";
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const RegionShowContainer = (props) => {
  const [getVineyards, setVineyards] = useState([]);
  const [getRegionName, setRegionName] = useState(null);
  const [getRegionPosition, setRegionPosition] = useState([40.5, -99.8]);

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
      <VineyardTile
        key={vineyard.id}
        name={vineyard.name}
        vineyardId={vineyard.id}
        address={vineyard.address}
        wines_available={vineyard.wines_available}
      />
    );
  });

  const FlyTo = ({ center, zoom }) => {
    const map = useMap();
    map.flyTo(center, zoom);
    return null;
  };

  const myIcon = L.icon({
    iconUrl:
      "https://previews.123rf.com/images/rukach/rukach1807/rukach180700223/105441971-glass-of-red-wine-with-splash-hand-drawing-wineglass-logo-icon-stock-vector-logo-illustration.jpg",
    iconSize: [25, 25],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  return (
    <>
      <h3 className="home-p">{getRegionName}</h3>
      <div>
        <MapContainer
          className="leaflet-container"
          center={[40.5, -99.8]}
          zoom={6}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FlyTo center={getRegionPosition} zoom={6} />

          {getVineyards.map((vineyard) => (
            <Marker
              key={vineyard.id}
              position={[
                vineyard.position[0], 
                vineyard.position[1]
              ]}
              icon={myIcon}
            >
              <Popup>
                <h5>{vineyard.name}</h5>
                {vineyard.wines_available}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="home-p">
        <div className="grid-container">{listVineyards}</div>
      </div>
    </>
  );
};

export default RegionShowContainer;
