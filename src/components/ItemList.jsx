import { useContext } from "react";
import { TodoContext } from "./TodoContext/TodoContext";

const ItemList = () => {
  const { todo,edit,setEdit,setEditIndex,formikEdit,setTodo } = useContext(TodoContext);
  const handleDelete = (ind) => {
    const newarr = todo.filter((_, index) => ind != index);
    setTodo(newarr);
  };
  const handleEdit = (index) => {
    setEdit(true);
    // console.log(index)
    setEditIndex(index);
    formikEdit.setValues(todo[index]);
  };
 
  return (
    <>
      <div className="todo-list ">
        <h1 className=" text-center text-xl font-semibold text-[#205781]">
          Todo List
        </h1>
        {todo.length===0 ? <div className=" text-center font-medium text-lg mt-5">No items added.Add an item first</div>:
        todo.map((item, index) => (
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
    </>
  );
};
export default ItemList;
