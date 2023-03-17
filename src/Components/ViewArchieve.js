import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AdminHeader from './AdminHeader';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ViewArchieve() {
    const [column, setColumn] = React.useState(4);
  const handleChange = (event) => {
    setColumn(event.target.value);
  };

  const [Mesurement, setMesurement] = React.useState("Quantity");
  const handleMesurement = (event) => {
    setMesurement(event.target.value);
  };

  const [category, setCategory] = React.useState('All Items');
  <AdminHeader title={category} />
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const [Title, setTitle] = React.useState("");
  const [Category, setCat] = React.useState("");
  const [Quantity, setQuantity] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [Photo, setPhoto] = React.useState("");
  const handleImageClick = (photo, title, category, quantity, price) => {
    setPhoto(photo);
    setTitle(title);
    setCat(category);
    setQuantity(quantity);
    setPrice(price);
    setOpen(true);
  };


  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [sort, setSort] = React.useState('Expiry Date');
  <AdminHeader title={category} />
  const handleSort = (event) => {
    setSort(event.target.value);
  };

  // Define the state variable for the search query
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter the itemData array based on the search query
  const filteredItemData = itemData.filter((item) => {
    // If searchQuery is empty, return all items
    if (searchQuery === '') return true;
    // Otherwise, check if the item title or quantity includes the searchQuery
    const lowercaseQuery = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.quantity.toLowerCase().includes(lowercaseQuery) ||
      item.price.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
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
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              View Archieve
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                // Update the searchQuery state variable on input change
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <Box style={{display: "flex", flexDirection: "row"}}>
  <Box style={{display: "flex", flexDirection: "column"}}>
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
  <Box style={{display: "flex", flexDirection: "column"}}>
    <InputLabel id="demo-simple-select-label">Category</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={category}
      label="Category"
      onChange={handleCategory}
    >
      <MenuItem value={'All Items'}>All Items</MenuItem>
      <MenuItem value={'Equipments'}>Equipments</MenuItem>
      <MenuItem value={'Vegetables'}>Vegetables</MenuItem>
      <MenuItem value={'Condiments'}>Condiments</MenuItem>
      <MenuItem value={'Utensils'}>Untensils</MenuItem>
    </Select>
  </Box>
  <Box style={{display: "flex", flexDirection: "column"}}>
    <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={sort}
      label="sort"
      onChange={handleSort}
    >
      <MenuItem value={'Price'}>Price</MenuItem>
      <MenuItem value={'Quantity'}>Quantity</MenuItem>
      <MenuItem value={'Date Added'}>Date Added</MenuItem>
      <MenuItem value={'Expiry Date'}>Expiry Date</MenuItem>
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
                  item.title,
                  item.category,
                  item.quantity,
                  item.price
                )
              }
            >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  [Category: {item.category}] [Quantity: {item.quantity}]
                  [Price: {item.price}]
                </Typography>
              </CardContent>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Archived Item</DialogTitle>
          <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={Title}
                height="200"
                image={Photo}
              />
              <CardContent>
                <div >
                  <h4 style={{ marginRight: "10px" }}>Item Name: {Title}</h4>
                </div>
                <div>
                  <h4 style={{ marginRight: "10px" }}>Category: {Category}</h4>
                </div>
                <div>
                  <h4 style={{ marginRight: "10px" }}>Price: {Price}</h4>
                </div>
                <div>
                  <h4 style={{ marginRight: "10px" }}>Quantity: {Quantity}</h4>
                </div>
                <div>
                  <h4 style={{ marginRight: "10px" }}>Expiry Date:</h4>
                </div>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Unarchive</Button>
          </DialogActions>
        </Dialog>
      </div>

    </>
  );
}


const itemData = [
  {
    img: 'https://th.bing.com/th/id/OIP.QdtQBEnMT2NTOE86QywvKgHaE7?pid=ImgDet&rs=1',
    title: 'Onion',
    quantity: '260',
    price: '50',
    category: 'Vegetable'
  },
  {
    img: 'https://th.bing.com/th/id/R.bb44af00b78b1f4fe512f92493ddac75?rik=Ai%2bQKAuNqoZBJw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-aEqLBpS8dIA%2fT3DgUCEPnnI%2fAAAAAAAACIY%2fbdnXKH3owmQ%2fs1600%2fIMG_2030.JPG&ehk=JJZ1RtxR8LPnnu4%2fsfDLbANqtQDKgK%2fYme0W2FvGtCw%3d&risl=&pid=ImgRaw&r=0',
    title: 'Creamer',
    quantity: '150',
    price: '200',
    category: 'Condiments'
  },
  {
    img: 'https://th.bing.com/th/id/R.9cdc485db683a28a68504c864d590c9c?rik=f3lHeHjCYK8Zdg&riu=http%3a%2f%2fwww.myfamilysilver.com%2fuploads%2fproducts%2f18220%2f0_zoomed.jpg&ehk=kfvW%2f00x1pXpUc4jaD3Nfo8D1aM5bpYdildZo08zBIE%3d&risl=&pid=ImgRaw&r=0',
    title: 'Fork',
    quantity: '400',
    price: '60',
    category: 'Utensils'
  },
  
];