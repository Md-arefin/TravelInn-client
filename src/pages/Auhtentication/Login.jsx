import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import loginImg from '/image/Login-amico.png';
import googleImg from '/image/google.png';
import facebookImg from '/image/facebook.png';
import githubImg from '/image/github.png';
import { BiLogIn } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {

    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        setError('');
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                const saveUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                }
                fetch('http://localhost:5000/add-users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json(saveUser))
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            })
    }

    // googleSignIn
    const handleGoogle = () => {
        setError('')

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    imgURL: loggedUser.photoURL,
                }
                fetch('http://localhost:5000/add-users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json",
                        // "authorization" : `Bearer ${localStorage.getItem("access-token")}`
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json(saveUser))
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // navigate(from, { replace: true })
                        navigate('/')
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className='flex flex-col md:flex-row mx-4 gap-10'>
            <div className='w-full md:w-1/3 mx-auto md:mt-36'>
                <img src={loginImg} alt="" />
            </div>

            <form className='w-full md:w-1/3 mx-auto md:mt-24 p-2 md:p-5 lg:p-10 border-2 rounded-lg border-black ' onSubmit={handleSubmit(onSubmit)}>

                <h5 className='text-center font-semibold text-3xl'>Please Login</h5>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-md"
                        type="email"
                        placeholder='Enter your email...'
                        {...register("email")} required />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="w-full rounded-md"
                        type="password"
                        placeholder='Enter your password...'
                        {...register("password")} required />
                </div>

                <p className='text-center'>New to Travelling? <Link to='/sign-up' className='underline font-semibold'> Please Sign-up</Link></p>

                <div className="flex justify-center my-10">

                    <button type="submit" className="bg-[#a98467] btn w-1/2 p-1 rounded-md border-2 text-white border-black flex justify-evenly items-center">Submit <BiLogIn /></button>
                </div>

                <div className='border-2 w-3/4 mx-auto my-5'></div>

                <h5 className='text-center font-semibold text-3xl'>Social Login</h5>

                <div className=' flex items-center justify-evenly gap-5 my-5'>
                    <img onClick={handleGoogle} src={googleImg} className='w-10 cursor-pointer' alt="" />
                    <img src={facebookImg} className='w-10 cursor-pointer' alt="" />
                    <img src={githubImg} className='w-10 cursor-pointer' alt="" />
                </div>

            </form>

        </div>
    );
};

export default Login;