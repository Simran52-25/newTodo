import { useFormik } from "formik";
import { checkLogin } from "../store/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {

  
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
