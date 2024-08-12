 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

import React, { useEffect, useState } from 'react'
import NoteInput from "../Componens/NoteInput.jsx";
import SideBar from "../Componens/SideBar.jsx";
import Note_Section from "../Componens/Note_Section.jsx";


function NotesPage() {
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
