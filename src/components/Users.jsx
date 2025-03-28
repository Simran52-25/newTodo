import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/UserSlice";
import { Navigate } from "react-router";

const Users = () => {
  const { isLogged } = useSelector((store) => store.login);
  if (!isLogged) return <Navigate to="/login" />;
  const url = "https://jsonplaceholder.typicode.com/users";
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(isLoading);
    dispatch(fetchUser());
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-blue-500 p-4">Loading the data</div>
      ) : (
        <div className="text-green-600 p-4">
          <ul className="text-black">
            {users.map((user, index) => {
              return (
                <div
                  key={user.id}
                  className="bg-[#c0c0c0] p-2  m-3 shadow-md border-2 rounded-md border-[#c0c0c0]"
                >
                  <li>
                    <span className="text-base font-semibold">User Id:</span>
                    {" " + user.id}
                  </li>
                  <li>
                    <span className="text-base font-semibold">User Name:</span>
                    {" " + user.name}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
export default Users;
