import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
    import Login from "../src/login";
// import Home from "./component.js/home";
import Apps from '../src/Appsss'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" element={<Apps/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

