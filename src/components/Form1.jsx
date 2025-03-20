import { useFormik } from "formik"; 
import * as Yup from "yup"
const Form1 = () => {
    
    
//   with yup,for validation, we canpass validationSchema object to useformik hook.
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    onSubmit:(values)=>{
        alert(values.username)
    },
    validationSchema:Yup.object({
        username:Yup.string().required().min(5,"enter full name"),
        email:Yup.string().required().email("add correct email"),
        password:Yup.string().required().min(5,"enter password greater than 5 charcaters")
    }),
  });

  console.log(" errors - ",formik.errors)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Enter username</label>
        <input className="border-2 border-black p-1" name="username" id="username" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur}></input>
        {formik.errors.username && <div className="text-red-600">{formik.errors.username}</div>}
      </div>
      <div>
        <label htmlFor="email">Enter email</label>
        <input className="border-2 border-black p-1" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
        {formik.errors.email && <div className="text-red-600">{formik.errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Enter password</label>
        <input type="password" className="border-2 border-black p-1" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}></input>
        { formik.errors.password && <div className="text-red-600">{formik.errors.password}</div>}

      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form1;
