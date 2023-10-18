import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Login from '../pages/Auhtentication/Login';
import SignUp from '../pages/Auhtentication/SignUp';
import Home from '../pages/Home/Home/Home';
import About from '../pages/About/About/About';
import Contact from '../pages/Contact/Contact/Contact';
import Rooms from '../pages/Rooms/Rooms/Rooms';
import Dashboard from '../Layout/Dashboard';
import AllUsers from '../pages/Dashboard/Admin/AllUsers/AllUsers';
import AllRooms from '../pages/Rooms/AllRooms/AllRooms';
import AddRoom from '../pages/Dashboard/Admin/AddRoom/AddRoom';
import ALLRooms from '../pages/Dashboard/Admin/AllRooms/AllRooms';
import EditRoom from '../pages/Dashboard/Admin/EditRoom/EditRoom';
import SingleRoom from '../pages/Rooms/SingleRoom/SingleRoom';
import Cart from '../pages/Dashboard/Users/Cart/Cart';
import PaidHistory from '../pages/Dashboard/Users/PaidHistory/PaidHistory';
import UserReview from '../pages/Dashboard/Users/UserReview/UserReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "rooms",
        element: <Rooms />
      },
      {
        path: "room/:id",
        element: <SingleRoom />,
        loader: ({ params }) => fetch(`http://localhost:5000/room/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [

      // user routes
      {
        path: "/dashboard",
        element: <Cart />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "history",
        element: <PaidHistory />,
      },
      {
        path: "userReview",
        element: <UserReview />,
      },


      // Admin routes
      {
        path: "AllUsers",
        element: <AllUsers />,
      },
      {
        path: "AllRooms",
        element: <ALLRooms />,
      },
      {
        path: "edit-room/:id",
        element: <EditRoom />,
        loader: ({ params }) => fetch(`http://localhost:5000/room/${params.id}`),
      },
      {
        path: "AddRoom",
        element: <AddRoom />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
]);

export default router;