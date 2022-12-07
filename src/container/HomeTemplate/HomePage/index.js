import { actGetHostPropertyApi } from 'container/HostTemplate/modules/actions'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AttractivePlace from './component/AttractivePlaces'
import CountUp from './component/CountUp'
import Gallery from './component/Gallery'
import Header from './component/Header'
import HostComponent from './component/HostComponent'
import Property from './component/Property'
import { actHomePropertyApi } from './modules/action'



export default function HomePage() {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(actHomePropertyApi());
  },[]);
  // let data =useSelector(state=>state.homePropertuReducer);
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
