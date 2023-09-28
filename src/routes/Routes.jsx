import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Login from '../pages/Auhtentication/Login';
import SignUp from '../pages/Auhtentication/SignUp';
import Home from '../pages/Home/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }
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