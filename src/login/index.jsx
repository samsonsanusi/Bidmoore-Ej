import "./style.css";
function Login() {
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
                                <label
                                    htmlFor="phoneNumber"
                                    className="login_label"
                                >
                                    Phone Number
                                </label>
                                <br></br>
                                <input
                                    type="telephone"
                                    placeholder="+234"
                                    className="login_input"
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
                            />
                            <div className="login--button">
                                <button className="loginBtn">
                                    Log in to your account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <p>
                        Don't have an account?<span>Sign Up</span>
                    </p>
                    <h6>Forgot your Password?</h6>
                </div>
            </div>
        </div>
    );
}
export default Login;
