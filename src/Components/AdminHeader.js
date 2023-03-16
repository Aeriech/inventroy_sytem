import * as React from "react";
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
import AdminInventory from "./AdminInventory";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Login from "./Login";

const pages = ["Inventory", "Add Reciept", "Add Item"];
const settings = ["Profile", "Create New User", "History Log", "Logout"];

export default function AdminHeader(props) {

  const [addItem, setAddItem] = React.useState(false);
  const HandleAddItem = () => {
    setAddItem(false);
  };

  const [addReciept, setAddReciept] = React.useState(false);
  const HandleAddReciept = () => {
    setAddReciept(false);
  };

  const [showProfile, setShowProfile] = React.useState(false);
  const HandleShowProfile = () => {
    setShowProfile(false);
  };

  const [showHistory, setShowHistory] = React.useState(false);
  const HandleShowHistory = () => {
    setShowHistory(false);
  };

  const [showCreateUser, setShowCreateUser] = React.useState(false);
  const HandleShowCreateUser = () => {
    setShowCreateUser(false);
  };

  const [Category, setCat] = React.useState("");
  const handleCat = (event) => {
    setCat(event.target.value);
  };

  const [showLogin, setShowLogin] = useState(true);
  const [showInventory, setShowInventory] = useState(true);

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
    //shows inventory
    if (e === "Inventory") {
      setShowInventory(true);
    }
    //shows add item
    else if (e === "Add Item") {
      setAddItem(true);
    }
    //show add receipt page
    else if (e === "Add Reciept") {
      setAddReciept(true);
    }
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
    if (e === "Logout") {
      //set to show login
      setShowLogin(false);
    }
     else if (e === "Profile") {
      setShowProfile(true);
    }
    else if (e === "Create New User") {
      setShowCreateUser(true);
    }
    else if (e === "History Log") {
      setShowHistory(true);
    }
  };
  //show Login
  if (!showLogin) {
    return <Login />;
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Inventory
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
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
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Inventory
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Aeriech"
                    src="https://th.bing.com/th/id/OIP.OZ1zsHv22owY1dD5qv_fyQHaHa?pid=ImgDet&rs=1"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {showInventory && <AdminInventory />}
      <div>
        <Dialog open={addItem} onClose={HandleAddItem}>
          <DialogTitle>Add Item</DialogTitle>
          <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200" />
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Item Name</h4>
                  <TextField
                    required
                    id="filled-required"
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Category</h4>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Category}
                    label="Category"
                    onChange={handleCat}
                    fullWidth="true"
                    size="small"
                  >
                    <MenuItem value={"Equipments"}>Equipments</MenuItem>
                    <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
                    <MenuItem value={"Condiments"}>Condiments</MenuItem>
                    <MenuItem value={"Utensils"}>Untensils</MenuItem>
                  </Select>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Price</h4>
                  <TextField
                    required
                    id="filled-required"
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Quantity</h4>
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
            <Button onClick={HandleAddItem}>Cancel</Button>
            <Button onClick={HandleAddItem}>Add Item</Button>
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

      <div>
        <Dialog open={showHistory} onClose={HandleShowHistory}>
          <DialogTitle>History/Logs</DialogTitle>
          <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
              <div>
                  <h4 style={{ marginRight: "10px" }}>Super Admin logged in successfull on 12:39 PM Friday, March 17, 2023</h4>
                  <h4 style={{ marginRight: "10px" }}>New Item: Eggplant has been created successfully by Super Admin, March 16, 2023</h4>
                  <h4 style={{ marginRight: "10px" }}>Item: Milk used at Quantity: 18 by Admin on 9:00 AM Monday, March 13,2023</h4>
                  <h4 style={{ marginRight: "10px" }}>Super Admin archived item: Onion on 7:30 PM Tuesday, March 14,2023</h4>
                  <h4 style={{ marginRight: "10px" }}>Super Admin renamed item: Onion into item: Onion Leaks 6:00 AM Monday, March 13, 2023</h4>
                </div>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={HandleShowHistory}>Back</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog open={showProfile} onClose={HandleShowProfile}>
          <DialogTitle>Profile</DialogTitle>
          <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200" src="https://th.bing.com/th/id/OIP.OZ1zsHv22owY1dD5qv_fyQHaHa?pid=ImgDet&rs=1"/>
              <CardContent>
              <div>
                  <h4 style={{ marginRight: "10px" }}>Account Type: Super Admin</h4>
                  <h4 style={{ marginRight: "10px" }}>Name: Aeriech Ancheta</h4>
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
        <Dialog open={showCreateUser} onClose={HandleShowCreateUser}>
          <DialogTitle>Create User</DialogTitle>
          <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200"/>
              <CardContent>
              <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Usertype</h4>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Category}
                    label="Category"
                    onChange={handleCat}
                    fullWidth="true"
                    size="small"
                  >
                    <MenuItem value={"Super Admin"}>Super Admin</MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"User"}>User</MenuItem>
                  </Select>
                </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Username</h4>
                  <TextField
                    required
                    id="filled-required"
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>First  Name</h4>
                  <TextField
                    required
                    id="filled-required"
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Last Name</h4>
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
            <Button onClick={HandleShowCreateUser}>Cancel</Button>
            <Button onClick={HandleShowCreateUser}>Create</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
