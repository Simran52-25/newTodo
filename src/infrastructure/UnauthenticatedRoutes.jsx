import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const UnauthenticatedRoutes = ({children}) => {
  const { isLogged } = useSelector((store) => store.login);

  if (isLogged) return <Navigate to="/" />;
  return  <>{children}</>  ;
};

export default UnauthenticatedRoutes;
