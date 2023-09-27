import React, { useEffect } from "react";
import "./styles.css";
import Spinner from "../Spinner/Spinner";

export default function Banner() {
  const [rocketData, setRocketData] = React.useState(null);

  const fetchRocketData = async () => {
    const url =
      "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69955f709d1eb";
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setRocketData(data));
  };
  useEffect(() => {
    fetchRocketData();
  }, []);

  return (
    <div className="main-banner">
      {!rocketData ? (
        <Spinner />
      ) : (
        <>
          <div className="left-banner">
            <h1 className="banner-title">{rocketData.name}</h1>
            <p className="banner-detail">{rocketData.description}</p>
            <div className="banner-action-btn">
              <button className="banner-learn-more">Learn More</button>
              <a href={rocketData.wikipedia} target="blank">
                <button className="banner-wiki">Wiki</button>
              </a>
            </div>
          </div>
          <div className="img-banner">
            <img src={rocketData.flickr_images[0]} alt="rocket image" />
          </div>
        </>
      )}
    </div>
  );
}
