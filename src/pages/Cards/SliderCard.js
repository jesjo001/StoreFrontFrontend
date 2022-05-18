import React from 'react';
import styled from 'styled-components'
import { Button, Radio } from 'antd';

export default function ProductCard({img, id, title, description, price, onClick}) {
  
  

  return (
    <Container id={id} onClick={() => onClick(id)}>
        <ImageContainer>
          <img style={{ 
            width: "100%", 
            position: "relative", 
            zIndex: 10,   
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15 
          }} src={process.env.PUBLIC_URL+`/images/${img}`} 
          />

        </ImageContainer>

        <ProductTitle>{title? title : ""}</ProductTitle>
        <ProductDescription>{ description? description.slice(0,90) : ""} </ProductDescription>

        <BottomContainer>
          <PriceTag> { price ? price : ""} </PriceTag>
            
          <Button type="primary" shape="round" size="large">
            Add to Cart
          </Button>
        </BottomContainer>

    </Container>
  );
}
 
const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 85%;
  height: auto;  
  background-color: #F8FCFF;
  margin:20px;
  border-radius: 10px 10px 10px 10px;
  z-index: 1000;

   @media (max-width: 1280px) {
    width: 25%;
  }

   @media (max-width: 918px) {
    width: 40%;
  }

  @media (max-width: 492px) {
    width: 80%;
  }
`
const ImageContainer = styled.div`
  width: 100%;
  z-index: 100;

`

const ProductTitle = styled.h3`
  font-size: 1.7;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  padding:10px;

`
const ProductDescription = styled.p`
  color: grey;
  padding:10px;
  padding-bottom: 0px;

`

const BottomContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding:20px;
`

const PriceTag = styled.span`
  font-size: 1.5em;

`

const ActionButton = styled.button`
`