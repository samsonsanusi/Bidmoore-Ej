import "./App.css";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Routes>
        </div>
    );
}

export default App;
