import React from "react";
import { Link } from "react-router-dom";

const VineyardTile = ({ name, vineyardId, address, wines_available }) => {
  return (
    <>
      <tr className="home-p">
        <td width="200">
          <Link className="anchor" to={`/vineyards/${vineyardId}`}>{name}</Link>
        </td>
        <td width="200">{address}</td>
        <td width="400">{wines_available}</td>
        <td>
          <button type="button" className="button">
            <Link to={`/vineyards/${vineyardId}/reviews/new`}>Add Review</Link>
          </button>
        </td>
      </tr>
    </>
  );
};

export default VineyardTile;
