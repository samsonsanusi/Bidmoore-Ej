import "./style.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/user/onboarding/onboarding";
import { Context } from "../context/context";

function Login() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { authDispatch } = useContext(Context);

  // useEffect(() => {
  //   authDispatch({ type: "SUCCESS", payload: "123" });
  // }, []);

  return (
    <div className="container">
      <div className="login">
        <h1 className="login__logo">
          Bidmo<span className="logo-edit">o</span>re
        </h1>
        <div className="login_formBg">
          <h3 className="login__text">LOG IN</h3>
          <div className="login_formHolder">
            <form className="loginForm">
              <div className="login--phoneContainer">
                <label htmlFor="phoneNumber" className="login_label">
                  Phone Number
                </label>
                <br></br>
                <input
                  type="telephone"
                  placeholder="+234"
                  className="login_input"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <br />
              <label
                htmlFor="password"
                className="login_labelPassword"
                placeholder="Enter Your Password"
              >
                Password
              </label>
              <br></br>
              <input
                type="password"
                placeholder="password"
                className="login_inputPassword"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="login--button">
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const data = {
                      phoneNumber,
                      password,
                      authDispatch,
                    };

                    loginUser(data, authDispatch, navigate);
                  }}
                  className="loginBtn"
                >
                  Log in to your account
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <p className="login--signUp">
            Don't have an account?
            <span onClick={() => navigate("signUp")} className="login__signUp">
              Sign Up
            </span>
          </p>
          <h6 className="login--forgotPassword">Forgot your Password?</h6>
        </div>
      </div>
    </div>
  );
}
export default Login;
