import React from "react";

const VarietalTile = ({ id, name, image_url, description }) => {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-1 medium-up-2 large-up-2">
          <div className="cell">
            <div className="card">
              <div className="card-divider"></div>
              <img src={image_url}></img>
              <div className="card-section home-p">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VarietalTile;
