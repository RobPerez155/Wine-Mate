import React from "react";

const VineyardTile = ({ name, vineyardId, address, wines_available }) => {
  return (
    <>
      <tr>
        <td width="200">{name}</td>
        <td width="200">{address}</td>
        <td width="200">{wines_available}</td>
        <td>
          <button type="button" className="button">
            Add Review
          </button>
        </td>
      </tr>
    </>
  );
};

export default VineyardTile;