import "./style.css";
function SignUp() {
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
                                    <label
                                        htmlFor="username"
                                        className="signUp_usernameLabel"
                                    >
                                        Enter Your Username
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        placeholder="Enter your Username"
                                        className="signUp_username"
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
                                    />
                                </div>
                                <div className="login_infoContainer">
                                    <label
                                        htmlFor="password"
                                        className="signUp_passwordLabel"
                                    >
                                        Password
                                    </label>
                                    <br></br>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="signUp_username"
                                    />
                                </div>
                                <div className="signUpBtn-container">
                                    <button className="signUpBtn">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p className="signUp-textContainer">
                        Already have an Account?
                        <span className="login_register">Log In</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
