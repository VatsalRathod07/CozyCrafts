import BentoGrid from '@/components/BentoGrid'
import BestSellers from '@/components/BestSellers'
import Categories from '@/components/Categories'
import Collections from '@/components/Collections'
import FeaturedDeals from '@/components/FeaturedDeals'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Social from '@/components/Social'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Categories/>
      <BestSellers/>
      <BentoGrid/>
      <FeaturedDeals/>
      <Collections/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default page