 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import { useRef } from 'react'
import "../css/loginSignUp.css";

const Register = () => {
    let name = useRef('');
    let email = useRef('');
    let password = useRef('');
    let phone = useRef('');
    let cpassword = useRef('');

  
  return (
    <section className="auth_Section">
      <h2>Register</h2>
    <div className="box">
      <div className="input_box">
        <label for="">Name</label>
        <input ref={name} type="text" />
      </div>
      <div className="input_box">
         <label for="">Email</label>
         <input ref={email} type="text" />
      </div>
      <div className="input_box">
          <label for="">Number</label>
          <input ref={phone} type="number" />
      </div>
      <div className="input_box">
         <label for="">Password</label>
         <input ref={password} type="password" />
      </div>
      <div className="input_box">
          <label for="cpassword">Confirm Password</label>
          <input ref={cpassword} type="password" id="cpassword"/>
      </div>
      <div className="input_box"> 
      <button>Sign Up</button>
     </div>
    </div>   
    </section>
  )
}

export default Register ;
