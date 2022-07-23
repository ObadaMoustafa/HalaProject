import React from "react";
import { useContext } from "react";
import { Outlet, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";

function PrivateRoute() {
  //write code here

  const { userId } = useParams();
  const { userObj } = useContext(UserContext);
  console.log(`userId %c${userId}`, "color: green", typeof userId);
  console.log(`ID from Obj %c${userObj._id}`, "color: red", typeof userObj._id);

  return userObj && userObj._id === userId ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
