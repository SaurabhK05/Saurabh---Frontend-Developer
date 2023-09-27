import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Banner from "./components/Banner/Banner";
import DataGrid from "./components/DataGrid/DataGrid";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <DataGrid />
    </div>
  );
};

export default App;
