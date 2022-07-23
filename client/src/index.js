import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { UserProvider } from "./context/userContext";
import PrivateRoute from "./components/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/profile/:userId" element={<Profile />} />
        <Route
          path="/profile/:userId/services"
          element={<h1>hello from services</h1>}
        /> */}
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path=":userId" element={<Profile />}>
            <Route path="services" element={<h1>services page</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND PAGE</h1>} />
      </Routes>
    </UserProvider>
  </Router>
);
