import Fonts from '@/components/fonts'
import Hero from '@/components/hero'
import React from 'react'
import Products from './products/page'
import Top_sell from './products/top'
import Pose from '@/components/pose'
import CustomerCarousel from '@/components/Carousel'

export default function Homepage() {
  return (
    <div>
      <Hero/>
      <Fonts/>
      <Products/>
      <Top_sell/>
      <Pose/>
      <CustomerCarousel/>


    </div>
  )
}
