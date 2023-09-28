import React from "react";
import DataGrid from "../../components/DataGrid/DataGrid";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Banner />
      <DataGrid />
    </div>
  );
}
