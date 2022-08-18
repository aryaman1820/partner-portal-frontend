import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const logout=e=>{
      localStorage.clear();
      navigate("/")
  }
return (<>
    <div className='content-wrapper p-2'>
      <div
        className='container-fluid shadow p-2 bg-white'
        style={{ minHeight: '88vh' }}
      >
        <h4 className='p-2 border-bottom border-success'>Admin Dashboard</h4>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='card shadow m-2'>
              <div className='card-body p-3'>
                <h5>Registered Users</h5>
              </div>

              <div class='card-footer'>
                <Link to='/users'>View Details</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card shadow m-2'>
              <div className='card-body p-3'>
                <h5>Mappings</h5>
              </div>
              <div className='card-footer'>
                <Link to='/mappings'>View Details</Link>
              </div>
            </div>
          </div>

          <div className='col-sm-3'>
            <div className='card shadow m-2'>
              <div className='card-body p-3'>
                <h5>Products</h5>
              </div>
              <div className='card-footer'>
                <Link to='/products'>View Details</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card shadow m-2'>
              <div className='card-body p-3'>
                <h5>Customer details</h5>
              </div>
              <div className='card-footer'>
                <Link to='/customers'>View Details</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card shadow m-2'>
              <div className='card-body p-3'>
                <h5>Customer Entry Form</h5>
              </div>
              <div className='card-footer'>
                <Link to='/customerentry'>View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
} 

export default Admin;