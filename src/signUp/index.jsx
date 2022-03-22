import "./style.css";
import { useState } from "react";
import { signUpUser } from "../api/user/onboarding/onboarding";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signUp">
      <div className="signUp-container">
        <div className="signUp">
          <h1 className="login__logo">
            Bidmo<span className="logo-edit">o</span>re
          </h1>
          <div className="signUp-formBg">
            <h3 className="signUp-text">Sign Up</h3>
            <div className="signUP-formHolder">
              <form action="" className="signUp-form">
                <div className="login_userName_container">
                  <label htmlFor="username" className="signUp_usernameLabel">
                    Enter Your Username
                  </label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter your Username"
                    className="signUp_username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="login_infoContainer">
                  <label
                    htmlFor="phoneNumber"
                    className="signUp_phoneNumberLabel"
                  >
                    Phone Number
                  </label>
                  <br></br>
                  <input
                    type="telephone"
                    className="signUp_username"
                    placeholder="+234"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="login_infoContainer">
                  <label htmlFor="password" className="signUp_passwordLabel">
                    Password
                  </label>
                  <br></br>
                  <input
                    type="password"
                    placeholder="Password"
                    className="signUp_username"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="signUpBtn-container">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const data = {
                        username,
                        phoneNumber,
                        password,
                      };
                      console.log("data", data);
                      signUpUser(data);
                    }}
                    className="signUpBtn"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="signUp-textContainer">
            Already have an Account?
            <span onClick={() => navigate("/")} className="login_register">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
