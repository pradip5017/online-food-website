import React, { useState } from 'react'
import './loginpopup.css'

function LoginPopup({setShowLogin}) {
  const [currState,setCurrState]=useState("Sign Up")
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <div className='cross' onClick={()=>setShowLogin(false)}>X</div>
        </div>
<div className="login-popup-inputs">
 {currState==="Login"?<></>:<input type='text' placeholder='Your name' required/>}
  <input type='email' placeholder='Your Email' required/>
  <input type='password' placeholder='Password' required/>

</div>
<button>{currState==="Sign Up"?"create account":"Login"}</button>
<div className="login-popup-condition">
  <input type="checkbox" required />
  <p>By continuing i agree to the terms of use & privacy policy.</p>
</div>
{currState==="Login" ? 
<p>Create an account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
:<p>Already  have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
}
      </form>
      
    </div>
  )
}

export default LoginPopup
