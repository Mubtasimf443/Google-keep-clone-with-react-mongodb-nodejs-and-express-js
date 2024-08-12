 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import './css/main.css'
import NotesPage from './pages/NotesPage.jsx';
import BudgetPage from './pages/BudgetPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Varify from './pages/Varify.jsx';
import Header from './Componens/Header.jsx';
import SideBar from './Componens/SideBar.jsx';
import Home from './pages/Home.jsx';
import { MainCotext } from '../Utils/context/main.cotext.jsx';


const router = createBrowserRouter([
  {
    path :'/',
    element :<>
        <Header/>
        <SideBar />
        <Home />
    </> ,
    errorElement : <h2> error in loading </h2> ,
    children : [
      {
        path :'',
        element : <NotesPage/>,
        errorElement : <h2> error in loading </h2>
      } ,
      {
        path :'notes',
        element : <NotesPage/>,
        errorElement : <h2> error in loading </h2>
      },
      {
        path :'Budget',
        element : <BudgetPage/>,
        errorElement : <h2> error in loading </h2>
      },
    ]
  }
  , {
  path :'/login',
  element : <Login/>,
  errorElement : <h2> error in loading </h2>
}, {
  path :'/register',
  element : <Register/>,
  errorElement : <h2> error in loading </h2>
}, {
  path :'/varify',
  element : <Varify/>,
  errorElement : <h2> error in loading </h2>
}





])



ReactDOM.createRoot(document.getElementById('root')).render(
 <StrictMode >
  <MainCotext child={
    <RouterProvider router={router} />
  } />
 </StrictMode>
   
)
