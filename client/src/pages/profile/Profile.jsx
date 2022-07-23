import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import useFetch from "../../hooks/useFetch";
import DeleteUser from "./components/DeleteUser";

function Profile() {
  //write code here
  const { userId } = useParams();
  const { userObj, setUserObj, deleteUser } = useContext(UserContext);
  const [shouldShowEmailForm, setShouldShowEmailForm] = useState(false);
  const [shouldShowPasswordForm, setShouldShowPasswordForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { isLoading, error, performFetch } = useFetch();
  /*   const {
    isLoading: isSettingPassword,
    error: passwordErr,
    performFetch: setNewPassword,
  } = useFetch(`${process.env.REACT_APP_API_URL}/update/password`); */

  useEffect(() => {
    if (userId !== userObj?._id) navigate("/error404");
  }, [userId]);

  function logout() {
    deleteUser();
  }
  useEffect(() => {
    console.log("userObj", userObj);
  }, [userObj]);

  async function handleChangeEmail(e) {
    e.preventDefault();
    const body = { email, id: userObj._id };
    performFetch(
      `${process.env.REACT_APP_API_URL}/update/email`,
      "PUT",
      body
    ).then(data => {
      if (data) {
        setUserObj(data.result);
        setShouldShowEmailForm(false);
      }
    });
    // const response = await fetch(
    //   `${process.env.REACT_APP_API_URL}/update/email`,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "PUT",
    //     body: JSON.stringify(body),
    //   }
    // );

    // const data = await response.json();
    // setIsLoading(false);

    // if (!data.success) {
    //   setError(data.result);
    //   return;
    // }

    // setUserObj(data.result);
    // setShouldShowEmailForm(false);
  }

  async function handleChangePassword(e) {
    e.preventDefault();
    const body = { id: userId, password };
    performFetch(
      `${process.env.REACT_APP_API_URL}/update/password`,
      "PUT",
      body
    ).then(data => {
      if (data) {
        setUserObj(data.result);
        setShouldShowPasswordForm(false);
      }
    });
    // setError(null);
    // setIsLoading(true);
    // setTimeout(async () => {
    //   const body = { id: userId, password };
    //   const response = await fetch(
    //     `${process.env.REACT_APP_API_URL}/update/password`,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       method: "PUT",
    //       body: JSON.stringify(body),
    //     }
    //   );
    //   console.log("response", response);
    //   const data = await response.json();
    //   setIsLoading(false);
    //   if (!data.success) {
    //     setError(data.result);
    //     return;
    //   }

    //   setUserObj(data.result);
    //   setShouldShowPasswordForm(false);
    // }, 2000);
  }

  return (
    <div>
      {isLoading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      {userObj ? (
        <>
          <Outlet />
          <h2>your email is {userObj.email}</h2>
          <button onClick={() => setShouldShowEmailForm(prev => !prev)}>
            edit email
          </button>
          {shouldShowEmailForm && (
            <form onSubmit={handleChangeEmail}>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit"> save </button>
            </form>
          )}
          <h2>your Id is {userObj._id}</h2>
          <h2>your Password is {userObj.password}</h2>
          <button onClick={() => setShouldShowPasswordForm(prev => !prev)}>
            edit password
          </button>
          {shouldShowPasswordForm && (
            <form onSubmit={handleChangePassword}>
              <input
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button type="submit"> save </button>
            </form>
          )}

          <div>
            <DeleteUser />
          </div>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <h1>user has been deleted successfully </h1>
      )}
    </div>
  );
}

export default Profile;
