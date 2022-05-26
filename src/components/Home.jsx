import React from 'react'
import {Button} from '@mui/material'
import { NavLink, Link } from 'react-router-dom';

import "./Home.css"

const Home = () => {
  return (    
    <div className='hello bg-light'>
      <h2 style={{textAlign:"center"}} >You are Welcome</h2>
      

<div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">

        <div  class="col-md-3">
          <div style={{height: 190}}  class="card text-center" >
            <div class="card-block" >
            <img  style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/213-2132007_legal-services-updating-icon-clipart.png" alt="Card image cap"/>
            
            
              <h4 class="card-title"></h4>
              
              {/* <Link LinkComponent={NavLink} to="/MasterDash" style={{ textDecoration: 'none' }}></Link> */}
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Litigation</Button>
              
              {/* <a href="/Admin" class="card-link">Litigation</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Agreements</Button>                
              {/* <a href="/Admin" class="card-link">Agreements</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/348-3481408_stakeholders-policy-analysis-icon.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Legal Opinions</Button>                
              {/* <a href="/Admin" class="card-link">Legal Opinions</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/221-2214412_file-cabinet-icon-mac-document-management-icon-png.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Land Matters</Button>                              
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
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Trade Marks</Button>                
              {/* <a href="/Admin" class="card-link">Trade Marks</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/237-2375964_search-for-round-table-meeting-png.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>  
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Group Work</Button>              
              {/* <a href="/Admin" class="card-link">Group Work</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.clipartmax.com/png/full/250-2503251_file-deletion-icon-svg-icon-stop-internet-explorer.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Watch Listed Companies</Button>                      
              {/* <a href="/Admin" class="card-link">Watch Listed Companies</a> */}
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div style={{height: 190}} class="card text-center">
            <div class="card-block">
            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.shareicon.net/data/128x128/2016/10/11/842377_interface_512x512.png" alt="Card image cap"/>
              <h4 class="card-title"></h4>
              <Button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Other</Button>                      
              {/* <a href="/Admin" class="card-link">Others</a> */}
            </div>
          </div>
        </div>

      </div><br></br>

     

    </div>
  </div>


    </div>
  )
}

export default Home