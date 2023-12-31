import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import { Children } from "react";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Account from "../Account/Account";
import PrivateRoute from "../AuthProvider/PrivateRoute/PrivateRoute";



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
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/account',
          element:<PrivateRoute>
            <Account></Account>
          </PrivateRoute>
        }
      ]
    },
  ]);