import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VarietalTile from "./VarietalTile"

const VarietalsIndexPage = (props) => {
  const [getVarietals, setVarietals] = useState([]);

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
        let varietalList = body;
        setVarietals(varietalList);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);
  const listVarietals = getVarietals.map((varietal) => {
    return (
      <VarietalTile
        key={varietal.id}
        id={varietal.id}
        name={varietal.name}
        description={varietal.description}
        image_url={varietal.image_url}
        />
  );
});

  return (
    <>
      <h2>Wine Varietals of the United States!</h2>
        <div>
          <Link to={`/regions`}>Explore Wine Regions of the United States</Link>
          {listVarietals}
        </div>
    </>
  )
  }
export default VarietalsIndexPage;