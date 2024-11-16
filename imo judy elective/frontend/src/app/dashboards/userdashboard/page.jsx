"use client"; // Declare the component as a Client Component

import React from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  Toolbar, 
  Typography 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpIcon from '@mui/icons-material/Help';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';

const UserDashboard = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#C0C580' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem button>
            <HomeIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <AssignmentIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Burial Application" />
          </ListItem>
          <ListItem button>
            <HelpIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Service Request" />
          </ListItem>
          <ListItem button>
            <MonetizationOnIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Renewal" />
          </ListItem>
          <ListItem button>
            <PaymentIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Payment" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginTop: '64px', // Adjusting for AppBar height
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Welcome User
        </Typography>
   
        <Box sx={{ marginTop: '10px', marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1071051019676!2d123.94957657479725!3d10.252945089865772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99b9555cdf12f%3A0xbe285da14dabdc16!2sMotoMac%20Sportswear!5e0!3m2!1sen!2sph!4v1729206836119!5m2!1sen!2sph" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        <Typography variant="body1">
            
        </Typography>
      </Box>
    </Box>
  );
};

export default UserDashboard;
