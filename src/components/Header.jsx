import React, { useState } from 'react'

import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ListSubheader from '@mui/material/ListSubheader'
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';

import StarBorder from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TextField from '@mui/material/TextField';

import { NavLink ,Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';

const drawerWidth = 240;

const Header = (props) => {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  const [open, setOpen] = React.useState(true);
  const [second, setSecond] = React.useState(true);

  const secondClick = () =>{
    setSecond(!second);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    
      <div >
          <Toolbar sx={{background:"white"}} >            
            <img  style={{marginLeft:-18,marginTop:15,height: 85, width: 215, marginBottom:15}} class="card-img-top" src="https://www.mobitel.lk/sites/all/themes/mobitel/templates/new-home/images/logo.png" alt="Card image cap"/>
          </Toolbar>
          
          <Divider/>

          <Box
      sx={{
        
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 2 },
      }}
    >
      <TextField sx={{lineHeight:'20%'}}
        
        id="demo-helper-text-aligned"
        label="Search"
      />     
    </Box>

    <List
          
      sx={{  width: '100%', maxWidth: 360,  }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* Nested List Items */}
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick} >
        <ListItemIcon>
         
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText style={{marginLeft:-18}}  primary="Dashboard" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open}  unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }}>
            
            <ListItemIcon>
            <CircleTwoToneIcon/>
            </ListItemIcon>
            <Link LinkComponent={NavLink} to="/" style={{ textDecoration: 'none' }}>
            <ListItemText style={{marginLeft:-18}}  primary="Main Dashboard" />
            </Link>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <CircleTwoToneIcon/>
            </ListItemIcon>
            <Link LinkComponent={NavLink} to="/Admin" style={{ textDecoration: 'none' }}>
            <ListItemText style={{marginLeft:-18}}  primary="Admin Module" />
            </Link>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>             
              <CircleTwoToneIcon/>
            </ListItemIcon>
            <Link LinkComponent={NavLink} to="/LegalCaseTable" style={{ textDecoration: 'none' }}>
            <ListItemText style={{marginLeft:-18}}  primary="Litigation Module" />
            </Link>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <CircleTwoToneIcon/>
            </ListItemIcon>
            <Link LinkComponent={NavLink} to="/MasterDash" style={{ textDecoration: 'none' }}>
            <ListItemText style={{marginLeft:-18}}  primary="Master Data Dashboard" />
            </Link>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <CircleTwoToneIcon/>
            </ListItemIcon>
            <ListItemText style={{marginLeft:-18}}  primary="Stakeholder Dashboard" />
          </ListItemButton>



        </List>
      </Collapse>

      <ListItemButton onClick={secondClick}>
        <ListItemIcon>
        <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText style={{marginLeft:-18}}  primary="User Management" />
        {second ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* <Collapse in={second} timeout="auto" unmountOnExit></Collapse> */}

      <Collapse in={second} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }}>
            
            <ListItemIcon>
            <CircleTwoToneIcon/>
            </ListItemIcon>
            <Link LinkComponent={NavLink} to="/MasterDash">
            <ListItemText style={{marginLeft:-18, textDecoration: 'none'}}  primary="Main Dashboard" />
            </Link>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <CircleTwoToneIcon/>
            </ListItemIcon>
            <Link LinkComponent={NavLink} to="/Admin">
            <ListItemText style={{marginLeft:-18}}  primary="Admin Module" />
            </Link>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <CircleTwoToneIcon/>
            </ListItemIcon>
            <Link LinkComponent={NavLink} to="/UserRoleTable">
            <ListItemText style={{marginLeft:-18}}  primary="Starred" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
      

      </List>

          {/* <List>
          {['Dash', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
          </List> */}
          {/* <Divider /> */}
         
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // background:"#0156a6"


  return (
  <div style={{ marginLeft: 100 }}>
    <Box sx={{ display: 'flex' }}>       
   <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth },
        }} position='sticky'
        open
      >
        {drawer}
      </Drawer>
    
  </Box>
    
  </div>
    
  );
}

export default Header