import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./layouts/LandingPage/LandingPage";
import Login from "./layouts/LoginPage/Login";
import "./App.css";

const App = () => {
  // const date = new Date();
  // date.setTime(date.getTime() + 60 * 60 * 1000);
  // console.log(date);
  // document.cookie = `token=${token}; expires=${date}`;
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
