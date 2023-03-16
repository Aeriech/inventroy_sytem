import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserHeader from './UserHeader';
import AdminHeader from './AdminHeader';
import NewAccount from './NewAccount';

/**
 * Component for user login
 */
export default function Login(props) {
  // State variables for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Constants for valid login credentials
  const ADMIN_EMAIL = 'Aeriech';
  const ADMIN_PASSWORD = '12345';
  const USER_EMAIL = 'Julia';
  const USER_PASSWORD = '54321';

  // State variables for rendering correct header
  const [showAdminHeader, setShowAdminHeader] = useState(true);
  const [showUserHeader, setShowUserHeader] = useState(true);
  const [showNewAccount, setShowNewAccount] = useState(true);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setShowAdminHeader(false);
    } else if (email === USER_EMAIL && password === USER_PASSWORD) {
      setShowUserHeader(false);
    } else {
      alert('Invalid user or password');
    }
  };

  const HandleNew = () => {
    setShowNewAccount(false);
  }
  if(!showNewAccount){
return <NewAccount/>;
  }

  // Render admin header if login successful
  if (!showAdminHeader) {
    return <AdminHeader />;
  }

  // Render user header if login successful
  if (!showUserHeader) {
    return <UserHeader />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '16px',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Box
        sx={{
          width: '400px',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          padding: '16px',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>*** Login ***</h1>

        <form onSubmit={handleSubmit}>
          <TextField
            required
            id="email"
            label="Username"
            variant="filled"
            fullWidth
            margin="dense"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            fullWidth
            margin="dense"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" type="submit" sx={{backgroundColor: '#4caf50', color: 'white'}}>
              Login
            </Button>
          </div>
          <br />
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" onClick={HandleNew} sx={{backgroundColor: '#4caf50', color: 'white'}}>
              New Account
            </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
}