import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between z-[100] w-full p-4 absolute'>
        <h1 className='text-4xl text-red-600 cursor-pointer font-semibold'>NETFLIX</h1>
        <div>
            <button className=' text-white px-4 py-2 rounded cursor-pointer border mr-4'>Log In</button>
           <Link to={'/signUp'}>
           <button className='bg-red-600 text-white px-4 py-2 rounded cursor-pointer'>Sign Up</button>
           </Link>
        </div>

        </div>
    );
};

export default Navbar;