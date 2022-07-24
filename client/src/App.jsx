import React from "react";
import { Link } from "react-router-dom";

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
