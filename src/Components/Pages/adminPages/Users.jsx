import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Users() {
    const jwtToken = sessionStorage.getItem("jwtToken")
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8085/api/all/users",{headers: {Authorization:"Bearer "+ jwtToken}})
        .then(response=>{
            setData(response.data)
        })
    })
    const handleVerify =(userName) =>{
        const resp = window.confirm("Are you sure you want to verify this user?")
        if(resp){
            axios.put("http://localhost:8085/api/user/verify/"+userName,{},{headers: {Authorization:"Bearer "+ jwtToken}})
            .then((resp) =>{
                toast.success(resp.data)
            })
            .catch((error) =>{
                toast.error(error.error)
            })
        }
    }
  return (
    <div>
        <div className="content-wrapper p-2">
            <div className="container-fluid shadow p-2 bg-white" style={{minHeight:"88vh"}}>
                    <h4 className="p-2 mb-2 border-bottom border-primary">Partner list</h4>
                     <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Sr. no.</th>
                                <th>Username</th>
                                <th>User Email</th>
                                <th>Is Verified</th> 
                                <th>Action</th>                            
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((x,index=0)=>
                            <tr key={x.userName}>
                                <td>{index+1}</td>
                                <td>{x.userName}</td>
                                <td>{x.userEmail}</td>
                                <td>{x.isVerified === "Verified"? (<><i className="fa-solid fa-circle-check"/></>):(<><i className="fa-solid fa-xmark"/></>)}</td>
                                <td>{x.isVerified === "Not Verified" ?(<>
                                    <button 
                                        className="btn btn-success btn-block"
                                        onClick={(e) => handleVerify(x.userName)}>
                                            Verify
                                    </button>
                                </>):(<>
                                Already Verified
                                </>)}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                    </div>
    </div>
  )
}

export default Users