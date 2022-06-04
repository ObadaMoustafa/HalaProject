import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
/*
 * form
 * get request
 * email exist ? password ?
 * error messages
 */
function Login() {
  //write code here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorNsg] = useState(null);

  const { setUserObj } = useContext(UserContext);

  const navigate = useNavigate();

  function changeEmail(e) {
    const { value } = e.target;
    setEmail(value);
  }
  function changePassword(e) {
    const { value } = e.target;
    setPassword(value);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setErrorNsg(null);
    const body = { email, password };

    const response = await fetch("http://localhost:5000/api/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    setEmail("");
    setPassword("");
    const data = await response.json();
    if (!data.success) {
      setErrorNsg(data.result);
    } else {
      setUserObj(data.result);
      navigate(`/profile/${data.result._id}`);
    }
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="text" value={email} onChange={changeEmail} />
        <label htmlFor="password">password:</label>
        <input type="text" value={password} onChange={changePassword} />
        <button type="submit">login</button>
      </form>

      {errorMsg && <div style={{ color: "red" }}>Error: {errorMsg}</div>}
    </>
  );
}

export default Login;
