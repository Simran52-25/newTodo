import { useFormik } from "formik";
import { checkLogin } from "../store/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const { error } = useSelector((store) => store.login);

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
    <div className="h-svh flex justify-center items-center p-2">
      <form
        className="bg-[#B3D8A8] shadow-md flex flex-col p-4 rounded-lg gap-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-md font-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            placeholder="Enter email"
            className="p-1 border-2 border-transparent rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-md font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            placeholder="Enter password"
            className="p-1 border-2 border-transparent rounded-md"
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
        {error.length ? <div className="text-red-600">{error}</div> : ""}
      </form>
    </div>
  );
};
export default Login;
