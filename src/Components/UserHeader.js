import * as React from 'react';
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UserInventory from './UserInventory';
import Login from './Login';
import AddReciept from './AddReciept';


const pages = ['Inventory','Add Reciept'];
const settings = ['Profile',  'Logout'];



export default function UserHeader() {
  const [addReciept, setAddReciept] = React.useState(false);
  const HandleAddReciept = () => {
    setAddReciept(false);
  };

  const [showProfile, setShowProfile] = React.useState(false);
  const HandleShowProfile = () => {
    setShowProfile(false);
  };

  const [showLogin, setShowLogin] = useState(true)
  const [showInventory, setShowInventory] = useState(true)
  const [showReciept, setShowReciept] = useState(false)


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    if(e === 'Inventory'){
        setShowReciept(false);
        setShowInventory(true);
      }
      //show add receipt page
      else if(e === 'Add Reciept'){
        setAddReciept(true);
      }
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
    if(e === 'Logout'){
        setShowLogin(false);
      }
      else if(e === 'Profile'){
        setShowProfile(true);
      }
    };

    //show Login
    if(!showLogin){
      return <Login/>;
    }

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Inventory
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Inventory
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Julia" src="https://i.pinimg.com/736x/cb/8f/a5/cb8fa52e39e649e6c918da5e30d0e021.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {showInventory && <UserInventory/>}
    {showReciept && <AddReciept/>}

    <div>
        <Dialog open={showProfile} onClose={HandleShowProfile}>
          <DialogTitle>Profile</DialogTitle>
          <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200" src="https://i.pinimg.com/736x/cb/8f/a5/cb8fa52e39e649e6c918da5e30d0e021.jpg"/>
              <CardContent>
              <div>
                  <h4 style={{ marginRight: "10px" }}>Account Type: Admin</h4>
                  <h4 style={{ marginRight: "10px" }}>Name: Julia Almoite</h4>
                </div>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={HandleShowProfile}>Back</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog open={addReciept} onClose={HandleAddReciept}>
          <DialogTitle>Add Reciept</DialogTitle>
          <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200" />
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Description</h4>
                  <TextField
                    required
                    id="filled-required"
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Date In Receipt</h4>
                  <TextField
                    required
                    id="filled-required"
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={HandleAddReciept}>Cancel</Button>
            <Button onClick={HandleAddReciept}>Add Reciept</Button>
          </DialogActions>
        </Dialog>
      </div>

    </>
  );
}
