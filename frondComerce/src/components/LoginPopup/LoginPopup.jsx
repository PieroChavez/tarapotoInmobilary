import React, { useState } from 'react'
import '../LoginPopup/LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h1>{currState}</h1>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<> </>: <input type="text"  placeholder='Your Name mi soli' required/> }
                <input type="email" placeholder='You mail :)' id=""  required />
                <input type="password" placeholder='contraseña mi Rey' required />
            </div>
            <button>{currState==="Sign Up"?"Crear mi cuenta Rey :)":"Login"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account?    <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an acconut? <span onClick={()=>setCurrState("Login")}>Login here</span></p>

            
            }
        </form>
      
    </div>
  )
}

export default LoginPopup
