import React, { useState, useEffect } from "react";
import VineyardInformationComponent from "./VineyardInformationComponent";
import VineyardTile from "./VineyardTile";
import { Link } from "react-router-dom";

const VineyardShowPage = (props) => {
  const [getVineyardData, setVineyardData] = useState({
    name: "",
    address: "",
    wines_available: "",
    region_location: "",
  });

  let vineyard_id = props.match.params.id;

  useEffect(() => {
    fetch(`/api/v1/vineyards/${vineyard_id}`)
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
        let vineyard = body.vineyardData;
        setVineyardData(vineyard);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  // VineyardInformationComponent will be used when adding the review component
  return (
    <div>
      <VineyardInformationComponent
        name={getVineyardData.name}
        address={getVineyardData.address}
        wines_available={getVineyardData.wines_available}
        region_location={getVineyardData.region_location}
      />
    </div> 
  );
};

export default VineyardShowPage;