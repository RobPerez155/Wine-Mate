import React, { useState, useEffect } from 'react'
import RegionTile from "./RegionTile"

const RegionsIndexPage = (props) => {
  const [getRegions, setRegions] = useState([])
  useEffect(() => {
    fetch("/api/v1/regions")
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then((response) => response.json())
      .then((body) => {
        let regionList = body
        setRegions(regionList)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }, [])

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
      <h3>Wine Regions of the United States!</h3>
        <div>
          <p> Thank you visiting Wine Mate! Our mission is to educate you, our fellow wine enthusiasts, and to empower you with the ability to discover new vineyards that offer wines to suit your tastes. We provide straightforward approach for you to give us your wine preferences and for us to show you all the vineyards that include your preferences. After that, you will be able to plot a path from the vineyards you select, so you can turn your daytrip into a roadtrip. In short, we've put in the time so you can explore the wines!
            P.S. While we have put in a lot time and effort in this endeavor, don't worry we also took care to make plenty of time for research! </p>
          {listRegions}
        </div>
    </>
  );
};

export default RegionsIndexPage;
