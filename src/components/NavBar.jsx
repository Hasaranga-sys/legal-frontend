import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { NavLink } from 'react-router-dom';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';


const NavBar = () => {
    const [value, setValue] =useState(  ); 
  return (
    <div>
        <AppBar sx={{backgroundColor:"#232F3D", width:1300, ml:"auto"}} position='sticky'>

          <Toolbar>
            <Typography>
                <LibraryBooksOutlinedIcon/>
            </Typography>
            <Tabs sx={{ml:"auto"}} textColor='white' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)} >
              <Tab LinkComponent={NavLink} to="/add" label='add Book'/>
              <Tab LinkComponent={NavLink} to="/books" label='Books'/>
              <Tab LinkComponent={NavLink} to="/aboutus" label='about Us'/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar