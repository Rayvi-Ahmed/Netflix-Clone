import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return "LOADING........ Please one sec"
    }

    if(user?.email){
        return children;
    }
    return (
        Swal.fire({
            title: "You must be log in !",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
    );
};

export default PrivateRoute;