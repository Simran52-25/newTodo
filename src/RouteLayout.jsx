import { Outlet } from "react-router";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RouteLayout;
