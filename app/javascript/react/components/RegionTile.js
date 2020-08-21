import React from "react";
import { Link } from "react-router-dom";

const RegionTile = ({ id, name, image_url, description }) => {
  return (
    <div>
      <img src={image_url} />
      <Link to={`/regions/${id}`}>{name}</Link>
      <p> {description}</p>
      <br></br>
    </div>
  );
};

export default RegionTile;
