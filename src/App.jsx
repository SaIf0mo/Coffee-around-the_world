import React from 'react'
import Hero from './component/Hero/Hero'
import Services from './component/Services/Services'
import WhereToBuy from './component/whereToBuy/WhereToBuy'
import AppBanner from './component/AppBanner/AppBanner'
import Footer from './component/Footer/Footer'
import WorkWithUs from './component/WorkWithUs/WorkWithUs'

export default function App() {
  return (
    <div className='overflow-x-hidden'>
    <Hero />
    <Services />
    <WhereToBuy />
    <AppBanner />
    <WorkWithUs />
    <Footer />
    </div>
  )
}

