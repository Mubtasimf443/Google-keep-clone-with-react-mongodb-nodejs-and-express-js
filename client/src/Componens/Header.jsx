/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */



import React from 'react'   ;
import  '../css/Header.css'  ;



function Header() {
  return (
    <header>
  <div className="header_div_1">
      <i className="fa-solid fa-bars"></i>
      <i  className="fa-solid fa-file-pen"></i>
      <b>Notes</b>
  </div>
  <div className="header_div_2">
    
    <div className="textArea_div">
       <i className="fa-solid fa-magnifying-glass"></i>
       <textarea placeholder="Search" name="" id="">
         
       </textarea>
    </div>
  </div>
  <div className="header_div_3">
    <div className="icon_div">
            <i className="fa-solid fa-list"></i>
      <i className="fa-solid fa-gear"></i>
    </div>
    <div className="image_div">
      <div className="profile_avater">
        <b>M</b>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
