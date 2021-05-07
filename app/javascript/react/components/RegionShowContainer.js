// build this container this is where the vineyard table will reside as well as the google api
import React, { useState, useEffect } from "react";
import VineyardTile from "./VineyardTile";
import MapTile from "./MapTile";

const RegionShowContainer = (props) => {
  const [getVineyards, setVineyards] = useState([]);
  const [getRegionName, setRegionName] = useState(null);

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

  return (
    <div>
      <h3 class="home-p">{getRegionName}</h3>
      <MapTile />
      <div className="home-p">
        <div className="grid-container">{listVineyards}</div>
      </div>
    </div>
  );
};

export default RegionShowContainer;
