import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import DeleteUser from "./components/DeleteUser";

function Profile() {
  //write code here
  const { userId } = useParams();
  const { userObj, setUserObj } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldShowEmailForm, setShouldShowEmailForm] = useState(false);
  const [shouldShowPasswordForm, setShouldShowPasswordForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (userId !== userObj?._id) navigate("/error404");
  }, [userId]);

  useEffect(() => {
    console.log("userObj", userObj);
  }, [userObj]);
  async function handleChangeEmail(e) {
    setError(null);
    setIsLoading(true);
    e.preventDefault();
    const body = { email, id: userObj._id };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/update/email`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    setIsLoading(false);

    if (!data.success) {
      setError(data.result);
      return;
    }

    setUserObj(data.result);
    setShouldShowEmailForm(false);
  }

  async function handleChangePassword(e) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    setTimeout(async () => {
      const body = { id: userId, password };
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/update/password`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(body),
        }
      );
      console.log("response", response);
      const data = await response.json();
      setIsLoading(false);
      if (!data.success) {
        setError(data.result);
        return;
      }

      setUserObj(data.result);
      setShouldShowPasswordForm(false);
    }, 2000);
  }

  return (
    <div>
      {isLoading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      {userObj ? (
        <>
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
        </>
      ) : (
        <h1>user has been deleted successfully </h1>
      )}
    </div>
  );
}

export default Profile;
