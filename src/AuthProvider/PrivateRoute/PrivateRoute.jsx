import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <h1 className='text-white py-16 w-full mx-auto text-2xl'>"LOADING........ Please one sec"</h1>
    }

    if(user?.email){
        return children;
    }
  return <Navigate to={'/'}></Navigate>;
};

export default PrivateRoute;