import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '/image/globe.png'

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const navbarItems = <>
        <li className='lg:text-lg font-semibold'>
            <Link to='/'>Home</Link>
        </li>
        <li className='lg:text-lg font-semibold'>
            <Link to='/'>Rooms</Link>
        </li>
        {/* <li>
            <Link to='/'>Rooms</Link>
        </li> */}
        <li className='lg:text-lg font-semibold'>
            <Link to='/about'>About</Link>
        </li>
        <li className='lg:text-lg font-semibold'>
            <Link to='/contact'>Contact</Link>
        </li>
    </>

    const handleLogout = () => {
        logout()
            .then()
            .catch(err => console.log(err))
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItems}
                    </ul>
                </div>
                <div className='flex items-center '>
                    <a className="btn btn-ghost normal-case font-bold text-3xl">Travelling</a>
                    <img src={logo} className="w-10" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center justify-center gap-3'>
                            <div className="avatar">
                                <div className="w-16 rounded-xl">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleLogout} className="btn bg-[#a98467]">Logout</button>
                        </div> : <Link to='/login' className='btn bg-[#a98467]'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;