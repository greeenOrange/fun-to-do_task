import { createBrowserRouter } from "react-router-dom";
import MainLayer from "../src/Layout/MainLayer";
import Home from "../src/Components/Home/Home";
import MulitiForms from "../src/Components/MulitiForms/MulitiForms";
import Login from "../src/Shared/LoginAuthForm/Login/Login";
import Register from "../src/Shared/LoginAuthForm/Register/Register";
import TaskList from "../src/Components/TaskList/TaskList";
import TaskDND from "../src/Components/TaskDND/TaskDND";

const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayer />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("http://localhost:5000/tasks")
        },
        {
          path: "/form",
          element: <MulitiForms />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/about",
          element: <TaskList />,
        },
      ],
    },
  ]);
  export default routers;