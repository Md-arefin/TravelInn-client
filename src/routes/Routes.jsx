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
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/rooms",
        element: <Rooms />
      },
    ],
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