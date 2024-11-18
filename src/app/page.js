import React from 'react'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'
import Order from './components/Order'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Order/>
      <Footer/>
    </div>
  )
}

export default Home
