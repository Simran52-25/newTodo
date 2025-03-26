import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#205781] text-white pl-4 p-2 shadow-md text-lg">
      <div className=" flex gap-4  ">
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
      </div>
    </div>
  );
};
export default Header;
