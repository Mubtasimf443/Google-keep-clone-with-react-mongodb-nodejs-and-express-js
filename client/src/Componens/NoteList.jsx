/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

import React from 'react'

const NoteList = ({data}) => {
   
    if (data == []) {
        return (
            <h1 style={{marginTop :60,textAlign:'right'}}>
                Please create a notes 
            </h1>
          )
    } 
    
    if (data.length !== 0) {
        
       
        return (
            <>
            {data.forEach(element => {
                return (
                    <article  id={element.id}>
                        <h3> {element.title}</h3>
                        <p>{element.notes}</p>
                    </article>
                )
            })}
            </>
        )
    }
 
}

export default NoteList ;
