import { NavLink } from "react-router";
import { logout } from "../store/LoginSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#205781] text-white pl-4 p-2 shadow-md text-lg ">
      <div className=" flex gap-4 items-center  ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${
              isActive ? "text-green-500" : ""
            } cursor-pointer hover:text-gray-300 hover:scale-110 `
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            `${
              isActive ? "text-green-500" : ""
            } cursor-pointer hover:text-gray-300 hover:scale-110 `
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive, isPending }) =>
            `${
              isActive ? "text-green-500" : ""
            } cursor-pointer hover:text-gray-300 hover:scale-110 `
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            `${
              isActive ? "text-green-500" : ""
            } cursor-pointer hover:text-gray-300 hover:scale-110 `
          }
        >
          Profile
        </NavLink>
        <button
          className="mr-2 text-[18px] font-medium border-2 rounded-md bg-[#59809e] p-2 w-max "
          onClick={() => dispatch(logout())}
        >
          Logout{" "}
        </button>
      </div>
    </div>
  );
};
export default Header;
