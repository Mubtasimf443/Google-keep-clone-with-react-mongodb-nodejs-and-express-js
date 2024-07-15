 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

import { useState } from 'react'
import Header from './Componens/Header'
import { Routes , Route } from "react-router-dom";
import NotesPage from './pages/NotesPage.jsx'
import SideBar from "./Componens/SideBar.jsx";

function App() {
 
 
  return (
    <>
     <Header />
     
    <SideBar/> 
     
     <Routes> 
      <Route path='/' element={ < NotesPage /> }  />
      <Route path='/notes' element={ < NotesPage /> } />
     </Routes>
    
     
    </>
  )
}

export default App
