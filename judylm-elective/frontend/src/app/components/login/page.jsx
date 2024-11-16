"use client"; // Declare the component as a Client Component

import React, { useState } from 'react';
import { 
  InputLabel, 
  Input, 
  Button, 
  Typography, 
  Box, 
  Checkbox, 
  FormControlLabel, 
  AppBar, 
  Toolbar, 
  TextField
} from '@mui/material';

const Login = () => {
  // State management for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Placeholder for sign-in function (for now, just logs input)
  const handleSignIn = () => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/cemeterypic.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
    
      {/* Login Box */}
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '60px',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          width: '600px',
          textAlign: 'center',
        }}
      >
        <img 
  src="/images/finalriplogo.jpg" 
  alt="Temporary Image" 
  style={{ 
    width: '100%', 
    maxWidth: '200px',  // Ensures the image doesn’t get too large
    height: 'auto',     // Maintains the aspect ratio
    objectFit: 'contain', 
    marginBottom: '20px', 
    display: 'block',    // Ensures the image behaves like a block-level element
    marginLeft: 'auto',  // Centers horizontally
    marginRight: 'auto'  // Centers horizontally
  }} 
/>


        {/* Username Field */}
        <InputLabel 
          htmlFor="username" 
          sx={{ textAlign: 'left', display: 'block', marginBottom: '8px', color: '#00000' }}
        >
          Username
        </InputLabel>
        <TextField
          id="username"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: '13px' }}
        />

        {/* Password Field */}
        <InputLabel 
          htmlFor="password" 
          sx={{ textAlign: 'left', display: 'block', marginBottom: '8px', color: '#00000' }}
        >
          Password
        </InputLabel>
        <TextField
          id="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: '13px' }}
        />

        {/* Remember Me Checkbox */}
        <FormControlLabel
          control={<Checkbox />}
          label="Remember Me"
          sx={{ marginBottom: '24px', alignSelf: 'start', color: '#C0C580' }}
        />

        {/* Sign-In Button */}
        <Button 
          variant="contained" 
          fullWidth
          onClick={handleSignIn}
          sx={{
            backgroundColor: '#C0C580',
            color: 'white',
            '&:hover': { backgroundColor: '#A8A469' },
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
