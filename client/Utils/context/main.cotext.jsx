 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

import React, { createContext, useContext } from 'react'
import useLocalStorage from '../useLocalStorage.hooks'


const Contex = createContext()


const useMainContext = () => {
    return useContext(Contex)
}

const MainCotext = ({child}) => {
    let [notes ,setNotes] = useLocalStorage('notes', [])


    const addNote = (name , body) => {
        let id = Math.floor(Math.random() *10000000000)
        setNotes([...notes , {id , name , body}])
    }
  return (
  <Contex.Provider value={ {addNote, notes}}>
 { child}
  </Contex.Provider>
  )
 
}

export  {MainCotext,useMainContext}




