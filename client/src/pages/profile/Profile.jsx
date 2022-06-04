import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function Profile() {
  //write code here
  const { aaa } = useParams();
  const { userObj, setUserObj } = useContext(UserContext);

  useEffect(() => {
    console.log("userObj", userObj);
  }, [userObj]);

  return (
    <div>
      <h1>hello from profile page</h1>
      {userObj && (
        <>
          <h2>your email is {userObj.email}</h2>
          <h2>your Id is {userObj._id}</h2>
          <h2>your Password is {userObj.password}</h2>
        </>
      )}
    </div>
  );
}

export default Profile;
