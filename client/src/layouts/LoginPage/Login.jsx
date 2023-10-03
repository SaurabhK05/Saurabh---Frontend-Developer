import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../../store/SpacexDataStore";
import "./styles.css";

export default function Login() {
  const [emailInput, setEmailInput] = React.useState("");
  const [passInput, setPassInput] = React.useState("");
  const [successLogin, setSuccessLogin] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/user/login";
    await fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: emailInput,
        password: passInput,
      }),
    })
      .then((res) => {
        if (res.status == 202) {
          dispatch(setUserAuth());
          return res.json();
        }
      })
      .then((data) => {
        Cookies.set(
          "jwt",
          `${data.token}`,
          { expires: 1 / 24 },
          { secure: true }
        );
        setSuccessLogin(true);
        navigate("/");
      })
      .catch((err) => {
        console.log("failed to login", err);
        return;
      });
  };
  useEffect(() => {
    if (successLogin) {
      navigate("/");
      return;
    }
  }, [successLogin]);

  return (
    <div className="main-login">
      <div className="login">
        <div className="login-img">
          <img src="/peakpx (1).webp" alt="SpaceX Company logo" />
        </div>
        <div className="login-detail">
          <form className="login100-form validate-form">
            <span className="login100-form-title">Member Login</span>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => setPassInput(e.target.value)}
              />
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick={loginUser}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
