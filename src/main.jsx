import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Registrar/Register';
import EventDetails from './Components/Pages/EventDetails/EventDetails';
import AuthProvider from './providers/AuthProvider';
import Blogs from './Components/Pages/Blogs/Blogs';
import Contact from './Components/Pages/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/eventDetails/:id",
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/blogs",
        element: <PrivateRoute><Blogs></Blogs></PrivateRoute>,
        loader: () => fetch("/blogs.json")
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
