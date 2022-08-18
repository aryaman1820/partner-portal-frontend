import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Customers() {
    const jwtToken = sessionStorage.getItem("jwtToken")
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8085/api/all/customers",{headers: {Authorization:"Bearer "+ jwtToken}})
        .then(response =>{
            setData(response.data)
        })
    })
  return (
    <div>
        <div className="content-wrapper p-2">
            <div className="container-fluid shadow p-2 bg-white" style={{minHeight:"88vh"}}>
                    <h4 className="p-2 mb-2 border-bottom border-primary">Partner list</h4>
                     <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Sr. no.</th>
                                <th>Customer Name</th>
                                <th>Customer address</th>
                                <th>Customer Pan</th>
                                <th>Insured Name</th>
                                <th>Insured Address</th>
                                <th>Insured Pan</th>                           
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((x,index=0)=>
                            <tr key={x.customerName}>
                                <td>{index+1}</td>
                                <td>{x.customerName}</td>
                                <td>{x.customerAddress}</td>
                                <td>{x.customerPan}</td>
                                <td>{x.insuredName}</td>
                                <td>{x.insuredAddress}</td>
                                <td>{x.insuredPan}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                    </div>
                    </div>
  )
}

export default Customers