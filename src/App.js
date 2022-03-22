import "./App.css";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import SignUp from "./signUp";
import DashboardProducts from "./dashboardProducts";
import DashboardCustomers from "./dashboardCustomers";
import DashboardAuctions from "./dashboardAuctions";
import CreateAuction from "./createAuction";
import LandingPage from "./landingPage";
import AdminLogin from "./adminLogin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboardProducts" element={<DashboardProducts />} />
        <Route path="/dashboardCustomers" element={<DashboardCustomers />} />
        <Route path="/dashboardAuctions" element={<DashboardAuctions />} />
        <Route path="/createAuction" element={<CreateAuction />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
