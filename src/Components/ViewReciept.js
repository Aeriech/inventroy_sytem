import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ViewReciept() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [column, setColumn] = React.useState(4);
  const handleChange = (event) => {
    setColumn(event.target.value);
  };


  const [sort, setSort] = React.useState("Date Added");
  const handleSort = (event) => {
    setSort(event.target.value);
  };


  const [Title, setTitle] = React.useState("");
  const [Quantity, setQuantity] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [Photo, setPhoto] = React.useState("");
  const handleImageClick = (photo, Amount, Date, Description) => {
    setPhoto(photo);
    setTitle(Amount);
    setQuantity(Date);
    setPrice(Description);
    setOpen(true);
  };

  // Define the state variable for the search query
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter the itemData array based on the search query
  const filteredItemData = itemData.filter((item) => {
    // If searchQuery is empty, return all items
    if (searchQuery === "") return true;
    // Otherwise, check if the item Amount or Date includes the searchQuery
    const lowercaseQuery = searchQuery.toLowerCase();
    return (
      item.Amount.toLowerCase().includes(lowercaseQuery) ||
      item.Date.toLowerCase().includes(lowercaseQuery) ||
      item.Description.toLowerCase().includes(lowercaseQuery) 
    );
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              View Reciepts
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                // Update the searchQuery state variable on input change
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <p></p>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <InputLabel id="demo-simple-select-label">Column</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={column}
            label="Column"
            onChange={handleChange}
          >
            <MenuItem value={2}>Column: 2</MenuItem>
            <MenuItem value={3}>Column: 3</MenuItem>
            <MenuItem value={4}>Column: 4</MenuItem>
            <MenuItem value={5}>Column: 5</MenuItem>
            <MenuItem value={6}>Column: 6</MenuItem>
          </Select>
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="sort"
            onChange={handleSort}
          >
            <MenuItem value={"Price"}>Amount</MenuItem>
            <MenuItem value={"Date Added"}>Date</MenuItem>
          </Select>
        </Box>
      </Box>

      <Box sx={{ marginTop: 8 }}>
        <ImageList sx={{ width: "100%", height: "auto" }} cols={column} gap={8}>
          {filteredItemData.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() =>
                handleImageClick(
                  item.img,
                  item.Amount,
                  item.Date,
                  item.Description
                )
              }
            >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.Amount}
                loading="lazy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amount: {item.Amount}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                [Date: {item.Date}]
                </Typography>
                <Typography variant="body2" color="text.secondary">
                [Description: {item.Description}]
                </Typography>
              </CardContent>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update Reciept</DialogTitle>
          <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={Title}
                height="200"
                image={Photo}
              />
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Amount</h4>
                  <TextField
                    required
                    id="filled-required"
                    defaultValue={Title}
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Date</h4>
                  <TextField
                    required
                    id="filled-required"
                    defaultValue={Quantity}
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "10px" }}>Description</h4>
                  <TextField
                    required
                    id="filled-required"
                    defaultValue={Price}
                    variant="filled"
                    fullWidth="true"
                    size="small"
                  />
                </div>
                
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Update</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

const itemData = [
  {
    img: "https://thesmartlocal.com/philippines/wp-content/uploads/2020/04/receipt.jpg",
    Amount: "1,056.00",
    Date: "December 02, 2015",
    Description: "Reciept in grocery",
  },
  {
    img: "https://th.bing.com/th/id/OIP.gYjh49lv9yHtSwVtlicZqgHaQV?pid=ImgDet&rs=1",
    Amount: "851.00",
    Date: "July 03, 2015",
    Description: "Binili Sa 7-11",
  },
  {
    img: "https://3.bp.blogspot.com/_oVd7hYxS-Rc/Sod2yf0sQtI/AAAAAAAAB4Y/n1KZJg6nrnc/s400/IMG_2448.JPG",
    Amount: "1,827.76",
    Date: "March 17, 2023",
    Description: "Resibo sa SM",
  },
];
