import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {LogIn,user}=useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
        LogIn(data.email,data.password).then(result=>{
            const loggedUser=result.user
            console.log(loggedUser)
        })
        console.log(data)
        reset()
        navigate('/')
    }

    return (
        <>
         <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/10e042ab-9935-4aaa-9784-c83736a90839/BD-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className='bg-black/60 w-full h-screen fixed top-0 left-0'></div>
            <form onSubmit={handleSubmit(onSubmit)} className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl text-start text-bold mb-2'>Sign In</h1>
                        <div className='flex flex-col'>
                            <input 
                            className='bg-gray-700 p-3 my-2 rounded'
                            type="email"
                            placeholder='Your phone /email rounded'   
                            {...register("email")}
                            />
                          <input
                        className='bg-gray-700 p-3 my-2 rounded'   
                          {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password" placeholder="password"/>
                            {errors.password?.type === "required" && <span className="text-orange-500">Password must required</span>}
                            {errors.password?.type === "minLength" && <span className="text-orange-500">Password must be 6 charecter</span>}
                            {errors.password?.type === "pattern" && <span className="text-orange-500">Password must have one uppercase,one lower case & one special charecter to secured mostly</span>}
                
                            <button className='bg-red-600 px-4 py-2 rounded'>Registerd</button>
                            <div className='flex justify-between items-center text-sm text-gray-400 py-5'>
                                <p><input type="checkbox" name="" id="" />Remember me</p>
                                <p>Need Help ?</p>
                            </div>
                            
                            <div>
                                    <p className='text-gray-400 py-8 text-start'>New at netflix? <Link to={'/signUp'}><span className='text-white'>Sign Up now</span></Link></p>
                                </div>
                        </div>
                    </div>

                </div>

            </form>
        </div>
            
        </>
    );
};

export default Login;