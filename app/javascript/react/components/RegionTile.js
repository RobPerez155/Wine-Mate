import React from "react";
import { Link } from "react-router-dom";

const RegionTile = ({ id, name, image_url, description }) => {
  return (
    <div>
      <div className="grid-container">
        <div className="cell">
          <div className="card">
              <Link to={`/regions/${id}`}>
            <div className="card-divider secondary home-p">
                <h3>{name}</h3>
            </div>
              </Link>
            <img className="region-card" src={image_url}></img>
            <div className="card-section home-p">
              <h5>{description}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionTile;
