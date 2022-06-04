import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";

function App() {
  return (
    <div>
      <Link to="/signUp">Sign up</Link>
      <br />
      <Link to="/login">Sign in</Link>
    </div>
  );
}

export default App;
