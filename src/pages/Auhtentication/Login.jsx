import React from 'react';
import { useForm } from 'react-hook-form';
import loginImg from '/image/Login-amico.png';
import googleImg from '/image/google.png';
import facebookImg from '/image/facebook.png';
import githubImg from '/image/github.png';
import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Login = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='w-2/3 mx-auto md:mt-24'>
                <img src={loginImg} alt="" />
            </div>

            <form className='w-2/3 mx-auto md:mt-24 p-10 border-2 rounded-lg border-black ' onSubmit={handleSubmit(onSubmit)}>

                <h5 className='text-center font-semibold text-3xl'>Please Login</h5>

                <div className="flex flex-col gap-3 my-2">

                    <label htmlFor="username">Username</label>
                    <input
                        className="w-full rounded-md"
                        type="text"
                        placeholder='Enter your username...'
                        {...register("username")} />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-md"
                        type="email"
                        placeholder='Enter your email...'
                        {...register("email")} />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="w-full rounded-md"
                        type="password"
                        placeholder='Enter your password...'
                        {...register("password")} />
                </div>

                <p className='text-center'>New to Travelling? <Link to='/sign-up' className='underline font-semibold'> Please Sign-up</Link></p>

                <div className="flex justify-center my-10">

                    <button type="submit" className="bg-slate-500 w-1/2 p-1 rounded-md border-2 text-white border-black flex justify-evenly items-center">Submit <BiLogIn /></button>
                </div>

                <div className='border-2 w-3/4 mx-auto my-5'></div>

                <h5 className='text-center font-semibold text-3xl'>Social Login</h5>

                <div className=' flex items-center justify-evenly gap-5 my-5'>
                    <img src={googleImg} className='w-10 cursor-pointer' alt="" />
                    <img src={facebookImg} className='w-10 cursor-pointer' alt="" />
                    <img src={githubImg} className='w-10 cursor-pointer' alt="" />
                </div>

            </form>

        </div>
    );
};

export default Login;