import "./style.css";
function ForgotPassword() {
    return (
        <div className="forgotPassword--container">
            <div className="forgotPassword">
                <h1 className="login__logo">
                    Bidmo<span className="logo-edit">o</span>re
                </h1>
                <div className="forgotPassword-formBg">
                    <h3 className="forgotPassword_text">
                        REQUEST PASSWORD RESET
                    </h3>
                    <div className="forgotPassword_formHolder">
                        <form action="" className="forgotPassword_form">
                            <div className="forgotPassword-numberInput">
                                <label
                                    htmlFor="phoneNumber"
                                    className="forgotPassword_label"
                                >
                                    Phone Number
                                </label>
                                <br></br>
                                <input
                                    type="telephone"
                                    placeholder="+234"
                                    className="forgotPassword_phone"
                                />
                            </div>
                            <div className="forgotPassword-numberInput">
                                <label
                                    htmlFor="userName"
                                    className="forgotPassword_userNameLabel"
                                >
                                    Username
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className="forgotPassword_username"
                                    placeholder="Enter Username"
                                />
                            </div>
                            <div className className="forgotPassowrd_reset">
                                <button className="forgotPasswordBtn">
                                    Recover Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <p className="forgotPassword_reset">
                    Suddenly remember your password?
                    <span className="forgotPassword_signUP">Sign up</span>
                </p>
            </div>
        </div>
    );
}
export default ForgotPassword;
