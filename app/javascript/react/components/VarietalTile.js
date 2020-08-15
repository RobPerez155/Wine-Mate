import React from "react";

const VarietalTile = ({ id, name, image_url, description }) => {
  return (
    <div>
      <img src={image_url} />
      <h3>{name}</h3>
      <p> {description}</p>
      <br></br>  
    </div>
  );
};

export default VarietalTile;
