import React from "react";
import { StarRating } from "@thumbtack/thumbprint-react";

const ReviewTile = ({ reviewData }) => {
  return (
    <tr>
      <td width="200">{reviewData.username}</td>
      <td width="1000">{reviewData.comment}</td>
      <td width="1000">{reviewData.varietal}</td>
      <td>
        <StarRating
            size="large"
            name="overall"
            rating={reviewData.overall}
          />
          </td>
    </tr>
  );
};

export default ReviewTile;