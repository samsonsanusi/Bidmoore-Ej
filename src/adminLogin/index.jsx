import "./style.css";

function AdminLogin() {
    return (
        <div className="AdminData">
            <form className="admin-dataInfo">
                <h3 className="logo">
                    Bidmo<span className="logoSpan">o</span>re
                </h3>
                <div className="form__inner">
                    <label for="uname" className="adminLabel">
                        Username
                    </label>
                    <br />
                    <input
                        type="text"
                        id="adminUsername"
                        placeholder="Enter Username"
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
                        />
                    </div>
                    <br />
                    <button className="AdminBtn">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default AdminLogin;
