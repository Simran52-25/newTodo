import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment } from "./store/UserSlice";
import { fetchUser } from "../store/UserSlice";

const Users = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);
  // console.log(users);
  useEffect(() => {
    // console.log("useffect called")
    console.log(isLoading);
    dispatch(fetchUser());
  }, []);

  return (
    <>
      {/* <div>User component</div> */}
      {/* <button className="bg-blue-400 text-white" onClick={()=>dispatch(increment())}>increment</button>
       */}
      {/* <div>value{count}</div>
       */}

      {isLoading ? (
        <div className="text-blue-500 p-4">Loading the data</div>
      ) : (
        <div className="text-green-600 p-4">
          <h3>Loading Finished</h3>
          <ul className="text-black">
            {users.map((user, index) => {
              return (
                <li
                  key={user.id}
                  className="bg-[#c0c0c0] p-2  m-3 shadow-md border-2 rounded-md border-[#c0c0c0]"
                >
                  <div>User Id:{user.id}</div>
                  <div>User name:{user.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
export default Users;
