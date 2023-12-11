import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import { Children } from "react";
import Home from "../Home/Home";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);