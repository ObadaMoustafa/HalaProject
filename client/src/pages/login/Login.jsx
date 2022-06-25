import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import useFetch from "../../hooks/useFetch";
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

  const { saveUserToStorage } = useContext(UserContext);
  const { isLoading, error, performFetch } = useFetch(
    "http://localhost:5000/api/login"
  );

  const navigate = useNavigate();

  function changeEmail(e) {
    const { value } = e.target;
    setEmail(value);
  }
  function changePassword(e) {
    const { value } = e.target;
    setPassword(value);
  }

  function handleLogin(e) {
    e.preventDefault();

    const body = { email, password };
    performFetch("POST", body).then(data => {
      if (data) {
        console.log("the error", error);
        setEmail("");
        setPassword("");
        console.log("data", data);
        saveUserToStorage(data.result);
        navigate(`/profile/${data.result._id}`);
      }
    });
    // setErrorNsg(null);

    // const response = await fetch("http://localhost:5000/api/login", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    //   body: JSON.stringify(body),
    // });
    // setEmail("");
    // setPassword("");
    // const data = await response.json();
    // if (!data.success) {
    //   setErrorNsg(data.result);
    // } else {
    //   saveUserToStorage(data.result);
    //   navigate(`/profile/${data.result._id}`);
    // }
    // console.log(data);
  }
  return (
    <>
      {isLoading && <div style={{ color: "red" }}>Loading....</div>}
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="text" value={email} onChange={changeEmail} />
        <label htmlFor="password">password:</label>
        <input type="text" value={password} onChange={changePassword} />
        <button type="submit">login</button>
      </form>

      {error && <div style={{ color: "red" }}>Error: {error}</div>}
    </>
  );
}

export default Login;
