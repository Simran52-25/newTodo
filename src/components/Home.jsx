import { useState, useEffect, useActionState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// import "./Home.css";
const Home = () => {
  //   const list = [{ id: 1, description: "todo1" }];
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editIndex,setEditIndex]=useState(null)
  const formik = useFormik({
    initialValues: {
      createdon: "",
      enddate: "",
      assignedby: "",
      description: "",
    },
    onSubmit:(values)=>{
        console.log("onSubmit")
        if(formik.isValid){
            handleAdd()
        }
        else{
             console.log("error")
        }
    },
    validationSchema: Yup.object({
      assignedby: Yup.string().required("Compulsory to enter this field"),
      description: Yup.string()
        .required("mandatory field")
        .min(10, "enter more than 10 characters"),
    }),
  });
  const formikEdit = useFormik({
    initialValues: {
      createdon: "",
      enddate: "",
      assignedby: "",
      description: "",
    },
    // validationSchema: Yup.object({
    //   assignedby: Yup.string().required("Compulsory to enter this field"),
    //   description: Yup.string()
    //     .required("madatory field")
    //     .min(10, "enter more than 10 characters"),
    // }),
  });

  const handleAdd = () => {
    console.log("handleadd called")
    setTodo((prev) => [...prev, formik.values]);
    // setTask({ description: "", createdon: "", enddate: "", assignedby: "" });
    formik.resetForm()
  };

  const handleDelete = (ind) => {
    const newarr = todo.filter((_, index) => ind != index);
    setTodo(newarr);
  };
  const handleEdit = (index) => {
    setEdit(true);
    // console.log(index)
    setEditIndex(index);
    // console.log(editIndex)
    // console.log("todo[editIndex]",todo[editIndex])
    // setEditTask(todo[index]);
    //   formikEdit.setValues({enddate:"",assignedby:"",description:"",createdon:""})
    formikEdit.setValues(todo[index])
  };
  const editArray = () => {
    const newArr = todo.map((item, index) =>
      index === editIndex ? {... formikEdit.values } : item
    );
    setTodo(newArr);
    setEdit(false);
  };

  //   const handleChange = (e) => {
  //     const value = e.target.value;
  //     const key = e.target.name;
  //     // console.log(key,value)
  //     setTask((prev) => {
  //       return { ...prev, [key]: value };
  //     });
  //   };
  const handleEditChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    // console.log(key,value)
    setEditTask((prev) => {
      return { ...prev, [key]: value };
    });
  };
  console.log("todo", todo);

  return (
    <div className="main flex flex-col">
      <div className="add-item bg-[#B3D8A8] shadow-md">
        <div className="text-center text-xl font-semibold text-[#205781]">
          Add To Do
        </div>
        <div className=" p-4">
          <form
            className="  flex flex-col gap-1.5 items-center  "
            onSubmit={formik.handleSubmit}
            // onChange={(e) => handleChange(e)}
          >
            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              <div className="flex flex-col gap-0.5 ">
                <label>description</label>
                <input
                  className="p-1 border-2 rounded-md border-blue-200 "
                  type="text"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                 {formik.touched.description && formik.errors.description && <p className="text-red-600">{formik.errors.description}</p>}
              </div>
              <div className="flex flex-col gap-0.5 ">
                <label>deadline</label>
                <input
                  className="p-1 border-2 rounded-md border-blue-200"
                  type="date"
                  name="enddate"
                  value={formik.values.enddate}
                  onChange={formik.handleChange}
                ></input>
                {formik.errors.enddate&& <p className="text-red-600">{formik.errors.enddate}</p>}
                
              </div>

              <div className="flex flex-col gap-0.5 ">
                <label>created on</label>
                <input
                  className=" p-1 border-2 rounded-md border-blue-200"
                  name="createdon"
                  type="date"
                  value={formik.values.createdon}
                  onChange={formik.handleChange}
                ></input>
                 {formik.errors.createdon&& <p className="text-red-600">{formik.errors.createdon}</p>}
              </div>
              <div className="flex flex-col gap-0.5 ">
                <label>Assigned by</label>
                <input
                  className="p-1 border-2 rounded-md border-blue-200"
                  name="assignedby"
                  value={formik.values.assignedby}
                  type="text"
                  onChange={formik.handleChange}
                ></input>
                 {formik.errors.assignedby&& <p className="text-red-600">{formik.errors.assignedby}</p>}
              </div>
            </div>
            <button
            //   onClick={handleAdd}
              type="submit"
              className="text-[18px] font-medium border-2 rounded-md bg-[#59809e] p-2 w-max"
            >
              Add item
            </button>
          </form>
        </div>
      </div>
      <div className="todo-list ">
        <h1 className=" text-center text-xl font-semibold text-[#205781]">
          Todo List
        </h1>
        {todo.map((item, index) => (
          <div
            className="todo-item bg-[#c0c0c0] p-2 flex justify-between m-3 shadow-md border-2 rounded-md border-[#c0c0c0]"
            key={index}
          >
            <ul className="list-none">
              {item?.description && (
                <li>{`Description: ${item?.description}`}</li>
              )}
              {item?.createdon && <li>{`Created on: ${item?.createdon}`}</li>}
              {item?.assignedby && (
                <li>{`Assigned by: ${item?.assignedby}`}</li>
              )}
              {item?.enddate && <li>{`Deadline: ${item?.enddate}`}</li>}
            </ul>
            <div className="buttons flex gap-1">
              <button
                className="edit-btn btn p-1 font-medium bg-[#a1e3a9] h-max border-2 rounded-md text-[16px] cursor-pointer  "
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="del-btn btn font-medium p-1 bg-[#a1e3a9] border-2 rounded-md text-[16px] cursor-pointer h-max"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {edit && (
        <div className="  edit-input fixed  inset-0 flex items-center justify-center">
          <form
            className="border-white border-2 rounded-md p-2 w-1/4 bg-[#B3D8A8] flex flex-col gap-2 "
            // onChange={(e) => handleEditChange(e)}
            onSubmit={formikEdit.handleSubmit}
          >
            <div className="flex flex-col gap-0.5 ">
              <label>description</label>
              <input
                className="border-1 rounded-md"
                type="text"
                name="description"
                value={formikEdit.values.description}
                onChange={formikEdit.handleChange}
              ></input>
            </div>
            <div className="flex flex-col gap-0.5 ">
              <label>deadline</label>
              <input
                className="border-1 rounded-md"
                type="date"
                name="enddate"
                value={formikEdit.values.enddate}
                onChange={formikEdit.handleChange}
              ></input>
            </div>

            <div className="flex flex-col gap-0.5 ">
              <label>created on</label>
              <input
                className="border-1 rounded-md"
                name="createdon"
                type="date"
                value={formikEdit.values.createdon}
                onChange={formikEdit.handleChange}
              ></input>
            </div>
            <div className="flex flex-col gap-0.5 ">
              <label>Assigned by</label>
              <input
                className="border-1 rounded-md"
                name="assignedby"
                value={formikEdit.values.assignedby}
                onChange={formikEdit.handleChange}
                type="text"
              ></input>
            </div>
            <button
              onClick={editArray}
              className=" font-semibold text-[16px] cursor-pointerborder-2 rounded-md bg-[#A0C878] p-1 w-max mx-auto"
              type="submit"
            >
              Done Edit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Home;
