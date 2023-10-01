import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUnauthUser } from "../../store/SpacexDataStore";
import "./styles.css";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = (e) => {
    e.preventDefault();
    Cookies.remove("jwt");
    dispatch(setUnauthUser());
    navigate("/login");
  };
  return (
    <header>
      <div className="header-conect">
        <h1 className="spacex-header">SpaceX</h1>
        <button className="logout100-form-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
      <hr className="header-horizental-row" />
    </header>
  );
}
