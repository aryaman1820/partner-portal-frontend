import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
    const jwtToken = sessionStorage.getItem("jwtToken")
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8085/api/product/all",{headers: {Authorization:"Bearer "+ jwtToken}})
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
                                <th>Product Name</th>
                                <th>Product url</th>
                                <th>Partner Name</th>                           
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((x,index=0)=>
                            <tr key={x.productName}>
                                <td>{index+1}</td>
                                <td>{x.productName}</td>
                                <td>{x.productUrl}</td>
                                <td>{x.user.userName}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                    </div>
    </div>
  )
}

export default Products