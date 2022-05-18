import React from 'react';
import styled from 'styled-components'
import { Button, Radio } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function ProductCard({img, id, title, description, price, onClick, screenSize }) {
  
  console.log("screenSize ", screenSize);
  return (
    <Container id={id} >
        <ImageContainer onClick={() => onClick(id)}>
          <img style={{ 
            width: "100%", 
            position: "relative", 
            zIndex: 10,   
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15 
          }} src={process.env.PUBLIC_URL+`/images/${img}`} 
          />

        </ImageContainer>

        <ProductTitle onClick={() => onClick(id)}> { title ? title : ""}</ProductTitle>
        {/*<ProductDescription>{ description? description.slice(0,60) : ""} </ProductDescription>*/}

        <BottomContainer>
          <PriceTag onClick={() => onClick(id)}> { price ? price : ""} </PriceTag>
          <ActionButton shape="round" size="large" icon={<ShoppingCartOutlined />}>
           {screenSize !== undefined ?? screenSize.dynamicWidth < 1316 ? '' : 'Add to Cart'  } 
          </ActionButton>
        </BottomContainer>

    </Container>
  );
}
 
const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 85%;
  height: auto;  
  // background-color: #F8FCFF;
  margin:20px;
  z-index: 1000;

  /* From https://css.glass */
  background: rgba(239, 239, 239, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.1px);
  -webkit-backdrop-filter: blur(0.6px);
  border: 1px solid rgba(239, 239, 239, 0.11);
  
  &:hover {
    border: 5px solid rgba(239, 239, 239, 0.11);
  }

   @media (max-width: 1280px) {
    width: 60%;
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
  font-size: 1.3em;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  padding:10px;
  color: gray;
  text-align: center;
`
const ProductDescription = styled.p`
  color: grey;
  padding:10px;
  padding-bottom: 0px;

`

const BottomContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding:20px;
`

const PriceTag = styled.span`
  font-size: 1.5em;
  marginBottom: 30px;
  color: orange;

`

const ActionButton = styled(Button)`
z-index: 2000;
display: flex;
flex-direction: row;

  font-size: 1em;
  align-content: center;
  align-items: center;

   @media (max-width: 1280px) {
    width: 50%;
    font-size: 0.2em;
  }
`