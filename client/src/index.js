import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { UserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<h1>404 NOT FOUND PAGE</h1>} />
      </Routes>
    </UserProvider>
  </Router>
);
