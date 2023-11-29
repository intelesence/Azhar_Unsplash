import React from 'react'
import { NavBar,TabBar } from '../../global/components/navBar';
import ImageCollection from '../components/ImageCollection';
import Hero from '../components/hero';

const Landing = () => {
  return (
    <>
    <NavBar />
    <TabBar />
   <Hero/>

   <ImageCollection />
   </>
  )
}

export default Landing

