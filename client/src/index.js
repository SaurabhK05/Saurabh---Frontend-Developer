import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import SpaceXDataStore from "./store/SpacexDataStore";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={SpaceXDataStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
