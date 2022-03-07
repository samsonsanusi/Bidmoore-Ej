import "./App.css";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import SignUp from "./signUp";
import DashboardProducts from "./dashboardProducts";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="signUp" element={<SignUp />} />
                <Route
                    path="dashboardProducts"
                    element={<DashboardProducts />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
