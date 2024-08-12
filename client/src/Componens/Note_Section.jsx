/*   بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */




import React , { useState } from 'react' ;
import './css/Note_Section.css' ;
import { useMainContext } from '../../Utils/context/main.cotext';





const Note_Section = (props) => {
  let {notes } = useMainContext() ;

  if (notes.length === 0) {
    return (
    <div style={{width :'100%',
      display: 'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems :'center',
      height:'15em' 
    }} >

<h2 >
      Please add a notes
    </h2>
    </div>
    )
  }


  let notelist = notes.map(({id , name ,body}) => {
    return           <div id={id} className='notebox'> <h3> {name}</h3><p>{body}</p></div>

  })
   return (
       <div className="notelayoutSection"> 
 {notelist}
       </div>
       
      
    )
}
  



 
 
export default Note_Section
