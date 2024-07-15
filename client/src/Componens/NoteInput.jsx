 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */




 import React , {useState } from 'react'
 import  "./css/NoteInput.css";
 import { useNoteContext } from '../../Utils/context/notesContext.jsx'



//utils
 let ActiveNote = () => {
    let box2 = document.getElementById('note_box_2') ;
    if( document.querySelector('.text_note').value.length === 0) {
      box2.classList.toggle('active')
    };
  }




 function NoteInput() {
    const [textValue , setTextValue] = useState('') ;
    const [titleValue , setTitleValue] = useState('') ;
    let { addNotes } = useNoteContext() ;
    function enterNotes(event) {
      event.preventDefault() ;
      if (textValue === '' || titleValue === '') {
        return alert('Title and notes are not defined')
      } 
      return addNotes(titleValue , textValue)

    }

    let titleChange =  () => {
        let value = document.querySelector('.title_note').value ;
       setTitleValue(value) ; 
    }
    let textChange = () => {
       let value = document.querySelector('.text_note').value ;
        setTextValue(value) ;
    }
   return ( 
    
       <section  className="input_section">
  <div className="input_box">
    <div onClick={ActiveNote} className="box1">
      <textarea onChange={titleChange} placeholder='Title' className="title_note" id=""></textarea> 
      <i onClick={enterNotes} key="" className="fa-regular fa-square-check"></i>
      <i className="fa-solid fa-download"></i>
    </div>
   <div id='note_box_2' className="box2">
     <textarea onChange={textChange}  placeholder='Write the Note... ' className="text_note" id="" ></textarea>
    
   </div>
  </div>
  </section>
   
   )


}


 export default NoteInput
 