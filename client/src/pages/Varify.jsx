 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import React, { useRef } from 'react'
import '../css/loginSignUp.css'


export default function Varify() {
    let code = useRef() ;
    

  return (
    <section className="auth_Section">
        <h2>2 steps Varification</h2>
        <div style={{rowGap:10}} className="box">
        <div style={{alignItems:"center"}} className="input_box">
          <i style={{fontSize:60}} className="fa-solid fa-user-shield"></i>
      </div>
        <div className="input_box">
          <label for="">OTP Varification</label>
          <input ref={code} type="number" />
      </div><div className="input_box">
          <button>Varify</button>
      </div>
        </div>
    </section>
  )
}
