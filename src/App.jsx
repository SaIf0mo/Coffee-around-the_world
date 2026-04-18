import React from 'react'
import Hero from './component/Hero/Hero'
import Services from './component/Services/Services'
import WhereToBuy from './component/whereToBuy/WhereToBuy'
import AppBanner from './component/AppBanner/AppBanner'

export default function App() {
  return (
    <div className='overflow-x-hidden'>
    <Hero />
    <Services />
    <WhereToBuy />
    <AppBanner />
    </div>
  )
}

