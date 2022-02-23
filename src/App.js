import "./App.css";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import SignUp from "./signUp";
import Component from "./component";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="component" element={<Component />} />
            </Routes>
        </div>
    );
}

export default App;
