import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
    return (
        <div>
        <Navbar/>
           <Announcement/>
           <Slider/>
           <Categories />
           <Products />
           <NewsLetter />
           <Footer/>
        </div>
    )
}

export default Home

