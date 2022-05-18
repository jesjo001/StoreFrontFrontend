import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd';
import ProductCard from './Cards/ProductCard'
import SliderCard from './Cards/SliderCard2'
import CartegoryCard from './Cards/CartegoryCard'
import FullCard from './Cards/Categories/FullCard'
import shoe from '../uploads/product-1.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";


const data = [
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
const Home = () => {
    let history = useHistory();

    const navigateToPage = (id) => {
        console.log(id)
        history.push(`/shop/${id}`);
    }

    const addToCart = (id) => {
        console.log(id)
    }

    const renderPupular = () => data.map(item => (
            <SliderCard
                img={item.img} 
                title={item.title}
                description={item.description}
                price={item.price}
                id={item.id}
                onClick={navigateToPage}
                addToCart={addToCart}
            />
    ))
    
    return (
        <Container>
            <HorizontalSection>
                <SectionTitleContainer>
                    <SectionTitle>New Stock </SectionTitle>
                </SectionTitleContainer>
                {
                    data.map((item, index) => {
                        return (
                            <ProductCard 
                                item={item}
                                img={item.img} 
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                style={{
                                    width: '400px'
                                }}
                                onClick={navigateToPage}
                            />
               
                        )
                    })
                }
                 
            </HorizontalSection>

            <HorizontalSection style={{backgroundColor: '#F5F5F5', margin: '0px', padding: '0px'}}>
                <CartegoryCard
                    width="500px"
                    height="400px"
                    title="Women's Collection"
                    subTitle="spring 2022"
                    tag="women"
                    radius="10px"
                />
                <CardContainer >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <SmallCard style={{ marginRight: '20px' }}>
                        <div> 24 items</div>
                        <h3>Bestselling</h3>
                    </SmallCard>
                    <SmallCard>
                        <div> 24 items</div>
                        <h3>Bestselling</h3>
                    </SmallCard>
                </div>
                <div style={{ marginTop: '20px', height: '100%'}}>
                    <MediumCard>
                        <div> 24 items</div>
                        <h3>Bestselling</h3>
                    </MediumCard>
                </div>

                </CardContainer>
            </HorizontalSection>

            <div>
                <SideTitileContainer>
                    <SideTitile>Popular</SideTitile>
                </SideTitileContainer>
                <SliderContainer>
                    <Slider
                        dots={false}
                        slidesToShow={6}
                        slidesToScroll={2}
                        autoplay={true}
                        autoplaySpeed={3000}
                        adaptiveHeight={true}
                        centerMode={false}
                        centerPadding="30px"
                        lazyLoad={true}
                      >
                        {renderPupular()}
                    </Slider>
                </SliderContainer>
            </div>

            <div>
                <SideTitileContainer>
                    <SideTitile>Selected for you</SideTitile>
                </SideTitileContainer>
                 <SliderContainer>
                    <Slider
                        dots={false}
                        slidesToShow={6}
                        slidesToScroll={2}
                        autoplay={true}
                        autoplaySpeed={3000}
                        adaptiveHeight={true}
                        centerMode={false}
                        centerPadding="30px"
                        lazyLoad={true}
                      >
                        {renderPupular()}
                    </Slider>
                 </SliderContainer>
            </div>

            <HorizontalSection>
                <FullCard 
                    width="500px"
                    height="400px"
                    title="Women's Collection"
                    subTitle="spring 2022"
                    tag="women"
                    radius="10px"
                />
            </HorizontalSection>

             <div>
                <SideTitileContainer>
                    <SideTitile>Selected for you</SideTitile>
                </SideTitileContainer>
                 <SliderContainer>
                    <Slider
                        dots={false}
                        infinite={true}
                          slidesToShow={6}
                          slidesToScroll={1}
                          autoplay={true}
                          speed={3000}
                          autoplaySpeed={2000}
                          cssEase="linear"
                          adaptiveHeight={true}

                      >
                        {renderPupular()}
                    </Slider>
                 </SliderContainer>
            </div>

             <div>
                <SideTitileContainer>
                    <SideTitile>Selected for you</SideTitile>
                </SideTitileContainer>
                 <SliderContainer>
                    <Slider
                        dots={false}
                        infinite={true}
                          slidesToShow={6}
                          slidesToScroll={1}
                          autoplay={true}
                          speed={3000}
                          autoplaySpeed={2000}
                          cssEase="linear"
                          rtl={true}
                          adaptiveHeight={true}

                      >
                        {renderPupular()}
                    </Slider>
                 </SliderContainer>
            </div>
        </Container>
    )
}

export default Home

const Container = styled.div`
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 60px;
    background-color: #F5F5F5;
    padding-bottom: 20px;
`

const HorizontalSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: white;
    border-radius: 15px;
    margin-bottom: 30px;
`

const SliderContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 15px;
`

const SectionTitleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

const SectionTitle = styled.h3`
    padding-top: 20px;
    
`
const SideTitileContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: -60px;
    margin-left: 20px;

`

const SideTitile = styled.h3`
    padding-top: 20px;

`

const CardContainer = styled.div`
     width: 45%;
     height: 100%;
     display: 'flex';
     flexDirection: 'row';

`

const SmallCard = styled.div`
    width: 100%;
    height: 150px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;

/* Created with https://www.css-gradient.com */
background: #F40319;
background: -webkit-linear-gradient(top left, #F40319, #FF1CE0);
background: -moz-linear-gradient(top left, #F40319, #FF1CE0);
background: linear-gradient(to bottom right, #F40319, #FF1CE0);

    /* From https://css.glass */
// background: rgba(54, 54, 54, 0.2);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(5px);
// -webkit-backdrop-filter: blur(5px);
// border: 1px solid rgba(54, 54, 54, 0.43);
`

const MediumCard = styled.div`
    width: 100%;
    height: 230px;
    padding: 20px;
    // background-color: white;
    marin-top: 20px;
    margin-right: 20px;
    border-radius: 10px;


        /* Created with https://www.css-gradient.com */
    background: #F40319;
    background: -webkit-linear-gradient(top left, #F40319, #FFC91C);
    background: -moz-linear-gradient(top left, #F40319, #FFC91C);
    background: linear-gradient(to bottom right, #F40319, #FFC91C);
`