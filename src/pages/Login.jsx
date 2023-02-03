import React, { useState } from "react";
import '../styles/log.css'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login=()=>{
    const [err,setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        try{
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/")             
        }
        catch(err){
            setErr(true);
        }
};

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Talk Tribe</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit} method='post'>
                    <input className="txt-fd" type="email" placeholder="Email" />
                    <input className="txt-fd" type="password" placeholder="Password" />
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <div className="lg-lnk">
                    <p>You don't have an account?</p>
                    <Link to='/register'>Register</Link>
                </div>
            </div>
        </div>
    )
}


export default Login;