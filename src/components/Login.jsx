import { useFormik } from "formik";
import { checkLogin } from "../store/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
const Login = () => {
  // const [log, setLog] = useState(false);
  // useEffect(() => {
  //   const accessToken=localStorage.getItem("accessToken")
  //   if (accessToken) {
  //     const fetchUserProfile = async () => {
  //       const response = await fetch(
  //         "https://api-serenify.vercel.app/api/users/current-user",
  //         {
  //           method: "GET",
  //           headers: {
  //             authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );
  //       const data = response.json();
  //       return data;
  //     };
  //     fetchUserProfile().then((res) => {
  //       if (res.success) {
  //         setLog(true);
  //       }
  //     });
  //   }
  // }, []);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      // alert(email);
      dispatch(checkLogin({ email, password }));
    },
  });
  // if (log) return <Navigate to="/" />;
  return (
    <div className="h-svh flex justify-center items-center">
      <form
        className="bg-[#B3D8A8] shadow-md flex flex-col p-4 rounded-lg gap-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="password">email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="  text-[18px] font-medium border-2 rounded-md bg-[#59809e] p-1"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
