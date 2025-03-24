import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { TodoContextProvider } from "./TodoContext/TodoContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Users from "./components/Users.jsx";
import Store from "./store/Store.jsx";
import { Provider } from "react-redux";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import RouteLayout from "./RouteLayout.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <TodoContextProvider>
        <Routes>
          <Route element={<RouteLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Route>
        </Routes>
      </TodoContextProvider>
    </BrowserRouter>
  </Provider>
);
