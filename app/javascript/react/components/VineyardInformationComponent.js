import React from "react";

const VineyardInformationComponent = ({ name, address, wines_available, region_location }) => {
  return (
    <>
      <div>
        <h5>{name}</h5>
        <p>{address}</p>
        <p>{wines_available}</p>
      </div>
    </>
  );
};

export default VineyardInformationComponent;