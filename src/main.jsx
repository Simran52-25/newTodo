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
import Login from "./components/Login.jsx";
import AuthenticatedRoutes from "./infrastructure/AuthenticatedRoutes.jsx";
import UnauthenticatedRoutes from "./infrastructure/UnauthenticatedRoutes.jsx";
import UserProfile from "./components/UserProfile.jsx";
import MainAuthenticated from "./components/MainAuthenticated.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <TodoContextProvider>
        <MainAuthenticated>
          <Routes>
            <Route element={<RouteLayout />}>
              <Route
                index
                element={
                  <AuthenticatedRoutes>
                    {" "}
                    <Home />{" "}
                  </AuthenticatedRoutes>
                }
              ></Route>
              <Route
                path="/users"
                element={
                  <AuthenticatedRoutes>
                    {" "}
                    <Users />{" "}
                  </AuthenticatedRoutes>
                }
              ></Route>
              <Route
                path="/posts"
                element={
                  <AuthenticatedRoutes>
                    <Posts />
                  </AuthenticatedRoutes>
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <AuthenticatedRoutes>
                    <UserProfile />
                  </AuthenticatedRoutes>
                }
              ></Route>
              {}

              <Route
                path="/login"
                element={
                  <UnauthenticatedRoutes>
                    <Login />{" "}
                  </UnauthenticatedRoutes>
                }
              ></Route>
            </Route>
          </Routes>
        </MainAuthenticated>
      </TodoContextProvider>
    </BrowserRouter>
  </Provider>
);
