import React from "react";
import { Link } from "react-router-dom";

const RegionTile = ({ id, name, image_url, description }) => {
  return (
    <div>
      <div className="cell">
        <div className="card">
          <img src={image_url} />
          <Link className="anchor" to={`/regions/${id}`}>
            {name}
          </Link>
          <p> {description}</p>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default RegionTile;
