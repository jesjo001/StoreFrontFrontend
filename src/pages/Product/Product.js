import React from 'react'
import styled from 'styled-components'
import logo from '../../uploads/product-1.jpg';


export default function ProductItem({ item, addToCart, navigateToPage }) {

  return (
          <Product onClick={() => navigateToPage(item.id)}>

            <TitleContainer>
              <ProductTitle>Brand Name</ProductTitle>
              <SubTitle> {item.productTitle ? item.productTitle : "" } </SubTitle>
            </TitleContainer>

            <ProductImage src={logo} />

            <TitleContainerBottom>
                <BrandContainer>
                  <SubTitle>Brand: </SubTitle>
                  <BrandName>{ item.brandName ? item.brandName : "" }</BrandName>
                </BrandContainer>

                <PriceText onClick={() => addToCart(item.id)}>
                  { item.price ? item.price : "" }
                </PriceText>
            </TitleContainerBottom>

      </Product>
  )
}

const Product = styled.div`
  width: 25%;
  position:relative;
  display: flex;
  flex-direction: column;
  height: 50%;
  padding: 0px;
  background-color: white;
  border-top: 1px solid #DEE2E2;
  border-right: 1px solid #DEE2E2;

  @media (max-width: 1092px) {
    width: 50%;
  }

  @media (max-width: 344px) {
    width: 100%;
    height: 20%;
  }

`
const TitleContainer = styled.div`
  position:absolute;
  top: 0px;
  margin: 20px;

  &:hover{
    transform: scale(1.2,1.2)
  }
`
const ProductTitle = styled.h3`
  font-style: bold;
  font-size: 1.5em;
  font-family: 'Anton', sans-serif;
`

const TitleContainerBottom = styled.div`
  position: absolute;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  bottom: 0px;
  margin: 10px;
  width: 85%;

  &:hover{
    transform: scale(1.2,1.2);
  }
`

const SubTitle = styled.h3`
  font-style: bold;
  font-size: 1em;
  font-family: 'Anton', sans-serif;
  color: grey;
  margin: 0px;
  padding:0px;
`
const ProductImage = styled.img`
  with: 100%;
  height: 100%;
`

const BrandContainer = styled.div`
  margin-left: 30px;
`

const BrandName = styled.h4`
  font-style: bold;
  font-size: 1em;
  font-family: 'Anton', sans-serif;
`

const PriceText = styled.h4`
  font-style: bold;
  font-size: 2em;
  font-family: 'Anton', sans-serif;
`