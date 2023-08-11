import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const PrivateRoutes = () => {
  const { user } = useUserAuth()
  return user  ?( <Outlet /> ) : <Navigate to="/login" />;
};

export default PrivateRoutes;
