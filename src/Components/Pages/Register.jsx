import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if(user.userName==="" || user.userEmail==="" || user.userPassword===""){
        toast.error("Please fill all the fields")
    }else{
        e.preventDefault();
        console.log(user);
        axios
        .post("http://localhost:8085/api/register", user)
        .then((response) => {
            console.log(response.data);
            toast.success(response.data);
            navigate("/");
      })
      .catch((error) => {
        console.log("Error", error.data);
        toast.error(error.data);
      });
    }
  };
  return (
    <div>
      <div className="background">
        <div className="clearfix" />
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
                    <h5 className="card-title">Register here</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <i className="fa-solid fa-at"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter partner email"
                            value={user.userEmail}
                            onChange={handleInput}
                            name="userEmail"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa-solid fa-user-check"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter preferred username"
                            value={user.userName}
                            onChange={handleInput}
                            name="userName"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <i className="fa-solid fa-key"></i>
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={user.userPassword}
                            name="userPassword"
                            onChange={handleInput}
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
