import React from 'react'
import {Button} from '@mui/material'
import {  Link } from 'react-router-dom';

const AdminModule = () => {
  return (
    <div style={{height:600}} className='bg-light'>
    <div className='hello'>
    <h2 style={{textAlign:"center"}} >Admin Module</h2>
    

<div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center" >
            <div class="card-block" >
            <img  style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/322-3225944_user-setting-interface-symbol-comments-business-man-logo-png.png" alt="Card image cap"/>        
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="#" variant="contained">System User Management</Button>                
              {/* <a href="/Admin" class="card-link">System User Management</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/1-19785_data-quality-data-quality-icon-png.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/MasterDash" variant="contained">Master data</Button>                
              {/* <a href="/Admin" class="card-link">Master data</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    </div>
    </div>
  )
}

export default AdminModule