import React from 'react'
import "./Home.css"
import {Button} from '@mui/material'
import {  Link } from 'react-router-dom';

const MasterDashboard = () => {
  return (
    <div className='bg-light'>
    <div className='hello'>
    <h2 style={{textAlign:"center"}} >MasterDashboard</h2>

<div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">

        <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center" >
            <div class="card-block" >
            <img  style={{height: 130, width: 130}} class="card-img-top" src="https://www.freeiconspng.com/uploads/customers-icon-3.png" alt="Card image cap"/>
            
            
              <h4 class="card-title"></h4> 
              <Button style={{color:"white"}} LinkComponent={Link} to="/UserRoleTable"  variant="contained">Add User Roles</Button>               
              {/* <a href="/addUserRole" class="card-link">Add User Roles</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.freeiconspng.com/uploads/checklist-icon-blue-blue-checklist-document-19.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/LegalCaseTable" variant="contained">Add Legal case type</Button>                   
              {/* <a href="/addCaseType" class="card-link">Add Legal case type</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/348-3481408_stakeholders-policy-analysis-icon.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="#" variant="contained">Stake Holders</Button>                   
              {/* <a href="" class="card-link">Stake Holders</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/97-970891_court-hammer-png-clipart-judge-gavel.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/LegalStepsTable" variant="contained">Add Legal Steps</Button>                   
              {/* <a href="/addLegalSteps" class="card-link">Add Legal Steps</a> */}
            </div>
          </div>
        </div>

      </div><br/>

      <div class="row">
      <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/237-2375964_search-for-round-table-meeting-png.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="#" variant="contained">Add RTOMs</Button>                   
              {/* <a href="/Admin" class="card-link">Add RTOMs</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/230-2303563_legal-scale-png-court-case.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="#" variant="contained">Add Legal Court Type</Button>                   
              {/* <a href="" class="card-link">Add Legal Court Type</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/198-1986290_legal-document-icon-paper.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/UserRoleTable" variant="contained">Legal Witness Service Types</Button>                   
              {/* <a href="/Admin" class="card-link">Legal Witness Service Types</a>   "/addUserRoleTable" */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/4-43844_free-vector-international-criminal-court-logo-clip-legal-and-protective-services.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="#" variant="contained">Add Legal Court Areas</Button>                   
              {/* <a href="/Admin" class="card-link">Add Legal Court Area</a> */}
            </div>
          </div>
        </div>

      </div><br></br>

      <div class="row">
      <div class="col-md-3">
          <div style={{height: 190}}  class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/218-2181614_file-cabinet-icon-mac-document-management-logo-png.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="#" variant="contained">Legal Case File Sender</Button>                   
              {/* <a href="/Admin" class="card-link">Legal Case File Sender</a> */}
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

export default MasterDashboard