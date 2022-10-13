import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../context/mainContext";

const AdminRoute = ({ children }) => {
  const { state } = useContext(StoreContext);
  const { userInfo } = state;
  //   redirects to signin skill if someone not authorized trys to go to profile or order
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
};

export default AdminRoute;
