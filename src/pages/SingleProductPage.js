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
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrgadfrfgdfvsrg",
        img: "product-2.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsergavcargvf",
        img: "product-3.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsergrgvsdfbthb",
        img: "product-4.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsergadgergvrfvrdf",
        img: "product-2.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrsrgvsdgvfdg7yf897",
        img: "product-3.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrsgbkjngdgvfv",
        img: "product-4.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    },
    {
        id: "avrvsdthbytkujhndrt",
        img: "product-4.jpg",
        title: "Sport Sneakers",
        description: "Sollicitudin arcu morbi sem amet molestie tempus lorem ipsum ex morbi purus suspendisse maximus sem quis arcu ipsum portaest condimentum et nec proin tristique ut.",
        price: "$123"
    }
]


const SingleProductPage = () => {
  const [product, setProduct] = useState(data[0])
  const [mainImage, setMainImage] = useState(data[0].img)

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
                <BoxContainer>
                    <ProductImage  
                        src={process.env.PUBLIC_URL+`/images/${mainImage}`}  
                    />
                </BoxContainer>
                <BoxContainer sx={{ padding: '40px'}}>
                    <ProductTitle>Nike Air Max Pro 2022</ProductTitle>
                    <Box sx={{ width: '600px'}}>
                        {product.description}
                    </Box>
                    
                    <Box sx={{ width: '600px', padding: '40px', paddingLeft: '0px'}}>
                        <Box sx={{ fontSize: '1.1em', color: 'gray', fontWeight: '600', paddingBottom: '10px' }}> Color Variation: </Box>
                        { product.color.map((item, index) => {
                            if(item === 'mixed') {
                                return (
                                <Tooltip title={item} >
                                  <Button style={{ backgroundColor:`${item}`, marginRight: '10px' }}  > 
                                      Mixed
                                  </Button>
                                </Tooltip>
                            )
                            }else  return (
                                <Tooltip title={item} >
                                  <Button style={{ backgroundColor:`${item}`, marginRight: '10px' }} shape="circle" icon={<CheckOutlined color="white" style={{ color: 'white' }}/>} />
                                </Tooltip>
                            )
                        })}
                    </Box>

                    <Box sx={{ width: '600px', padding: '40px', paddingLeft: '0px', paddingTop: '10px' }}>
                        <Box sx={{ fontSize: '1.1em', color: 'gray', fontWeight: '600', paddingBottom: '10px' }}> Product Pictures: </Box>

                        <PreviewImageContainer>
                            { product.pictures.map((item, index) => {
                                return (
                                    <Box sx={{ height: '50px', marginRight: '10px'  }} >
                                      <PreviewImage  
                                        src={process.env.PUBLIC_URL+`/images/${item}`}  
                                        onClick={()=> setMainImage(item)}
                                      />
                                    </Box>
                                )
                            })}
                        </PreviewImageContainer>
                        
                    </Box>

                    <Box sx={{ width: '600px', padding: '40px', paddingLeft: '0px', paddingTop: '50px' }}>
                        <Box sx={{ fontSize: '1.9em', color: 'gray', fontWeight: '600', paddingBottom: '10px' }}> 
                            {product.price} 
                        </Box>

                        <Button size="large" style={{ backgroundColor: 'black', color: 'white', borderRadius: '5px' }}>Add to Cart </Button>


                    </Box>


                </BoxContainer>
            </HorizontalSection>

            <Section>
                <HorizontalSection style={{ height: 'auto', paddingBottom:'20px' }}>
                    <SimpleSlider 
                        data={productData}
                        addToCart={addToCart}
                        navigateToPage={navigateToPage}
                        rtl={true}
                        speed={3000}
                        autoplay={true}
                        slidesToShow={6}
                        slidesToScroll={1}
                        dot={false}
                        sideTitle="People also bought"
                    />
                </HorizontalSection>

                 <HorizontalSection style={{ height: 'auto', paddingBottom:'20px' }}>
                    <SimpleSlider 
                        data={productData}
                        addToCart={addToCart}
                        navigateToPage={navigateToPage}
                        rtl={false}
                        speed={3000}
                        autoplay={true}
                        slidesToShow={6}
                        slidesToScroll={1}
                        dot={false}
                        sideTitle="Selected for you"
                    />
                </HorizontalSection>

                <HorizontalSection style={{ height: 'auto', paddingBottom:'20px' }}>
                    <SimpleSlider 
                        data={productData}
                        addToCart={addToCart}
                        navigateToPage={navigateToPage}
                        rtl={true}
                        speed={3000}
                        autoplay={true}
                        slidesToShow={6}
                        slidesToScroll={1}
                        dot={false}
                        sideTitle="You may like"
                    />
                </HorizontalSection>

                <HorizontalSection style={{ height: 'auto', paddingBottom:'20px' }}>
                    <SimpleSlider 
                        data={productData}
                        addToCart={addToCart}
                        navigateToPage={navigateToPage}
                        rtl={false}
                        speed={3000}
                        autoplay={true}
                        slidesToShow={6}
                        slidesToScroll={1}
                        dot={false}
                        sideTitle="Favourite"
                    />
                </HorizontalSection>                
            </Section>

            
        </Container>
    )
}

export default SingleProductPage

const Container = styled.div`
    padding-left: 150px;
    padding-right: 150px;
    height: auto;
    padding-top: 60px;
    background-color: #F5F5F5;
    padding-bottom: 20px;
    min-width: 1740px;
`

const HorizontalSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: white;
    margin-bottom: 30px;
    height: auto;
    border-radius: 8px;
    min-width: 1508px;
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


const SliderContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 15px;
`

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`

const PreviewImage = styled.img`
  width: 100px;
  height: auto;
    &:hover {
       border: 1px solid gray;
       mouse: pointer;
    }

    &:active {
       border: 1px solid gray;
       mouse: pointer;
    }
`
const BoxContainer = styled(Box)`
  width: 50%;
  height: 100%;
`

const ProductTitle = styled.h3`
  font-style: bold;
  color: grey;
  font-size: 3em;
  font-family: 'Anton', sans-serif;
`

const PreviewImageContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
    height: auto;
`