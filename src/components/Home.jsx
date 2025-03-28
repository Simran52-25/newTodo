import EditModal from "./EditModal";
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";


const Home = () => {
  const { isLogged } = useSelector((store) => store.login);
  console.log(isLogged);
  if (!isLogged) return <Navigate to="/login" />;
  return (
    <div className={`main flex flex-col  }`}>
      <AddItemForm />
      <ItemList />
      <EditModal />
    </div>
  );
};
export default Home;
