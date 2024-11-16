import React from 'react';
import { AppBar, Toolbar, Button, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/0c76fae3-4327-42ef-864b-7709c80b142e/2e7b00eb-6ae9-4696-9781-e839dd04b26d/PH-en-20230508-popsignuptwoweeks-perspective_alpha_website_medium.jpg')` }} />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Navbar */}
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar className="flex justify-between p-4">
          <div className="text-red-600 text-4xl font-bold">NETFLIX</div>
          <div className="flex space-x-4">
            <Select
              defaultValue="English"
              variant="outlined"
              style={{ color: 'white', borderColor: 'white', borderRadius: '4px', borderWidth: '1px' }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Tagalog">Tagalog</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
            </Select>
            <Button variant="contained" className="bg-red-600 hover:bg-red-700" style={{ borderRadius: '4px' }}>
              Sign In
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center pt-32 pb-40">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="mt-4 text-xl">
          Starts at ₱149. Cancel anytime.
        </p>
        <p className="mt-2 text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        {/* Email Form */}
        <div className="mt-8 flex justify-center w-full max-w-md">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Email address"
            InputProps={{
              style: {
                backgroundColor: 'white',
                borderRadius: '4px',
                height: '55px',
              },
            }}
          />
          <Button variant="contained" className="bg-red-600 hover:bg-red-700 ml-2" style={{ height: '55px', borderRadius: '4px', padding: '0 20px' }}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
