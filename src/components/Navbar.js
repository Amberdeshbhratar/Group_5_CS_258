import React, { useEffect, useState } from 'react'
// import Togglebutton from './Togglebutton'
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from 'react-router-dom';
import Compiler from '../pages/Compiler';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = ({ isDarkMode, setIsDarkMode,user,isAuthenticated}) => {
        // const [isDarkMode, setIsDarkMode] = useState(() => false );
        const { loginWithRedirect, logout } = useAuth0();
        // const { user, isAuthenticated } = useAuth0();
        useEffect(() => {
                if (isDarkMode) {
                        // document.getElementsByClassName("Editorwindow").theme
                        console.log(isDarkMode)
                        document.body.className = 'LightTheme'
                        console.log(document.body.className)

                }
                else {
                        console.log(isDarkMode)
                        console.log(document.body.className)
                }
        }, [isDarkMode])
        
        return (
                <div>
                        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                                <div className="container-fluid">
                                        <Link className="navbar-brand" href="/">Code Editor</Link>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                                <ul className="navbar-nav">
                                                        <li className="nav-item">
                                                                <Link className="nav-link active" aria-current="page" to="/">Compiler</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                                <Link className="nav-link active" aria-current="page" to="/meeting"></Link>
                                                        </li>
                                                        {/* <li className="nav-item">
                                                                <Link className="nav-link" to="/about"></Link>
                                                        </li> */}
                                                        {/* <li className="nav-item">
                                                                <Link className="nav-link" to="/Contactus">Contact Us</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                                <Link className="nav-link" to="/Aboutus">About Us</Link>
                                                        </li> */}

                                                </ul>
                                                <div style={{ paddingLeft: "20px" }}>

                                                        <DarkModeToggle
                                                                onChange={setIsDarkMode}
                                                                checked={isDarkMode}
                                                                size={80}
                                                        />
                                                </div>
                                                <div style={{ paddingLeft: "40px" }}>
                                                        <button type="button" className="btn btn-success"
                                                        >
                                                                <Link className="nav-link" to="/meeting" onClick={() => {
                                                                        console.log(isDarkMode)
                                                                }}>Join Meeing &nbsp;<i class="bi bi-person-plus-fill"></i></Link>
                                                        </button>
                                                </div>
                                                {
                                                        isAuthenticated ? (


                                                                <div style={{ paddingLeft: "40px" }}>
                                                                        <button type="button" id='login_logout_btn' onClick={() =>  logout({ logoutParams: { returnTo: window.location.origin } })} 
                                                                        className="btn"
                                                                        // data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                                        >
                                                                                Logout
                                                                        </button>
                                                                </div>
                                                        ) : (

                                                                <div style={{ paddingLeft: "40px" }}>
                                                                        <button type="button" id='login_logout_btn' onClick={() => loginWithRedirect()} className="btn btn-success"
                                                                        // data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                                        >
                                                                                LogIn
                                                                        </button>
                                                                </div>

                                                        )
                                                }
                                        </div>
                                        {
                                                        isAuthenticated ? (
                                                                <div 
                                                                style={{margin:"5px", display:"flex" , float:"right" , color:"wheat"}}
                                                                >                                                                        <img className='UserImage' style={{height:"40px", borderRadius:"20px" , marginLeft :"5px"}} src={user.picture} alt="" ></img>
                                                                        {/* <img style={{width:"50px"}} src={user.picture}  alt={user.nickname}/> */}
                                                                </div>
                                                        ) : (
                                                                <></>
                                                        )
                                                }
                                </div>
                        </nav>
                </div>
        )
}

export default Navbar
