import React from "react";

const VarietalTile = ({ id, name, image_url, description }) => {
  return (
    <div className="cell">
      <div className="card">
        <div className="card-divider"></div>
        <img src={image_url}></img>
        <div className="card-section home-p">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VarietalTile;
