import React, { useEffect, useRef, useState } from "react";
import {toast} from 'react-toastify'
import './PartnerPortal.css'
import axios from 'axios'

function PartnerPortal() {
  const jwtToken = sessionStorage.getItem("jwtToken")
  const userName = sessionStorage.getItem("userName")
  const productNameInputRef = useRef();
  const customerInputRef = useRef();
  const [isTested, setIsTested] = useState(false)
  const [prodUrl, setprodUrl] = useState("")
  const [data, setData] = useState([])
  const [custdata,setCustData] = useState([])
  const [customer,setCustomer] = useState({
    customerName:"",
    customerAddress:"",
    customerPan:"",
    insuredName:"",
    insuredAddress:"",
    insuredPan:""
  })
  const [product,setProduct] = useState({
    productName: "" ,
    productUrl: prodUrl
  })
  const [mapping, setmapping] = useState({
    mappingName:"",
    customerName:"",
    userName:"",
    productName:"",
    productUrl:""

  })

  useEffect(()=>{
    loadData()
    axios.get("http://localhost:8085/api/product/"+userName, {headers: {Authorization:"Bearer "+ jwtToken}})
    .then((response)=>{
      setData(response.data)
    })
  },[])
  const loadData = () =>{
    axios.get("http://localhost:8085/api/all/customers", {headers: {Authorization:"Bearer "+ jwtToken}})
    .then((response)=>{
      setCustData(response.data)
    })
  }

  const handleSelect = (e) =>{
    const prodName =productNameInputRef.current.value 
    console.log(prodName)
    axios.get("http://localhost:8085/api/productUrl/"+ prodName, {headers: {Authorization:"Bearer "+ jwtToken}})
    .then((response) =>{
      console.log("produrl",prodUrl)
      setprodUrl(response.data)
      setProduct({
        productName: prodName,
        productUrl: response.data
      })
      console.log("Product: ",product)
    }).catch(error =>{
      console.log("Error: ", error)
      toast.error("Some Error Occured")
      window.alert(error)
  })
}
  const handleSelectCustomer = (e) =>{
    const custName = customerInputRef.current.value;
    console.log(custName)
    axios.get("http://localhost:8085/api/customer/"+custName, {headers: {Authorization:"Bearer "+ jwtToken}})
    .then((response)=>{
      setCustomer({
        customerName: response.data.customerName,
        customerAddress: response.data.customerAddress,
        customerPan: response.data.customerPan,
        insuredName: response.data.insuredName,
        insuredAddress: response.data.insuredAddress,
        insuredPan: response.data.insuredPan
      })
    })
  }

  const handleSave =(e) =>{
    console.log("customer: ", customer)
    console.log("Product: ", product)
    setmapping({
      mappingName: userName+product.productName,
      customerName: customer.customerName,
      userName: userName,
      productName: product.productName,
      productUrl:product.productUrl
    })
    axios.post("http://localhost:8085/api/mapping/save", mapping , {headers: {Authorization:"Bearer "+ jwtToken}})
    .then((response)=>{
      toast.success(response.data)
    }).catch((error)=>{
      toast.error(error)
    })
  }

  const handleTest = (e) =>{
    axios.post(product.productUrl, customer)
    .then((response)=>{
      toast.success("Product Url tested sucessfully")
      setIsTested(true)
    }).catch((error) =>{
      toast.error(error)
      setIsTested(false)
    })
  }

  return (
    <div className="container">
    <div className="row align-items-center h-100">
        <div className="col-lg-6 mb-3">
            <div className="card h-100 border-primary justify-content-center">
              <div className="card-header text-center border-primary">
                <h5 className="card-title">Customer info</h5>
              </div>
                <div className="card-body">
                  <div className="select">
                    <select className="mb-3 selectComponent"  ref={customerInputRef} onChange={handleSelectCustomer}>
                        <option>Select Customer</option>
                      {custdata.map((x)=>
                        <option value={x.customerName} key={x.customerName}>{x.customerName}</option>
                      )}
                      
                    </select>
                  </div>
                  <div className="row mb-3 ">
                    <div className="col">
                      <label htmlFor="customerName" className="form-label">Customer Name:</label>
                      <div className="sm-10">
                        <input type="text" readOnly className="form-control" id="customerName" value={customer.customerName}/>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="insuredName" className="form-label">Insured Name:</label>
                      <div className="sm-10">
                        <input type="text" readOnly className="form-control" id="insuredName" value={customer.insuredName}/>
                      </div>                      
                    </div>
                    </div>
                    <div className="row mb-3 ">
                    <div className="col">
                      <label htmlFor="customerName" className="form-label">Customer Address:</label>
                      <div className="sm-10">
                        <input type="text" readOnly className="form-control" id="customerName" value={customer.customerAddress}/>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="insuredName" className="form-label">Insured Address:</label>
                      <div className="sm-10">
                        <input type="text" readOnly className="form-control" id="insuredName" value={customer.insuredAddress}/>
                      </div>                      
                    </div>
                    </div>
                    <div className="row mb-3 ">
                    <div className="col">
                      <label htmlFor="customerName" className="form-label">Customer PAN:</label>
                      <div className="sm-10">
                        <input type="text" readOnly className="form-control" id="customerName" value={customer.customerPan}/>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="insuredName" className="form-label">Insured PAN:</label>
                      <div className="sm-10">
                        <input type="text" readOnly className="form-control" id="insuredName" value={customer.insuredPan}/>
                      </div>                      
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-3">
            <div className="card border-primary">
            <div className="card-header text-center border-primary">
                <h5 className="card-title">Partner form</h5>
              </div>
                <div className="card-body justify-content-evenly">
                  <div className="row mb-3 ">
                    <div className="col">
                      <label htmlFor="customerName" className="form-label">Customer Name:</label>
                      <div className="sm-10">
                        <input type="text" className="form-control" id="customerName" placeholder="Customer Name Here" value={customer.customerName}/>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="insuredName" className="form-label">Insured Name:</label>
                      <div className="sm-10">
                        <input type="text" className="form-control" id="insuredName" placeholder="Insured Name Here" value={customer.insuredName}/>
                      </div>                      
                    </div>
                    </div>
                    <div className="row mb-3 ">
                    <div className="col">
                      <label htmlFor="customerPan" className="form-label">Customer PAN:</label>
                      <div className="sm-10">
                        <input type="text" className="form-control" id="customerPan" placeholder="Customer PAN Here" value={customer.customerPan}/>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="insuredName" className="form-label">Insured PAN:</label>
                      <div className="sm-10">
                        <input type="text" className="form-control" id="insuredPan" placeholder="Insured PAN Here" value={customer.insuredPan}/>
                      </div>                      
                    </div>
                    </div>
                    <div className="row mb-3 ">
                    <div className="col">
                      <label htmlFor="customerName" className="form-label">Customer Address:</label>
                      <div className="sm-10">
                        <input type="text" className="form-control" id="customerName" placeholder="Customer Address Here" value={customer.customerAddress}/>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="insuredName" className="form-label">Insured Address:</label>
                      <div className="sm-10">
                        <input type="text" className="form-control" id="insuredName" placeholder="Insured Address Here" value={customer.insuredAddress}/>
                      </div>                      
                    </div>
                    </div>
                    
                    <div className="row mb-3" >                    
                    <div className="col">
                      <label htmlFor="productName" className="form-label">Product Name and Api</label>
                      <div className="sm-10">
                      <select style={{ height:35, borderRadius:5 }} onChange={handleSelect}  ref={productNameInputRef} >
                          <option>Select Product Name and Product Api</option>
                      {data.map((x)=>
                          <option value={x.productName} key={x.productName}>{x.productName} - {x.productUrl}</option>
                          
                      )}
                        </select>
                      </div>
                    </div>
                    </div>
                  
                    <div className="row mb-3 text-center">
                      <div className="col">
                        <button type="button" className="btn btn-warning" onClick={handleTest}>
                              Test Mapping
                        </button>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-success" disabled={!isTested? true:false} onClick={handleSave}>
                              Save Mapping 
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default PartnerPortal;
