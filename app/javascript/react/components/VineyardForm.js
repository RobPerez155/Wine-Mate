import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VineyardForm = (props) => {

  let regionId = props.match.params.region_id

  const [vineyardData, setvineyardData] = useState({
      name: null,
      address: "",
      wines_available: "",
      region_id: ""
  })

  const [getNotice, setNotice] = useState("")

  const handleTextInputChange = (event) => {
    setVineyardData({
      ...vineyardData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  // Figure out where to fetch
  const handleSubmit = () => {
    event.preventDefault();
    fetch(`/api/v1/vineyards`, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(vineyardData),
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
      <h3>Submit a New Vineyard</h3>
      <div className="error-notice" >
        {getNotice} <br/>
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmit} id="reviewForm">
        <div>Name</div>
          <label>
            Vineyard Name:
            <textarea
              name="name"
              onChange={handleTextInputChange}
              value={vineyardData.name}
            />
          </label>
          <label>
            Address - eg. 123 Street Rd, City, CT 06492:
            <textarea
              name="address"
              onChange={handleTextInputChange}
              value={vineyardData.address}
            />
          </label>
          <label>
            Wines Available:
            <textarea
              name="wines_available"
              onChange={handleTextInputChange}
              value={vineyardData.wines_available}
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

export default VineyardForm;