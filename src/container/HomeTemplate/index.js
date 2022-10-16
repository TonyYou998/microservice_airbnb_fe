import React from 'react'
import {Route} from "react-router-dom";
import Navbar from '../../components/Navbar';
import HomePage from './HomePage';

function LayoutHome(props){
    
    return <>
    <Navbar/>
        {props.children}
    </>
}
export default function HomeTemplate({Component,...props}) {
  
  return (   
    
    <Route
        {...props}
        render={
            (propsComponent)=>(
                <LayoutHome>
                    <Component {...propsComponent} />
                </LayoutHome>
            )
        }
      />
    
    
    
  )
}
