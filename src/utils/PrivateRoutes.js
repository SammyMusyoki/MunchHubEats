import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const PrivateRoutes = () => {
  const { user } = useUserAuth()
  
  if (!user) {
    return <Navigate to='/login' />
  }

  return <Outlet />;
};

export default PrivateRoutes;
