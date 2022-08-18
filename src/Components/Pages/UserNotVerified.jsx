import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './UserNotFound.css'

function UserNotVerified() {
    const navigate = useNavigate()
    const logout=e=>{
        localStorage.clear();
        navigate("/")
    }
  return (
    <div className="text-center" id='userNotVerified'>
        <h2>Partner Not Verified. Please Contact admin for any details.</h2>
        <Link  onClick={logout} to="/">Logout</Link>
    </div>
  )
}

export default UserNotVerified;