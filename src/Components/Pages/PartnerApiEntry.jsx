import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function PartnerApiEntry() {
  const URL = "http://localhost:8085/api/product/save"
  const jwtToken = sessionStorage.getItem("jwtToken")
  const [product, setProduct] = useState({
    productName:"",
    productUrl:"",
    userName: sessionStorage.getItem("userName")
  })
  const handleInput = (e) =>{
    setProduct({...product,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>{
    if(product.productName==="" || product.productUrl===""){
      toast.error("Please fill all the required details carefully!!!")
    }else{
      axios.post(URL,product,{headers: {Authorization:"Bearer "+ jwtToken}})
      .then((response)=>{
        toast.success(response.data)
        setProduct({
          productName: '',
          productUrl: ''
        })
      }).catch((error)=>{
        toast.error("Some Error Occured")
      })
    }
  }

  return (
    <div>
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
                      src="https://cdn.dribbble.com/users/20883/screenshots/3161326/media/3e5cc62bbf30727e6feb0bd98f0f7805.png?compress=1&resize=400x300&vertical=top"
                      width={200}
                      alt="card logo"
                    />
                    <h5 className="card-title">Partner Api Entry</h5>
                    <p className="text-primary">
                      Please enter the correct API along with precise product
                      name for successful approval.
                    </p>
                  </div>
                  <div className="card-body">
                    <form>
                      
                        <div className="row mb-3" >
                          <div className="col mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="productName"
                              placeholder="Please enter product"
                              onChange={handleInput}
                              
                            />
                          </div>
                          <div className="col mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="productUrl"
                              placeholder="Please enter the API"
                              onChange={handleInput}
                              
                            />
                          </div>
                          </div>
                      <div>
                        <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
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
export default PartnerApiEntry;
