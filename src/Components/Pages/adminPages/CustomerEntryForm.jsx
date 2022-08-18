import React, { useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";


function CustomerEntryForm() {
    const jwtToken = sessionStorage.getItem("jwtToken")
    const [data,setData] = useState({
        customerName:"",
        customerAddress:"",
        customerPan:"",
        insuredName:"",
        insuredAddress:"",
        insuredPan:""
    })
    const handleInput = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        axios.post("http://localhost:8085/api/save/customer",data,{headers: {Authorization:"Bearer "+ jwtToken}})
        .then((response) =>{
            toast.success(response)
            console.log(response)
        })
    }

    const handleReset = (e) =>{
        setData({
            customerName:"",
            customerAddress:"",
            customerPan:"",
            insuredName:"",
            insuredAddress:"",
            insuredPan:""
        })
    }
  return (
    <div className="background">
      <div className="container" style={{ minHeight: "79vh" }}>
        <div className="row">
          <div
            className="col-sm-4 mx-auto"
            style={{ boxShadow: "0 0 2px 1px white" }}
          >
            <div className="card shadow" style={{ marginTop: 50 }}>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Enter Customer Details :-</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-3">
                      <div className="col">
                      <label htmlFor="customerName" className="form-label">Customer Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="customerName"
                          name="customerName"
                          id="customerName"
                          value={data.customerName}
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className="col">
                      <label htmlFor="insuredName" className="form-label">Insured Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="insuredName"
                          name="insuredName"
                          id="insuredName"
                          value={data.insuredName}
                          onChange={handleInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                      <label htmlFor="customerAddress" className="form-label">Customer Address:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="customerAddress"
                          name="customerAddress"
                          id="customerAddress"
                          value={data.customerAddress}
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className="col">
                      <label htmlFor="insuredAddress" className="form-label">Insured Address:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Insured Address"
                          name="insuredAddress"
                          id="insuredAddress"
                          value={data.insuredAddress}
                          onChange={handleInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                      <label htmlFor="customerPan" className="form-label">Customer PAN:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="customerPan"
                          name="customerPan"
                          id="customerPan"
                          value={data.customerPan}
                          onChange={handleInput}
                          required
                        />
                      </div>
                      <div className="col">
                      <label htmlFor="insuredPan" className="form-label">Insured PAN:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="insuredPan"
                          name="insuredPan"
                          id="insuredPan"
                          value={data.insuredPan}
                          onChange={handleInput}
                          required
                        />
                      </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <input type="submit" defaultValue="Submit" onClick={handleSubmit} className="btn btn-info btn-block" />
                        </div>
                        <div className='col'>
                            <input type="Reset" defaultValue="Reset" onClick={handleReset} className="btn btn-danger btn-block" />
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerEntryForm