import { Outlet } from "react-router";
import Header from "./components/Header";

const RouteLayout = () => {
  return (
    <>
        <Header />
        <Outlet/>
    </>
  );
}

export default RouteLayout;
