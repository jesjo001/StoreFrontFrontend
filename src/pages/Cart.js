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

            <CartSection>
                <CartList>
                    {
                        productData.map((item, index)=> {
                            return(
                                <HorizontalSection>
                                    <BoxContainer>
                                        <ProductImage  
                                            src={process.env.PUBLIC_URL+`/images/${mainImage}`}  
                                        />
                                    </BoxContainer>
                                    <ItemContainer sx={{ padding: '20px'}}>
                                       <ProductSubTitle> {item.category} </ProductSubTitle>
                                       <ProductTitle> {item.title}</ProductTitle>
                                    </ItemContainer>
                                    <BoxContainer style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <PriceTag>$150</PriceTag>
                                        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-arround', alignItems: 'center', fontSize: '1.6em', color: '#969590'}}>
                                            <QtyButton> - </QtyButton>
                                            <span style={{ marginLeft: '15px', marginRight: '15px'}}>{item.qty}</span>
                                            <QtyButton> + </QtyButton>
                                        </Box>
                                        
                                    </BoxContainer>
                                </HorizontalSection>
                                )
                        })
                    }
                     
                </CartList>
                <CartSummary>
                    <OverviewSummary>
                        <SummaryTitle>
                            Order Summary
                        </SummaryTitle>
                    
                        <OrderRow>
                            <Box> Total Orders :</Box>
                            <Box sx={{ paddingLeft: '40px', marginLeft: '40px', textAlign: 'right', float: 'right'  }}>$1234</Box>
                        </OrderRow>

                        <OrderRow>
                            <Box> Shipping :</Box>
                            <Box sx={{ paddingLeft: '40px', marginLeft: '40px', textAlign: 'right', float: 'right'  }}>$1234</Box>
                        </OrderRow>
                    </OverviewSummary>

                    <OverviewFooter>
                        <Box>$1200</Box> 
                        <Box>Continue to payment</Box> 
                    </OverviewFooter>
                </CartSummary>

            </CartSection>

            <HorizontalSection>
            </HorizontalSection>

            
                <SliderHorizontalSection style={{ paddingBottom: '10px' }}>
                    <SimpleSlider 
                        data={productData}
                        addToCart={addToCart}
                        navigateToPage={navigateToPage}
                        rtl={false}
                        speed={3000}
                        autoplay={true}
                        slidesToShow={5}
                        slidesToScroll={1}
                        dot={false}
                        sideTitle="Favourite"
                        sliderWidth={true}
                    />
                </SliderHorizontalSection>                
            

            
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
    min-width: auto;
`

const HorizontalSection = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    width:auto;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background-color: white;
    margin-bottom: 30px;
    height:auto;
    border-radius: 8px;
`

const SliderHorizontalSection = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    width:auto;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background-color: white;
    margin-bottom: 30px;
    height:auto;
    border-radius: 8px;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: none;
    margin-bottom: 10px;
    height: auto;
    border-radius: 8px;
    width: auto;
    margin-left: 0px;
    padding: 0px;
    padding:0px;

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
  width: 15%;
  height: 100%;
`

const ItemContainer = styled(Box)`
  width: 60%;
  height: 100%;
  display: block;
`

const PriceTag = styled(Box)`
  width: auto;
  height: 100%;
  font-size: 1.5em;
  font-weight: 600;
  padding-bottom: 10px;
  color: #969590

`

const ProductTitle = styled.h3`
  font-style: bold;
  color: orange;
  font-size: 1.4em;
  font-family: 'Anton', sans-serif;
  width: 15vw;
`

const ProductSubTitle = styled.h3`
  font-style: bold;
  font-weight: 600;
  color: grey;
  font-size: 0.7em;
  width: 600px;
`

const PreviewImageContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
    height: auto;
`

const CartSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`

const CartList = styled.div`
    width: 65%;
    overflow: auto;
    padding-right:10px;
    margin-right:10px;
    padding-left:10px;
    max-height: 700px;
`

const CartSummary = styled.div`
    width: 30%;
    background-color: black;
    height: 700px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    border-radius: 15px;
`

const QtyButton = styled(Button)`
    border: none;
`


const SummaryTitle = styled.div`
    font-size: 1em;
    color: grey;
    padding: 5px;
    font-weight: 800;
`

const OverviewSummary = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    color: white;
    justify-content: flex-start;
    flex:0.8;
`

const OrderRow = styled.div`
    display: flex;
    flex-direction: row; 
    padding: 5px; 
    justify-content: space-between; 
    font-size: 1em;
    color: gray; 
    font-weight: 600;
`

const OverviewFooter = styled.button`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    align-content: center;
    align-items: center;
    flex: 0.1;
    background-color: orange;
    margin:-30;
    zIndex:1000;
    border-radius:5px;

    &:hover {
        pointer: 
    }
`