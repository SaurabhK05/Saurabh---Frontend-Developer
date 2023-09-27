import React from "react";
import "./styles.css";

export default function Spinner() {
  return (
    <div className="spinner-div">
      <img src="/spinner.gif" alt="Loading" id="spinner" />
    </div>
  );
}
