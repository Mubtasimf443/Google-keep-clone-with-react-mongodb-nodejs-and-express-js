 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import {useRef} from 'react'
import  "../css/loginSignUp.css";

const Login = () => {
    let email = useRef('');
    let password = useRef('');


  return (
    
    <section className="auth_Section">
         <h2>Login</h2>
    <div className="box">
      <div className="input_box">
  <label for="email">Email</label>
  <input ref={email} id='email' type="text"/>
      </div>
      <div className="input_box">
        <label for="password">password</label>
        <input ref={password} id='password' type="text"/>
      </div>
     <div className="input_box">
        <button >Login</button>
     </div>
      
    </div>
    </section>
  )
}

export default Login
