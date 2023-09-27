import React, { useEffect } from "react";
import "./styles.css";
import Spinner from "../Spinner/Spinner";
import GridCard from "../DataGridCard/GridCard";

export default function DataGrid() {
  const [allRocketData, setAllRocketData] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState("");

  const fetchData = async () => {
    const url = "https://api.spacexdata.com/v4/rockets";
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setAllRocketData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-data-grid">
      <div className="search-spacex">
        <h2 className="search-spacex-title">Search Rockets</h2>
        <div className="search-spacex-form">
          <input
            type="search"
            name="search rocket"
            id="search-spacex-input"
            placeholder="Search rocket by name and country"
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="data-grid">
        {!allRocketData ? (
          <Spinner />
        ) : (
          allRocketData
            .filter((el) => {
              if (
                el.name.toUpperCase().includes(searchInput.toUpperCase()) ||
                el.country.toUpperCase().includes(searchInput.toUpperCase())
              ) {
                return el;
              }
            })
            .map((el) => {
              return <GridCard cardData={el} key={el.id} />;
            })
        )}
      </div>
    </div>
  );
}
