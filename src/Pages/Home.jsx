import React from 'react'
import Hero from '../Componentes/Hero'
import LatestCollection from '../Componentes/LatestCollection'
import BestSeller from '../Componentes/BestSeller'
import OurproductPolicy from '../Componentes/OurproductPolicy'
import Newsletterbox from '../Componentes/Newsletterbox'
const Home = () => {
  return (
    <div >Home
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
    <OurproductPolicy/>
    <Newsletterbox/>
    </div>
  )
}

export default Home