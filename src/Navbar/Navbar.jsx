import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,LogOut }=useContext(AuthContext)
    console.log(user)


    const handleLogout=()=>{
        LogOut()
    }
    return (
        <div className='flex items-center justify-between z-[100] w-full p-4 absolute'>
        <h1 className='text-4xl text-red-600 cursor-pointer font-semibold'>NETFLIX</h1>
        {
            user?.email ? <div>
          <Link to={'/account'}>
          <p className=' text-white px-4 py-2 inline cursor-pointer mr-4'>Account</p>
          </Link>
    
           <button onClick={handleLogout} className='bg-red-600 text-white px-4 py-2 rounded cursor-pointer'>Logout</button>
        
             </div>
             : <div>
           <Link to={'/login'}> <button className=' text-white px-4 py-2 rounded cursor-pointer border mr-4'>Log In</button></Link>
           <Link to={'/signUp'}>
           <button className='bg-red-600 text-white px-4 py-2 rounded cursor-pointer'>Sign Up</button>
           </Link>
        </div>
        }

        </div>
    );
};

export default Navbar;