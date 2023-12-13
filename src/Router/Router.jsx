import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import { Children } from "react";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);