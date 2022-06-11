import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

function DeleteUser() {
  //write code here
  const { userObj, deleteUser } = useContext(UserContext);

  async function handleDeleteUser() {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/delete/${userObj._id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    );

    const data = await response.json();
    deleteUser();
  }
  return <button onClick={handleDeleteUser}> delete user</button>;
}

export default DeleteUser;
