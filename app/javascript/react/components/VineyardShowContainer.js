import React, { useState, useEffect, Component } from "react";
import VineyardInformationComponent from "./VineyardInformationComponent";
import ReviewTile from "./ReviewTile";
import MapTile from "./MapTile";
import { Link } from "react-router-dom";
import "/Users/robp/challenges/wine_mate/app/assets/stylesheets/application.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const VineyardShowContainer = (props) => {
  const [getVineyardData, setVineyardData] = useState({
    name: "",
    address: "",
    wines_available: "",
  });
  
  const [getReviews, setReviews] = useState([]);
  // const [getCellarData, setCellarData] = useState([]);
  
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
      // let varietals = body.varietalsData;
      setVineyardData(vineyard);
      setReviews(reviews);
      // setCellarData(varietals)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  
  let reviewList = getReviews.map((review) => {
    return <ReviewTile key={review.id} reviewData={review} />;
  });
  
  // let cellarList = getCellarData.map((cellar) => {
  //   return <CellarTile key={cellar.id} cellarData={cellar} />;
  // });

  return (
    <div>
      <div>
        <VineyardInformationComponent
          name={getVineyardData.name}
          />
      <MapTile />
        <VineyardInformationComponent
          address={getVineyardData.address}
          wines_available={getVineyardData.wines_available}
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
