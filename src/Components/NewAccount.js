import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Login from './Login';
/**
 * Component for user login
 */
export default function NewAccount(props) {
  const [showLogin, setShowLogin] = React.useState(true)

const BackLogin = () => {
    setShowLogin(false);
}

  if (!showLogin) {
    return <Login/>;
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
        <h1 style={{ textAlign: 'center' }}>*** New Account Set Up ***</h1>

        <form>
            <h5 style={{ textAlign: 'center' }}>Enter Username Given By The Super Admin To Verify Account Set Up</h5>
          <TextField
            required
            id="email"
            label="Username"
            variant="filled"
            fullWidth
            margin="dense"
            
          />
          <h5 style={{ textAlign: 'center' }}>Enter Your Password To FInish New Account Set Up</h5>
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            fullWidth
            margin="dense"
            
          />
          <TextField
            required
            id="password"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            fullWidth
            margin="dense"
            
          />
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" onClick={() => BackLogin()} sx={{backgroundColor: '#4caf50', color: 'white'}}>
              Submit
            </Button>
          </div>
          
        </form>
      </Box>
    </Box>
  );
}