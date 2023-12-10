import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between z-[100] w-full p-4'>
        <h1 className='text-4xl text-red-600 cursor-pointer'>NETFLIX</h1>
        <div>
            <button className=' text-white px-4 py-2 rounded cursor-pointer border mr-4'>Log In</button>
            <button className='bg-red-600 text-white px-4 py-2 rounded cursor-pointer'>Sign Up</button>
        </div>

        </div>
    );
};

export default Navbar;