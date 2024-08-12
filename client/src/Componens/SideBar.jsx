 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import React from 'react'
import "./css/sidebar.css";
import {useLocation ,NavLink} from 'react-router-dom'




function SideBar() {
  let a = useLocation();
  console.log(a);

  return (
<div className="side_bar">
    
    
    <div className="side_icon_div">
        <NavLink to={'/'} >
        <i className="fa-solid fa-pen-to-square"></i>
        </NavLink>
        <NavLink to={'/budget'}>
        <i className="fa-solid fa-wallet"></i>
        </NavLink>
        <div>
        <i className="fa-solid fa-list-check"></i>
        </div>
        <div> 
        <i className="fa-solid fa-heart-circle-plus"></i>
        </div>
        <div>
        <i className="fa-regular fa-trash-can"></i>
        </div>
    </div>
    <div className="side_text_div">
        <div>
        <p className="menu_notes">Notes</p>
        </div>
        <div>
        <p className="menu_budget">Bughets</p>
        </div>
        <div>
        <p className="menu_checklist">Checklist</p>
        </div>
        <div>
        <p className="menu_fevorites">Fevorites</p>
        </div>
        <div>
        <p className="menu_trash">Trash</p>
        </div>
    </div>
</div>
  )
}

export default SideBar

































