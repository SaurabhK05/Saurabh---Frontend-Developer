import React from "react";
import "./styles.css";

export default function GridCard(props) {
  const rocketData = props.cardData;
  return (
    <div className="data-grid-card">
      <img src={rocketData.flickr_images[1]} alt="Rocket Image" />
      <div className="data-grid-card-details">
        <h2 className="data-grid-card-details-header">{rocketData.name}</h2>
        <p className="data-grid-card-details-desc">
          {rocketData.description.length > 70
            ? rocketData.description.substring(0, 70) + "..."
            : rocketData.description}
        </p>
        <div className="data-grid-card-action-btn">
          <button className="data-grid-card-learn-more">Learn More</button>
          <a href={rocketData.wikipedia} target="blank">
            <button className="data-grid-card-wiki">Wiki</button>
          </a>
        </div>
      </div>
    </div>
  );
}
