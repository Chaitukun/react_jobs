import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import Viewall from '../components/Viewall';

const HomePage = () => {
  return (
   <>
   <Hero/>
   <HomeCards/>
   <JobListings isHome = {true}/>
   <Viewall/>
   </>
  )
}

export default HomePage
