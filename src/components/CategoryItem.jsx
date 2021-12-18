import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container=styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;
`
const Image=styled.img`
 width:100%;
 height:100%;
 object-fit:cover;
 ${mobile({ height: "20vh" })}
`
const Info=styled.div`
position:absolute;
left:0;
top:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Title=styled.h1`
color:white;
margin-bottom:10px;

`
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;

`
const CategoryItem = ({item}) => {
    return (
       <Container>
        <Image src={item.img}></Image>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
       </Container>
    )
}

export default CategoryItem
