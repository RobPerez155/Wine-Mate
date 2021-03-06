import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegionTile from "./RegionTile";

const RegionsIndexPage = (props) => {
  const [getRegions, setRegions] = useState([]);
  useEffect(() => {
    fetch("/api/v1/regions")
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
        let regionList = body;
        setRegions(regionList);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const listRegions = getRegions.map((region) => {
    return (
      <RegionTile
        key={region.id}
        name={region.name}
        id={region.id}
        image_url={region.image_url}
        description={region.description}
      />
    );
  });

  return (
    <>
      <h1 className="home-p">Wine Regions</h1>
      <h3 className="home-p">
        <Link className="anchor" to={`/varietals`}>
          Explore Wine Varietals of the United States
        </Link>
      </h3>
      <br></br>
      <div>{listRegions}</div>
    </>
  );
};

export default RegionsIndexPage;
