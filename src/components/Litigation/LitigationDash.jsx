import React from 'react'
import {Button} from '@mui/material'
import { NavLink, Link } from 'react-router-dom';

const LitigationDash = () => {
  return (
    <div className='hello bg-light'>
      <h2 style={{textAlign:"center"}} >Dashboard - Litigatoin</h2>
      

<div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">

        <div  class="col-md-3">
          <div style={{height: 190}}  class="card text-center" >
            <div class="card-block" >
            <img  style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/213-2132007_legal-services-updating-icon-clipart.png" alt="Card image cap"/>
            
            
              <h4 class="card-title"></h4>
              
              {/* <Link LinkComponent={NavLink} to="/MasterDash" style={{ textDecoration: 'none' }}></Link> */}
              <Button style={{color:"white"}} LinkComponent={Link} to="/LitigationDash/CaseDocument" variant="contained">Case Document Files</Button>
              
              {/* <a href="/Admin" class="card-link">Litigation</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Cases</Button>                
              {/* <a href="/Admin" class="card-link">Agreements</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/348-3481408_stakeholders-policy-analysis-icon.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Steps</Button>                
              {/* <a href="/Admin" class="card-link">Legal Opinions</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/221-2214412_file-cabinet-icon-mac-document-management-icon-png.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Payments</Button>                              
              {/* <a href="/Admin" class="card-link">Land Matters</a> */}
            </div>
          </div>
        </div>

      </div><br/>

      <div class="row">
      <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/94-948285_trademark-zeichen-clipart.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Reports</Button>                
              {/* <a href="/Admin" class="card-link">Trade Marks</a> */}
            </div>
          </div>
        </div>

        

       


      </div><br></br>

     

    </div>
  </div>


    </div>
  )
}

export default LitigationDash