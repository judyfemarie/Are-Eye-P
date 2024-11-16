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

const LGUDashboard = () => {
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
            ADMIN Dashboard
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
          Welcome ADMIN!
        </Typography>
   {/* Statistics Boxes */}
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
    gap: 3,
    marginBottom: '20px',
  }}
>
  {/* Burial Application Box */}
  <Box 
    sx={{
      padding: 2,
      border: '1px solid #C0C580',
      borderRadius: '8px',
      backgroundColor: 'white',
      textAlign: 'center',
    }}
  >
    <Typography variant="h6">Total Users</Typography>
    <Typography variant="h4" sx={{ margin: '10px 0' }}>25</Typography>
    <Button variant="contained" sx={{ backgroundColor: '#C0C580', color: 'white' }}>
      View Details
    </Button>
  </Box>

  {/* Service Request Box */}
  <Box 
    sx={{
      padding: 2,
      border: '1px solid #C0C580',
      borderRadius: '8px',
      backgroundColor: 'white',
      textAlign: 'center',
    }}
  >
    <Typography variant="h6">Reports</Typography>
    <Typography variant="h4" sx={{ margin: '10px 0' }}>15</Typography>
    <Button variant="contained" sx={{ backgroundColor: '#C0C580', color: 'white' }}>
      View Details
    </Button>
  </Box>

  {/* Catacombs Box */}
  <Box 
    sx={{
      padding: 2,
      border: '1px solid #C0C580',
      borderRadius: '8px',
      backgroundColor: 'white',
      textAlign: 'center',
    }}
  >
    <Typography variant="h6">Managements</Typography>
    <Typography variant="h4" sx={{ margin: '10px 0' }}>8</Typography>
    <Button variant="contained" sx={{ backgroundColor: '#C0C580', color: 'white' }}>
      View Details
    </Button>
  </Box>

  {/* Deceased Box */}
  <Box 
    sx={{
      padding: 2,
      border: '1px solid #C0C580',
      borderRadius: '8px',
      backgroundColor: 'white',
      textAlign: 'center',
    }}
  >
    <Typography variant="h6">Notifications</Typography>
    <Typography variant="h4" sx={{ margin: '10px 0' }}>50</Typography>
    <Button variant="contained" sx={{ backgroundColor: '#C0C580', color: 'white' }}>
      View Details
    </Button>
  </Box>
</Box>

      
        
      </Box>
    </Box>
  );
};

export default LGUDashboard;
