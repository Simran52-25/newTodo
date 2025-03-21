import { useFormik } from "formik";
// need to have handlesubmit attached to form,handleChnage attached to every input and value on input-= formik.values .(valuefield) 
const Form = () => {
    //validate function which will return an object

    const validate=(values)=>{
        const errors={}
        // if(!values.username){
        // errors.username="required"
        // }
        // else
         if(values.username.length<5){
            errors.username="enter full name"
        }
        if(!values.email){
            errors.email="compulsory to enter"
        }

        return errors
    }
    //useformik args:
    // -initialValues:gets mapped to values when returning 
    //- onsubmit: function which receives the field values of form,this function is run when the form is being submitted
    //-validate: function which will be called
    //useformik return: these needs to be attached to the input and form
    // handlesubmit (attached to form)
    // handleform (attached to every input field )
    // values ==mapped from initial values //name of inputfield
    // handleBlur to check the input field  are touched nor not =(onblur)
    

  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    onSubmit:(values)=>{
        alert(values.username)
    },
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Enter username</label>
        <input className="border-2 border-black p-1" name="username" id="username" onChange={formik.handleChange} value={formik.values.username}></input>
        {formik.errors.username&& <div className="text-red-600">{formik.errors.username}</div>}
      </div>
      <div>
        <label htmlFor="email">Enter email</label>
        <input className="border-2 border-black p-1" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
        {formik.errors.touched && formik.errors.email && <div className="text-red-600">{formik.errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Enter password</label>
        <input  type="password" className="border-2 border-black p-1" name="password" id="password" onChange={formik.handleChange} value={formik.values.password}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
