 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */




 import React , {useState , useRef } from 'react'
 import  "./css/NoteInput.css";
import { useMainContext } from '../../Utils/context/main.cotext';



//utils
 


 function NoteInput() {

  let {addNote} = useMainContext();
  let textValue  = useRef() ;
  let titleValue =useRef() ;
  let box2 = useRef() ;

  function add() {
    addNote(titleValue.current.value, textValue.current.value)
  }

   return ( 
    
       <section  className="input_section">
  <div className="input_box">
    <div  className="box1">
      <textarea onClick={e => box2.current.classList.toggle('active') } ref={titleValue} placeholder='Title' className="title_note" id=""></textarea> 
      <i  onClick={add} key="" className="fa-regular fa-square-check"></i>
      <i className="fa-solid fa-download"></i>
    </div>
   <div id='note_box_2' ref={box2} className='box2' >
     <textarea ref={textValue} placeholder='Write the Note... ' className="text_note" id="" ></textarea>
    
   </div>
  </div>
  </section>
   
   )


}


 export default NoteInput
 