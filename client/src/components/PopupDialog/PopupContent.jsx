import React from "react";
import "./styles.css";

function PopupContent(props) {
  const onClose = props.onClose;
  const rocketData = props.data;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <p className="rocket-name">{rocketData.name.toUpperCase()}</p>
          <button onClick={onClose} className="popup-close-btn">
            X
          </button>
        </div>
        <h1 className="rocket-overview">OVERVIEW</h1>
        <div className="rocket-details">
          <div className="rocket-d1">
            <h5>HEIGHT</h5>
            <div className="value">
              <p>{rocketData.height.meters.toLocaleString()} m &nbsp;</p>
              <p>/ {rocketData.height.feet.toLocaleString()} ft</p>
            </div>
          </div>
          <hr />
          <div className="rocket-d1">
            <h5>DIAMETER</h5>
            <div className="value">
              <p>{rocketData.diameter.meters.toLocaleString()} m&nbsp;</p>
              <p>/ {rocketData.diameter.feet.toLocaleString()} ft</p>
            </div>
          </div>
          <hr />
          <div className="rocket-d1">
            <h5>MASS</h5>
            <div className="value">
              <p>{rocketData.mass.kg.toLocaleString()} kg&nbsp;</p>
              <p>/ {rocketData.mass.lb.toLocaleString()} lb</p>
            </div>
          </div>
          <hr />
          <div className="rocket-d1">
            <h5>THRUST AT SEA LEVEL</h5>
            <div className="value">
              <p>
                {rocketData.engines.thrust_sea_level.kN.toLocaleString()}{" "}
                kN&nbsp;
              </p>
              <p>
                / {rocketData.engines.thrust_sea_level.lbf.toLocaleString()} lbf
              </p>
            </div>
          </div>
          <hr />
          <div className="rocket-d1">
            <h5>THRUST IN VACUUM</h5>
            <div className="value">
              <p>
                {rocketData.engines.thrust_vacuum.kN.toLocaleString()} kN&nbsp;
              </p>
              <p>
                / {rocketData.engines.thrust_vacuum.lbf.toLocaleString()} lbf
              </p>
            </div>
          </div>
          <hr />
          <div className="rocket-d1">
            <h5>COST PER LAUNCH</h5>
            <div className="value">
              <p>$ {rocketData.cost_per_launch.toLocaleString()}</p>
            </div>
          </div>
          <hr />
          <div className="rocket-d1">
            <h5>SUCCESS RATE</h5>
            <div className="value">
              <p>{rocketData.success_rate_pct} %</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default PopupContent;
