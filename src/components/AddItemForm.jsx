import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
const AddItemForm = () => {
  const { formik } = useContext(TodoContext);

  return (
    <>
      <div className="add-item bg-[#B3D8A8] shadow-md">
        <div className="text-center text-xl font-semibold text-[#205781]">
          Add To Do
        </div>
        <div className=" p-4">
          <form
            className="  flex flex-col gap-1.5 items-center  "
            onSubmit={formik.handleSubmit}
          >
            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              <div className="flex flex-col gap-0.5 ">
                <label>Description</label>
                <input
                  className="p-1 border-2 rounded-md border-blue-200 "
                  type="text"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-600">{formik.errors.description}</p>
                )}
              </div>
              <div className="flex flex-col gap-0.5 ">
                <label>End Date</label>
                <input
                  className="p-1 border-2 rounded-md border-blue-200"
                  type="date"
                  name="enddate"
                  value={formik.values.enddate}
                  onChange={formik.handleChange}
                ></input>
                {formik.errors.enddate && (
                  <p className="text-red-600">{formik.errors.enddate}</p>
                )}
              </div>

              <div className="flex flex-col gap-0.5 ">
                <label>Created on</label>
                <input
                  className=" p-1 border-2 rounded-md border-blue-200"
                  name="createdon"
                  type="date"
                  value={formik.values.createdon}
                  onChange={formik.handleChange}
                ></input>
                {formik.errors.createdon && (
                  <p className="text-red-600">{formik.errors.createdon}</p>
                )}
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
                {formik.errors.assignedby && (
                  <p className="text-red-600">{formik.errors.assignedby}</p>
                )}
              </div>
              <div  className="flex flex-col gap-0.5 ">
                <label htmlFor="priority">Select Priority</label>
                <select id="priority" className="p-1 border-2 rounded-md border-blue-200" onChange={formik.handleChange} value={formik.values.priority}>
                  <option value="">-- Select --</option>
                  <option name="high" value="high">High</option>
                  <option name="medium" value="medium">Medium</option>
                  <option name="low" value="low">Low</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="text-[18px] font-medium border-2 rounded-md bg-[#59809e] p-2 w-max"
            >
              Add item
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddItemForm;
