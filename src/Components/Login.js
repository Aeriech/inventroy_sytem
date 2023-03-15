import './Style.css';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserHeader from './UserHeader';
import AdminHeader from './AdminHeader';



export default function Login(props) {

    //For Current User
    const[User, setUser] = useState('');
    const[Pass, setPass] = useState('');
    const AdminUsername = "Aeriech";
    const AdminPassword = "12345";
    const Username = "Julia";
    const Password = "54321";
    const [showAdmin, setShowAdmin] = useState(true);
    const [showUser, setShowUser] = useState(true);

    const submit = () => {
        //Log in for curreng user
        if ((User === AdminUsername && Pass === AdminPassword)) {
            setShowAdmin(false);
        }
        //Log in for new user
        else if ((User === Username && Pass === Password)) {
          setShowUser(false);
        } 
        else {
            alert("Invalid Username or Password");
        }
    }

    //Open Admin Header
    if(!showAdmin){
        return <AdminHeader/>;
    }

    //Open User Header
    if(!showUser){
        return <UserHeader/>;
    }


    //return log in component
  return (
    <div
    className='div'
    >
    <div
    className='innerDiv'>
    <Box
      className='BOX'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        
        <h1>***Login***</h1>

        <TextField
          required
          id="textfield"
          label="Username"
          variant="filled"
          onChange={(e) => setUser(e.target.value)}
        />

        <br></br>

        <TextField
          required
          id="textfield"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={(e) => setPass(e.target.value)}
        />

        <br></br>

        <Button 
        id='button'
        variant="contained"
        onClick={submit}
        >Login</Button>

        <p></p>

      </div>
    </Box>
    </div>
    </div>
  );
  

}
