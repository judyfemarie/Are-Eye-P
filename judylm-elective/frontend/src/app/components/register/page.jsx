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

const register = () => {
  // State management for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');

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
          width: '750px',
          textAlign: 'center',
          
          marginBottom : '20px'
        }}
      >
         <Typography 
          variant="h4" 
          sx={{ marginTop: '10px', color: '#C0C580', fontFamily: 'Tahoma' }}
        >
          Create Account
        </Typography>

        <InputLabel 
          htmlFor="Full Name" 
          sx={{ textAlign: 'left', display: 'block', marginBottom: '8px', color: '#00000' }}
        >
          Name
        </InputLabel>
        <TextField
          id="name"
          type="text"
          fullWidth
          value={name}
          
          onChange={(e) => setName(e.target.value)}
          sx={{  height: '20px',marginBottom: '40px' }}
        />
         <InputLabel 
          htmlFor="username" 
          sx={{ textAlign: 'left', display: 'block', marginBottom: '8px', color: '#00000' }}
        >
          Birthday
        </InputLabel>
        <TextField
          id="birthday"
          type="text"
          fullWidth
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          sx={{ marginBottom: '13px' }}
        />
         <InputLabel 
          htmlFor="username" 
          sx={{ textAlign: 'left', display: 'block', marginBottom: '8px', color: '#00000' }}
        >
          Gender
        </InputLabel>
        <TextField
          id="gender"
          type="text"
          fullWidth
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          sx={{ marginBottom: '13px' }}
        />
         <InputLabel 
          htmlFor="username" 
          sx={{ textAlign: 'left', display: 'block', marginBottom: '8px', color: '#00000' }}
        >
          Email 
        </InputLabel>
        <TextField
          id="email"
          type="text"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: '13px' }}
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
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default register;
