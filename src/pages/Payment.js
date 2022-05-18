import React, { useState } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd';
import ProductCard from './Cards/ProductCard'
import SliderCard from './Cards/SliderCard'
import CartegoryCard from './Cards/CartegoryCard'
import FullCard from './Cards/Categories/FullCard'
import shoe from '../uploads/product-1.jpg';
import {
  Link,
  useParams, useHistory
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import { Button, Tooltip } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import SimpleSlider from '../components/Slider/SimpleSlider'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Slider from "react-slick";

const data = [
    {
        id: "avrvsergrdfvsrg",
        img: "product-1.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut. Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut. Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut. Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut. Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus.",
        price: "$123",
        color : [
            'brown',
            'black',
            'white',
            'mixed'
        ],
        pictures: [
            "product-1.jpg",
            "product-2.jpg",
            "product-3.jpg",
            "product-4.jpg",
        ]
    },
 
]


const productData = [
    {
        id: "avrvsergrdfvsrg",
        img: "product-1.jpg",
        title: "Nike Air Max Pro Max 2022",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123",
        qty: 1,
        category: 'Sneakers',
    },
    {
        id: "avrgadfrfgdfvsrg",
        img: "product-2.jpg",
        title: "Nike Air Max Pro Max 2022",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123",
        qty: 1,
        category: 'Sneakers',
    },
    {
        id: "avrvsergavcargvf",
        img: "product-3.jpg",
        title: "Nike Air Max Pro Max 2022",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123",
        qty: 1,
        category: 'Sneakers',
    },
    {
        id: "avrvsergrgvsdfbthb",
        img: "product-4.jpg",
        title: "Nike Air Max Pro Max 2022",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123",
        qty: 1,
        category: 'Sneakers',
    },
    {
        id: "avrvsergadgergvrfvrdf",
        img: "product-2.jpg",
        title: "Nike Air Max Pro Max 2022",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123",
        qty: 1,
        category: 'Sneakers',
    },
    {
        id: "avrsrgvsdgvfdg7yf897",
        img: "product-3.jpg",
        title: "Nike Air Max Pro Max 2022",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123",
        qty: 1,
        category: 'Sneakers',
    },
    {
        id: "avrsgbkjngdgvfv",
        img: "product-4.jpg",
        title: "Nike Air Max Pro Max 2022",
        category: 'Sneakers',
           price: "$123",
        qty: 1
    },
    {
        id: "avrvsdthbytkujhndrt",
        img: "product-4.jpg",
        title: "Nike Air Max Pro Max 2022",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123",
        qty: 1
    }
]


const Payment = () => {
  const [product, setProduct] = useState(data[0])
  const [mainImage, setMainImage] = useState(data[0].img)
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let history = useHistory();
  let { id } = useParams();

  const navigateToPage = (id) => {
    console.log(id)
    history.push(`/shop/${id}`);
  }

  const addToCart = (id) => {
     console.log(id)
  }

    
    return (
        <Container>

            <HorizontalSection>
                <Card> Pay with Card</Card>
                <Card> Pay with Transer</Card>
                <Card> Pay with Dollar Card</Card>
                
            </HorizontalSection>

            <HorizontalFormSection>
                <FormContainer> 
                    <SectionTitle> Billing Info </SectionTitle>
                    <Stack
                      component="form"
                      sx={{
                        width: 'auto',
                        paddingRight: 3
                      }}
                      spacing={5}
                      noValidate
                      autoComplete="off"
                    >

                          <TextField
                            label="FULL NAME"
                            id="outlined-start-adornment"
                            size="large"
                            fullWidth 
                          />


                          <TextField
                            label="BILLING ADDRESS"
                            id="outlined-start-adornment"
                            size="large"
                            fullWidth 
                          />
                          
                         <Box sx={{ display: 'flex', flexDirection: 'row', justfyContent: 'space-between' }}>
                              
                            <FormControl sx={{ m: 1, minWidth: 150 }} fullWidth>
                              <InputLabel id="demo-simple-select-helper-label">CITY</InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="CITY"
                                onChange={handleChange}
                              >
                                <MenuItem value="">
                                  <em>0</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                              </Select>
                              
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 150 }} fullWidth>
                              <InputLabel id="demo-simple-select-helper-label">ZIP CODE</InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="ZIP CODE"
                                onChange={handleChange}
                              >
                                <MenuItem value="">
                                  <em>0</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                              </Select>
                              
                            </FormControl>

                              {/* <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="Zip Code"
                                variant="filled"
                                size="small"
                                fullWidth 
                              /> */}

                          </Box>

                          <FormControl sx={{ m: 1, minWidth: 290 }} fullWidth>
                              <InputLabel id="demo-simple-select-helper-label">COUNTRY</InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="COUNTRY"
                                onChange={handleChange}

                              >
                                <MenuItem value="">
                                  <em>0</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                              </Select>
                              
                            </FormControl>
                          
                    </Stack>
                </FormContainer>

                <FormContainer> 
                    <SectionTitle style={{ marginLeft: 20}}> Credit Card Info </SectionTitle>
                    <Stack
                      component="form"
                      sx={{
                        width: 'auto',
                        paddingLeft: 3
                      }}
                      spacing={5}
                      noValidate
                      autoComplete="off"
                    >
                      
                          <TextField
                            label="CARD HOLDER'S NAME"
                            id="outlined-start-adornment"
                            size="large"
                            fullWidth 
                          />

                          <TextField
                            label="CARD NUMBER"
                            id="outlined-start-adornment"
                            size="large"
                            fullWidth 
                          />

                          <Box sx={{ display: 'flex', flexDirection: 'row', justfyContent: 'space-between' }}>
                            <FormControl sx={{ m: 1, minWidth: 150 }} fullWidth>
                              <InputLabel id="demo-simple-select-helper-label">EXPIRED MONTH</InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="EXPIRED MONTH"
                                onChange={handleChange}

                              >
                                <MenuItem value="">
                                  <em>0</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                              </Select>
                              
                            </FormControl>
                            
                            <FormControl sx={{ m: 1, minWidth: 150 }} fullWidth>
                              <InputLabel id="demo-simple-select-helper-label">EXP.. MONTH</InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="EXP. YEAR"
                                onChange={handleChange}
                                fullWidth
                              >
                                <MenuItem value="">
                                  <em>0</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                              </Select>
                              
                            </FormControl>

                              {/* <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                defaultValue="Zip Code"
                                variant="filled"
                                size="small"
                                fullWidth 
                              /> */}

                          </Box>

                          <TextField
                            label="CVC NUMBER"
                            id="outlined-start-adornment"
                            size="large"
                            fullWidth 
                          />

                          
                    </Stack>
                </FormContainer>

                <Box>
                    
                </Box>
            </HorizontalFormSection>

            
        </Container>
    )
}

export default Payment

const Container = styled.div`
    padding-left: 100px;
    padding-right: 100px;
    height: auto;
    padding-top: 60px;
    background-color: #F5F5F5;
    padding-bottom: 20px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const HorizontalSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    width: auto;
    margin-bottom: 30px;
    height: auto;
    border-radius: 8px;
`


const HorizontalFormSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    width: auto;
    margin-bottom: 30px;
    height: auto;
    background-color: orange;
    border-radius: 15px;
    padding: 15px;
    margin:20px;
    margin-left:180px;
    margin-right:190px;
    padding-bottom: 40px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-bottom: 30px;
    height: 200px;
    border-radius: 8px;
    width: 200px;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: white;
    margin-bottom: 30px;
    height: auto;
    border-radius: 8px;
    width: auto;
`

const QtyButton = styled(Button)`
    border: none;
`

const SectionTitle = styled.h3`
    font-size: 1.4em;
    padding-bottom:10px;
`

const FormContainer = styled(Box)`
    disply: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex:0.5;
    padding:15px;

` 