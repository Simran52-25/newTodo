import React ,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const AuthenticatedRoutes = ({children}) => {
  const { isLogged } = useSelector((store) => store.login);
  if (!isLogged) return <Navigate to="/login" />;
  return <>{children}</> ;
};

export default AuthenticatedRoutes;
