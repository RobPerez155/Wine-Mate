import React, { useState, useEffect } from "react";
import VineyardInformationComponent from "./VineyardInformationComponent";
import ReviewTile from "./ReviewTile";
import { Link } from "react-router-dom";

const VineyardShowContainer = (props) => {
  const [getVineyardData, setVineyardData] = useState({
    name: "",
    address: "",
    wines_available: "",
    region_location: "",
  });

  const [getReviews, setReviews] = useState([]);

  let vineyard_id = props.match.params.id;

  useEffect(() => {
    fetch(`/api/v1/vineyards/${vineyard_id}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        let vineyard = body.vineyardData;
        let reviews = body.reviewsData;
        // let varietalList = body.varietalsData;
        setVineyardData(vineyard);
        setReviews(reviews)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let reviewList = getReviews.map((review) => {
    return <ReviewTile key={review.id} reviewData={review} />;
  });

  return (
  <div>
    <div>
      <VineyardInformationComponent
        name={getVineyardData.name}
        address={getVineyardData.address}
        wines_available={getVineyardData.wines_available}
        region_location={getVineyardData.region_location}
      />
    </div> 
    <div>
    <Link
      to={{
        pathname: `/vineyards/${vineyard_id}/reviews/new`,
        reviewProps: { vineyard_id },
      }}
      class="button primary"
    >
      New Review
    </Link>
  </div>
  <table class="hover">
  <thead>
    <tr>
      <div class="table-top">
        <th width="200">Username</th>
        <th width="450">Review</th>
        <th width="200">Rating</th>
        <th width="200">Wines Tasted</th>
        <th width="200"> </th>
      </div>
    </tr>
  </thead>
  <tbody>{reviewList}</tbody>
</table>
</div> 
  );
};

export default VineyardShowContainer;