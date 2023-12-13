import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/10e042ab-9935-4aaa-9784-c83736a90839/BD-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className='bg-black/60 w-full h-screen fixed top-0 left-0'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl text-start text-bold mb-2'>Sign Up</h1>
                        <div className='flex flex-col'>
                            <input 
                            className='bg-gray-700 p-3 my-2 rounded'
                            type="email"
                            placeholder='Your phone /email rounded'   
                            />
                            <input 
                            className='bg-gray-700 p-3 my-2 rounded'
                            type="password"
                            placeholder='Your Password'   
                            />
                            <button className='bg-red-600 px-4 py-2 rounded'>Registerd</button>
                            <div className='flex justify-between items-center text-sm text-gray-400 py-5'>
                                <p><input type="checkbox" name="" id="" />Remember me</p>
                                <p>Need Help ?</p>
                            </div>
                            
                            <div>
                                    <p className='text-gray-400 py-8 text-start'>Already have an acoount? <Link to={'/login'}><span className='text-white'>Sign In now</span></Link></p>
                                </div>

                            
                        </div>

              

                    </div>

                </div>

            </div>


        </div>
            
        </>
    );
};

export default SignUp;