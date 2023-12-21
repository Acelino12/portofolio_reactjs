import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/login.jsx";
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404';
import Home from './pages/home';
import Organisasi from './pages/organisasi.jsx';
import ContactUs from './pages/contactus.jsx';
import Sertifkat from './pages/Sertifikat.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/organisasi',
    element: <Organisasi/>
  },
  {
    path: '/ContactUs',
    element: <ContactUs/>
  },
  {
    path:'/Sertifikat',
    element: <Sertifkat/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
