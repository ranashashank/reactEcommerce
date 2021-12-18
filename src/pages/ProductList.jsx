
import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { mobile } from "../responsive";




const Container = styled.div`
  
`
const Title = styled.h1`
margin:20px;
  
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
  
`
const Filter = styled.div`
  margin:20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText=styled.span`
 font-size:20px;
 font-weight:600;
 margin-right:20px;
 ${mobile({ marginRight: "0px" })}
 `
const Select=styled.select`
  padding:10px;
  margin-right:20px;
  ${mobile({ margin: "10px 0px" })}
`
const option=styled.option`
  
`

const ProductList = () => {
    return (
        <Container>
          
        <Navbar />
        <Announcement />  
            
            <Title>Dresses</Title>
            <FilterContainer>
              <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                 <option disable selected>
                   Color
                 </option>
                  <option>White</option>
                  <option>Blue</option>
                  <option>Red</option>
                  <option>Yellow</option>
                  <option>Black</option>
                  <option>Green</option>
                </Select>
                <Select>
                 <option disable selected>
                   Size
                 </option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </Select>
              </Filter>
              <Filter><FilterText>Sort Products:</FilterText>
              <Select>
              <option selected>
                Newsletter
              </option>
               <option>Price (asc)</option>
               <option>Price (desc)</option>
             </Select>
              </Filter>
            </FilterContainer>
           <Products/> 
           <NewsLetter />
           <Footer/>
        </Container>
    )
}

export default ProductList

