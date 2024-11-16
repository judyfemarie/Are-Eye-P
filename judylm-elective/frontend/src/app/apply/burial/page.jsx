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
  TextField,
  Toolbar, 
  Typography 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpIcon from '@mui/icons-material/Help';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';

const UserDashboardburial = () => {
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
          Welcome USER!
        </Typography>

        {/* Burial Application Details Box */}
        <Box
          sx={{
            padding: 4,
            border: '1px solid #C0C580',
            borderRadius: '8px',
            backgroundColor: 'white',
            textAlign: 'left',
            marginBottom: '20px',
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2, color: '#C0C580' }}>
            Burial Application Details
          </Typography>

          {/* Application Information */}
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Application Information
          </Typography>
          <TextField
            fullWidth
            label="Applicant Name"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Contact Number"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          {/* Deceased Information */}
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Deceased Information
          </Typography>
          <TextField
            fullWidth
            label="Deceased Name"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            label="Date of Death"
            type="date"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          {/* Burial Details */}
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Burial Details
          </Typography>
          <TextField
            fullWidth
            label="Preferred Burial Date"
            type="date"
            variant="outlined"
            sx={{ marginBottom: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            label="Burial Location"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          {/* Attachment Requirements */}
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Attachment Requirements
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            - Copy of Death Certificate
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            - ID of the Applicant
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <Button 
              variant="outlined" 
              sx={{ color: '#C0C580', borderColor: '#C0C580' }}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              sx={{ backgroundColor: '#C0C580', color: 'white' }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboardburial;
