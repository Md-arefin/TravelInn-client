import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../components/Hooks/useAdmin';
import { AuthContext } from '../provider/AuthProvider';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    const isAdmin = true;

    // const [isAdmin] = useAdmin();

    // console.log(isAdmin?.admin);
    console.log(isAdmin);

    const userNavItems = <>

        <li>
            <NavLink to="/" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    Home
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/my-cart" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    My cart
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/MyWhishList" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    My WhishList
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/purchase" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    Paid History
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/review" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    Review
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>

        {/* <li>
        <NavLink to="/dashboard/profile" className='lg:text-xl btn flex justify-between items-center my-2'>
            <p>
                Profile
            </p>
            <img className='w-8' src={profileImg} alt="" />
        </NavLink>
    </li> */}

    </>

    const adminNavItems = <>
        <li>
            <NavLink to="/" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    Home
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/AllUsers" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    All users
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/AllRooms" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    All Rooms
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/AddRoom" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    Add Room
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li>
        {/* <li>
            <NavLink to="/dashboard/revenue" className='lg:text-xl btn flex justify-between items-center my-2'>
                <p>
                    Revenue
                </p>
                <img className='w-8' src=" " alt="" />
            </NavLink>
        </li> */}
    </>

    return (
        <div className='flex justify-between  w-full'>
            <div className='bg-gray-400 hidden lg:block lg:w-96 h-screen px-5 sticky top-0'>
                <div className='lg:mt-20 lg:mb-10'>
                    <div className="avatar">
                        <div className="w-24 lg:ml-20 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <p className='py-2 text-center text-xl px-2'>
                        {user?.displayName}
                    </p>
                </div>
                <div>
                    <ul>
                        {
                            isAdmin && adminNavItems || userNavItems
                        }
                    </ul>
                </div>
            </div>

            {/* OUTLET */}

            <div className='w-full'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-30 py-5 px-4 shadow bg-gray-400 rounded-box w-72">
                        <li>
                            <div className='flex flex-col items-center justify-center'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <p className='py-2 text-md px-2'>
                                    {user?.displayName}
                                </p>
                            </div>
                        </li>
                        {
                            isAdmin?.admin && adminNavItems || userNavItems
                        }
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;