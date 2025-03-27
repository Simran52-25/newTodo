import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tryAccessLogin } from "../store/LoginSlice";
const MainAuthenticated = ({ children }) => {
  const { isLogged, isLoading } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tryAccessLogin());
  }, []);
  if (isLoading) return <div className="h-svh flex items-center justify-center text-lg font-semibold">Loading...</div>;
  return <div>{children}</div>; 
};
export default MainAuthenticated;
