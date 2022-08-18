import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Mappings() {
  const jwtToken = sessionStorage.getItem("jwtToken")
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8085/api/mapping/all",{headers: {Authorization:"Bearer "+ jwtToken}})
    .then(response =>{
      setData(response.data)
    })
  },[])
  return (
    <div>
        <div className="content-wrapper p-2">
            <div className="container-fluid shadow p-2 bg-white" style={{minHeight:"88vh"}}>
                    <h4 className="p-2 mb-2 border-bottom border-primary">Saved Mappings</h4>
                     <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Sr. no.</th>
                                <th>Mapping Name</th>
                                <th>Posted On</th>
                                <th>Customer Name</th>
                                <th>User Name</th>
                                <th>Product Name</th>
                                <th>Product Api</th>                           
                            </tr>
                        </thead>
                        <tbody>
                          {data.map((x,index=0)=>
                          
                            <tr key={x.mappingName} >
                                <td>{index+1}</td>
                                <td>{x.mappingName}</td>
                                <td>{x.postedOn}</td>
                                <td>{x.customer.customerName}</td>
                                <td>{x.user.userName}</td>
                                <td>{x.product.productName}</td>
                                <td>{x.product.productUrl}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                    </div>
    </div>
  )
}

export default Mappings