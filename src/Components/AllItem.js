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
import ImageListItemBar from '@mui/material/ImageListItemBar';

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

export default function AllItem() {
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
              All Items
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

          <Box sx={{ marginTop: 8 }}>
        <ImageList sx={{ width: '100%', height: 'auto' }} cols={2} gap={8}>
          {filteredItemData.map((item) => (
            <ImageListItem key={item.img} >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>[Quantity: {item.quantity}] [Price: {item.price}]</span>}

              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}


const itemData = [
  {
    img: 'https://i1.wp.com/healthyvegrecipes.com/wp-content/uploads/2013/09/eggplant2.jpg',
    title: 'Eggplant',
    quantity: '260',
    price: '50',
    category: 'Vegetable'
  },
  {
    img: 'https://th.bing.com/th/id/R.e804ba4af1857ab1b2ace691afad24f8?rik=pRIb3Ma9KMWvCg&riu=http%3a%2f%2fwww.wifss.ucdavis.edu%2fwp-content%2fuploads%2f2015%2f03%2fMilk-Pouring-istock-6x4.jpg&ehk=iO0ykbJLhNCc2Q49PYVqe%2fNk8rHAZGbn0LHUGWy8jjU%3d&risl=&pid=ImgRaw&r=0',
    title: 'Milk',
    quantity: '150',
    price: '200',
    category: 'Condiments'
  },
  {
    img: 'https://labyrinthhealing.com/wp-content/uploads/2013/04/red-plate.jpg',
    title: 'Plate',
    quantity: '400',
    price: '60',
    category: 'Utensils'
  },
  {
    img: 'https://fishersupermarket.ph/wp-content/uploads/2020/09/4800024575487.png',
    title: 'Spaghetti Sauce',
    quantity: '10',
    price: '100',
    category: 'Condiments'
  },
  {
    img: 'https://i.ebayimg.com/images/g/M3YAAOSwXRRc0hpM/s-l640.jpg',
    title: 'Spoon',
    quantity: '200',
    price: '20',
    category: 'Untensils'
  },
  {
    img: 'https://th.bing.com/th/id/R.062ba1f792c4203f5cfe7641c60cce94?rik=szZqkpZMPcQQCw&riu=http%3a%2f%2fi1.wp.com%2fwebnetsky.com%2flifehouse%2fwp-content%2fuploads%2f2013%2f01%2fSayote-in-Japan.jpg&ehk=VlLry6MkWYyA1LX0PbyyGzAxQfZTmSbS1acl6B3K8v8%3d&risl=&pid=ImgRaw&r=0',
    title: 'Sayote',
    quantity: '100',
    price: '10',
    category: 'Vegetables'
  },
  {
    img: 'https://i5.walmartimages.com/asr/ea60d0e2-4942-47ae-80a5-ba38d30c4350_1.ee10a38d9642ab779537f8f7b3f19c3b.jpeg',
    title: 'Pepper',
    quantity: '89',
    price: '15',
    category: 'Vegetables'
  },
  {
    img: 'https://th.bing.com/th/id/OIP.eNJ_rTh81MY_b_27U3M6RwHaFZ?pid=ImgDet&rs=1',
    title: 'Oven',
    quantity: '2',
    price: '2000',
    category: 'Equipments'
  },
  {
    img: 'https://i5.walmartimages.com/asr/80fe3fdf-ac04-412a-a04e-82dae88c37b2_1.456bc5614399e0e8f58b2af02e6fc347.jpeg',
    title: 'refrigerator',
    quantity: '1',
    price: '5000',
    category: 'Equipments'
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    quantity: '100',
    price: '20',
    category: 'Vegetables'
  },
  {
    img: 'https://th.bing.com/th/id/OIP.h-i1DVWF3K3rWf00yJRxyQHaE7?pid=ImgDet&rs=1',
    title: 'Blender',
    quantity: '2',
    price: '1500',
    category: 'Equipment'
  },
  {
    img: 'https://www.halalfoodmaster.com/images/detailed/24/nescafe_300g.jpg',
    title: 'Coffee',
    quantity: '33',
    price: '65',
    category: 'Condiments'
  },
];