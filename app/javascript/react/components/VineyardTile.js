import React from "react";

const VineyardTile = ({ vineyardData }) => {
  return (
    <tr>
      <td width="200">{vineyardData.name}</td>
      <td width="200">{vineyardData.address}</td>
      <td width="200">{vineyardData.wine_selections}</td>
      <td>
        <button type="button" className="button">
          Add Review
        </button>
      </td>
    </tr>
    <>
    <p>I'm working</p>
    </>
  );
};

export default VineyardTile;