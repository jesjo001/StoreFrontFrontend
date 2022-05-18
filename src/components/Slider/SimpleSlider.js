import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../uploads/product-1.jpg';
import Slider from "react-slick";
import SliderCard from '../../pages/Cards/SliderCard2'
import { useHistory } from "react-router-dom";



const SimpleSlider = ({ data, addToCart, sideTitle, dot, navigateToPage, rtl, speed, autoplay, slidesToShow, slidesToScroll }) => {
 
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
 
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
   
  useEffect(() => {
    window.addEventListener('resize', setDimension);
     
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  const renderPupular = () => data.map(item => (
        <SliderCard
            img={item.img} 
            title={item.title}
            description={item.description}
            price={item.price}
            id={item.id}
            onClick={navigateToPage}
            addToCart={addToCart}
            screenSize={screenSize}
        />
  ))

  return (
    <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                <SideTitileContainer>
                    <SideTitile>{ sideTitle ? sideTitle : "Selected for you" }</SideTitile>
                </SideTitileContainer>
                 <SliderContainer>
                    <Slider
                        dots={dot}
                        infinite={true}
                          slidesToShow={slidesToShow}
                          slidesToScroll={slidesToScroll}
                          autoplay={autoplay}
                          speed={speed}
                          autoplaySpeed={2000}
                          cssEase="linear"
                          rtl={rtl}
                          adaptiveHeight={true}

                      >
                        {renderPupular()}
                    </Slider>
                 </SliderContainer>
    </div>
  )
}

export default SimpleSlider



const Container = styled.div`
  display: flex;
  flex-direction:row;
  width: 100%;
  height: auto;
  background-color: grey;
  min-width:1458px;
`

const SliderContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 15px;
    width: 70vw;
    min-width:1358px;
`

const SideTitileContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: -60px;
    margin-left: 20px;

`


const SideTitile = styled.h3`
    padding-top: 20px;
    font-size: 1.5em;
    color: gray;
`