import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { TodoContextProvider } from "./TodoContext/TodoContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Users from "./components/Users.jsx";
import Store from "./store/Store.jsx";
import { Provider } from "react-redux";
import Home from "./components/Home.jsx";
import RouteLayout from "./RouteLayout.jsx";
import Posts from "./components/Posts.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <TodoContextProvider>
        <Routes>
          <Route element={<RouteLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
                  
          </Route>
        </Routes>
        
      </TodoContextProvider>
    </BrowserRouter>
  </Provider>
);
