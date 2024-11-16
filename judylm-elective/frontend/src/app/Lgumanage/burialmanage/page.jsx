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
  Typography ,Table,TableHead ,TableRow ,TableCell ,TableBody 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpIcon from '@mui/icons-material/Help';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';

const LGUDashboardburialmanage = () => {
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
            LGU Dashboard
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
          Welcome LGU!
        </Typography>
   {/* Statistics Boxes */}
{/* Burial Applications Table */}
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
    Burial Applications
  </Typography>

  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Burial Application ID</TableCell>
        <TableCell>Deceased ID</TableCell>
        <TableCell>Date of Burial</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {/* Sample Row 1 */}
      <TableRow>
        <TableCell>BA-001</TableCell>
        <TableCell>DE-001</TableCell>
        <TableCell>2024-10-15</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
            View
          </Button>
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
            Edit
          </Button>
          <Button variant="outlined" size="small" sx={{ color: 'red' }}>
            Delete
          </Button>
        </TableCell>
      </TableRow>

      {/* Sample Row 2 */}
      <TableRow>
        <TableCell>BA-002</TableCell>
        <TableCell>DE-002</TableCell>
        <TableCell>2024-10-16</TableCell>
        <TableCell>Pending</TableCell>
        <TableCell>
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
            View
          </Button>
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
            Edit
          </Button>
          <Button variant="outlined" size="small" sx={{ color: 'red' }}>
            Delete
          </Button>
        </TableCell>
      </TableRow>

      {/* Sample Row 3 */}
      <TableRow>
        <TableCell>BA-003</TableCell>
        <TableCell>DE-003</TableCell>
        <TableCell>2024-10-17</TableCell>
        <TableCell>Rejected</TableCell>
        <TableCell>
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
            View
          </Button>
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
            Edit
          </Button>
          <Button variant="outlined" size="small" sx={{ color: 'red' }}>
            Delete
          </Button>
        </TableCell>
      </TableRow>

      {/* Sample Row 4 */}
      <TableRow>
        <TableCell>BA-004</TableCell>
        <TableCell>DE-004</TableCell>
        <TableCell>2024-10-18</TableCell>
        <TableCell>Completed</TableCell>
        <TableCell>
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
            View
          </Button>
          <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
            Edit
          </Button>
          <Button variant="outlined" size="small" sx={{ color: 'red' }}>
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</Box>


      
        
      </Box>
    </Box>
  );
};

export default LGUDashboardburialmanage;
