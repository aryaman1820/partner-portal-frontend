import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import {toast } from 'react-toastify';
import axios from 'axios';



export default function Login (){
  const BASEURL = "http://localhost:8085/login"
  const navigate = useNavigate()
  const [user, setUser] = useState({
    userName:"",
    userPassword:""
  })

  const handleInput = (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(user.userName==="" || user.userPassword===""){
      toast.error("Please fill all required feilds")
    }else{
      axios.post(BASEURL,user)
      .then(response =>{
        console.log(response.data)
        console.log(response.data.user.userName)
        if(response.data.jwtToken && response.data.user.userName==="Admin"){
          localStorage.setItem("admin", JSON.stringify(response.data))
          sessionStorage.setItem('userName',response.data.user.userName)
          sessionStorage.setItem("jwtToken",response.data.jwtToken)
          sessionStorage.setItem("isVerified", response.data.user.isVerified)
          navigate("/Admin")
          toast.success("Admin logged in sucessfully")
        }else if(response.data.jwtToken){
          localStorage.setItem("user", JSON.stringify(response.data))
          sessionStorage.setItem("userName",response.data.user.userName)
          sessionStorage.setItem("jwtToken", response.data.jwtToken)
          sessionStorage.setItem("isVerified", response.data.user.isVerified)
          if(response.data.user.isVerified === "Not Verified"){
            navigate("/UserNotVerified")
            toast.warning("Partner not verified by the admin")
          }
          else{
            navigate("/PartnerApiEntry")
            toast.success("Partner logged in successfully")
          }
          
        }
      }).catch(error =>{
        console.log("Error: ", error)
        toast.error("Invalid username or password")
      })

    }
  }

  return (
    <div className="background">
      <div className="container" style={{ minHeight: "79vh" }}>
        <div className="row">
          <div
            className="col-sm-4 mx-auto text-center"
            style={{ boxShadow: "0 0 2px 1px white" }}
          >
            <div className="card shadow" style={{ marginTop: 50 }}>
              <div className="card">
                <div className="card-header">
                  <img
                    className="my-2 rounded-"
                    src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                    width={200}
                    alt=""
                  />
                  <h5 className="card-title">Partner Login</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          name="userName"
                          id="userName"
                          value={user.userName}
                          onChange={handleInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa-solid fa-key"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="userPassword"
                          id="userPassword"
                          value={user.userPassword}
                          onChange={handleInput}
                          required
                        />
                      </div>
                    </div>
                    
                    <input type="submit" onClick={handleSubmit} defaultValue="Login" className="btn btn-info btn-block" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

