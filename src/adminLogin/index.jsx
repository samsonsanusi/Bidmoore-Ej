import "./style.css";
import { useState } from "react";
import { signinAdmin } from "../api/admin/onboarding/onboarding";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="AdminData">
      <form className="admin-dataInfo">
        <h3 className="logo">
          Bidmo<span className="logoSpan">o</span>re
        </h3>
        <div className="form__inner">
          <label for="uname" className="adminLabel">
            Email
          </label>
          <br />
          <input
            type="text"
            id="adminUsername"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <div className="PasswordSection">
            <label for="password" className="adminLabel">
              Password
            </label>
            <br />
            <input
              type="password"
              id="adminPassword"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();

              const user = {
                email,
                password,
              };
              signinAdmin(user, navigate);
            }}
            className="AdminBtn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default AdminLogin;
