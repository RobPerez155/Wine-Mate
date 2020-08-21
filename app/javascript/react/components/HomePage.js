import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HomePage = (props) => {
  return (
    <div>
      <img
        className="home-img"
        src="https://i.pinimg.com/originals/7e/b8/3a/7eb83ad929825f4c3444275bc888ecb4.jpg"
      ></img>

      <h2>
        Welcome to Wine
        <img
          className="wine-mate-logo"
          src="https://previews.123rf.com/images/rukach/rukach1807/rukach180700223/105441971-glass-of-red-wine-with-splash-hand-drawing-wineglass-logo-icon-stock-vector-logo-illustration.jpg"
        ></img>
        Mate
      </h2>

      <p className="home-p">
        Thank you for visiting Wine Mate! Our mission is to educate you, our
        fellow wine enthusiasts, and to empower you with the ability to discover
        new vineyards that offer wines to suit your tastes. Additionally, this
        website was developed as an educational project and relied heavily on
        the hard work and researched by the folks at Winefolly.com. So if you
        find any of this information interesting, please visit their site to
        find out more because what you see here is a tiny sampling of the work
        they have been doing over the last 10 years.
      </p>

      <img className="thumbnail ensmallen" src="https://www.duckhorn.com/assets/client/Image/blog/goldeneye.jpg"></img>
      <img className="thumbnail ensmallen" src="https://www.duckhorn.com/assets/client/Image/blog/Calera-Caves.jpg"></img>


      <Link className="margin" to={`/regions`}>Explore Wine Regions of the United States</Link>
      <Link className="margin" to={`/varietals`}>Explore Wine Varietals of the United States</Link>
      

    </div>
  );
};
export default HomePage;
