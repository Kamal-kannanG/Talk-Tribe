import React, { useContext } from "react";
import '../styles/nav.css'
import { signOut } from 'firebase/auth'
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    // const [currentUser,setCurrentUser] = useState({});
    const navigate = useNavigate()
    const {currentUser} = useContext(AuthContext);
    

    return(
        <div className="navbar">
            <span className="logo">Talk Tribe</span>
            <div className="user">
                <img className="dp" src={currentUser.photoURL} alt="" />
                <span >{currentUser.displayName}</span>
                <button onClick={() => signOut(auth).then(()=>{
                    navigate('/login')
                })}>Logout</button>
            </div>
        </div>
    )

}

export default Navbar;