import { useContext } from "react"
import { TodoContext } from "../TodoContext/TodoContext"
import { useEffect} from "react"

const EditModal=()=>{
    const {formikEdit,edit,todo,editIndex,setTodo,setEdit,modalRef,setEditIndex}=useContext(TodoContext)
    useEffect(() => {
        document.addEventListener("mousedown", handleOutside);
        return () => {
          document.removeEventListener("mousedown", handleOutside);
        };
      }, [edit]);
      const handleOutside = (event) => {
        
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          console.log("clicked outside the modal");
          setEdit(false);
        }
      };
    const editArray = () => {
        const newArr = todo.map((item, index) =>
          index === editIndex ? { ...formikEdit.values } : item
        );
        setTodo(newArr);
        setEdit(false);
      };
    return (<>
      {edit && (
            <div className={` edit-input fixed inset-0 flex items-center justify-center ${edit&& "backdrop-blur-sm"}`}   >
              <form
                className=" relative border-white border-2 rounded-md p-4 w-1/4 bg-[#B3D8A8] flex flex-col gap-2 opacity-100 "
                // onChange={(e) => handleEditChange(e)}
                onSubmit={formikEdit.handleSubmit}
                ref={modalRef}
              >
                <button className="absolute right-2 top-1 " onClick={()=>{setEdit(false);setEditIndex(null)}}>&#10060;</button>
                <div className="flex flex-col gap-0.5 ">
                  <label>description</label>
                  <input
                    className="p-1 border-2 rounded-md border-blue-200"
                    type="text"
                    name="description"
                    value={formikEdit.values.description}
                    onChange={formikEdit.handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-0.5 ">
                  <label>deadline</label>
                  <input
                   className="p-1 border-2 rounded-md border-blue-200"
                    type="date"
                    name="enddate"
                    value={formikEdit.values.enddate}
                    onChange={formikEdit.handleChange}
                  ></input>
                </div>
    
                <div className="flex flex-col gap-0.5 ">
                  <label>created on</label>
                  <input
                   className="p-1 border-2 rounded-md border-blue-200"
                    name="createdon"
                    type="date"
                    value={formikEdit.values.createdon}
                    onChange={formikEdit.handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-0.5  ">
                  <label>Assigned by</label>
                  <input
                    className="p-1 border-2 rounded-md border-blue-200"
                    name="assignedby"
                    value={formikEdit.values.assignedby}
                    onChange={formikEdit.handleChange}
                    type="text"
                  ></input>
                </div>
                <button
                  onClick={editArray}
                  className="  font-semibold text-[16px] cursor-pointer border-2 rounded-md bg-[#59809e] p-1 w-max mx-auto"
                  type="submit"
                >
                  Done Edit
                </button>
              </form>
            </div>
          )}
    </>)
    }
    export default EditModal