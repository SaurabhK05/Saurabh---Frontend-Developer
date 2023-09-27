import React from "react";
import "./styles.css";

function PopupContent(props) {
  const onClose = props.onClose;
  const rocketData = props.data;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="rocket-general-details">
          <h3>Rocket General Details</h3>
          <p>Rocket Company: {rocketData.company}</p>
          <p>Rocket Name: {rocketData.name}</p>
          <p>Rocket Launch From: {rocketData.country}</p>
          <p className="cost-per-launch">
            Cost per launch: ${rocketData.cost_per_launch}
          </p>
          <p>Frist Flight of rocket: {rocketData.first_flight}</p>
          <p>Rocket Success Rate: {rocketData.success_rate_pct}%</p>
        </div>

        <div className="rocket-specs">
          <h3> Rocekt Specification</h3>
          <p className="rocket-height">
            Height: {rocketData.height.meters} meters
          </p>
          <p className="rocket-diameter">
            Diameter: {rocketData.diameter.meters} meters
          </p>
          <p className="rocket-mass">Mass: {rocketData.mass.kg} KG</p>
          <p className="landing-legs">
            Rocket has {rocketData.landing_legs.number} landing legs
          </p>
        </div>
        <div className="engine-spec">
          <h3> Engine Specification</h3>
          <p className="engine-number">
            No of Engine: {rocketData.engines.number}
          </p>
          <p className="engine-type">
            Type of Engine: {rocketData.engines.type}
          </p>
          <p className="engine-version">
            Engine Version: {rocketData.engines.version}
          </p>
          <p className="engine-layout">
            Engine Layout: {rocketData.engines.layout}
          </p>
          <p className="engine-propellant">
            Engine Propellant:{" "}
            {rocketData.engines.propellant_1 +
              ", " +
              rocketData.engines.propellant_2}
          </p>
        </div>

        <button onClick={onClose}>Close Popup</button>
      </div>
    </div>
  );
}

export default PopupContent;
