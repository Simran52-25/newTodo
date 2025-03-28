import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  // const { accessToken } = useSelector((store) => store.login);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchUserProfile = async () => {
      const response = await fetch(
        "https://api-serenify.vercel.app/api/users/current-user",
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = response.json();
      return data;
    };
    fetchUserProfile().then((res) => {
      setUser(res.data);
    });
  }, []);

  // console.log(user);
  if (!user)
    return (
      <div className="font-semibold text-lg  text-[#65b24e] mt-[20%] flex justify-center items-center p-4 ">
        Loading....
      </div>
    );
  return (
    <div className=" mt-[20%] flex justify-center items-center p-4 ">
      <div className="  mx-auto p-4 bg-[#B3D8A8] shadow-lg rounded-lg  border-2 border-[#B3D8A8]">
        <div className="m-2 text-lg font-medium">
          Username:{"  " + user.name}
        </div>
        <div className="m-2 text-lg font-medium">
          Email: {"  " + user.email}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
