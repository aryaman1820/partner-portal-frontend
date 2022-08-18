import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

function UserNavbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const isLoggedIn = localStorage.getItem("user")? "user": localStorage.getItem("admin")? "admin":null
    console.log("isLoggedIn: ", isLoggedIn)
    const isVerified = sessionStorage.getItem("isVerified") === "Verified" ? true:false
    const logout=e=>{
        localStorage.clear();
        sessionStorage.clear();
        toast.success("logged out!!!")
        navigate("/")
    }
  return (
    <div>
        <nav className="navbar navbar navbar-expand-lg bg-light mb-3">
            <div className="container">
                        <h2 className='navbar-brand'>Partner Portal</h2>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                {isLoggedIn==="user" ?(<>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/PartnerPortal">Partner Portal</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/PartnerApiEntry">Partner Api Entry</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Welcome {sessionStorage.getItem('userName')}
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-light">
                                            <li><Link className="dropdown-item" onClick={logout} to="/">logout</Link></li>
                                            </ul>
                                    </li>
                                </>
                                    ):isLoggedIn==="admin"?(<>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/PartnerPortal">Partner Portal</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Admin">Admin Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={logout} to="/">Logout</Link>
                                    </li>
                                    </>):(<>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Register">Register</Link>
                                        </li>
                                    
                                    </>)}
                            </ul>
                        </div>
            </div>
        </nav>
    </div>
  )
} 

export default UserNavbar;