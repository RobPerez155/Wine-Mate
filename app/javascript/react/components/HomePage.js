import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
const HomePage = (props) => {
  return (
<div>
<h3>Wine Regions of the United States!</h3>
    <p> Thank you for visiting Wine Mate! Our mission is to educate you, our fellow wine enthusiasts, and to empower you with the ability to discover new vineyards that offer wines to suit your tastes. We provide straightforward approach for you to give us your wine preferences and for us to show you all the vineyards that include your preferences. After that, you will be able to plot a path from the vineyards you select, so you can turn your daytrip into a roadtrip. In short, we've put in the time so you can explore the wines!
      P.S. While we have put in a lot time and effort in this endeavor, don't worry we also took care to make plenty of time for research! </p>
<Link to={`/regions`}>Explore Wine Regions of the United States</Link>
<br></br>
<Link to={`/varietals`}>Explore Wine Varietals of the United States</Link>
</div>
  )
}
export default HomePage