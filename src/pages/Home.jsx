import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import TopProducts from '../components/TopProducts'

const Home = () => {
  return (
    <div>
      <Announce/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <TopProducts/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
