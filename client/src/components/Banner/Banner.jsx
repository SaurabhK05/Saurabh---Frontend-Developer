import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Spinner from "../Spinner/Spinner";
import "./styles.css";
import PopupContent from "../PopupDialog/PopupContent";

export default function Banner() {
  const [rocketData, setRocketData] = React.useState(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const fetchRocketData = async () => {
    const url = "http://localhost:5000/rocket/get-one-rocket";
    await fetch(url, {
      headers: {
        Authorization: Cookies.get("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRocketData(data);
      });
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
            <h1 className="banner-title">{rocketData.data.name}</h1>
            <p className="banner-detail">{rocketData.data.description}</p>
            <div className="banner-action-btn">
              <button className="banner-learn-more" onClick={openPopup}>
                Learn More
              </button>
              {isPopupOpen && (
                <PopupContent onClose={closePopup} data={rocketData.data} />
              )}
              <a href={rocketData.data.wikipedia} target="blank">
                <button className="banner-wiki">Wiki</button>
              </a>
            </div>
          </div>
          <div className="img-banner">
            <img src={rocketData.data.flickr_images[0]} alt="rocket image" />
          </div>
        </>
      )}
    </div>
  );
}
