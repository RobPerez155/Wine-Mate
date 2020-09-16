import React from "react";
import { Link } from "react-router-dom";
const HomePage = (props) => {
  return (
    <div className="white-bg">
      <img
        className="home-img"
        src="https://www.2hawk.wine/wp-content/uploads/2017/12/2Hawk-Vineyard-and-Winery-Vineyard-Building-and-Mountains-with-Sunflare-Color-2800x900px-Optimized.jpg"
      ></img>
      <h2 className="text-center">
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
        the hard work and research by the folks at Winefolly.com. So if you
        find any of this information interesting, please visit their site to
        find out more because what you see here is a tiny sampling of the work
        they have been doing over the last 10 years.
      </p>

      <div className="grid-x grid-margin-x small-up-2 medium-up-2 large-up-2">
        <div className="cell">
          <div className="card">
            <img src="https://www.duckhorn.com/assets/client/Image/blog/goldeneye.jpg"></img>
            <Link className="anchor" to={`/regions`}>
              <div className="card-section text-center">
                <h4>Vineyards</h4>
                Explore Wine Regions of the United States
              </div>
            </Link>
          </div>
        </div>
        <div className="cell">
          <div className="card">
            <img src="https://www.duckhorn.com/assets/client/Image/blog/Calera-Caves.jpg"></img>
            <Link className="anchor" to={`/varietals`}>
              <div className="card-section text-center">
                <h4>Varietals</h4>
                Explore Wine Varietals of the United States
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
