import React from "react";

const VarietalTile = ({ id, name, image_url, description }) => {
  return (
    <div>
      <div className="grid-container">
        <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-2">
          <div class="cell">
            <div class="card">
              <div class="card-divider home-p">
                <h4>{name}</h4>
              </div>
              <img src={image_url}></img>
              <div class="card-section home-p">
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
