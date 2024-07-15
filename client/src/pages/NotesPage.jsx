/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

import React from 'react'
import NoteInput from "../Componens/NoteInput.jsx";
import SideBar from "../Componens/SideBar.jsx";
import Note_Section from "../Componens/Note_Section.jsx";
import {NotesProvider } from '../../Utils/context/notesContext.jsx'

function NotesPage() {
  return (
    <NotesProvider children={ <Wrapped /> } />
  )
}



function Wrapped() {
  return (
    <main>
    <div className="starting"> 
    <NoteInput/>   
    <Note_Section />
    </div>
   

  </main>
  )
}



export default NotesPage
