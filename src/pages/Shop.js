import React from 'react'
import styled from 'styled-components'
import { Select as Select2 } from 'antd';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import ProductList from "./Product/ProductList.js";

import styles from './Shop.module.css';

const CustomizedSlider = styled(SwipeableDrawer)`
  color: #20b2aa;
  background: rgba(54, 54, 54, 0.2);
  border-radius: 16px;
  boxShadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(54, 54, 54, 0.43);

  :hover {
    color: #2e8b57;
  }
`;

const data = [
  {
    id: "avrvsergrdfvsdgbtdtdfb",
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    id: "avrvsergrdfagsvdsfdfgvb",
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    id: "avrvsergrsdfvfdb",
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    id: "avrvsergrdfvsdfvdfbvvfb",
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    id: "ASgvrgvfdfvsdgbtdtdfb",
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    id: "avrvagvafvsdfgvcfds",
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    id: "sdgbsfdbrtyhbtdtdfb",
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  },
  {
    id: "afsrfdgcvfsdvrgfvgbtdtdfb",
    productTitle: "Nike Air Max",
    brandName: "Nike",
    price: "$123"
  }
]

const Shop = () => {
    let history = useHistory();

    const [currency, setCurrency] = React.useState('EUR');
    const [anchor, setAnchor] = React.useState('bottom');
    const { Option } = Select;

    const navigateToPage = (id) => {
        console.log(id);
        history.push(`/shop/${id}`);
    }

    const addToCart = (id) => {
        console.log(id);
    }

    function handleSelect(value) {
        console.log(`selected ${value}`);
    }

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <Box
          // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          sx={{ 
              width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: 'visible',
              right: 0,
              left: 0,
           }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className={styles.sidebar}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
    );

    return (
        <Container>
            <Header>
                <MenuContainer>
                    <MenuIcon fontSize="large" onClick={toggleDrawer(anchor, true)} />
                </MenuContainer>
                <TitleArea>
                    <h6>HOME > <span style={{ textAlign: 'center', fontSize: '0.8em', fontWeight: 'normal' }}>Sneakers </span></h6>
                </TitleArea>
                <SearchArea>
                    <SearchInput placeholder="Search..." type="text"></SearchInput>
                </SearchArea>
            </Header>
            <ContentArea>
                <Sidebar>
                    <SortFilter>
                        <SidebarTitle >Sort </SidebarTitle>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                            <SelectBox
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={10}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Category</MenuItem>
                                <MenuItem value={20}>Newest</MenuItem>
                                <MenuItem value={30}>Trending</MenuItem>
                            </SelectBox>
                        </FormControl>
                    </SortFilter>
                    <SidebarTitle>Filter </SidebarTitle>
                    <FilterContainer>

                      <FormControl sx={{ m: 1, minWidth: 300 }}>
                          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                      <SelectBox
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={10}
                          label="Age"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Category</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-size">Age</InputLabel>
                      <SelectBox
                          labelId="demo-size"
                          id="demo-simple-select-helper"
                          value={10}
                          label="size"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Size</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>
                    </FormControl >

                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-style">Style</InputLabel>
                      <SelectBox
                          labelId="demo-style"
                          id="demo-style"
                          value={10}
                          label="Style"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Style</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>

                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <SelectBox
                          labelId="demo-color"
                          id="demo-color"
                          value={10}
                          label="color"
                          onChange={handleChange}

                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Color</MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>

                      <SelectBox
                          labelId="demo-prince"
                          id="demo-prince"
                          value={10}
                          label="prince"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Price Range </MenuItem>
                          <MenuItem value={20}>Newest</MenuItem>
                          <MenuItem value={30}>Trending</MenuItem>
                      </SelectBox>
                    </FormControl>
                    </FilterContainer>
                </Sidebar>
                <ProductArea>
                  <ProductList 
                      data={data} 
                      navigateToPage={navigateToPage}
                      addToCart={addToCart}
                   />
                </ProductArea>

                <CustomizedSlider
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                    sx={{
                        borderRadius: '25px',
                    }}
                    
                >
                    {list(anchor)}
                </CustomizedSlider>
            </ContentArea>

        </Container>
    )
}

export default Shop


const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: 25333D;
  padding: 10px;
  width: 100%;
  height: 95vh;
  flex-grow: 1;
  margin:0px;
  padding:0px;
`;

const MenuContainer = styled.div`
   padding: '20px';
   margin-left: 20px;
   display:none;

      @media (max-width: 908px) {
        display: flex;
      }

`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
`

const TitleArea = styled.div`
    padding: 20px;
    margin: 10px;
    width : 300px;
`

const SearchArea = styled.div`
    width: 70%;

`

const SearchInput = styled.input`
    width:85vw;
    height: 70px;
    border:none;
    border-radius: 15px;
    border-color: white;
    font-size: 3em;
    outline:none;

    &:hover{
        outline: none;
        border:none;
        border-radius: 15px;
        border-color: white;
    }
    &:active {
        outline: none;
        border:none;
        border-radius: 15px;
        border-color: white;
    }
`

const ContentArea = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
`

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    flex:0.2;


  @media (max-width: 912px) {
    display: none;
  }
`

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 89%;
    height:70%;
    margin-bottom:50px;
    margin-left: 20px;
`

const SortFilter = styled.div`
    width: 100%;
    padding-bottom: 50px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-left: -50px;
`

const SidebarTitle = styled.h3`
    align-self: flex-start;
    padding-left: 50px;
    padding-top: 50px;
    margin: 10px;
`

const SelectBox = styled(Select)`
  margin-bottom:20px;
`
const ProductArea = styled.div`
    flex:0.8;
    display: flex;
    flex-direction: column;
  @media (max-width: 912px) {
    flex:1;
  }

`

const sideNav = styled(Box)`
    border-radius: 15px;

    /* From https://css.glass */
background: rgba(54, 54, 54, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(54, 54, 54, 0.43);
`