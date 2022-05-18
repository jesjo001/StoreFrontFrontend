import React from 'react';
import styled from 'styled-components'
import { Button, Radio } from 'antd';

const CategoryCard = (props) => {


  return (
	  	<Container>
	  		<SectionTitle>
	  			{ props.title ? props.title : ""}
	  		</SectionTitle>

	  		<SectionSubTitle>
	  			{ props.subTitle ? props.subTitle : '' }
	  		</SectionSubTitle>

	  		<SectionTag>
	  			{ props.tag ? props.tag : '' }
	  		</SectionTag>



	  	</Container>
  	)
}

export default CategoryCard;


const Container = styled.div`
	width: ${ props => props.width ? props.width : '50%'};
	height: ${ props => props.height || '400px'};
	display:flex;
	flex-direction:column;
	justify-content: flex-start;
	background-color: white;
	padding:30px;
	border-radius: ${ props => props.radius ? props.radius : "10px"};

	/* Created with https://www.css-gradient.com */
background: #F40319;
background: -webkit-linear-gradient(top left, #F40319, #FFE118);
background: -moz-linear-gradient(top left, #F40319, #FFE118);
background: linear-gradient(to bottom right, #F40319, #FFE118);
`

const SectionTitle = styled.h3`
	
`

const SectionSubTitle = styled.h6`
	
`

const SectionTag = styled.button`
/* From https://css.glass */
background: rgba(54, 54, 54, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(54, 54, 54, 0.43);
width: 120px;

	
`