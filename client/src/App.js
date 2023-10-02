import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "./layouts/LandingPage/LandingPage";
import Login from "./layouts/LoginPage/Login";
import "./App.css";

const App = () => {
  const isAuthenticated = useSelector((state) => state.isAuthUser);

  React.useEffect(() => {}, [isAuthenticated]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <LandingPage /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
