import React from 'react'
import AttractivePlace from './component/AttractivePlaces'
import CountUp from './component/CountUp'
import Gallery from './component/Gallery'
import Header from './component/Header'
import HostComponent from './component/HostComponent'
import Property from './component/Property'



export default function HomePage() {
  return (
    <>
          
    
    <Header/>
    <CountUp/>
    <AttractivePlace/>
    <Property/>
    <HostComponent/>
    <Gallery/>
    </>
  
  )
}
