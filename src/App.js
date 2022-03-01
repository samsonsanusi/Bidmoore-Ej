import "./App.css";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import SignUp from "./signUp";
import Dashboard from "./dashboardCustomer";
import { Routes, Route } from "react-router-dom";
import DashboardCustomer from "./dashboardCustomer";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="signUp" element={<SignUp />} />
                <Route
                    path="dashboardCustomer"
                    element={<DashboardCustomer />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
