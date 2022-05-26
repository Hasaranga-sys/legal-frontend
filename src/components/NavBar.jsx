import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { NavLink } from 'react-router-dom';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import HomeIcon from '@mui/icons-material/Home';


const NavBar = () => {
    const [value, setValue] =useState(  ); 
  return (
    <div>
        <AppBar sx={{backgroundColor:"#0156a6", width:1300, ml:"auto"}} position='sticky'>

          <Toolbar>
            <NavLink to="/" style={{color:'white'}}>
            <Typography>
                <HomeIcon/>
                                
            </Typography>
            </NavLink>
            {/* <Tabs sx={{ml:"auto"}} textColor='white' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)} >
             <Tab LinkComponent={NavLink} to="/MasterDash" label='Master Dash'/>
              <Tab LinkComponent={NavLink} to="/Admin" label='Admin'/>
              <Tab LinkComponent={NavLink} to="/login" label='about Us'/> 
            </Tabs> */}
            {/* <NavLink to="/" style={{color:'white'}}>
            <Typography >
                <HomeIcon sx={{marginRight:50}} />
            </Typography>
            </NavLink> */}

            

            
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar