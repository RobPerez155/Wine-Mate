import React, { useState, useEffect } from "react";
import PreferenceForm from "./PreferenceForm";
import { Link } from "react-router-dom";

const VarietalShowPage = (props) => {
  const [getVarietalData, setVarietalData] = useState({
    id: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    fetch(`/api/v1/varietals`)
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
        debugger
        let varietal = body.vineyardData;
        setVarietalData(vineyard);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div>
      <PreferenceForm
        key={getVarietalData.id}
        id={getVarietalData.id}
        name={getVarietalData.name}
        description={getVarietalData.description}
      />
    </div> 
  );
};

export default VarietalShowPage;