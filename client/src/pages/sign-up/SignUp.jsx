import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Form from "../../components/forms/Form";
import Input from "../../components/forms/Input";
/*

   * sign Up form
   * multiple values handle functions
   * submit
   * API - post
   * connect DB
   * middle ware routes
   * controllers

*/

function SignUp() {
  //write code here
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveUserToStorage } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };

    const response = await fetch("http://localhost:5000/api/signUp", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    setEmail("");
    setPassword("");
    const data = await response.json();
    saveUserToStorage(data.result);
    navigate(`/profile/${data.result._id}`);
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="text" value={email} onChange={changeEmail} />
      <label htmlFor="password">password:</label>
      <input type="text" value={password} onChange={changePassword} />
      <button type="submit">sign up</button>
    </form> */}

      <Form onSubmit={handleSubmit} buttonText="Sign up">
        <Input label="email" value={email} setValue={setEmail} />
        <Input label="password" value={password} setValue={setPassword} />
      </Form>
    </>
  );
}

export default SignUp;
