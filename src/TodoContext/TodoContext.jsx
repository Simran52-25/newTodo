import { createContext, useRef } from "react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export const TodoContext = createContext();
export const TodoContextProvider = ({ children }) => {
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [todo, setTodo] = useState([]);
  const modalRef=useRef();
  const formik = useFormik({
    initialValues: {
      createdon: "",
      enddate: "",
      assignedby: "",
      description: "",
      priority:""
    },
    onSubmit: (values, 
      {resetForm}
    ) => {
      setTodo((prev) => [...prev, values]);
      // console.log("props - ", props);
      resetForm();
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
  });

  return (
    <TodoContext.Provider
      value={{
        edit,
        setEdit,
        editIndex,
        setEditIndex,
        todo,
        setTodo,
        formikEdit,
        formik,
        modalRef
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
