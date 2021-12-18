

import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { mobile } from "../responsive";
 
const Container=styled.div`
`
const Wrapper=styled.div`
 padding:50px;
 display:flex;
 ${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer=styled.div`
  flex:1;

 `
const Image=styled.img`
 width:100%;
 height:90vh;
 object-fit:cover;
 ${mobile({ height: "40vh" })}
`
const InfoContainer=styled.div`
 flex:1;
 padding:0px 50px;
 ${mobile({ padding: "10px" })}
 `
const Title=styled.h1`
  font-weight:300;
 `
const Desc=styled.p`
 margin:20px 0px;
`
const Price=styled.span`
 font-weight:100px;
 font-size:40px;
`
const FilterContainer=styled.div`
 width:50%;
 margin:30px 0px;
 display:flex;
 justify-content:space-between;
 ${mobile({ width: "100%" })}
 
`
const Filter=styled.div`
 display:flex;
 align-items:center;

`
const FilterTitle=styled.span`
  font-size:20px;
  font-weight:200;

`
const FilterColor=styled.div`
 width:20px;
 height:20px;
 border-radius:50%;
 background-color:${props=>props.color};
 margin:0px 5px;
 cursor:pointer;
`
const FilterSize=styled.select`
  margin-left:10px;
  padding:5px;
`
const FilterSizeOption=styled.option``
const AddContainer=styled.div`
 width:50%;
 display:flex;
 align-items:center;
 justify-content:space-between;
 ${mobile({ width: "100%" })}
`;
const AmountContainer=styled.div`
  display:flex;
  align-items:center;
  font-weight:700;
`;
const Amount=styled.span`
  width:30px;
  height:30px;
  border-radius:10px;
  border:1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px 5px;

`;
const Button=styled.button`
  padding:15px;
  border:2px solid teal;
  background-color:white;
  cursor:pointer;
  font-weight:500;
  &:hover{
      background-color:#f8f4f4;
  }
`;

 const product = () => {
     return (
         <Container>
          
            <Navbar />
            <Announcement />
            <Wrapper>
             <ImgContainer>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1543510330-aliceolivia-1543510320.jpg?crop=1xw:1xh;center,top&resize=480:*"/>

             </ImgContainer>
             <InfoContainer>
               <Title>Denim Jeans</Title>
               <Desc> Tons of satisfied admirers. · name brand and you will love our products. All items in st
               ock & ready to ship. · Everyone that uses our products, come back for more. </Desc>
               <Price>Rs.1000</Price>
               <FilterContainer>
                 <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black"/>
                  <FilterColor color="darkblue"/>
                  <FilterColor color="gray"/>
                 </Filter>
                 <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                 </Filter>
               </FilterContainer>
               <AddContainer>
                <AmountContainer>
                 <Remove/>
                 <Amount>1</Amount>
                 <Add />
                </AmountContainer>
             
                <Button>ADD TO CART</Button>
               </AddContainer> 
             </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer/>
         </Container>
     )
 }
 
 export default product
 