import React from "react";
// Ground work for Review page
const VineyardInformationComponent = ({ name, address, wines_available, region_location }) => {
  return (
    <>
      <li>
        <h5>{name}</h5>
        <p>{address}</p>
        <p>{wines_available}</p>
      </li>
    </>
  );
};

export default VineyardInformationComponent;