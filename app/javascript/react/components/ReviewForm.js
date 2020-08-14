import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { StarRating } from "@thumbtack/thumbprint-react";

const ReviewForm = (props) => {

  let vineyardId = props.match.params.vineyard_id

  // These 4 states hold hover values for each review attribute
  // const [overallHoverRating, setOverallHoverRating] = useState(undefined);

  const [reviewData, setReviewData] = useState({
      // overall: null,
      overall: "",
      comment: "",
      manufacturer: ""
  })

  // const handleStarChange = (value, ratingName) => {
  //   setReviewData({
  //     ...reviewData,
  //     [ratingName]: value,
  //   });
  // }

  const [getNotice, setNotice] = useState("")

  const handleTextInputChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
    fetch(`/api/v1/vineyards/${vineyardId}/reviews`, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(reviewData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setNotice(body.notice)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  };

  return (
    <div className="body">
      <h3>Submit a New Review</h3>
      <div className="error-notice" >
        {getNotice} <br/>
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmit} id="reviewForm">
        {/* <div className="rating">Overall</div>
          <StarRating
            size="large"
            name="overall"
            rating={reviewData.overall}
            hoverRating={overallHoverRating}
            onStarClick={(value) => {
              handleStarChange(value, "overall")
            }}
            value={reviewData.overall}
            onStarHover={(value) => {
              setOverallHoverRating(value);
            }}
            onMouseLeave={() => {
              setOverallHoverRating(undefined);
            }}
          /> */}
          <label>
            Overall Experience 1 - 5, 5 being the best:
            <textarea
              name="overall"
              onChange={handleTextInputChange}
              value={reviewData.overall}
            />
          </label>
          <label>
            Comment (optional):
            <textarea
              name="comment"
              onChange={handleTextInputChange}
              value={reviewData.comment}
            />
          </label>
          <label>
            Varietals Experienced (required):
            <textarea
              name="varietal"
              onChange={handleTextInputChange}
              value={reviewData.varietal}
            />
          </label>

          <button type="submit" class="button primary" value="Submit" form="reviewForm">Submit Form</button>
        </form>

        <div>
          <Link to={{
            pathname:`/vineyards/${vineyardId}`,
          }} class="button primary">
            Return to Vineyard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;