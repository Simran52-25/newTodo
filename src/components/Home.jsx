import {  useContext, useEffect, useRef } from "react";
import EditModal from "./EditModal";
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";
import { TodoContext } from "./TodoContext/TodoContext";

const Home = () => {
  return (
    <div className={`main flex flex-col  }`}>
      {/* Home component */}
      <AddItemForm/>
      <ItemList/>
      <EditModal/>
    </div>
  );
};
export default Home;
